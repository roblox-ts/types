import ts from "typescript";

import { SecurityLevel } from "../../enums";
import { ApiClass } from "../../types/ApiDump";
import { Context } from "../../types/Context";
import { createCommentStatement } from "../createCommentStatement";
import { getSafeClassName } from "./alias";
import { createInstanceInterface } from "./classes/createInstanceInterface";
import { createExtendsClause } from "./createExtendsClause";
import { isA } from "./isA";

function createInstanceMapMembers(apiClasses: Array<ApiClass>) {
	apiClasses.sort((a, b) => a.Name.localeCompare(b.Name));
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

function createServicesInterface(ctx: Context) {
	const members = createInstanceMapMembers(
		ctx.apiDump.Classes.filter(v => isA(ctx, v.Name, "Instance") && v.Tags?.includes("Service")),
	);
	return ts.factory.createInterfaceDeclaration(undefined, "Services", undefined, undefined, members);
}

function createCreatableInstancesInterface(ctx: Context) {
	const members = createInstanceMapMembers(
		ctx.apiDump.Classes.filter(
			v => isA(ctx, v.Name, "Instance") && !v.Tags?.includes("Service") && !v.Tags?.includes("NotCreatable"),
		),
	);
	return ts.factory.createInterfaceDeclaration(undefined, "CreatableInstances", undefined, undefined, members);
}

function createInstancesInterface(ctx: Context) {
	const members = createInstanceMapMembers(
		ctx.apiDump.Classes.filter(
			v => isA(ctx, v.Name, "Instance") && !v.Tags?.includes("Service") && v.Tags?.includes("NotCreatable"),
		),
	);

	return ts.factory.createInterfaceDeclaration(
		undefined,
		"Instances",
		undefined,
		[createExtendsClause("Services", "CreatableInstances")],
		members,
	);
}

function createObjectsInterface(ctx: Context) {
	const members = createInstanceMapMembers(ctx.apiDump.Classes.filter(v => !isA(ctx, v.Name, "Instance")));
	return ts.factory.createInterfaceDeclaration(
		undefined,
		"Objects",
		undefined,
		[createExtendsClause("Instances")],
		members,
	);
}

export function createApiSourceFile(ctx: Context, securityLevel: SecurityLevel) {
	const statements = new Array<ts.Statement>();

	statements.push(createCommentStatement(` THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!`));
	statements.push(createCommentStatement(`/ <reference no-default-lib="true"/>`));
	statements.push(createCommentStatement(`/ <reference path="../roblox.d.ts" />`));
	statements.push(createCommentStatement(`/ <reference path="enums.d.ts" />`));

	statements.push(createServicesInterface(ctx));
	statements.push(createCreatableInstancesInterface(ctx));
	statements.push(createInstancesInterface(ctx));
	statements.push(createObjectsInterface(ctx));

	statements.push(createCommentStatement(` GENERATED ROBLOX INSTANCE CLASSES`));

	for (const apiClass of ctx.apiDump.Classes) {
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
