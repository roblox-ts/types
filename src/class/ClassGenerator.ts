/* eslint-disable no-inner-declarations */
import axios from "axios";
import fs from "fs-extra";
import path from "path";
import { Project } from "ts-morph";
import * as ts from "ts-morph";

import {
	ApiCallback,
	ApiClass,
	ApiEvent,
	ApiFunction,
	ApiMember,
	ApiParameter,
	ApiProperty,
	ApiValueType,
	ClassTag,
	MemberTag,
	SecurityType,
} from "../api";
import { fatal } from "../util";
import { Generator } from "./Generator";
import { ReflectionMetadata } from "./ReflectionMetadata";

const ROOT_DIR = path.join(__dirname, "..", "..");
const CONTENT_DIR = path.join(ROOT_DIR, "devhub-scraper-master", "dist");

interface BreakdanceNodeBase {
	type: string;
	parent: BreakdanceNode | null;
	next: BreakdanceNode | null;
	prev: BreakdanceNode | null;
	html?: string;
}

interface BreakdanceNodeVal extends BreakdanceNodeBase {
	val: string;
	nodes: undefined;
}

interface BreakdanceNodeNodes extends BreakdanceNodeBase {
	val: undefined;
	nodes: Array<BreakdanceNode>;
}

type BreakdanceNode = BreakdanceNodeVal | BreakdanceNodeNodes;

// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const breakdance = require("breakdance") as (
	HTMLtoConvert: string,
	options?: {
		/**
		 * Include HTML code comments in the generated markdown string. Disabled by default.
		 */
		comments?: boolean;
		/**
		 * Collapse more than two newlines to only two newlines. Enabled by default.
		 *
		 * Default: `true`
		 */
		condense?: boolean;
		/**
		 * Specify the root domain name to prefix onto href or src paths that do not start with `#` or contain `://`.
		 */
		domain?: string;

		/** Selective keep tags that are omitted by omitEmpty, so you don't need to redefine all of the omitted tags.
		 */
		keepEmpty?: string | Array<string>;

		/** Sets all numeric lists to 1. so the system can dynamically assign numbers */
		one?: boolean;

		/**
		 * When `true`, breakdance will throw an error if any non-standard/custom HTML tags are encountered. If you find a tag that breakdance doesn't cover, but you think it should, please create an issue to let us know about it.
		 *
		 * See the [breakdance recipes](https://breakdance.github.io/breakdance/recipes.html) for an example of how to add support for custom HTML elements.
		 */
		knownOnly?: boolean;

		/** Add a newline at the beggining of the generated markdown string. */
		leadingNewline?: boolean;

		/** Default: One or more tags to omit entirely from the HTML before converting to markdown. */
		omit?: string | Array<string>;

		/** Default: One or more tags to pick entirely from the HTML before converting to markdown. */
		pick?: string | Array<string>;

		before?: { [key: string]: (node: BreakdanceNode) => void };
	},
) => string;

const ROOT_CLASS_NAME = "<<<ROOT>>>";

const BAD_NAME_CHARS = [" ", "/", '"'];

/**
 * These classes are tagged as Creatable by the API Dump, probably because they are instantiable to CoreScripts.
 * Developers, however, cannot create these.
 */
const CREATABLE_BLACKLIST = new Set([
	"UserSettings",
	"DebugSettings",
	"Studio",
	"GameSettings",
	"ParabolaAdornment",
	"LuaSettings",
	"PhysicsSettings",
	"Player",
	"DebuggerWatch",
	"Tween",
	"UserGameSettings",
]);

const PLUGIN_ONLY_CLASSES = new Set([
	"ABTestService",
	"ChangeHistoryService",
	"CoreGui",
	"DataModelSession",
	"DebuggerBreakpoint",
	"DebuggerManager",
	"DebuggerWatch",
	"DebugSettings",
	"File",
	"GameSettings",
	"GlobalSettings",
	"LuaSettings",
	"MemStorageConnection",
	"MultipleDocumentInterfaceInstance",
	"NetworkPeer",
	"NetworkReplicator",
	"NetworkSettings",
	"PackageService",
	"PhysicsSettings",
	"Plugin",
	"PluginAction",
	"PluginDebugService",
	"PluginDragEvent",
	"PluginGui",
	"PluginGuiService",
	"PluginMenu",
	"PluginMouse",
	"PluginToolbar",
	"PluginToolbarButton",
	"RenderingTest",
	"RenderSettings",
	"RobloxPluginGuiService",
	"ScriptDebugger",
	"Selection",
	"StatsItem",
	"Studio",
	"StudioData",
	"StudioService",
	"StudioTheme",
	"TaskScheduler",
	"TestService",
	"VersionControlService",
]);

