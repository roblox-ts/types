import ts from "typescript";

import { ApiCallback } from "../../../types/ApiDump";
import { Context } from "../../../types/Context";
import { optional } from "../../../util/optional";
import { createParameters } from "../createParameters";
import { createTypeNodeFromApiValueType } from "../createTypeNodeFromApiValueType";

export function createCallbackSignature(ctx: Context, apiCallback: ApiCallback) {
	const parameters = createParameters(ctx, apiCallback.Parameters);
	const returnType = createTypeNodeFromApiValueType(ctx, apiCallback.ReturnType);
	const type = optional(ts.factory.createFunctionTypeNode(undefined, parameters, returnType));
	return [ts.factory.createPropertySignature(undefined, apiCallback.Name, undefined, type)];
}
