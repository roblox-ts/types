import * as jsdom from "jsdom";
import fetch from "node-fetch";
import * as path from "path";
import * as showdown from "showdown";
import Project, * as ts from "ts-morph";
import {
	ApiCallback,
	ApiClass,
	ApiEvent,
	ApiFunction,
	ApiMember,
	ApiMemberBase,
	ApiParameter,
	ApiProperty,
	ApiValueType,
	ClassTag,
	MemberTag,
} from "../api";
import { Generator } from "./Generator";
import { ReflectionMetadata } from "./ReflectionMetadata";

export const IMPL_PREFIX = "RbxInternal";
const ROOT_CLASS_NAME = "<<<ROOT>>>";
const DERIVATIVE_PREFIX = "DerivesFrom";

const BAD_NAME_CHARS = [" ", "/"];

const CREATABLE_BLACKLIST: { [index: string]: true | undefined } = {
	UserSettings: true,
	DebugSettings: true,
	Studio: true,
	GameSettings: true,
	ParabolaAdornment: true,
	LuaSettings: true,
	PhysicsSettings: true,
	Player: true,
};

const MEMBER_BLACKLIST: {
	[index: string]:
		| {
				[index: string]: true | undefined;
		  }
		| undefined;
} = {
	BinaryStringValue: { Changed: true },
	BoolValue: { Changed: true },
	BrickColorValue: { Changed: true },
	CFrameValue: { Changed: true },
	Color3Value: { Changed: true },
	DoubleConstrainedValue: { Changed: true },
	IntConstrainedValue: { Changed: true },
	IntValue: { Changed: true },
	NumberValue: { Changed: true },
	ObjectValue: { Changed: true },
	RayValue: { Changed: true },
	StringValue: { Changed: true },
	Vector3Value: { Changed: true },
	Instance: { ClassName: true },
};

function containsBadChar(name: string) {
	for (const badChar of BAD_NAME_CHARS) {
		if (name.indexOf(badChar) !== -1) {
			return true;
		}
	}
	return false;
}

function safeName(name: string) {
	return containsBadChar(name) ? `["${name}"]` : name;
}

const VALUE_TYPE_MAP: { [index: string]: string | null } = {
	Array: "Array<any>",
	BinaryString: null,
	bool: "boolean",
	Connection: "RBXScriptConnection",
	Content: "string",
	CoordinateFrame: "CFrame",
	Dictionary: "object",
	double: "number",
	EventInstance: "RBXScriptSignal",
	float: "number",
	int: "number",
	int64: "number",
	Map: "object",
	Object: "Instance",
	Objects: "Array<Instance>",
	Property: "string",
	Rect2D: "Rect",
	Tuple: "Array<any>",
	Variant: "any",
};

const PROP_TYPE_MAP: { [index: string]: string } = {};

function safePropType(valueType: string | undefined | null) {
	if (valueType === null) {
		return null;
	}
	if (valueType === undefined) {
		throw new Error("Undefined valueType!");
	}
	const mappedType = PROP_TYPE_MAP[valueType];
	if (mappedType !== undefined) {
		return mappedType;
	}
	return valueType;
}

function safeValueType(valueType: ApiValueType, canImplicitlyConvertEnum: boolean = false) {
	const mappedType = VALUE_TYPE_MAP[valueType.Name];
	if (mappedType !== undefined) {
		return mappedType;
	} else if (valueType.Category === "Enum") {
		let str = `Enum.${valueType.Name}`;

		if (canImplicitlyConvertEnum) {
			str = `CastsToEnum<${str}>`;
		}

		return str;
	} else {
		return valueType.Name;
	}
}

const RETURN_TYPE_MAP: { [index: string]: string | null } = {
	Instance: "Instance | undefined", // api dump lies :(
	any: "unknown",
	["Array<any>"]: "unknown",
};

function safeReturnType(valueType: string | undefined | null) {
	if (valueType === null) {
		return null;
	}
	if (valueType === undefined) {
		throw new Error("Undefined valueType!");
	}
	const mappedType = RETURN_TYPE_MAP[valueType];
	if (mappedType !== undefined) {
		return mappedType;
	}
	return valueType;
}

const ARG_NAME_MAP: { [index: string]: string | null } = {
	["function"]: "callback",
	["debugger"]: "debug",
	["old"]: "oldValue",
	["new"]: "newValue",
};

function safeArgName(name: string | undefined | null) {
	if (name === null) {
		return null;
	}
	if (name === undefined) {
		throw new Error("Undefined name!");
	}
	const mappedType = ARG_NAME_MAP[name];
	if (mappedType !== undefined) {
		return mappedType;
	}
	return name;
}