const CLASS_BLACKLIST = new Set([
	// Classes which Roblox leverages internally/in the CoreScripts but serve no purpose to developers
	"AnalysticsSettings",
	"BinaryStringValue",
	"BrowserService",
	"CacheableContentProvider",
	"ClusterPacketCache",
	"CookiesService",
	"CorePackages",
	"CoreScript",
	"CoreScriptSyncService",
	"DraftsService",
	"FlagStandService",
	"FlyweightService",
	"FriendService",
	"Geometry",
	"GoogleAnalyticsConfiguration",
	"GuidRegistryService",
	"HttpRbxApiService",
	"HttpRequest",
	"KeyboardService",
	"LocalStorageService",
	"LuaWebService",
	"MemStorageService",
	"MouseService",
	"PartOperationAsset",
	"PermissionsService",
	"PhysicsPacketCache",
	"PlayerEmulatorService",
	"ReflectionMetadataItem",
	"RobloxReplicatedStorage",
	"RuntimeScriptService",
	"SpawnerService",
	"StandalonePluginScripts",
	"StopWatchReporter",
	"ThirdPartyUserService",
	"TimerService",
	"TouchInputService",
	"VirtualInputManager",
	"Visit",

	// never implemented
	"AdvancedDragger",
	"LoginService",
	"NotificationService",
	"ScriptService",
	"Status",

	// super deprecated:
	"AdService",
	"FunctionalTest",
	"PluginManager",
	"VirtualUser",

	// "BevelMesh",
	"CustomEvent",
	"CustomEventReceiver",
	// "CylinderMesh",
	// "DoubleConstrainedValue",
	"Flag",
	"FlagStand",
	// "FloorWire",
	// "Glue",
	"GuiMain",
	// "Hat",
	"Hint",
	// "Hole",
	"Hopper",
	"HopperBin",
	// "IntConstrainedValue",
	// "JointsService",
	"Message",
	// "MotorFeature",
	"PointsService",
	// "SelectionPartLasso",
	// "SelectionPointLasso",
	// "SkateboardPlatform",
	"Skin",

	"ReflectionMetadata",
	"ReflectionMetadataCallbacks",
	"ReflectionMetadataClasses",
	"ReflectionMetadataEnums",
	"ReflectionMetadataEvents",
	"ReflectionMetadataFunctions",
	"ReflectionMetadataProperties",
	"ReflectionMetadataYieldFunctions",

	// unused
	"UGCValidationService",
	"RbxAnalyticsService",
]);

const MEMBER_BLACKLIST = new Map([
	["Workspace", new Set(["FilteringEnabled"])],
	["CollectionService", new Set(["GetCollection"])],
	["Instance", new Set(["children", "Remove"])],
	["BodyGyro", new Set(["cframe"])],
	["BodyAngularVelocity", new Set(["angularvelocity"])],
	["BodyPosition", new Set(["lastForce"])],
	["DataStoreService", new Set(["GetDataFromEmptyScopeDataStoreAsyncTemporary"])],
	["Debris", new Set(["MaxItems"])],
	["LayerCollector", new Set(["GetLayoutNodeTree"])],
	["GuiBase3d", new Set(["Color"])],
	["Model", new Set(["move"])],
	["Players", new Set(["playerFromCharacter", "players"])],
	["ServiceProvider", new Set(["service"])],
	["DataModel", new Set(["lighting"])],
	["PackageLink", new Set(["SerializedDefaultAttributes"])],
]);

const EXPECTED_EXTRA_MEMBERS = new Map([
	["Player", ["Name"]],
	["ValueBase", ["Value", "Changed"]],
	["DataStore", ["GetAsync", "IncrementAsync", "SetAsync", "UpdateAsync", "RemoveAsync"]],
	["OrderedDataStore", ["GetAsync", "IncrementAsync", "SetAsync", "UpdateAsync", "RemoveAsync"]],
]);

function containsBadChar(name: string) {
	for (const badChar of BAD_NAME_CHARS) {
		if (name.indexOf(badChar) !== -1) {
			return true;
		}
	}
	return false;
}

function safeName(name: string) {
	return containsBadChar(name) ? `["${name.replace(/"/g, '\\"')}"]` : name;
}

const PROP_TYPE_MAP = new Map<string, string>();

function safePropType(valueType: string | undefined | null) {
	if (valueType === null) {
		return null;
	}
	if (valueType === undefined) {
		throw new Error("Undefined valueType!");
	}
	return PROP_TYPE_MAP.get(valueType) ?? valueType;
}

const RENAMEABLE_AUTO_TYPES = new Map<string, string>([
	["Part", "BasePart"],
	["Script", "LuaSourceContainer"],
	["Character", "Model"],
	["Input", "InputObject"],
]);

function safeRenamedInstance(name: string): string;
function safeRenamedInstance(name: string | undefined): string | undefined;
function safeRenamedInstance(name: string | undefined) {
	return name && (RENAMEABLE_AUTO_TYPES.get(name) ?? name);
}

const VALUE_TYPE_MAP = new Map<string, string | null>([
	["Array", "Array<any>"],
	["BinaryString", null],
	["bool", "boolean"],
	["Connection", "RBXScriptConnection"],
	["Content", "string"],
	["CoordinateFrame", "CFrame"],
	["Dictionary", "object"],
	["double", "number"],
	["EventInstance", "RBXScriptSignal"],
	["float", "number"],
	["Function", "Callback"],
	["int", "number"],
	["int64", "number"],
	["Map", "object"],
	["null", "void"],
	["Object", "Instance"],
	["Objects", "Array<Instance>"],
	["OptionalCoordinateFrame", "CFrame | undefined"],
	["Property", "string"],
	["ProtectedString", "string"],
	["Rect2D", "Rect"],
	["Tuple", "Array<any>"],
	["Variant", "unknown"],
]);

