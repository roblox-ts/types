import axios from "axios";
import * as path from "path";
import { Project } from "ts-morph";
import { ZodError } from "zod";

import { ApiDump } from "./api";
import { ApiDocs } from "./class/ApiDocs";
import { ClassGenerator } from "./class/ClassGenerator";
import { EnumGenerator } from "./class/EnumGenerator";
import { Timer } from "./class/Timer";

const SECURITY_LEVELS = ["None", "PluginSecurity"] as const;

const BASE_URL = "https://raw.githubusercontent.com/MaximumADHD/Roblox-Client-Tracker/roblox/";
const API_DUMP_URL = BASE_URL + "Mini-API-Dump.json";
const API_DOCS_URL = BASE_URL + "api-docs/en-us.json";

void (async () => {
	const targetDir = path.resolve(__dirname, "..", "include");

	const totalTimer = new Timer();
	console.log("Generating..");

	const apiDumpTimer = new Timer();
	console.log("\tRequesting API Dump JSON..");
	const apiDumpResponse = await axios.get(API_DUMP_URL);
	console.log(`\tDone! (${apiDumpTimer.get()}ms)`);
	if (apiDumpResponse.status !== 200) {
		throw new Error("Response status non-200!");
	}
	const api = apiDumpResponse.data as ApiDump;

	const apiDocsDownloadTimer = new Timer();
	console.log("\tRequesting api-docs/en-us.json..");
	const apiDocsResponse = await axios.get(API_DOCS_URL);
	console.log(`\tDone! (${apiDocsDownloadTimer.get()}ms)`);
	if (apiDocsResponse.status !== 200) {
		throw new Error("Response status non-200!");
	}

	const apiDocsParseTimer = new Timer();
	console.log("\tParsing api-docs/en-us.json..");
	let apiDocs: ApiDocs;
	try {
		apiDocs = new ApiDocs(apiDocsResponse.data);
		console.log(`\tDone! (${apiDocsParseTimer.get()}ms)`);
	} catch (e) {
		if (e instanceof ZodError) {
			throw new Error(e.toString());
		} else {
			throw e;
		}
	}

	const enumTimer = new Timer();
	console.log("\tGenerating enums..");
	await new EnumGenerator(path.join(targetDir, "generated", "enums.d.ts"), apiDocs).generate(api.Enums);
	console.log(`\tDone! (${enumTimer.get()}ms)`);

	const definedClassNames = new Set<string>();
	for (let i = 0; i < SECURITY_LEVELS.length; i++) {
		const classTimer = new Timer();
		console.log(`\tGenerating level ${SECURITY_LEVELS[i]} classes..`);

		await new ClassGenerator(
			path.join(targetDir, "generated", SECURITY_LEVELS[i] + ".d.ts"),
			apiDocs,
			definedClassNames,
			SECURITY_LEVELS[i],
			SECURITY_LEVELS[i - 1],
		).generate(api.Classes);

		console.log(`\tDone! (${classTimer.get()}ms)`);
	}

	const typeCheckTimer = new Timer();
	console.log("\tTypechecking generated files..");
	const project = new Project({
		tsConfigFilePath: path.join(__dirname, "..", "include", "tsconfig.json"),
	});

	const diagnostics = project.getPreEmitDiagnostics().filter(d => {
		const sourceFile = d.getSourceFile();
		// customDefinitions not included in published package
		// so ignore false-positive diagnostics about plugin types
		return !sourceFile?.isInNodeModules() && sourceFile?.getBaseName() !== "customDefinitions.d.ts";
	});

	if (diagnostics.length !== 0) {
		console.error(project.formatDiagnosticsWithColorAndContext(diagnostics));
		process.exit(1);
	}

	console.log(`\tDone! (${typeCheckTimer.get()}ms)`);

	console.log(`Done! (${totalTimer.get()}ms)`);
})();
