import ts from "typescript";

import { ApiEvent } from "../../../types/ApiDump";
import { Context } from "../../../types/Context";
import { createParameters } from "../createParameters";

export function createEventSignature(ctx: Context, apiEvent: ApiEvent) {
	const parameters = createParameters(ctx, apiEvent.Parameters);
	const type = ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier("RBXScriptSignal"), [
		ts.factory.createFunctionTypeNode(
			undefined,
			parameters,
			ts.factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
		),
	]);
	return [
		ts.factory.createPropertySignature(
			[ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword)],
			apiEvent.Name,
			undefined,
			type,
		),
	];
}