function safeValueType(valueType: ApiValueType, canImplicitlyConvertEnum = false) {
	if (valueType.Category === "Enum") {
		let str = `Enum.${valueType.Name}`;

		if (canImplicitlyConvertEnum) {
			str = `CastsToEnum<${str}>`;
		}

		return str;
	} else if (valueType.Name[valueType.Name.length - 1] === "?") {
		const nonOptionalType = valueType.Name.substring(0, valueType.Name.length - 1);
		const mappedType = VALUE_TYPE_MAP.get(nonOptionalType);
		return (mappedType ?? nonOptionalType) + " | undefined";
	} else {
		const mappedType = VALUE_TYPE_MAP.get(valueType.Name);
		return mappedType ?? valueType.Name;
	}
}

const RETURN_TYPE_MAP = new Map([
	["Instance", "Instance | undefined"], // api dump lies :(
	["any", "unknown"],
	["Array<any>", "unknown"],
]);

function safeReturnType(valueType: string | undefined | null) {
	if (valueType === null) {
		return null;
	}
	if (valueType === undefined) {
		throw new Error("Undefined valueType!");
	}
	const mappedType = RETURN_TYPE_MAP.get(valueType);
	if (mappedType !== undefined) {
		return mappedType;
	}
	return valueType;
}

const ARG_NAME_MAP = new Map([
	["function", "callback"],
	["debugger", "debug"],
	["old", "oldValue"],
	["new", "newValue"],
]);

function safeArgName(name: string | undefined | null) {
	if (name === null) {
		return null;
	}
	if (name === undefined) {
		throw new Error("Undefined name!");
	}
	return ARG_NAME_MAP.get(name) ?? name;
}

const SECURITY_OVERRIDE = new Map<string, Map<string, ApiProperty["Security"]>>([
	["StarterGui", new Map([["ShowDevelopmentGui", { Read: "PluginSecurity", Write: "PluginSecurity" }]])],
]);

function getSecurity(className: string, member: ApiMember) {
	const securityOverride = SECURITY_OVERRIDE.get(className)?.get(member.Name);
	if (securityOverride) {
		return securityOverride;
	}
	switch (member.MemberType) {
		case "Callback":
			return { Read: "NotAccessibleSecurity", Write: member.Security };
		case "Function":
			return { Read: member.Security, Write: "NotAccessibleSecurity" };
		case "Event":
			return { Read: member.Security, Write: "NotAccessibleSecurity" };
		case "Property":
			return member.Security;
	}
}

function hasTag(member: ApiClass, tag: ClassTag): boolean;
function hasTag(member: ApiMember, tag: Extract<MemberTag, string>): boolean;
function hasTag({ Tags }: ApiClass | ApiMember, tag: string) {
	return Tags ? Tags.includes(tag as ClassTag & MemberTag) : false;
}

function isCreatable(rbxClass: ApiClass) {
	return !CREATABLE_BLACKLIST.has(rbxClass.Name) && !hasTag(rbxClass, "NotCreatable") && !hasTag(rbxClass, "Service");
}

function multifilter<T>(list: Array<T>, numResultArrays: number, condition: (element: T) => number) {
	const results = new Array<Array<T>>();

	for (let i = 0; i < numResultArrays; i++) {
		results[i] = new Array<T>();
	}

	for (const element of list) {
		results[condition(element)].push(element);
	}

	return results;
}

namespace ClassInformation {
	interface Argument {
		name: string;
		summary: string;
	}

	export type CodeSamples = Array<{
		display_title: string;
		code_summary: string;
		code_sample: string;
	}>;

	export interface Member {
		/** Describes this member */
		description: string;

		/** The code samples demonstating this member's use */
		code_sample?: CodeSamples;

		/** The name of this member */
		title: string;
	}

	interface Property extends Member {}

	interface Event extends Member {
		argument: Array<Argument>;
	}

	interface Method extends Event {
		returns: [{ summary: string }];
	}

	interface Callback extends Method {}

	export interface ClassDescription extends Member {
		property: Array<Property>;
		function: Array<Method>;
		event: Array<Event>;
		callback: Array<Callback>;
	}

	function processBreakdownNode(node: BreakdanceNode, index = 0) {
		if (node.nodes) {
			node.nodes.forEach(processBreakdownNode);

			if (node.type.match(/^h[1-6]$/)) {
				const parent = node.parent!;
				const parentArray = parent.nodes!;
				const [, textNode] = node.nodes;

				for (const dead of parentArray.splice(index - 1, 3, textNode)) {
					dead.val = undefined;
					try {
						dead.next = null;
						dead.prev = null;
					} catch {}
					dead.parent = null;
					dead.nodes = undefined;
				}

				const previous = parentArray[index - 1];
				const next = parentArray[index + 1];

				textNode.parent = parent;
				textNode.prev = previous;
				textNode.next = next;

				if (previous) previous.next = textNode;
				if (next) next.prev = textNode;
			}
		}
	}

