import ts from "typescript";

import { Context } from "../../types/Context";
import { createCommentStatement } from "../createCommentStatement";
import { createEnumNamespace } from "./createEnumNamespace";
import { createGlobalEnumInterface } from "./createGlobalEnumInterface";

export function createEnumsSourceFile(ctx: Context) {
	const statements = new Array<ts.Statement>();

	statements.push(createCommentStatement(` THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!`));
	statements.push(createCommentStatement(`/ <reference no-default-lib="true"/>`));
	statements.push(createCommentStatement(`/ <reference path="../roblox.d.ts" />`));

	statements.push(createCommentStatement(` GENERATED ROBLOX ENUMS`));

	// type Enums = typeof Enum;
	statements.push(
		ts.factory.createTypeAliasDeclaration(
			undefined,
			"Enums",
			undefined,
			ts.factory.createTypeQueryNode(ts.factory.createIdentifier("Enum")),
		),
	);

	// Maybe this should live in it's own handwritten utility file..
	// for now, I just fed the definition into ts-ast-viewer

	// interface EnumItem {
	// 	Name: string;
	// 	Value: number;
	// 	EnumType: Enum;
	// 	IsA<T extends Exclude<keyof typeof Enum, "GetEnums">>(name: T): this is typeof Enum[T][Exclude<keyof typeof Enum[T], "GetEnumItems">];
	// }
	statements.push(
		ts.factory.createInterfaceDeclaration(
			undefined,
			ts.factory.createIdentifier("EnumItem"),
			undefined,
			undefined,
			[
				ts.factory.createPropertySignature(
					undefined,
					ts.factory.createIdentifier("Name"),
					undefined,
					ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
				),
				ts.factory.createPropertySignature(
					undefined,
					ts.factory.createIdentifier("Value"),
					undefined,
					ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
				),
				ts.factory.createPropertySignature(
					undefined,
					ts.factory.createIdentifier("EnumType"),
					undefined,
					ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Enum"), undefined),
				),
				ts.factory.createMethodSignature(
					undefined,
					ts.factory.createIdentifier("IsA"),
					undefined,
					[
						ts.factory.createTypeParameterDeclaration(
							undefined,
							ts.factory.createIdentifier("T"),
							ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Exclude"), [
								ts.factory.createTypeOperatorNode(
									ts.SyntaxKind.KeyOfKeyword,
									ts.factory.createTypeQueryNode(ts.factory.createIdentifier("Enum"), undefined),
								),
								ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("GetEnums")),
							]),
							undefined,
						),
					],
					[
						ts.factory.createParameterDeclaration(
							undefined,
							undefined,
							ts.factory.createIdentifier("name"),
							undefined,
							ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("T"), undefined),
							undefined,
						),
					],
					ts.factory.createTypePredicateNode(
						undefined,
						ts.factory.createThisTypeNode(),
						ts.factory.createIndexedAccessTypeNode(
							ts.factory.createIndexedAccessTypeNode(
								ts.factory.createTypeQueryNode(ts.factory.createIdentifier("Enum"), undefined),
								ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("T"), undefined),
							),
							ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Exclude"), [
								ts.factory.createTypeOperatorNode(
									ts.SyntaxKind.KeyOfKeyword,
									ts.factory.createIndexedAccessTypeNode(
										ts.factory.createTypeQueryNode(ts.factory.createIdentifier("Enum"), undefined),
										ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("T"), undefined),
									),
								),
								ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("GetEnumItems")),
							]),
						),
					),
				),
			],
		),
	);

	const enumInterfaceMethods = new Array<ts.MethodSignature>();

	enumInterfaceMethods.push(
		ts.factory.createMethodSignature(
			undefined,
			ts.factory.createIdentifier("GetEnumItems"),
			undefined,
			undefined,
			[
				ts.factory.createParameterDeclaration(
					undefined,
					undefined,
					ts.factory.createIdentifier("this"),
					undefined,
					ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Enum"), undefined),
					undefined,
				),
			],
			ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Array"), [
				ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("EnumItem"), undefined),
			]),
		),
	);

	statements.push(createGlobalEnumInterface());

	const namespaceStatements = new Array<ts.Statement>();

	namespaceStatements.push(
		ts.factory.createFunctionDeclaration(
			[ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
			undefined,
			ts.factory.createIdentifier("GetEnums"),
			undefined,
			[
				ts.factory.createParameterDeclaration(
					undefined,
					undefined,
					ts.factory.createIdentifier("this"),
					undefined,
					ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Enums"), undefined),
					undefined,
				),
			],
			ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Array"), [
				ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Enum"), undefined),
			]),
			undefined,
		),
	);

	for (const apiEnum of ctx.apiDump.Enums) {
		namespaceStatements.push(...createEnumNamespace(ctx, apiEnum));
	}

	statements.push(
		ts.factory.createModuleDeclaration(
			[ts.factory.createToken(ts.SyntaxKind.DeclareKeyword)],
			ts.factory.createIdentifier("Enum"),
			ts.factory.createModuleBlock(namespaceStatements),
			ts.NodeFlags.Namespace | ts.NodeFlags.ExportContext | ts.NodeFlags.Ambient | ts.NodeFlags.ContextFlags,
		),
	);

	// declare type IterableFunction<T> = (this: void) => T;
	statements.push(
		ts.factory.createTypeAliasDeclaration(
			[ts.factory.createToken(ts.SyntaxKind.DeclareKeyword)],
			ts.factory.createIdentifier("IterableFunction"),
			[
				ts.factory.createTypeParameterDeclaration(
					undefined,
					ts.factory.createIdentifier("T"),
					undefined,
					undefined,
				),
			],
			ts.factory.createFunctionTypeNode(
				undefined,
				[ts.factory.createParameterDeclaration(undefined, undefined, "this", undefined, ts.factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword))],
				ts.factory.createTypeReferenceNode("T"),
			),
		),
	);

	// declare type CastsToEnum<T extends EnumItem> = T | T["Name" | "Value"];
	statements.push(
		ts.factory.createTypeAliasDeclaration(
			[ts.factory.createToken(ts.SyntaxKind.DeclareKeyword)],
			ts.factory.createIdentifier("CastsToEnum"),
			[
				ts.factory.createTypeParameterDeclaration(
					undefined,
					ts.factory.createIdentifier("T"),
					ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("EnumItem"), undefined),
					undefined,
				),
			],
			ts.factory.createUnionTypeNode([
				ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("T"), undefined),
				ts.factory.createIndexedAccessTypeNode(
					ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("T"), undefined),
					ts.factory.createUnionTypeNode([
						ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("Name")),
						ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral("Value")),
					]),
				),
			]),
		),
	);

	return ts.factory.createSourceFile(
		statements,
		ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
		ts.NodeFlags.None,
	);
}
