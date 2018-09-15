import axios from "axios";
import * as fs from "mz/fs";
import * as path from "path";
import * as yargs from "yargs";
import { EnumGenerator } from "./class/EnumGenerator";
import { ClassGenerator } from "./class/ClassGenerator";
import { Timer } from "./class/Timer";

const API_DUMP_URL = "https://raw.githubusercontent.com/CloneTrooper1019/Roblox-Client-Watch/roblox/API-Dump.json";

const INCLUDED_FILES = ["es.d.ts", "lua.d.ts", "manual.d.ts", "macro_math.d.ts"];

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

	// target directory
	.option("t", {
		alias: "target",
		default: path.resolve(__dirname, "..", "out"),
		describe: "directory to output to"
	})

	// parse
	.parse();

(async () => {
	const timer = new Timer();
	const response = await axios.get(API_DUMP_URL);
	console.log(`Request complete`);

	if (response.status !== 200) {
		throw new Error("response status non-200!");
	}

	const targetDir = argv.target as string;

	const api = response.data as ApiDump;

	console.log(`Copying included files..`);
	for (const fileName of INCLUDED_FILES) {
		await fs.writeFile(
			path.join(targetDir, fileName),
			await fs.readFile(path.join(__dirname, "..", "include", fileName))
		);
	}
	console.log(`Done! (${timer.get()}ms)`);

	console.log(`Generating enums..`);
	await new EnumGenerator(targetDir, "generated_enums.d.ts").generate(api.Enums);
	console.log(`Done! (${timer.get()}ms)`);

	console.log(`Generating classes..`);
	await new ClassGenerator(targetDir, "generated_classes.d.ts").generate(api.Classes);
	console.log(`Done! (${timer.get()}ms)`);
})();
