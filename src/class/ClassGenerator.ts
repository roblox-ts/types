/* eslint-disable no-inner-declarations */
import path from "path";
import * as ts from "ts-morph";
import { Project } from "ts-morph";

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
import { fatal, getJSDocLearnMoreLink } from "../util";
import type { ApiDocs } from "./ApiDocs";
import { Generator } from "./Generator";

const ROOT_DIR = path.join(__dirname, "..", "..");

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

const cacher = new Map<ts.InterfaceDeclaration, Array<ts.PropertySignature | ts.MethodSignature>>();

export class ClassGenerator extends Generator {
	private ClassReferences = new Map<string, ApiClass>();

	constructor(
		filePath: string,
		apiDocs: ApiDocs,
		private definedClassNames: Set<string>,
		private security: SecurityType,
		private lowerSecurity: SecurityType | undefined,
	) {
		super(filePath, apiDocs);
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

			this.writeMemberDescription(rbxMember, description);
			const written = signatures.length > 0;
			if (written) {
				this.write(signatures.join("\n\t"));
			}
			return written;
		} else {
			this.writeMemberDescription(rbxMember, description);
			return false;
		}
	}

	private writeMemberDescription(rbxMember: ApiMember, description?: string) {
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

		if (rbxMember.Link) {
			if (parts.length > 0) {
				parts.push("");
			}

			parts.push(getJSDocLearnMoreLink(rbxMember.Link));
		}

		this.writeMultilineDescription(parts);
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

		const { Description: description } = rbxCallback;
		if (!this.writeSignatures(rbxCallback, tsImplInterface, description)) {
			this.write(`${name}: (${args}) => ${returnType};`);
		}
	}

	private generateEvent(rbxEvent: ApiEvent, className: string, tsImplInterface?: ts.InterfaceDeclaration) {
		const name = rbxEvent.Name;
		const args = this.generateArgs(rbxEvent.Parameters, false);
		const { Description: description } = rbxEvent;

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
			const { Description: description } = rbxFunction;
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
			const { Description: description } = rbxProperty;
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
				const description = new Array<string>();

				if (rbxClass.Description) {
					description.push(rbxClass.Description);
				}

				if (rbxClass.Link) {
					if (description.length > 0) {
						description.push("");
					}

					description.push(getJSDocLearnMoreLink(rbxClass.Link));
				}

				this.writeMultilineDescription(description);
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
		for (const rbxClass of rbxClasses) {
			const rbxClassName = rbxClass.Name;

			rbxClass.Subclasses = new Array<string>();
			this.ClassReferences.set(rbxClass.Name, rbxClass);

			const superclass = this.ClassReferences.get(rbxClass.Superclass);

			if (superclass) {
				superclass.Subclasses.push(rbxClassName);
			}

			const classDocs = this.apiDocs.getInstanceDocumentation(rbxClassName);

			rbxClass.Description = classDocs.documentation;
			rbxClass.Link = classDocs.learn_more_link;

			for (const rbxMember of rbxClass.Members) {
				const memberDocs = this.apiDocs.getInstanceMemberDocumentation(rbxClassName, rbxMember.Name);

				rbxMember.Description = memberDocs.documentation;
				rbxMember.Link = memberDocs.learn_more_link;
			}
		}

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
