import ts from "typescript";

const CLASS_ALIAS_MAP = new Map([["Object", "RBXObject"]]);

export function getSafeClassName(name: string) {
	return CLASS_ALIAS_MAP.get(name) ?? name;
}

const INTERFACE_KEY_REGEX = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

export function getSafePropertyName(name: string): ts.PropertyName {
	return INTERFACE_KEY_REGEX.test(name) ? ts.factory.createIdentifier(name) : ts.factory.createStringLiteral(name);
}

const PARAMETER_ALIAS_MAP = new Map([
	["function", "callback"],
	["debugger", "debug"],
	["old", "oldValue"],
	["new", "newValue"],
]);

export function getSafeParameterName(name: string) {
	return PARAMETER_ALIAS_MAP.get(name) ?? name;
}
