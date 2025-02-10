import ts from "typescript";

export function createGlobalEnumInterface() {
	const enumInterfaceMethods = new Array<ts.MethodSignature>();

	// GetEnumItems(this: Enum): Array<EnumItem>;
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

	// FromName(this: Enum, name: string): EnumItem | undefined;
	enumInterfaceMethods.push(
		ts.factory.createMethodSignature(
			undefined,
			ts.factory.createIdentifier("FromName"),
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
				ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("EnumItem"), undefined),
				ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
			]),
		),
	);

	// FromValue(this: Enum, value: number): EnumItem | undefined;
	enumInterfaceMethods.push(
		ts.factory.createMethodSignature(
			undefined,
			ts.factory.createIdentifier("FromValue"),
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
				ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("EnumItem"), undefined),
				ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
			]),
		),
	);

	// interface Enum {}
	return ts.factory.createInterfaceDeclaration(
		undefined,
		ts.factory.createIdentifier("Enum"),
		undefined,
		undefined,
		enumInterfaceMethods,
	);
}
