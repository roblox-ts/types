import axios from "axios";
import gunzip from "gunzip-maybe";
import * as path from "path";
import type { Stream } from "stream";
import * as tar from "tar-stream";
import { Project } from "ts-morph";

import { ApiDump } from "./api";
import { ClassGenerator } from "./class/ClassGenerator";
import { EnumGenerator } from "./class/EnumGenerator";
import { ReflectionMetadata } from "./class/ReflectionMetadata";
import { Timer } from "./class/Timer";

const SECURITY_LEVELS = ["None", "PluginSecurity"] as const;

const BASE_URL = "https://raw.githubusercontent.com/MaximumADHD/Roblox-Client-Tracker/roblox/";
const API_DUMP_URL = BASE_URL + "Mini-API-Dump.json";
const REFLECTION_METADATA_URL = BASE_URL + "ReflectionMetadata.xml";

const CREATOR_DOCS_URL = "https://github.com/Roblox/creator-docs/archive/refs/heads/main.tar.gz";

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

	const reflectionTimer = new Timer();
	console.log("\tRequesting Reflection Metadata XML..");
	const reflectionResponse = await axios.get(REFLECTION_METADATA_URL);
	console.log(`\tDone! (${reflectionTimer.get()}ms)`);
	if (reflectionResponse.status !== 200) {
		throw new Error("Response status non-200!");
	}
	const reflectionMetadata = new ReflectionMetadata(reflectionResponse.data);

	const creatorDocsDownloadTimer = new Timer();
	console.log("\tRequesting Creator Docs..");
	const creatorDocsResponse = await axios.get(CREATOR_DOCS_URL, {
		responseType: "stream",
	});
	console.log(`\tDone! (${creatorDocsDownloadTimer.get()}ms)`);
	if (creatorDocsResponse.status !== 200) {
		throw new Error("Response status non-200!");
	}
	const creatorDocsTarballStream = creatorDocsResponse.data as Stream;

	const creatorDocsExtractTimer = new Timer();
	console.log("\tExtracting Creator Docs..");
	const extract = tar.extract();
	creatorDocsTarballStream.pipe(gunzip()).pipe(extract);
	for await (const entry of extract) {
		for await (const chunk of entry) {
			//console.log(chunk.toString());
		}
		entry.resume();
	}
	console.log(`\tDone! (${creatorDocsExtractTimer.get()}ms)`);

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
