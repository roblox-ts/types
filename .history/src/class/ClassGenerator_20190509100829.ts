import * as path from "path";
import * as ts from "ts-morph";
import { Project} as ts from "ts-morph";
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

const IMPL_PREFIX = "Rbx_";
const ROOT_CLASS_NAME = "<<<ROOT>>>";

const BAD_NAME_CHARS = [" ", "/"];

const CREATABLE_BLACKLIST: { [index: string]: true | undefined } = {
	UserSettings: true,
	DebugSettings: true,
	Studio: true,
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
};

function containsBadChar(name: string) {
	for (let i = 0; i < BAD_NAME_CHARS.length; i++) {
		if (name.indexOf(BAD_NAME_CHARS[i]) !== -1) {
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

const PROP_TYPE_MAP: { [index: string]: string } = {
	Instance: "Instance | undefined",
};

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

function safeValueType(valueType: ApiValueType) {
	const mappedType = VALUE_TYPE_MAP[valueType.Name];
	if (mappedType !== undefined) {
		return mappedType;
	} else if (valueType.Category === "Enum") {
		return `Enum.${valueType.Name}`;
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

function generateArgs(params: Array<ApiParameter>) {
	let args = new Array<string>();
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
		const paramType = safeValueType(param.Type);
		optional = optional || param.Default !== undefined || paramType === "any";
		if (optional) {
			args.push(`${safeArgName(paramNames[i])}?: ${safeValueType(param.Type)}`);
		} else {
			args.push(`${safeArgName(paramNames[i])}: ${safeValueType(param.Type)}`);
		}
	}
	return args.join(", ");
}

class NumberHelper {
	private n = 0;
	get() {
		return this.n++;
	}
}

export class ClassGenerator extends Generator {
	private generateCallback(rbxCallback: ApiCallback, className: string, tsImplInterface?: ts.InterfaceDeclaration) {
		const name = rbxCallback.Name;
		if (tsImplInterface && tsImplInterface.getProperty(name)) {
			return;
		}
		const args = generateArgs(rbxCallback.Parameters);
		const description = this.metadata.getCallbackDescription(className, name);
		if (description) {
			this.write(`/** ${description} */`);
		}
		this.write(`${name}: (${args}) => void;`);
	}

	private generateEvent(rbxEvent: ApiEvent, className: string, tsImplInterface?: ts.InterfaceDeclaration) {
		const name = rbxEvent.Name;
		if (tsImplInterface && tsImplInterface.getProperty(name)) {
			return;
		}
		const args = generateArgs(rbxEvent.Parameters);
		const description = this.metadata.getEventDescription(className, name);
		if (description) {
			this.write(`/** ${description} */`);
		}
		this.write(`readonly ${name}: RBXScriptSignal<(${args}) => void>;`);
	}

	private generateFunction(rbxFunction: ApiFunction, className: string, tsImplInterface?: ts.InterfaceDeclaration) {
		const name = rbxFunction.Name;
		if (tsImplInterface && tsImplInterface.getMethod(name)) {
			return;
		}
		const returnType = safeReturnType(safeValueType(rbxFunction.ReturnType));
		if (returnType !== null) {
			const args = generateArgs(rbxFunction.Parameters);
			const description = this.metadata.getMethodDescription(className, name);
			if (description) {
				this.write(`/** ${description} */`);
			}
			this.write(`${name}(${args}): ${returnType};`);
		}
	}

	private generateProperty(rbxProperty: ApiProperty, className: string, tsImplInterface?: ts.InterfaceDeclaration) {
		const name = rbxProperty.Name;
		if (tsImplInterface && tsImplInterface.getProperty(name)) {
			return;
		}
		const valueType = safePropType(safeValueType(rbxProperty.ValueType));
		if (valueType !== null) {
			const description = this.metadata.getPropertyDescription(className, name);
			if (description) {
				this.write(`/** ${description} */`);
			}
			const prefix = canWrite(rbxProperty) && !memberHasTag(rbxProperty, "ReadOnly") ? "" : "readonly ";
			const surelyDefined = rbxProperty.ValueType.Category !== "Class";
			this.write(`${prefix}${safeName(name)}${surelyDefined ? "" : "?"}: ${valueType};`);
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

	private generateClass(rbxClass: ApiClass, tsFile: ts.SourceFile, n: NumberHelper) {
		const name = rbxClass.Name;
		const implName = IMPL_PREFIX + name;
		const tsImplInterface = tsFile.getInterface(implName);
		const tsApiInterface = tsFile.getInterface(name);
		this.write(`// ${name}`);
		if (!tsApiInterface) {
			let extendsStr =
				rbxClass.Superclass && rbxClass.Superclass !== ROOT_CLASS_NAME
					? `extends ${IMPL_PREFIX}${rbxClass.Superclass} `
					: "";
			this.write(`interface ${implName} ${extendsStr}{`);
			this.pushIndent();
			const members = rbxClass.Members.filter(rbxMember => this.shouldGenerateMember(rbxClass, rbxMember));
			members.forEach(rbxMember => this.generateMember(rbxClass, rbxMember, name, tsImplInterface));
			if (members.length === 0) {
				this.write(`/** **INTERNAL DO NOT USE** [#32](https://github.com/roblox-ts/rbx-types/issues/32) */`);
				this.write(`__${n.get()}: never;`);
			}
			this.popIndent();
			this.write(`}`);
		}

		this.write(`type ${name} = ${implName} & Base<${implName}> & Indexable<${implName}>;`);

		if (classHasTag(rbxClass, "Service")) {
			this.write(`interface Rbx_ServiceProvider extends Rbx_Instance {`);
			this.pushIndent();
			this.write(`GetService(className: "${name}"): ${name};`);
			this.popIndent();
			this.write(`}`);
		}

		this.write(``);
	}

	private generateHeader() {
		this.write(`// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!`);
		this.write(``);
		this.write(`/// <reference no-default-lib="true"/>`);
		this.write(`/// <reference path="roblox.d.ts" />`);
		this.write(`/// <reference path="manual.d.ts" />`);
		this.write(`/// <reference path="generated_enums.d.ts" />`);
		this.write(``);
	}

	private generateInstancesTables(rbxClasses: Array<ApiClass>) {
		this.write(`// CREATABLE INSTANCES TABLE`);
		this.write(``);
		this.write(`interface CreatableInstances {`);
		this.pushIndent();
		rbxClasses
			.filter(rbxClass => isCreatable(rbxClass))
			.map(rbxClass => rbxClass.Name)
			.forEach(name => this.write(`${name}: ${name};`));
		this.popIndent();
		this.write(`}`);
		this.write(``);

		this.write(`// INSTANCES TABLE`);
		this.write(``);
		this.write(`interface Instances {`);
		this.pushIndent();
		rbxClasses.map(rbxClass => rbxClass.Name).forEach(name => this.write(`${name}: ${name};`));
		this.popIndent();
		this.write(`}`);
		this.write(``);
	}

	private generateClasses(rbxClasses: Array<ApiClass>, sourceFile: ts.SourceFile) {
		this.write(`// GENERATED ROBLOX INSTANCE CLASSES`);
		this.write(``);
		const helper = new NumberHelper();
		rbxClasses.forEach(rbxClass => this.generateClass(rbxClass, sourceFile, helper));
	}

	public async generate(rbxClasses: Array<ApiClass>) {
		const project = new Project({ tsConfigFilePath: path.join(__dirname, "..", "..", "include", "tsconfig.json") });
		const sourceFile = project.getSourceFileOrThrow("manual.d.ts");
		this.generateHeader();
		this.generateInstancesTables(rbxClasses);
		this.generateClasses(rbxClasses, sourceFile);
	}
}