	function processText(text: string, rbxClasses: Array<ApiClass>, tabChar: "" | "\t"): string {
		const after = text
			.trim()
			.replace(/<([^ ]+)[^]+<\/\1>/g, a =>
				breakdance(a, {
					before: {
						table(node) {
							node.html = node.html!.replace(/<\/?h[1-6]>/g, "");
							processBreakdownNode(node);
						},
					},
					one: true,

					domain: "https://developer.roblox.com/",
				}).trim(),
			)
			.replace(/<[^]+?>/g, a =>
				breakdance(a, {
					one: true,
					domain: "https://developer.roblox.com/",
				}).trim(),
			)

			.replace(/(\| [^|\s]+ )+\|\n(?!\|.---)/g, a => {
				return a.match(/(\|.-+.)+\|/) ? a : a + a.replace(/[^|\s]+/g, "---");
			})

			.replace(/ {4}[^]+?\n(?! {4})/g, a => {
				let found = true;
				let numFound = 0;

				const middle = a.replace(/.+/g, s => {
					let gotLocal = false;
					const str = s.replace(/^ {4}/, () => {
						gotLocal = true;
						return "";
					});

					if (!gotLocal) {
						found = false;
					} else {
						numFound++;
					}

					return str;
				});

				return found && numFound > 1 ? "```lua\n" + middle + "\n```\n" : a;
			})

			.replace(/```([^]+?)```/g, (a, b: string) => {
				const middle = b.trim().replace(/ {4}/g, "\t");

				if (middle.substr(0, 3) === "lua") {
					return "```\n" + middle + "\n```\n";
				} else {
					return "```lua\n" + middle + "\n```\n";
				}
			})
			.replace(/```\n+lua/g, "```lua")
			.replace(/```lua\n(prettyprintlinenums|prettyprintlinenumslua|prettyprintlua)\n+/g, "```lua\n")
			.replace(/([^]+?)($|```lua[^]+?```)/g, (_, cap: string, code: string) => {
				const trimmedCode = code.trim();
				let previousHadTable = false;

				const myStr = cap
					.replace(/(\[[^\]]+\]: )(\/.+?)/g, (_, a: string, b: string) => {
						return a + "https://developer.roblox.com" + b;
					})
					.replace(/(\[.+?\])\((\/.+?)\)/g, (_, a: string, b: string) => {
						return a + "(https://developer.roblox.com" + b + ")";
					})
					.replace(/<br>|\*\/|\/\*/g, "")
					.replace(/`\/?(\w+)\/([^`]+)`/g, (_, className: string, methodStr: string) => {
						const c = methodStr.match(/^(.+?)\|(.+)$/);
						let memberName: string;
						let str: string;
						if (c) {
							[, memberName, str] = c;
						} else {
							memberName = methodStr;
							str = className + "." + memberName;
						}
						let link: string | undefined;
						for (const rbxClass of rbxClasses) {
							if (rbxClass.Name === className) {
								for (const rbxMember of rbxClass.Members) {
									if (rbxMember.Name === memberName) {
										const memberType = rbxMember.MemberType.toLowerCase();
										link = `https://developer.roblox.com/api-reference/${memberType}/${className}/${memberName}`;
										break;
									}
								}
							}
						}
						return `[${str}](${
							link || `https://developer.roblox.com/search#stq=${memberName.replace(/\s/g, "%20")}`
						})`;
					})
					.replace(/`(\w+)\|([^`]+)`/g, (_, className: string, alias: string) => {
						const link = `https://developer.roblox.com/api-reference/class/${className}`;
						return `[${alias}](${link})`;
					})
					.replace(/(\[[^\]]+\])\(([^)]+)\)/g, (a, b: string, c: string) => {
						return b + "(" + c.replace(/\s+.+/, "") + ")";
					})
					.trim()
					.replace(/.*($|\n)/g, line => {
						let trimmed = line.trimRight();
						if (trimmed !== "") {
							const hasTable = !!trimmed.match(/(\|(.)[^|]+(\2))+\|/);
							const extraPush = hasTable && previousHadTable;
							previousHadTable = hasTable;

							if (trimmed.match(/\[[^\]]+\]: /)) {
								trimmed = trimmed.trim();
							}

							return trimmed === "-"
								? ""
								: "".concat(
										extraPush ? tabChar + " * " : tabChar + " *\n" + tabChar + " * ",
										trimmed,
										"\n",
									);
						} else {
							return "";
						}
					})
					.replace(/^\s+\*/, "");

				return myStr.concat(
					trimmedCode ? tabChar + " *\n" + tabChar + " * " + trimmedCode + "\n" + tabChar + " *" : "",
				);
			});

		return after;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function processCodeSamples(codeSample: CodeSamples, rbxClasses: Array<ApiClass>, tabChar: "" | "\t" = "\t") {
		if (codeSample.length > 0) {
			return codeSample.reduce(
				(result, code) =>
					result +
					tabChar +
					" * ### " +
					code.display_title +
					"\n" +
					processText(code.code_summary, rbxClasses, tabChar) +
					"\n" +
					tabChar +
					" * ```lua\n" +
					code.code_sample.trim() +
					"\n```\n",
				"\n" + tabChar + " * ## Code Samples\n",
			);
		} else {
			return "";
		}
	}

	export function processDescriptionInfo(
		data: { description: string; code_sample?: CodeSamples },
		rbxClasses: Array<ApiClass>,
		tabChar: "" | "\t" = "\t",
	) {
		return (
			"\n" +
			tabChar +
			" ".concat(
				processText(data.description || "", rbxClasses, tabChar).trim(),
				// processCodeSamples(data.code_sample || [], rbxClasses),
				"\n" + tabChar,
			)
		);
	}
}

