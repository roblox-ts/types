import ts from "typescript";

import { SecurityLevel } from "../../../enums";
import { ApiProperty } from "../../../types/ApiDump";
import { Context } from "../../../types/Context";
import { optional } from "../../../util/optional";
import { getSafePropertyName } from "../alias";
import { createTypeNodeFromApiValueType } from "../createTypeNodeFromApiValueType";

export function createPropertySignature(
	ctx: Context,
	apiProperty: ApiProperty,
	securityLevel: SecurityLevel,
	readSecurity: SecurityLevel,
	writeSecurity: SecurityLevel,
) {
	const name = getSafePropertyName(apiProperty.Name);
	let type = createTypeNodeFromApiValueType(ctx, apiProperty.ValueType);

	// Instance types are optional as properties
	if (apiProperty.ValueType.Category === "Class") {
		type = optional(type);
	}

	if (readSecurity !== writeSecurity) {
		if (readSecurity === securityLevel) {
			// get X(): T;
			return [ts.factory.createGetAccessorDeclaration(undefined, name, [], type, undefined)];
		} else if (writeSecurity === securityLevel) {
			// set X(value: T);
			return [
				ts.factory.createSetAccessorDeclaration(
					undefined,
					name,
					[ts.factory.createParameterDeclaration(undefined, undefined, "value", undefined, type)],
					undefined,
				),
			];
		} else {
			return [];
		}
	}

	const modifiers = new Array<ts.Modifier>();
	if (apiProperty.Tags?.includes("ReadOnly")) {
		modifiers.push(ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword));
	}
	return [ts.factory.createPropertySignature(modifiers, name, undefined, type)];
}
