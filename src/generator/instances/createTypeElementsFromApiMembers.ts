import assert from "assert";
import ts from "typescript";

import { SecurityLevel } from "../../enums";
import { ApiClass, ApiMember } from "../../types/ApiDump";
import { Context } from "../../types/Context";
import { createCallbackSignature } from "./members/createCallbackSignature";
import { createEventSignature } from "./members/createEventSignature";
import { createMethodSignature } from "./members/createMethodSignature";
import { createPropertySignature } from "./members/createPropertySignature";

export function createTypeElementsFromApiMembers(
	ctx: Context,
	securityLevel: SecurityLevel,
	apiClass: ApiClass,
	apiMember: ApiMember,
	overrideMembers: Map<string, Array<ts.TypeElement>>,
	memberNames: Set<string>,
) {
	const result = new Array<ts.TypeElement>();

	const security =
		typeof apiMember.Security === "string"
			? { Read: apiMember.Security, Write: apiMember.Security }
			: apiMember.Security;

	const readSecurity = SecurityLevel[security.Read];
	let writeSecurity = SecurityLevel[security.Write];

	if (apiMember.MemberType !== "Property") {
		writeSecurity = readSecurity;
	}

	if (readSecurity === writeSecurity) {
		if (readSecurity !== securityLevel) {
			return [];
		}
	}

	// if is camelCase
	if (apiMember.Name[0] === apiMember.Name[0].toLowerCase()) {
		// and a PascalCase version exists
		if (memberNames.has(apiMember.Name[0].toUpperCase() + apiMember.Name.slice(1))) {
			// skip the camelCase version
			return [];
		}
	}

	const overrides = overrideMembers.get(apiMember.Name);
	if (overrides) {
		for (const override of overrides) {
			// I'm not really sure why this works.. but comments don't get copied over without it
			ts.copyComments(override, override);
			result.push(override);
		}
		return result;
	}

	if (apiMember.MemberType === "Property") {
		return createPropertySignature(ctx, apiMember, securityLevel, readSecurity, writeSecurity);
	} else if (apiMember.MemberType === "Function") {
		return createMethodSignature(ctx, apiClass, apiMember);
	} else if (apiMember.MemberType === "Callback") {
		return createCallbackSignature(ctx, apiMember);
	} else if (apiMember.MemberType === "Event") {
		return createEventSignature(ctx, apiMember);
	} else {
		assert(false, `Unknown member type: ${apiMember["MemberType"]}`);
	}

	return result;
}
