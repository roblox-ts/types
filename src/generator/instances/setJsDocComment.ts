import ts from "typescript";

export function setJsDocComment(node: ts.Node, lines: Array<string>) {
	lines = lines
		// join + split allows for better ergonomics, some inputs might have \n in them already
		.join("\n")
		.split("\n")
		.map(v => ` * ${v}`);

	lines.unshift("*");
	lines.push(" ");

	const text = lines.join("\n");

	ts.setSyntheticLeadingComments(node, [
		{
			pos: -1,
			end: -1,
			kind: ts.SyntaxKind.MultiLineCommentTrivia,
			text,
			hasTrailingNewLine: true,
		},
	]);
}
