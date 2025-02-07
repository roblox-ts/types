import ts from "typescript";

import { ApiClass, ApiFunction } from "../../../types/ApiDump";
import { Context } from "../../../types/Context";
import { getSafeClassName } from "../alias";
import { createParameters } from "../createParameters";
import { createTypeNodeFromApiValueType } from "../createTypeNodeFromApiValueType";

export function createMethodSignature(ctx: Context, apiClass: ApiClass, apiFunction: ApiFunction) {
	const parameters = createParameters(ctx, apiFunction.Parameters);

	parameters.unshift(
		ts.factory.createParameterDeclaration(
			undefined,
			undefined,
			"this",
			undefined,
			ts.factory.createTypeReferenceNode(getSafeClassName(apiClass.Name)),
		),
	);

	let returnType = Array.isArray(apiFunction.ReturnType)
		? ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("LuaTuple"), [
				ts.factory.createTupleTypeNode(apiFunction.ReturnType.map(v => createTypeNodeFromApiValueType(ctx, v))),
			])
		: createTypeNodeFromApiValueType(ctx, apiFunction.ReturnType);

	// for method return types, the API Dump will sometimes list "Instance", but mean "Instance?"
	if (
		!Array.isArray(apiFunction.ReturnType) &&
		apiFunction.ReturnType.Category === "Class" &&
		apiFunction.ReturnType.Name === "Instance"
	) {
		returnType = ts.factory.createUnionTypeNode([
			returnType,
			ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
		]);
	}

	return [
		ts.factory.createMethodSignature(undefined, apiFunction.Name, undefined, undefined, parameters, returnType),
	];
}
