import axios from "axios";
import * as path from "path";
import * as yargs from "yargs";
import { EnumGenerator } from "./class/EnumGenerator";
import { ClassGenerator } from "./class/ClassGenerator";
import { Timer } from "./class/Timer";

const API_DUMP_URL = "https://raw.githubusercontent.com/CloneTrooper1019/Roblox-Client-Watch/roblox/API-Dump.json";

/* tslint:disable */
const versionStr = require("../package.json").version as string;
/* tslint:enable */

// cli interface
const argv = yargs
	// version
	.alias("v", "version")
	.version(versionStr)
	.describe("version", "show version information")

	// help
	.alias("h", "help")
	.help("help")
	.describe("help", "show help")
	.showHelpOnFail(false, "specify --help for available options")

	// parse
	.parse();

(async () => {
	const totalTimer = new Timer();

	console.log("Generating..");

	const requestTimer = new Timer();
	console.log("\tRequesting API Dump JSON..");
	const response = await axios.get(API_DUMP_URL);
	console.log(`\tDone! (${requestTimer.get()}ms)`);

	if (response.status !== 200) {
		throw new Error("Response status non-200!");
	}

	const targetDir = path.resolve(__dirname, "..", "include");

	const api = response.data as ApiDump;

	const enumTimer = new Timer();
	console.log("\tGenerating enums..");
	await new EnumGenerator(targetDir, "generated_enums.d.ts").generate(api.Enums);
	console.log(`\tDone! (${enumTimer.get()}ms)`);

	const classTimer = new Timer();
	console.log("\tGenerating classes..");
	await new ClassGenerator(targetDir, "generated_classes.d.ts").generate(api.Classes);
	console.log(`\tDone! (${classTimer.get()}ms)`);

	console.log(`Done! (${totalTimer.get()}ms)`);
})();