const { processDescriptionInfo: processDescription } = ClassInformation;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function handleLinkData(
	myLinks: Array<Promise<unknown>>,
	linkDatum: {
		rbxMember: ApiClass;
		link: string;
	},
	linkData: Array<{
		rbxMember: ApiClass;
		link: string;
	}>,
	rbxClasses: Array<ApiClass>,
) {
	const rbxMember = linkDatum.rbxMember;
	const rbxMemberName = rbxMember.Name;
	const link = linkDatum.link;

	myLinks.push(
		new Promise<void>((resolve, reject) => {
			setTimeout(reject, 10000);
			axios
				.get(link)
				.then(response => {
					if (response.status !== 200) {
						throw new Error("bad request");
					}
					return response.data as string;
				})
				.then(rawData => {
					const obj = JSON.parse(rawData);
					const functionData = obj.entry.modular_blocks[0].api_class_section
						.current_class[0] as ClassInformation.ClassDescription;

					rbxMember.Description = processDescription(functionData, rbxClasses, "");

					for (const [arr, type] of new Map<Array<ClassInformation.Member>, ApiMember["MemberType"]>([
						[functionData.property, "Property"],
						[functionData.event, "Event"],
						[functionData.callback, "Callback"],
					])) {
						for (const property of arr) {
							const propertyName = property.title.slice(rbxMemberName.length + 1);
							const propertyMember = rbxMember.Members.find(
								member => member.Name === propertyName && member.MemberType === type,
							);

							if (propertyMember) {
								propertyMember.Description = processDescription(property, rbxClasses);
							}
						}
					}

					for (const func of functionData.function) {
						const funcName = func.title.slice(rbxMemberName.length + 1);

						const funcMember = rbxMember.Members.find(
							member => member.Name === funcName && member.MemberType === "Function",
						);

						if (funcMember && funcMember.MemberType === "Function") {
							const returnValue = func.returns[0] && func.returns[0].summary;
							const docs =
								func.argument.reduce((a, x, j) => {
									return x.summary
										? a + "\n\t * @param " + funcMember.Parameters[j].Name + " " + x.summary
										: a;
								}, "") +
								(returnValue
									? `\n\t * @returns ${returnValue.startsWith("No return") ? "void" : returnValue}`
									: "");
							funcMember.Description = processDescription(func, rbxClasses).concat(
								docs ? docs.slice(2) + "\n\t" : "",
							);
						}
					}

					resolve();
				})
				.catch(reject);
		}).catch(errorMessage => {
			if (errorMessage === undefined) {
				console.log("\tFailed for", link, "will retry.");
				linkData.push({
					rbxMember,
					link,
				});
			}

			return "";
		}),
	);
}

const cacher = new Map<ts.InterfaceDeclaration, Array<ts.PropertySignature | ts.MethodSignature>>();

export class ClassGenerator extends Generator {
	private ClassReferences = new Map<string, ApiClass>();

	constructor(
		filePath: string,
		protected metadata: ReflectionMetadata,
		private definedClassNames: Set<string>,
		private security: SecurityType,
		private lowerSecurity: SecurityType | undefined,
	) {
		super(filePath, metadata);
	}

	private canRead(className: string, member: ApiMember) {
		const readSecurity = getSecurity(className, member).Read;
		return (
			readSecurity === this.security ||
			(PLUGIN_ONLY_CLASSES.has(className) && readSecurity === this.lowerSecurity)
		);
	}

	private canWrite(className: string, member: ApiMember) {
		const security = getSecurity(className, member);
		const readSecurity = security.Read;
		const writeSecurity = security.Write;

		// dumb hack to fix PluginSecurity writable things being marked as readonly in None.d.ts
		if (readSecurity === "None" && writeSecurity === "PluginSecurity") {
			return true;
		}

		return (
			writeSecurity === this.security ||
			(PLUGIN_ONLY_CLASSES.has(className) && writeSecurity === this.lowerSecurity)
		);
	}

