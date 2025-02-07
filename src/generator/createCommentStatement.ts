import ts from "typescript";

export function createCommentStatement(text: string) {
	// small hack to make standalone comment "statements"
	const notEmittedStatement = ts.factory.createNotEmittedStatement({} as never);
	ts.setSyntheticLeadingComments(notEmittedStatement, [
		{
			pos: -1,
			end: -1,
			kind: ts.SyntaxKind.SingleLineCommentTrivia,
			text,
		},
	]);
	return notEmittedStatement;
}
