import ts from "typescript";
import { ApiCallback } from "../../../types/ApiDump";
import { Context } from "../../../types/Context";
import { createParameters } from "../createParameters";
import { createTypeNodeFromApiValueType } from "../createTypeNodeFromApiValueType";

export function createCallbackSignature(ctx: Context, apiCallback: ApiCallback) {
	const parameters = createParameters(ctx, apiCallback.Parameters);
	const returnType = createTypeNodeFromApiValueType(ctx, apiCallback.ReturnType);
	const callbackType = ts.factory.createFunctionTypeNode(undefined, parameters, returnType);
	const type = ts.factory.createUnionTypeNode([
		callbackType,
		ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
	]);
	return [ts.factory.createPropertySignature(undefined, apiCallback.Name, undefined, type)];
}