function getSecurity(member: ApiMemberBase) {
	const security = member.Security || "None";
	if (typeof security === "string") {
		return {
			Read: security,
			Write: security,
		};
	}
	return security;
}

function canRead(member: ApiMemberBase) {
	return getSecurity(member).Read === "None";
}

function canWrite(member: ApiMemberBase) {
	return getSecurity(member).Write === "None";
}

function classHasTag(api: ApiClass, tag: ClassTag) {
	if (api.Tags) {
		return api.Tags.indexOf(tag) !== -1;
	}
	return false;
}

function memberHasTag(api: ApiMemberBase, tag: MemberTag) {
	if (api.Tags) {
		return api.Tags.indexOf(tag) !== -1;
	}
	return false;
}

function isCreatable(rbxClass: ApiClass) {
	return (
		!CREATABLE_BLACKLIST[rbxClass.Name] &&
		!classHasTag(rbxClass, "NotCreatable") &&
		!classHasTag(rbxClass, "Service")
	);
}

function generateArgs(params: Array<ApiParameter>, canImplicitlyConvertEnum: boolean = true) {
	const args = new Array<string>();
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
		const paramType = safeValueType(param.Type, canImplicitlyConvertEnum);
		optional = optional || param.Default !== undefined || paramType === "any";
		args.push(`${safeArgName(paramNames[i])}${optional ? "?" : ""}: ${paramType}`);
	}
	return args.join(", ");
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

class NumberHelper {
	private n = 0;
	public get() {
		return this.n++;
	}
}

function htmlToMarkdown(text: string) {
	const converter = new showdown.Converter();
	const { document } = new jsdom.JSDOM(`...`).window;
	const md = converter.makeMarkdown(text, document);
	return md;
}

