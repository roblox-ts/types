import ts from "byots";

export function getExtendsNodes(node: ts.ClassLikeDeclaration | ts.InterfaceDeclaration) {
	for (const clause of node.heritageClauses ?? []) {
		if (clause.token === ts.SyntaxKind.ExtendsKeyword) {
			return clause.types;
		}
	}
	return [];
}

export function createParseConfigFileHost(): ts.ParseConfigFileHost {
	return {
		fileExists: ts.sys.fileExists,
		getCurrentDirectory: ts.sys.getCurrentDirectory,
		onUnRecoverableConfigFileDiagnostic: (d) => {
			if (typeof d.messageText !== "string") {
				throw new Error(d.messageText.messageText);
			}
			throw new Error(d.messageText);
		},
		readDirectory: ts.sys.readDirectory,
		readFile: ts.sys.readFile,
		useCaseSensitiveFileNames: ts.sys.useCaseSensitiveFileNames,
	};
}

export function createReadBuildProgramHost() {
	return {
		getCurrentDirectory: ts.sys.getCurrentDirectory,
		readFile: ts.sys.readFile,
		useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
	};
}
