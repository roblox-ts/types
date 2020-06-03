import axios from "axios";
import * as path from "path";
import { ApiDump } from "./api";
import { ClassGenerator } from "./class/ClassGenerator";
import { EnumGenerator } from "./class/EnumGenerator";
import { ReflectionMetadata } from "./class/ReflectionMetadata";
import { Timer } from "./class/Timer";

const SECURITY_LEVELS = ["None", "PluginSecurity"] as const;

const BASE_URL = "https://raw.githubusercontent.com/CloneTrooper1019/Roblox-Client-Watch/roblox/";
const API_DUMP_URL = BASE_URL + "API-Dump.json";
const REFLECTION_METADATA_URL = BASE_URL + "ReflectionMetadata.xml";

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

	const enumTimer = new Timer();
	console.log("\tGenerating enums..");
	await new EnumGenerator(path.join(targetDir, "generated", "enums.d.ts"), reflectionMetadata).generate(api.Enums);
	console.log(`\tDone! (${enumTimer.get()}ms)`);

	const classTimer = new Timer();
	console.log("\tGenerating classes..");

	const definedClassNames = new Set<string>();
	for (let i = 0; i < SECURITY_LEVELS.length; i++) {
		await new ClassGenerator(
			path.join(targetDir, "generated", SECURITY_LEVELS[i] + ".d.ts"),
			reflectionMetadata,
			definedClassNames,
			SECURITY_LEVELS[i],
			SECURITY_LEVELS[i - 1],
		).generate(api.Classes);
	}

	console.log(`\tDone! (${classTimer.get()}ms)`);

	console.log(`Done! (${totalTimer.get()}ms)`);
})();
