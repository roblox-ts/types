import ts from "typescript";

export function optional(typeNode: ts.TypeNode) {
	return ts.factory.createUnionTypeNode([typeNode, ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword)]);
}
