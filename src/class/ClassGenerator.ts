import * as path from "path";
import Project, * as ts from "ts-simple-ast";
import { Generator } from "./Generator";

const IMPL_PREFIX = "Rbx_";
const ROOT_CLASS_NAME = "<<<ROOT>>>";

const BAD_NAME_CHARS = [" ", "/"];

const CREATABLE_BLACKLIST: { [index: string]: true | undefined } = {
	UserSettings: true,
	DebugSettings: true
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
	Vector3Value: { Changed: true }
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
	Variant: "any"
};

const PROP_TYPE_MAP: { [index: string]: string } = {
	Instance: "Instance | undefined"
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
	Instance: "Instance | undefined" // api dump lies :(
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
	["new"]: "newValue"
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
			Write: security
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

function hasTag(api: ApiMemberBase | ApiClass, tag: string) {
	if (api.Tags) {
		return api.Tags.indexOf(tag) !== -1;
	}
	return false;
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

export class ClassGenerator extends Generator {
	private generateCallback(rbxCallback: ApiCallback, tsInterface?: ts.InterfaceDeclaration) {
		const name = rbxCallback.Name;
		if (tsInterface && tsInterface.getProperty(name)) {
			return;
		}
		const args = generateArgs(rbxCallback.Parameters);
		this.write(`${name}: (${args}) => void;`);
	}

	private generateEvent(rbxEvent: ApiEvent, tsInterface?: ts.InterfaceDeclaration) {
		const name = rbxEvent.Name;
		if (tsInterface && tsInterface.getProperty(name)) {
			return;
		}
		const args = generateArgs(rbxEvent.Parameters);
		this.write(`${name}: RBXScriptSignal<(${args}) => void>;`);
	}

	private generateFunction(rbxFunction: ApiFunction, tsInterface?: ts.InterfaceDeclaration) {
		const name = rbxFunction.Name;
		if (tsInterface && tsInterface.getMethod(name)) {
			return;
		}
		const returnType = safeReturnType(safeValueType(rbxFunction.ReturnType));
		if (returnType !== null) {
			const args = generateArgs(rbxFunction.Parameters);
			if (hasTag(rbxFunction, "CustomLuaState")) {
				this.write("// custom lua state");
			}
			this.write(`${name}(${args}): ${returnType};`);
		}
	}

	private generateProperty(rbxProperty: ApiProperty, tsInterface?: ts.InterfaceDeclaration) {
		const name = rbxProperty.Name;
		if (tsInterface && tsInterface.getProperty(name)) {
			return;
		}
		const valueType = safePropType(safeValueType(rbxProperty.ValueType));
		if (valueType !== null) {
			const prefix = canWrite(rbxProperty) && !hasTag(rbxProperty, "ReadOnly") ? "" : "readonly ";
			this.write(`${prefix}${safeName(name)}: ${valueType};`);
		}
	}

	private generateMember(rbxClass: ApiClass, rbxMember: ApiMember, tsInterface?: ts.InterfaceDeclaration) {
		const blacklist = MEMBER_BLACKLIST[rbxClass.Name];
		if (blacklist && blacklist[rbxMember.Name] === true) {
			return;
		}

		if (canRead(rbxMember) && !hasTag(rbxMember, "Deprecated")) {
			if (rbxMember.MemberType === "Callback") {
				this.generateCallback(rbxMember, tsInterface);
			} else if (rbxMember.MemberType === "Event") {
				this.generateEvent(rbxMember, tsInterface);
			} else if (rbxMember.MemberType === "Function") {
				this.generateFunction(rbxMember, tsInterface);
			} else if (rbxMember.MemberType === "Property") {
				this.generateProperty(rbxMember, tsInterface);
			}
		}
	}

	private generateClass(rbxClass: ApiClass, tsFile: ts.SourceFile) {
		const name = rbxClass.Name;
		const implName = IMPL_PREFIX + name;
		const tsInterface = tsFile.getInterface(implName);
		this.write(`// ${name}`);
		let extendsStr =
			rbxClass.Superclass && rbxClass.Superclass !== ROOT_CLASS_NAME
				? `extends ${IMPL_PREFIX}${rbxClass.Superclass} `
				: "";
		this.write(`interface ${implName} ${extendsStr}{`);
		this.pushIndent();
		rbxClass.Members.forEach(rbxMember => this.generateMember(rbxClass, rbxMember, tsInterface));
		this.popIndent();
		this.write(`}`);

		if (
			rbxClass.Name !== "Instance" &&
			(hasTag(rbxClass, "NotCreatable") || hasTag(rbxClass, "Service") || CREATABLE_BLACKLIST[name])
		) {
			this.write(`type ${name} = ${implName} & Base<${implName}> & AnyIndex;`);
		} else {
			this.write(`interface ${name} extends ${implName}, Base<${implName}>, AnyIndex {}`);
			this.write(`declare class ${name} {`);
			this.pushIndent();
			this.write("constructor(parent?: Instance);");
			this.popIndent();
			this.write("}");
		}

		this.write("interface Rbx_Instance {");
		this.pushIndent();
		this.write(`IsA(className: "${name}"): this is ${name};`);
		this.write(`FindFirstAncestorOfClass(className: "${name}"): ${name} | undefined;`);
		this.write(`FindFirstAncestorWhichIsA(className: "${name}"): ${name} | undefined;`);
		this.write(`FindFirstChildOfClass(className: "${name}"): ${name} | undefined;`);
		this.write(`FindFirstAncestorWhichIsA(className: "${name}"): ${name} | undefined;`);
		this.popIndent();
		this.write("}");

		if (hasTag(rbxClass, "Service")) {
			this.write("interface Rbx_ServiceProvider extends Rbx_Instance {");
			this.pushIndent();
			this.write(`GetService(className: "${name}"): ${name};`);
			this.popIndent();
			this.write("}");
		}

		this.write("");
	}

	public async generate(rbxClasses: Array<ApiClass>) {
		const project = new Project({ tsConfigFilePath: path.join(__dirname, "..", "..", "include", "tsconfig.json") });
		const sourceFile = project.getSourceFileOrThrow("manual.d.ts");
		this.write("// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!");
		this.write("");
		this.write('/// <reference path="generated_enums.d.ts" />');
		this.write('/// <reference path="manual.d.ts" />');
		this.write("");
		this.write("// GENERATED ROBLOX INSTANCE CLASSES");
		this.write("");
		rbxClasses.forEach(rbxClass => this.generateClass(rbxClass, sourceFile));
	}
}
