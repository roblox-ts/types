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

	const returnType = Array.isArray(apiFunction.ReturnType)
		? ts.factory.createUnionTypeNode(apiFunction.ReturnType.map(v => createTypeNodeFromApiValueType(ctx, v)))
		: createTypeNodeFromApiValueType(ctx, apiFunction.ReturnType);

	return [
		ts.factory.createMethodSignature(undefined, apiFunction.Name, undefined, undefined, parameters, returnType),
	];
}
