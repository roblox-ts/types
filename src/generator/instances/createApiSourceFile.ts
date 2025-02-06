import ts from "typescript";

import { CLASS_BLACKLIST, CREATABLE_BLACKLIST, EXPECTED_EXTRA_MEMBERS } from "../../constants";
import { SecurityLevel } from "../../enums";
import { ApiClass } from "../../types/ApiDump";
import { Context } from "../../types/Context";
import { createCommentStatement } from "../createCommentStatement";
import { getSafeClassName } from "./alias";
import { createInstanceInterface } from "./classes/createInstanceInterface";
import { createExtendsClause } from "./createExtendsClause";
import { isA, isAPluginOnlyClass } from "./isA";

function createInstanceMapMembers(apiClasses: Array<ApiClass>) {
	const members = new Array<ts.TypeElement>();
	for (const apiClass of apiClasses) {
		members.push(
			ts.factory.createPropertySignature(
				undefined,
				apiClass.Name,
				undefined,
				ts.factory.createTypeReferenceNode(getSafeClassName(apiClass.Name), undefined),
			),
		);
	}
	return members;
}

function createInstanceMapInterface(
	name: string,
	apiClasses: Array<ApiClass>,
	heritageClauses = new Array<ts.HeritageClause>(),
) {
	apiClasses.sort((a, b) => a.Name.localeCompare(b.Name));
	return ts.factory.createInterfaceDeclaration(
		undefined,
		name,
		undefined,
		heritageClauses,
		createInstanceMapMembers(apiClasses),
	);
}

export function createApiSourceFile(ctx: Context, securityLevel: SecurityLevel) {
	const statements = new Array<ts.Statement>();

	statements.push(createCommentStatement(` THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!`));
	statements.push(createCommentStatement(`/ <reference no-default-lib="true"/>`));
	statements.push(createCommentStatement(`/ <reference path="../roblox.d.ts" />`));
	statements.push(createCommentStatement(`/ <reference path="enums.d.ts" />`));

	const services = new Array<ApiClass>();
	const creatableInstances = new Array<ApiClass>();
	const instances = new Array<ApiClass>();
	const objects = new Array<ApiClass>();

	for (const apiClass of ctx.apiDump.Classes) {
		if (isA(ctx, apiClass.Name, "Instance")) {
			if (apiClass.Tags?.includes("Service")) {
				services.push(apiClass);
			} else if (!apiClass.Tags?.includes("NotCreatable") && !CREATABLE_BLACKLIST.has(apiClass.Name)) {
				creatableInstances.push(apiClass);
			} else {
				instances.push(apiClass);
			}
		} else {
			objects.push(apiClass);
		}
	}

	statements.push(createInstanceMapInterface("Services", services));
	statements.push(createInstanceMapInterface("CreatableInstances", creatableInstances));
	statements.push(
		createInstanceMapInterface("Instances", instances, [createExtendsClause("Services", "CreatableInstances")]),
	);
	statements.push(createInstanceMapInterface("Objects", objects, [createExtendsClause("Instances")]));

	statements.push(createCommentStatement(` GENERATED ROBLOX INSTANCE CLASSES`));

	for (const apiClass of ctx.apiDump.Classes) {
		if (CLASS_BLACKLIST.has(apiClass.Name)) {
			continue;
		}

		if (securityLevel < SecurityLevel.PluginSecurity && isAPluginOnlyClass(ctx, apiClass.Name)) {
			continue;
		}

		const instanceInterface = createInstanceInterface(ctx, apiClass, securityLevel);
		if (instanceInterface) {
			statements.push(instanceInterface);
		}
	}

	return ts.factory.createSourceFile(
		statements,
		ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
		ts.NodeFlags.None,
	);
}