function getDescriptionFromHtml(rawData: string, link: string) {
	let data = rawData;
	const openingStr = "Description:";
	const startingPosition = data.indexOf(openingStr);

	let descOpener: string;
	let index: number;

	if (startingPosition !== -1) {
		descOpener = `<div class="markdown-field-data description">`;
		index = data.indexOf(descOpener, startingPosition + openingStr.length);
	} else {
		descOpener = `<div class="markdown-field-data">`;
		index = data.indexOf(descOpener);
	}

	if (index !== -1) {
		const frontIndex = index + descOpener.length;
		data = data.slice(frontIndex);
		const iter = 0;
		let depth = 1;
		let backIndex = 0;
		let searcher = data;

		do {
			const results = searcher.match(/<\/?div/);

			if (results) {
				const resultIndex = results.index || 0;
				backIndex += resultIndex;
				searcher = searcher.slice(resultIndex + 3);
				if (results[0] === "<div") {
					depth++;
				} else {
					depth--;
				}
			} else {
				break;
			}
		} while (depth !== 0);

		if (backIndex) {
			const myHtml = data.slice(0, backIndex).trim();

			return (
				htmlToMarkdown(myHtml)
					.replace(/<!--[^]+?-->/g, "")
					.replace(/\(<\/([^<>]+)>[^()]*\)/g, (_, b) => {
						if (b) {
							return `(https://developer.roblox.com/${b as string})`;
						} else {
							return "";
						}
					})
					.replace(/<[^]+?>/g, "")
					.replace(/\s+\]/g, "]")
					.replace(/#+/g, a => (a.length < 3 ? "###" : a))
					.replace(/\*\//g, "*")
					.replace(/```[^]+?```/g, a => {
						const b = a.slice(3);
						if (b.substr(0, 3) === "lua") {
							return a;
						} else {
							return "```lua" + b;
						}
					})
					// .replace(/```((?!lua).+?```)/g, (_, b) => "```lua" + b)
					.trim()
			);
		}
	}
	return "";
}

export class ClassGenerator extends Generator {
	private ClassReferences = new Map<string, ApiClass>();

	constructor(outputDir: string, fileName: string, protected metadata: ReflectionMetadata) {
		super(outputDir, fileName, metadata);
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

	private writeSignatures(
		rbxMember: ApiMemberBase,
		getNodes: (tsImplInterface: ts.InterfaceDeclaration) => Array<ts.PropertySignature | ts.MethodSignature>,
		tsImplInterface?: ts.InterfaceDeclaration,
		description?: string,
	) {
		if (tsImplInterface) {
			const name = rbxMember.Name;
			const signatures = Array<string>();
			const documentations = Array<string>();
			if (description) {
				documentations.push(`/** ${description} */`);
			}
			const nodes = getNodes(tsImplInterface);
			nodes
				.filter(prop => prop.getName() === name)
				.forEach(node => {
					const [signature, documentation] = this.getSignature(node);
					signatures.push(signature);
					documentations.push(documentation);
				});

			this.write(documentations.join("\n\t").trim());
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

	private writeDescription(rbxMember: ApiMemberBase, desc?: string) {
		const description = desc || "";
		const tags = rbxMember.Tags;
		const tagStr = tags && tags.length > 0 ? description + "\n\nTags: " + tags.join(", ") : "";

		this.write(`/** ${(description || "[LACKS DOCUMENTATION]") + tagStr} */`);
	}

	private generateCallback(rbxCallback: ApiCallback, className: string, tsImplInterface?: ts.InterfaceDeclaration) {
		const name = rbxCallback.Name;
		const args = generateArgs(rbxCallback.Parameters);
		const description = rbxCallback.Description || this.metadata.getCallbackDescription(className, name);

		if (!this.writeSignatures(rbxCallback, impl => impl.getProperties(), tsImplInterface, description)) {
			this.write(`${name}: (${args}) => void;`);
		}
	}

	private generateEvent(rbxEvent: ApiEvent, className: string, tsImplInterface?: ts.InterfaceDeclaration) {
		const name = rbxEvent.Name;
		const args = generateArgs(rbxEvent.Parameters, false);
		const description = rbxEvent.Description || this.metadata.getEventDescription(className, name);

		if (!this.writeSignatures(rbxEvent, impl => impl.getProperties(), tsImplInterface, description)) {
			this.write(`readonly ${name}: RBXScriptSignal<(${args}) => void>;`);
		}
	}

	private generateFunction(rbxFunction: ApiFunction, className: string, tsImplInterface?: ts.InterfaceDeclaration) {
		const name = rbxFunction.Name;
		const returnType = safeReturnType(safeValueType(rbxFunction.ReturnType));
		if (returnType !== null) {
			const args = generateArgs(rbxFunction.Parameters);
			const description = rbxFunction.Description || this.metadata.getMethodDescription(className, name);
			if (!this.writeSignatures(rbxFunction, impl => impl.getMethods(), tsImplInterface, description)) {
				this.write(`${name}(${args}): ${returnType};`);
			}
		}
	}

	private generateProperty(rbxProperty: ApiProperty, className: string, tsImplInterface?: ts.InterfaceDeclaration) {
		const name = rbxProperty.Name;
		const valueType = safePropType(safeValueType(rbxProperty.ValueType));
		if (valueType !== null) {
			const description = rbxProperty.Description || this.metadata.getPropertyDescription(className, name);
			const surelyDefined = rbxProperty.ValueType.Category !== "Class";
			const prefix = canWrite(rbxProperty) && !memberHasTag(rbxProperty, "ReadOnly") ? "" : "readonly ";

			if (!this.writeSignatures(rbxProperty, impl => impl.getProperties(), tsImplInterface, description)) {
				this.write(`${prefix}${safeName(name)}${surelyDefined ? "" : "?"}: ${valueType};`);
			}
		}
	}

	private shouldGenerateMember(rbxClass: ApiClass, rbxMember: ApiMember) {
		const blacklist = MEMBER_BLACKLIST[rbxClass.Name];
		if (blacklist && blacklist[rbxMember.Name] === true) {
			return false;
		}
		return (
			canRead(rbxMember) && !memberHasTag(rbxMember, "Deprecated") && !memberHasTag(rbxMember, "NotScriptable")
		);
	}

	private generateMember(
		rbxClass: ApiClass,
		rbxMember: ApiMember,
		className: string,
		tsImplInterface?: ts.InterfaceDeclaration,
	) {
		if (rbxMember.MemberType === "Callback") {
			this.generateCallback(rbxMember, className, tsImplInterface);
		} else if (rbxMember.MemberType === "Event") {
			this.generateEvent(rbxMember, className, tsImplInterface);
		} else if (rbxMember.MemberType === "Function") {
			this.generateFunction(rbxMember, className, tsImplInterface);
		} else if (rbxMember.MemberType === "Property") {
			this.generateProperty(rbxMember, className, tsImplInterface);
		}
	}

	private classIsDerivative(rbxClass: ApiClass) {
		const hasSubclasses = rbxClass.Subclasses.length > 0;
		const isClassCreatable = isCreatable(rbxClass);
		return hasSubclasses && isClassCreatable;
	}

	private generateClassName(rbxClassName: string) {
		const rbxClass = this.ClassReferences.get(rbxClassName);

		if (rbxClass) {
			return (this.classIsDerivative(rbxClass) ? DERIVATIVE_PREFIX : "") + rbxClassName;
		} else {
			throw new Error("Undefined class name! " + rbxClassName);
		}
	}

	private generateClass(rbxClass: ApiClass, tsFile: ts.SourceFile, n: NumberHelper) {
		const name = this.generateClassName(rbxClass.Name);
		const implName = IMPL_PREFIX + name;

		const isClassCreatable = isCreatable(rbxClass);
		const hasSubclasses = rbxClass.Subclasses.length > 0;

		const interfaceName = hasSubclasses ? implName : name;
		const tsImplInterface = tsFile.getInterface(interfaceName);

		const extendsStr =
			rbxClass.Superclass !== ROOT_CLASS_NAME
				? `extends ${IMPL_PREFIX + this.generateClassName(rbxClass.Superclass)} `
				: "";

		const members = rbxClass.Members.filter(rbxMember => this.shouldGenerateMember(rbxClass, rbxMember));
		const isEmpty = members.length === 0 && hasSubclasses;
		const descriptions = new Array<string>();
		if (tsImplInterface)
			tsImplInterface.getLeadingCommentRanges().forEach(comment => descriptions.push(comment.getText()));

		const desc = rbxClass.Description;

		if (desc) {
			descriptions.push(`/** ${desc} */`);
		}

		const description = descriptions.join("\n\t").trim();
		if (description && !hasSubclasses) this.write(description);

		this.write(`interface ${interfaceName} ${extendsStr}{${isEmpty ? "}" : ""}`);

		if (!isEmpty) {
			this.pushIndent();

			if (!hasSubclasses) {
				this.write(`/** The string name of this Instance's most derived class. */`);
				this.write(`readonly ClassName: "${name}";`);
			}

			members.forEach(rbxMember => this.generateMember(rbxClass, rbxMember, name, tsImplInterface));
			this.popIndent();
			this.write(`}`);
		}

		if (hasSubclasses) {
			const fullName = rbxClass.Name;

			if (isClassCreatable) {
				const newImplName = IMPL_PREFIX + fullName;
				if (description) this.write(description);
				this.write(`interface ${fullName} extends ${implName} {`);
				this.pushIndent();
				this.write(`/** The string name of this Instance's most derived class. */`);
				this.write(`readonly ClassName: "${fullName}";`);
				this.popIndent();
				this.write(`}`);
				this.write(``);
			} else {
				const subclassesArray = this.subclassify(fullName, fullName);
				const possibilities = subclassesArray.join(" | ");
				if (description) this.write(description);
				this.write(`type ${fullName} = ${possibilities};`);
			}
		}

		this.write(``);
	}

	private generateHeader() {
		this.write(`// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!`);
		this.write(``);
		this.write(`/// <reference no-default-lib="true"/>`);
		this.write(`/// <reference path="roblox.d.ts" />`);
		this.write(`/// <reference path="generated_enums.d.ts" />`);
		this.write(``);
	}

	private generateInstanceInterface(
		tableName: string,
		rbxClasses: Array<ApiClass>,
		extended?: string,
		callback?: (member: ApiClass) => void,
	) {
		// tableName: string, rbxClasses: Array < ApiClass >, callback: (value: ApiClass) => void, extends?: string
		const multispaceName = tableName
			.replace(/([A-Z])/g, a => " " + a)
			.toUpperCase()
			.substr(1);

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

	private subclassify(rbxClassName: string, omission: string = ""): Array<string> {
		const rbxClass = this.ClassReferences.get(rbxClassName);

		if (rbxClass) {
			const classNames = [...rbxClass.Subclasses];
			const numClassNames = classNames.length;

			for (let i = 0; i < numClassNames; i++) {
				const className = classNames[i];
				const myClass = this.ClassReferences.get(className);

				if (myClass) {
					if (this.classIsDerivative(myClass)) {
						classNames.push(...this.subclassify(className));
					}
				}
			}

			return classNames.filter(a => a !== omission);
		} else {
			throw new Error("Cannot subclassify " + rbxClassName);
		}
	}

	private generateInstancesTables(rbxClasses: Array<ApiClass>) {
		const baseFormat = ({ Name: name }: ApiClass) => {
			this.write(`${name}: ${[name, ...this.subclassify(name)].join(" | ")};`);
		};

		const [CreatableInstancesInternal, InstancesInternal, CreatableInstances, Instances, Services] = multifilter(
			rbxClasses,
			5,
			rbxClass =>
				classHasTag(rbxClass, "Service")
					? 4
					: (isCreatable(rbxClass) ? 0 : 1) + (this.classIsDerivative(rbxClass) ? 2 : 0),
		);

		const InstanceBases: Array<ApiClass> = [...Instances, ...CreatableInstances];

		this.generateInstanceInterface("CreatableInstancesInternal", CreatableInstancesInternal);
		this.generateInstanceInterface("Services", Services);
		this.generateInstanceInterface("InstancesInternal", InstancesInternal, "CreatableInstancesInternal, Services");
		this.generateInstanceInterface("InstanceBases", InstanceBases, "InstancesInternal", baseFormat);
		this.generateInstanceInterface("CreatableInstances", CreatableInstances, "CreatableInstancesInternal");
		this.generateInstanceInterface("Instances", Instances, "InstancesInternal, CreatableInstances");
	}

	private generateClasses(rbxClasses: Array<ApiClass>, sourceFile: ts.SourceFile) {
		this.write(`// GENERATED ROBLOX INSTANCE CLASSES`);
		this.write(``);
		const helper = new NumberHelper();
		rbxClasses.forEach(rbxClass => this.generateClass(rbxClass, sourceFile, helper));
	}

	public async generate(rbxClasses: Array<ApiClass>) {
		const linkData = new Array<{
			// classFolder: string;
			rbxMember: ApiMember | ApiClass;
			link: string;
		}>();

		// const parentFolder = "cache";
		// if (!fs.existsSync(parentFolder)) {
		// 	fs.mkdirSync(parentFolder);
		// }

		for (const rbxClass of rbxClasses) {
			const rbxClassName = rbxClass.Name;
			// const classFolder = `${parentFolder}\\${rbxClassName}`;

			// if (!fs.existsSync(classFolder)) {
			// 	fs.mkdirSync(classFolder);
			// }

			rbxClass.Subclasses = new Array<string>();
			this.ClassReferences.set(rbxClass.Name, rbxClass);

			const superclass = this.ClassReferences.get(rbxClass.Superclass);

			if (superclass) {
				superclass.Subclasses.push(rbxClassName);
			}

			linkData.push({
				rbxMember: rbxClass,
				link: `https://developer.roblox.com/api-reference/class/${rbxClassName}`,
			});

			for (const rbxMember of rbxClass.Members) {
				const rbxMemberName = rbxMember.Name.replace(/\s+/g, "-").replace(/[\(\)]/g, "");
				if (this.shouldGenerateMember(rbxClass, rbxMember)) {
					const memberType = rbxMember.MemberType.toLowerCase();
					const link = `https://developer.roblox.com/api-reference/${memberType}/${rbxClassName}/${rbxMemberName}`;

					linkData.push({
						// classFolder,
						rbxMember,
						link,
					});
				}
			}
		}

		const interval = 100;
		for (let i = interval; i < linkData.length; i += interval) {
			const myLinks = new Array<Promise<any>>();
			for (let k = i - interval; k < i; k++) {
				const linkDatum = linkData[k];
				if (linkDatum) {
					const rbxMember = linkDatum.rbxMember;
					const rbxMemberName = rbxMember.Name;
					// const classFolder = linkDatum.classFolder;
					// const memberFile = `${classFolder}\\${rbxMemberName}`;
					const link = linkDatum.link;

					myLinks.push(
						new Promise((resolve, reject) => {
							setTimeout(reject, 10000);
							fetch(link)
								.then(response => {
									if (response.status !== 200) {
										throw new Error("bad request");
									}
									return response.text();
								})
								.then(rawData => {
									const desc =
										typeof rawData === "string" ? getDescriptionFromHtml(rawData, link) : "";
									if (desc !== "") {
										// const cache = new Generator(classFolder, rbxMemberName + ".md");
										// cache.write(desc);
										rbxMember.Description = desc;
										resolve();
									} else {
										throw new Error("bad data");
									}
								})
								.catch(reject);
						}).catch(errorMessage => {
							console.log("\tFailed for " + link);
							return "";
						}),
					);
				}
			}
			await Promise.all(myLinks);
		}

		console.log("\tFinishing...");
		const project = new Project({
			tsConfigFilePath: path.join(__dirname, "..", "..", "include", "tsconfig.json"),
		});
		const sourceFile = project.getSourceFileOrThrow("customDefinitions.d.ts");
		this.generateHeader();
		this.generateInstancesTables(rbxClasses);
		this.generateClasses(rbxClasses, sourceFile);
	}
}
