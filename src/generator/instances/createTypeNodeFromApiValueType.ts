import ts from "typescript";

import { ApiValueType } from "../../types/ApiDump";
import { Context } from "../../types/Context";
import { optional } from "../../util/optional";
import { getSafeClassName } from "./alias";

const PRIMITIVE_TYPE_ALIAS_MAP = new Map<string, ts.TypeNode>([
	["bool", ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)],
	["int64", ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)],
	["int", ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)],
	["float", ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)],
	["double", ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)],
	["string", ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)],
	// only used in return types
	["null", ts.factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)],
]);

const DATA_TYPE_ALIAS_MAP = new Map<string, ts.TypeNode>([
	["Function", ts.factory.createTypeReferenceNode("Callback")],
	[
		"Instances",
		ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("Array"), [
			ts.factory.createTypeReferenceNode("Instance"),
		]),
	],
	["CoordinateFrame", ts.factory.createTypeReferenceNode("CFrame")],
	["OptionalCoordinateFrame", optional(ts.factory.createTypeReferenceNode("CFrame"))],
]);

interface Hints {
	implicitlyConvertEnum?: boolean;
	implicitlyNullableInstances?: boolean;
}

const DEFAULT_HINTS = {
	implicitlyConvertEnum: false,
	implicitlyNullableInstances: false,
} satisfies Required<Hints>;

export function createTypeNodeFromApiValueType(ctx: Context, apiValueType: ApiValueType, hints?: Hints): ts.TypeNode {
	hints = { ...DEFAULT_HINTS, ...hints };

	// "T?" -> T | undefined
	if (apiValueType.Name.endsWith("?")) {
		return optional(
			createTypeNodeFromApiValueType(ctx, { ...apiValueType, Name: apiValueType.Name.slice(0, -1) }, hints),
		);
	}

	if (apiValueType.Category === "Class") {
		const type = ts.factory.createTypeReferenceNode(getSafeClassName(apiValueType.Name));
		return hints.implicitlyNullableInstances ? optional(type) : type;
	} else if (apiValueType.Category === "Primitive") {
		return (
			PRIMITIVE_TYPE_ALIAS_MAP.get(apiValueType.Name) ??
			ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)
		);
	} else if (apiValueType.Category === "DataType") {
		return DATA_TYPE_ALIAS_MAP.get(apiValueType.Name) ?? ts.factory.createTypeReferenceNode(apiValueType.Name);
	} else if (apiValueType.Category === "Enum") {
		const enumType = ts.factory.createTypeReferenceNode(
			ts.factory.createQualifiedName(ts.factory.createIdentifier("Enum"), apiValueType.Name),
		);
		return hints.implicitlyConvertEnum === true
			? ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("CastsToEnum"), [enumType])
			: enumType;
	} else if (apiValueType.Category === "Group") {
		if (apiValueType.Name === "Array") {
			// Array<unknown>
			return ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("Array"), [
				ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword),
			]);
		} else if (apiValueType.Name === "Dictionary") {
			// Map<unknown, unknown>
			return ts.factory.createTypeReferenceNode("Map", [
				ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword),
				ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword),
			]);
		}
	}
	return ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword);
}
