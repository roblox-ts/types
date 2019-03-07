import axios from "axios";
import * as path from "path";
import Project, * as ts from "ts-morph";
import { IMPL_PREFIX } from "../class/ClassGenerator";
import { ReflectionMetadata } from "../class/ReflectionMetadata";

const BASE_URL = "https://raw.githubusercontent.com/CloneTrooper1019/Roblox-Client-Watch/roblox/";
const REFLECTION_METADATA_URL = BASE_URL + "ReflectionMetadata.xml";

(async () => {
	const response = await axios.get(REFLECTION_METADATA_URL);
	const metadata = new ReflectionMetadata(response.data);
	const project = new Project({ tsConfigFilePath: path.join(__dirname, "..", "..", "include", "tsconfig.json") });
	const sourceFile = project.getSourceFileOrThrow("manual.d.ts");
	for (const statement of sourceFile.getStatements()) {
		if (ts.TypeGuards.isInterfaceDeclaration(statement)) {
			let className = statement.getName();
			if (className.startsWith(IMPL_PREFIX)) {
				className = className.substr(4);
				for (const member of statement.getMembers()) {
					if (member.getJsDocs().length === 0) {
						let description: string | undefined;
						if (ts.TypeGuards.isMethodSignature(member)) {
							description = metadata.getMethodDescription(className, member.getName());
						} else if (ts.TypeGuards.isPropertySignature(member)) {
							description =
								metadata.getPropertyDescription(className, member.getName()) ||
								metadata.getCallbackDescription(className, member.getName()) ||
								metadata.getEventDescription(className, member.getName());
						}
						if (description) {
							member.addJsDoc(description);
						}
					}
				}
			}
		}
	}
	await sourceFile.save();
})();
