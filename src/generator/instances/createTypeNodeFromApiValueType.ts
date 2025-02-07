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

export function createTypeNodeFromApiValueType(ctx: Context, apiValueType: ApiValueType): ts.TypeNode {
	// "T?" -> T | undefined
	if (apiValueType.Name.endsWith("?")) {
		return optional(createTypeNodeFromApiValueType(ctx, { ...apiValueType, Name: apiValueType.Name.slice(0, -1) }));
	}

	if (apiValueType.Category === "Class") {
		return ts.factory.createTypeReferenceNode(getSafeClassName(apiValueType.Name));
	} else if (apiValueType.Category === "Primitive") {
		return (
			PRIMITIVE_TYPE_ALIAS_MAP.get(apiValueType.Name) ??
			ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)
		);
	} else if (apiValueType.Category === "DataType") {
		return DATA_TYPE_ALIAS_MAP.get(apiValueType.Name) ?? ts.factory.createTypeReferenceNode(apiValueType.Name);
	} else if (apiValueType.Category === "Enum") {
		return ts.factory.createTypeReferenceNode(
			ts.factory.createQualifiedName(ts.factory.createIdentifier("Enum"), apiValueType.Name),
		);
	} else if (apiValueType.Category === "Group") {
		if (apiValueType.Name === "Array") {
			// Array<unknown>
			return ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("Array"), [
				ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword),
			]);
		} else if (apiValueType.Name === "Dictionary") {
			// Map<unknown, unknown>
			return ts.factory.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword);
		}
	}
	return ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword);
}