	private getSignature(node?: ts.Node) {
		// I don't 100% trust `getText()`
		if (node) {
			let documentation = "";
			const signature = node
				.getFullText()
				.replace(/\/\*\*[^]+\*\//g, a => {
					documentation = a;
					return "";
				})
				.trim();
			return [signature, documentation];
		} else {
			return ["", ""];
		}
	}

	private formatDescription(desc: string) {
		return `/** ${desc} */`;
	}

	private writeSignatures(rbxMember: ApiMember, tsImplInterface?: ts.InterfaceDeclaration, description?: string) {
		if (tsImplInterface) {
			const name = rbxMember.Name;
			const signatures = Array<string>();

			let nodes = cacher.get(tsImplInterface);
			if (!nodes) {
				cacher.set(
					tsImplInterface,
					(nodes = [...tsImplInterface.getProperties(), ...tsImplInterface.getMethods()]),
				);
			}

			nodes
				.filter(prop => prop.getName() === name)
				.forEach(node => {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const [signature, documentation] = this.getSignature(node);
					signatures.push(signature);
					// we don't do this anymore, because of the new TS comment behavior. It automatically combines docs
					// documentations.push(documentation);
				});

			this.writeDescription(rbxMember, description);
			const written = signatures.length > 0;
			if (written) {
				this.write(signatures.join("\n\t"));
			}
			return written;
		} else {
			this.writeDescription(rbxMember, description);
			return false;
		}
	}

	private writeDescription(rbxMember: ApiMember, description?: string) {
		const parts = new Array<string>();
		if (description) {
			parts.push(description);
		}

		const tagModifiers = [];
		const tags = rbxMember.Tags ?? [];

		const readonlyIndex = tags.indexOf("ReadOnly");
		// Already covered by TS readonly modifier
		if (readonlyIndex !== -1) tags.splice(readonlyIndex, 1);

		let deprecationMessage = "@deprecated";
		const deprecatedIndex = tags.indexOf("Deprecated");
		// Splice removes the tag from array to avoid duplication
		if (deprecatedIndex !== -1) tags.splice(deprecatedIndex, 1);
		const replacementInfo = tags[deprecatedIndex];
		if (typeof replacementInfo === "object") {
			// API dump does not specify the class of replacement item
			// So avoid redirecting from "PropertyA" to "PropertyA" [on some other class]
			if (replacementInfo.PreferredDescriptorName !== rbxMember.Name) {
				deprecationMessage += ` Use \`${replacementInfo.PreferredDescriptorName}\` instead`;
			}
			// Also remove replacement info object from tag list
			tags.splice(deprecatedIndex, 1);
		}
		if (deprecatedIndex !== -1) {
			tagModifiers.push(deprecationMessage);
		}

		if (tags.length > 0) {
			if (parts.length > 0) {
				// Add empty line to ensure tags are separate paragraph
				parts.push("");
			}
			parts.push("Tags: " + tags.join(", "));
		}
		parts.push(...tagModifiers);

		if (parts.length > 0) {
			this.write(`/**`);
			for (const part of parts) {
				this.write(` * ${part.trim()}`);
			}
			this.write(" */");
		}
	}

	private generateArgs(params: Array<ApiParameter>, canImplicitlyConvertEnum = true, args = new Array<string>()) {
		const paramNames = params.map(param => param.Name);
		for (let i = 0; i < paramNames.length; i++) {
			const name = paramNames[i];
			if (paramNames.indexOf(name, i + 1) !== -1) {
				let n = 0;
				for (let j = i; j < params.length; j++) {
					paramNames[j] = `${name}${n++}`;
				}
			}
		}
		let optional = false;
		for (let i = 0; i < params.length; i++) {
			const param = params[i];
			let paramType = safeValueType(param.Type, canImplicitlyConvertEnum);
			optional = optional || param.Default !== undefined || paramType === "any";
			const argName = safeArgName(paramNames[i]);
			if (argName && paramType === "Instance") {
				const lowerName = argName.toLowerCase();
				const findings = [...this.ClassReferences.keys(), "Character", "Input"].filter(k => {
					const l = k.toLowerCase();
					return k !== "Instance" && lowerName.includes(l); // || l.includes(lowerName);
				});

				if (findings.length > 0) {
					const partPos = findings.indexOf("Part");
					if (partPos !== -1 && findings.length > 1 && !lowerName.includes("or")) {
						findings.splice(partPos, 1);
					}
					const found =
						safeRenamedInstance(findings.find(found => found.toLowerCase() === lowerName)) ||
						findings.map(found => safeRenamedInstance(found)).join(" | ");

					paramType = found;
				}
			}
			args.push(`${argName || `arg${i}`}${optional ? "?" : ""}: ${paramType || "unknown"}`);
		}
		return args.join(", ");
	}

	private generateCallback(rbxCallback: ApiCallback, className: string, tsImplInterface?: ts.InterfaceDeclaration) {
		const name = rbxCallback.Name;
		const args = this.generateArgs(rbxCallback.Parameters);
		const returnType = safeValueType(rbxCallback.ReturnType);

		const { Description: wikiDescription } = rbxCallback;
		const description =
			wikiDescription && wikiDescription.trim() !== ""
				? wikiDescription
				: this.metadata.getCallbackDescription(className, name);
		if (!this.writeSignatures(rbxCallback, tsImplInterface, description)) {
			this.write(`${name}: (${args}) => ${returnType};`);
		}
	}

	private generateEvent(rbxEvent: ApiEvent, className: string, tsImplInterface?: ts.InterfaceDeclaration) {
		const name = rbxEvent.Name;
		const args = this.generateArgs(rbxEvent.Parameters, false);
		const { Description: wikiDescription } = rbxEvent;
		const description =
			wikiDescription && wikiDescription.trim() !== ""
				? wikiDescription
				: this.metadata.getEventDescription(className, name);

		if (!this.writeSignatures(rbxEvent, tsImplInterface, description)) {
			this.write(`readonly ${name}: RBXScriptSignal<(${args}) => void>;`);
		}
	}

	private generateFunction(rbxFunction: ApiFunction, className: string, tsImplInterface?: ts.InterfaceDeclaration) {
		const name = rbxFunction.Name;

		let returnType;
		if (Array.isArray(rbxFunction.ReturnType)) {
			const typesList = rbxFunction.ReturnType.map(t => safeReturnType(safeValueType(t))).join(", ");
			returnType = `LuaTuple<[${typesList}]>`;
		} else {
			returnType = safeReturnType(safeValueType(rbxFunction.ReturnType));
		}
		if (returnType !== null) {
			const args = this.generateArgs(rbxFunction.Parameters, true, [`this: ${className}`]);
			const { Description: wikiDescription } = rbxFunction;
			const description =
				wikiDescription && wikiDescription.trim() !== ""
					? wikiDescription
					: this.metadata.getMethodDescription(className, name);
			if (!this.writeSignatures(rbxFunction, tsImplInterface, description)) {
				this.write(`${name}(${args}): ${returnType};`);
			}
		} else {
			console.log(name, "is very bad!!!", className);
		}
	}

	private generateProperty(rbxProperty: ApiProperty, className: string, tsImplInterface?: ts.InterfaceDeclaration) {
		const name = rbxProperty.Name;
		const valueType = safePropType(safeValueType(rbxProperty.ValueType));
		if (valueType !== null) {
			const { Description: wikiDescription } = rbxProperty;
			const description =
				wikiDescription && wikiDescription.trim() !== ""
					? wikiDescription
					: this.metadata.getPropertyDescription(className, name);
			const surelyDefined = rbxProperty.ValueType.Category !== "Class";
			const prefix = this.canWrite(className, rbxProperty) && !hasTag(rbxProperty, "ReadOnly") ? "" : "readonly ";

			if (!this.writeSignatures(rbxProperty, tsImplInterface, description)) {
				this.write(`${prefix}${safeName(name)}: ${valueType}${surelyDefined ? "" : " | undefined"};`);
			}
		} else {
			console.log(name, "is very bad!!!", className);
		}
	}

	private isPluginOnlyClass(rbxClass: ApiClass): boolean {
		if (PLUGIN_ONLY_CLASSES.has(rbxClass.Name)) {
			return true;
		} else {
			const superclass = this.ClassReferences.get(rbxClass.Superclass);
			return superclass ? this.isPluginOnlyClass(superclass) : false;
		}
	}

	private shouldGenerateClass(rbxClass: ApiClass) {
		const superclass = this.ClassReferences.get(rbxClass.Superclass);

		if (superclass) {
			if (!this.shouldGenerateClass(superclass)) {
				return false;
			}
		}

		if (CLASS_BLACKLIST.has(rbxClass.Name)) {
			return false;
		}

		if (this.security !== "PluginSecurity") {
			if (PLUGIN_ONLY_CLASSES.has(rbxClass.Name)) {
				return false;
			}
		}

		return true;
	}

	private shouldGenerateMember(rbxClass: ApiClass, rbxMember: ApiMember) {
		if (MEMBER_BLACKLIST.get(rbxClass.Name)?.has(rbxMember.Name)) {
			return false;
		}

		if (!this.canRead(rbxClass.Name, rbxMember) && !this.canWrite(rbxClass.Name, rbxMember)) {
			return false;
		}

		if (hasTag(rbxMember, "Deprecated")) {
			const firstChar = rbxMember.Name.charAt(0);
			if (firstChar === firstChar.toLowerCase()) {
				const pascalCaseName = firstChar.toUpperCase() + rbxMember.Name.slice(1);
				const pascalCaseMember = rbxClass.Members.find(v => v.Name === pascalCaseName);
				if (pascalCaseMember !== undefined) {
					return false;
				}
			}
		}

		if (hasTag(rbxMember, "NotScriptable")) {
			return false;
		}

		return true;
	}

	private generateClassName(rbxClassName: string) {
		if (this.ClassReferences.get(rbxClassName)) {
			return rbxClassName;
		} else {
			throw new Error("Undefined class name! " + rbxClassName);
		}
	}

	private generateClass(rbxClass: ApiClass, tsFile: ts.SourceFile) {
		this.definedClassNames.add(rbxClass.Name);
		const className = this.generateClassName(rbxClass.Name);
		const tsImplInterface = tsFile.getInterface(className);
		let extendsStr = "";
		if (rbxClass.Superclass !== ROOT_CLASS_NAME) {
			const superClassName = this.generateClassName(rbxClass.Superclass);
			extendsStr = `extends ${superClassName} `;
			if (tsImplInterface) {
				// getExpression separates a possible <TypeGenerics> part
				const originalExtends = tsImplInterface.getExtends()[0].getExpression().getText();
				if (originalExtends !== superClassName) {
					fatal(rbxClass.Name, "had its parent class changed from", originalExtends, "to", superClassName);
				}
			}
		}

		const members = rbxClass.Members.filter(rbxMember => this.shouldGenerateMember(rbxClass, rbxMember));
		const noSecurity = this.security === "None" || this.isPluginOnlyClass(rbxClass);
		if (noSecurity || members.length > 0) {
			if (noSecurity) {
				const descriptions = new Array<string>();
				const desc = rbxClass.Description;
				if (desc && desc.trim()) {
					descriptions.push(this.formatDescription(desc));
				}

				const description = descriptions.join("\n\t").trim();
				if (description) {
					this.write(description);
				}
			}

			let declarationString = "";

			if (tsImplInterface) {
				const children = tsImplInterface.getChildren();
				declarationString =
					children
						.slice(
							1 + children.findIndex(child => child.getKindName() === "InterfaceKeyword"),
							children.findIndex(child => child.getKindName() === "OpenBraceToken"),
						)
						.reduce((p, c) => {
							return p + c.getFullText();
						}, "interface") + " {";
			}

			this.write(declarationString || `interface ${className} ${extendsStr}{`);
			this.pushIndent();

			this.write(`/**`);
			this.write(` * **DO NOT USE!**`);
			this.write(` *`);
			this.write(` * This field exists to force TypeScript to recognize this as a nominal type`);
			this.write(` * @hidden`);
			this.write(` * @deprecated`);
			this.write(` */`);
			this.write(`readonly _nominal_${className}: unique symbol;`);

			if (noSecurity && tsImplInterface) {
				for (const custom of [...tsImplInterface.getProperties(), ...tsImplInterface.getMethods()]) {
					const name = custom.getName();
					if (!members.some(({ Name }) => name === Name)) {
						const obj = rbxClass.Members.find(member => member.Name === name);

						if (obj === undefined && !EXPECTED_EXTRA_MEMBERS.get(className)?.includes(name)) {
							fatal("Unknown member", className + "." + name, "was found in customDefinitions.d.ts");
						}
						const [signature, documentation] = this.getSignature(custom);
						if (documentation.trim()) this.write(documentation);
						this.write(signature);
					}
				}
			}

			for (const rbxMember of members) {
				switch (rbxMember.MemberType) {
					case "Callback":
						this.generateCallback(rbxMember, className, tsImplInterface);
						break;
					case "Event":
						this.generateEvent(rbxMember, className, tsImplInterface);
						break;
					case "Function":
						this.generateFunction(rbxMember, className, tsImplInterface);
						break;
					case "Property":
						this.generateProperty(rbxMember, className, tsImplInterface);
						break;
				}
			}

			this.popIndent();
			this.write(`}`);
			this.write(``);
		}
	}

	private generateHeader() {
		this.write(`// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!`);
		this.write(``);
		this.write(`/// <reference no-default-lib="true"/>`);
		if (this.lowerSecurity) {
			this.write(`/// <reference path="${this.lowerSecurity}.d.ts" />`);
		} else {
			this.write(`/// <reference path="../roblox.d.ts" />`);
			this.write(`/// <reference path="enums.d.ts" />`);
		}
		this.write(``);
	}

	private generateInstanceInterface(
		tableName: string,
		rbxClasses: Array<ApiClass>,
		extended?: string,
		callback?: (member: ApiClass) => void,
	) {
		const extendedStr = extended ? " extends " + extended : "";
		const isEmpty = rbxClasses.length === 0;

		this.write(`interface ${tableName}${extendedStr} {${isEmpty ? "}" : ""}`);

		if (!isEmpty) {
			this.pushIndent();
			if (callback === undefined) {
				callback = ({ Name: name }: ApiClass) => {
					this.write(`${name}: ${name};`);
				};
			}
			rbxClasses.forEach(callback);
			this.popIndent();
			this.write(`}`);
		}
		this.write(``);
	}

	private generateInstancesTables(rbxClasses: Array<ApiClass>) {
		const [Services, CreatableInstances, Instances] = multifilter(rbxClasses, 3, rbxClass =>
			hasTag(rbxClass, "Service") ? 0 : isCreatable(rbxClass) ? 1 : 2,
		);

		// for sorting
		const byName = (a: ApiClass, b: ApiClass) => (a.Name.toLowerCase() < b.Name.toLowerCase() ? -1 : 1);

		if (0 < Services.length) this.generateInstanceInterface("Services", Services.sort(byName));
		if (0 < CreatableInstances.length) {
			this.generateInstanceInterface("CreatableInstances", CreatableInstances.sort(byName));
		}
		if (0 < Instances.length) {
			this.generateInstanceInterface("Instances", Instances.sort(byName), "Services, CreatableInstances");
		}
	}

	private generateClasses(rbxClasses: Array<ApiClass>, sourceFile: ts.SourceFile) {
		this.write(`// GENERATED ROBLOX INSTANCE CLASSES`);
		this.write(``);
		for (const rbxClass of rbxClasses) {
			this.generateClass(rbxClass, sourceFile);
		}
	}

	public async generate(rbxClasses: Array<ApiClass>) {
		const promises = new Array<Promise<void>>();
		for (const rbxClass of rbxClasses) {
			const rbxClassName = rbxClass.Name;

			rbxClass.Subclasses = new Array<string>();
			this.ClassReferences.set(rbxClass.Name, rbxClass);

			const superclass = this.ClassReferences.get(rbxClass.Superclass);

			if (superclass) {
				superclass.Subclasses.push(rbxClassName);
			}

			const classPath = path.join(CONTENT_DIR, rbxClassName);

			function processDesc(desc: string, tabs: number) {
				if (desc.indexOf("\n") !== -1) {
					return (
						desc
							.split("\n")
							.map((v, i) => (i === 0 ? v : `${"\t".repeat(tabs)} * ${v}`))
							.join("\n") +
						"\n" +
						"\t".repeat(tabs)
					);
				} else {
					return desc;
				}
			}

			promises.push(
				(async () => {
					const classDescPath = path.join(classPath, "index.md");
					if (await fs.pathExists(classDescPath)) {
						const classDesc = (await fs.readFile(classDescPath)).toString();
						if (classDesc.trim().length > 0) {
							rbxClass.Description = processDesc(classDesc, 0);
						}
					}
				})(),
			);

			for (const rbxMember of rbxClass.Members) {
				promises.push(
					(async () => {
						const memberDescPath = path.join(classPath, `${rbxMember.Name}.md`);
						if (await fs.pathExists(memberDescPath)) {
							const memberDesc = (await fs.readFile(memberDescPath)).toString();
							if (memberDesc.trim().length > 0) {
								rbxMember.Description = processDesc(memberDesc, 1);
							}
						}
					})(),
				);
			}
		}
		await Promise.all(promises);

		const project = new Project({
			tsConfigFilePath: path.join(ROOT_DIR, "include", "tsconfig.json"),
		});
		const sourceFile = project.getSourceFileOrThrow("customDefinitions.d.ts");

		rbxClasses = rbxClasses.filter(rbxClass => this.shouldGenerateClass(rbxClass));

		this.generateHeader();
		this.generateInstancesTables(rbxClasses.filter(rbxClass => !this.definedClassNames.has(rbxClass.Name)));
		this.generateClasses(rbxClasses, sourceFile);

		await this.finish();
	}
}
