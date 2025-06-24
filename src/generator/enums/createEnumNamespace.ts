import ts from "typescript";

import { ApiEnum, ApiEnumItem } from "../../types/ApiDump";
import { Context } from "../../types/Context";
import { setJsDocComment } from "../instances/setJsDocComment";
import { transformDocs } from "../transformDocs";

const VARIABLE_REGEX = /^[a-zA-Z_][a-zA-Z_0-9]*$/;

function createEnumItemInterface(ctx: Context, apiEnum: ApiEnum, apiEnumItem: ApiEnumItem) {
	const interfaceDeclaration = ts.factory.createInterfaceDeclaration(
		[ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
		ts.factory.createIdentifier(apiEnumItem.Name),
		undefined,
		[
			ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
				ts.factory.createExpressionWithTypeArguments(
					ts.factory.createPropertyAccessExpression(
						ts.factory.createIdentifier("globalThis"),
						ts.factory.createIdentifier("EnumItem"),
					),
					undefined,
				),
			]),
		],
		[
			ts.factory.createPropertySignature(
				undefined,
				ts.factory.createIdentifier("Name"),
				undefined,
				ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(apiEnumItem.Name)),
			),
			ts.factory.createPropertySignature(
				undefined,
				ts.factory.createIdentifier("Value"),
				undefined,
				ts.factory.createLiteralTypeNode(ts.factory.createNumericLiteral(apiEnumItem.Value)),
			),
			ts.factory.createPropertySignature(
				undefined,
				ts.factory.createIdentifier("EnumType"),
				undefined,
				ts.factory.createTypeQueryNode(
					ts.factory.createQualifiedName(
						ts.factory.createQualifiedName(
							ts.factory.createIdentifier("globalThis"),
							ts.factory.createIdentifier("Enum"),
						),
						ts.factory.createIdentifier(apiEnum.Name),
					),
					undefined,
				),
			),
		],
	);

	const comments = new Array<string>();

	const documentation = ctx.docs.get(`@roblox/enum/${apiEnum.Name}.${apiEnumItem.Name}`)?.documentation;
	if (documentation) {
		comments.push(transformDocs(documentation));
		comments.push("");
	}

	comments.push(
		`[Creator Hub](https://create.roblox.com/docs/reference/engine/enums/${apiEnum.Name}#${apiEnumItem.Name})`,
	);

	setJsDocComment(interfaceDeclaration, comments);

	return interfaceDeclaration;
}

