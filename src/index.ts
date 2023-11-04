import axios from "axios";
import { readFileSync } from "fs";
import * as path from "path";
import { Project } from "ts-morph";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { ApiDump } from "./api";
import { ClassGenerator } from "./class/ClassGenerator";
import { EnumGenerator } from "./class/EnumGenerator";
import { ReflectionMetadata } from "./class/ReflectionMetadata";
import { Timer } from "./class/Timer";

const SECURITY_LEVELS = ["None", "PluginSecurity"] as const;

const BASE_URL = "https://raw.githubusercontent.com/MaximumADHD/Roblox-Client-Tracker/roblox/";
const API_DUMP_URL = BASE_URL + "Mini-API-Dump.json";
const REFLECTION_METADATA_URL = BASE_URL + "ReflectionMetadata.xml";

void (async () => {
	const argv = await yargs(hideBin(process.argv)).argv;

	const targetDir = path.resolve(__dirname, "..", "include");

	const totalTimer = new Timer();
	console.log("Generating..");

	const apiDumpTimer = new Timer();
	console.log("\tGetting API Dump JSON..");

	let api: ApiDump;
	if (typeof argv.api === "string") {
		api = JSON.parse(readFileSync(argv.api, "utf-8"));
	} else {
		const apiDumpResponse = await axios.get(API_DUMP_URL);
		if (apiDumpResponse.status !== 200) {
			throw new Error("Response status non-200!");
		}
		api = apiDumpResponse.data;
	}
	console.log(`\tDone! (${apiDumpTimer.get()}ms)`);

	const reflectionTimer = new Timer();
	console.log("\tGetting Reflection Metadata XML..");

	let reflectionMetadata: ReflectionMetadata;
	if (typeof argv.reflection === "string") {
		reflectionMetadata = new ReflectionMetadata(readFileSync(argv.reflection, "utf-8"));
	} else {
		const reflectionResponse = await axios.get(REFLECTION_METADATA_URL);
		if (reflectionResponse.status !== 200) {
			throw new Error("Response status non-200!");
		}
		reflectionMetadata = new ReflectionMetadata(reflectionResponse.data);
	}
	console.log(`\tDone! (${reflectionTimer.get()}ms)`);

	const enumTimer = new Timer();
	console.log("\tGenerating enums..");
	await new EnumGenerator(path.join(targetDir, "generated", "enums.d.ts"), reflectionMetadata).generate(api.Enums);
	console.log(`\tDone! (${enumTimer.get()}ms)`);

	const definedClassNames = new Set<string>();
	for (let i = 0; i < SECURITY_LEVELS.length; i++) {
		const classTimer = new Timer();
		console.log(`\tGenerating level ${SECURITY_LEVELS[i]} classes..`);

		await new ClassGenerator(
			path.join(targetDir, "generated", SECURITY_LEVELS[i] + ".d.ts"),
			reflectionMetadata,
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
