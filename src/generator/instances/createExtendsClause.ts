import ts from "typescript";

export function createExtendsClause(...names: Array<string>) {
	const types = new Array<ts.ExpressionWithTypeArguments>();
	for (const name of names) {
		types.push(ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(name), []));
	}
	return ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, types);
}