function createEnumItemVariable(apiEnumItem: ApiEnumItem) {
	const statements = new Array<ts.Statement>();

	statements.push(
		ts.factory.createVariableStatement(
			[ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
			ts.factory.createVariableDeclarationList(
				[
					ts.factory.createVariableDeclaration(
						ts.factory.createIdentifier(apiEnumItem.Name),
						undefined,
						ts.factory.createTypeReferenceNode(ts.factory.createIdentifier(apiEnumItem.Name), undefined),
						undefined,
					),
				],
				ts.NodeFlags.Const,
			),
		),
	);

	if (apiEnumItem.LegacyNames) {
		for (const legacyName of apiEnumItem.LegacyNames) {
			if (!VARIABLE_REGEX.test(legacyName)) continue;
			const legacyVariableDeclaration = ts.factory.createVariableStatement(
				[ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
				ts.factory.createVariableDeclarationList(
					[
						ts.factory.createVariableDeclaration(
							ts.factory.createIdentifier(legacyName),
							undefined,
							ts.factory.createTypeReferenceNode(
								ts.factory.createIdentifier(apiEnumItem.Name),
								undefined,
							),
							undefined,
						),
					],
					ts.NodeFlags.Const,
				),
			);
			setJsDocComment(legacyVariableDeclaration, [`@deprecated renamed to ${apiEnumItem.Name}`]);
			statements.push(legacyVariableDeclaration);
		}
	}

	return statements;
}

export function createEnumNamespace(ctx: Context, apiEnum: ApiEnum) {
	if (apiEnum.Items.length === 0) {
		return [];
	}

	const namespaceStatements = new Array<ts.Statement>();

	for (const apiEnumItem of apiEnum.Items) {
		namespaceStatements.push(createEnumItemInterface(ctx, apiEnum, apiEnumItem));
		namespaceStatements.push(...createEnumItemVariable(apiEnumItem));
	}

	// export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.{EnumItem}>;
	namespaceStatements.push(
		ts.factory.createFunctionDeclaration(
			[ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
			undefined,
			ts.factory.createIdentifier("GetEnumItems"),
			undefined,
			[
				ts.factory.createParameterDeclaration(
					undefined,
					undefined,
					ts.factory.createIdentifier("this"),
					undefined,
					ts.factory.createTypeReferenceNode(
						ts.factory.createQualifiedName(
							ts.factory.createIdentifier("globalThis"),
							ts.factory.createIdentifier("Enum"),
						),
						undefined,
					),
					undefined,
				),
			],
			ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Array"), [
				ts.factory.createTypeReferenceNode(
					ts.factory.createQualifiedName(
						ts.factory.createQualifiedName(
							ts.factory.createIdentifier("globalThis"),
							ts.factory.createIdentifier("Enum"),
						),
						ts.factory.createIdentifier(apiEnum.Name),
					),
					undefined,
				),
			]),
			undefined,
		),
	);

	// export function FromName(this: globalThis.Enum, name: string): globalThis.Enum.{EnumItem} | undefined;
	namespaceStatements.push(
		ts.factory.createFunctionDeclaration(
			[ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
			undefined,
			ts.factory.createIdentifier("FromName"),
			undefined,
			[
				ts.factory.createParameterDeclaration(
					undefined,
					undefined,
					ts.factory.createIdentifier("this"),
					undefined,
					ts.factory.createTypeReferenceNode(
						ts.factory.createQualifiedName(
							ts.factory.createIdentifier("globalThis"),
							ts.factory.createIdentifier("Enum"),
						),
						undefined,
					),
					undefined,
				),
				ts.factory.createParameterDeclaration(
					undefined,
					undefined,
					ts.factory.createIdentifier("name"),
					undefined,
					ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
					undefined,
				),
			],
			ts.factory.createUnionTypeNode([
				ts.factory.createTypeReferenceNode(
					ts.factory.createQualifiedName(
						ts.factory.createQualifiedName(
							ts.factory.createIdentifier("globalThis"),
							ts.factory.createIdentifier("Enum"),
						),
						ts.factory.createIdentifier(apiEnum.Name),
					),
					undefined,
				),
				ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
			]),
			undefined,
		),
	);

	// export function FromValue(this: globalThis.Enum, value: number): globalThis.Enum.{EnumItem} | undefined;
	namespaceStatements.push(
		ts.factory.createFunctionDeclaration(
			[ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
			undefined,
			ts.factory.createIdentifier("FromValue"),
			undefined,
			[
				ts.factory.createParameterDeclaration(
					undefined,
					undefined,
					ts.factory.createIdentifier("this"),
					undefined,
					ts.factory.createTypeReferenceNode(
						ts.factory.createQualifiedName(
							ts.factory.createIdentifier("globalThis"),
							ts.factory.createIdentifier("Enum"),
						),
						undefined,
					),
					undefined,
				),
				ts.factory.createParameterDeclaration(
					undefined,
					undefined,
					ts.factory.createIdentifier("value"),
					undefined,
					ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
					undefined,
				),
			],
			ts.factory.createUnionTypeNode([
				ts.factory.createTypeReferenceNode(
					ts.factory.createQualifiedName(
						ts.factory.createQualifiedName(
							ts.factory.createIdentifier("globalThis"),
							ts.factory.createIdentifier("Enum"),
						),
						ts.factory.createIdentifier(apiEnum.Name),
					),
					undefined,
				),
				ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
			]),
			undefined,
		),
	);

	const namespaceDeclaration = ts.factory.createModuleDeclaration(
		[ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
		ts.factory.createIdentifier(apiEnum.Name),
		ts.factory.createModuleBlock(namespaceStatements),
		ts.NodeFlags.Namespace,
	);

	const comments = new Array<string>();

	const documentation = ctx.docs.get(`@roblox/global/Enum.${apiEnum.Name}`)?.documentation;
	if (documentation) {
		comments.push(transformDocs(documentation));
		comments.push("");
	}

	comments.push(`[Creator Hub](https://create.roblox.com/docs/reference/engine/enums/${apiEnum.Name})`);

	setJsDocComment(namespaceDeclaration, comments);

	const unionTypes = new Array<ts.TypeNode>();

	for (const apiEnumItem of apiEnum.Items) {
		unionTypes.push(
			ts.factory.createTypeReferenceNode(
				ts.factory.createQualifiedName(
					ts.factory.createIdentifier(apiEnum.Name),
					ts.factory.createIdentifier(apiEnumItem.Name),
				),
				undefined,
			),
		);
	}

	const typeDeclaration = ts.factory.createTypeAliasDeclaration(
		[ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
		ts.factory.createIdentifier(apiEnum.Name),
		undefined,
		ts.factory.createUnionTypeNode(unionTypes),
	);

	return [namespaceDeclaration, typeDeclaration];
}
