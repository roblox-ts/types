import ts from "typescript";

import { ApiParameter } from "../../types/ApiDump";
import { Context } from "../../types/Context";
import { getSafeParameterName } from "./alias";
import { createTypeNodeFromApiValueType } from "./createTypeNodeFromApiValueType";

function isTypeUndefined(type: ts.TypeNode) {
	return ts.isToken(type) && type.kind === ts.SyntaxKind.UndefinedKeyword;
}

export function createParameters(ctx: Context, apiParameters: Array<ApiParameter>) {
	const parameters = new Array<ts.ParameterDeclaration>();

	// build parameters from back to front, so we can detect optional parameters
	let requiredParamSeen = false;
	for (let i = apiParameters.length - 1; i >= 0; i--) {
		const apiParameter = apiParameters[i];
		let type = createTypeNodeFromApiValueType(ctx, apiParameter.Type, true);
		let questionToken: ts.QuestionToken | undefined;
		if (!requiredParamSeen) {
			if (ts.isUnionTypeNode(type) && type.types.find(isTypeUndefined)) {
				type = ts.factory.createUnionTypeNode(type.types.filter(v => !isTypeUndefined(v)));
				questionToken = ts.factory.createToken(ts.SyntaxKind.QuestionToken);
			} else {
				requiredParamSeen = true;
			}
		}

		parameters.unshift(
			ts.factory.createParameterDeclaration(
				undefined,
				undefined,
				getSafeParameterName(apiParameter.Name),
				questionToken,
				type,
			),
		);
	}

	return parameters;
}
