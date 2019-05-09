import axios from "axios";
import * as fs from "fs";
import * as path from "path";
import { ApiDump } from "./api";
import { ClassGenerator } from "./class/ClassGenerator";
import { EnumGenerator } from "./class/EnumGenerator";
import { ReflectionMetadata } from "./class/ReflectionMetadata";
import { Timer } from "./class/Timer";

const BASE_URL = "https://raw.githubusercontent.com/CloneTrooper1019/Roblox-Client-Watch/roblox/";
const API_DUMP_URL = BASE_URL + "API-Dump.json";
const REFLECTION_METADATA_URL = BASE_URL + "ReflectionMetadata.xml";

const Breakdance = require("breakdance") as new () => {
	parse: (HTMLtoConvert: string) => any;
	render: (
		HTMLtoConvert: string,
		options?: {
			/**
			 * Include HTML code comments in the generated markdown string. Disabled by default.
			 */
			comments?: boolean;
			/**
			 * Collapse more than two newlines to only two newlines. Enabled by default.
			 *
			 * Default: `true`
			 */
			condense?: boolean;
			/**
			 * Specify the root domain name to prefix onto href or src paths that do not start with `#` or contain `://`.
			 */
			domain?: string;

			/** Selective keep tags that are omitted by omitEmpty, so you don't need to redefine all of the omitted tags.
			 */
			keepEmpty?: string | Array<string>;

			/**
			 * When `true`, breakdance will throw an error if any non-standard/custom HTML tags are encountered. If you find a tag that breakdance doesn't cover, but you think it should, please create an issue to let us know about it.
			 *
			 * See the [breakdance recipes](https://breakdance.github.io/breakdance/recipes.html) for an example of how to add support for custom HTML elements.
			 */
			knownOnly?: boolean;

			/** Add a newline at the beggining of the generated markdown string. */
			leadingNewline?: boolean;

			/** Default: One or more tags to omit entirely from the HTML before converting to markdown. */
			omit?: string | Array<string>;

			/** Default: One or more tags to pick entirely from the HTML before converting to markdown. */
			pick?: string | Array<string>;
		},
	) => string;
};

(async () => {
	const targetDir = path.resolve(__dirname, "..", "include");

	const str = `<table>
	<thead>
		<tr>
			<th>Field</th>
			<th>Summary</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<h3>Data</h3>
			</td>
			<td>
				Developer supplied payload
			</td>
		</tr>
		<tr>
			<td>
				<h3>Sent</h3>
			</td>
			<td>
				Unix time in seconds at which the message was sent
			</td>
		</tr>
	</tbody>
</table>`;

	//  { pick: "table" }
	const my = new Breakdance();
	console.log(my.compile(str));
	// const totalTimer = new Timer();
	// console.log("Generating..");

	// const apiDumpTimer = new Timer();
	// console.log("\tRequesting API Dump JSON..");
	// const apiDumpResponse = await axios.get(API_DUMP_URL);
	// console.log(`\tDone! (${apiDumpTimer.get()}ms)`);
	// if (apiDumpResponse.status !== 200) {
	// 	throw new Error("Response status non-200!");
	// }
	// const api = apiDumpResponse.data as ApiDump;

	// const reflectionTimer = new Timer();
	// console.log("\tRequesting Reflection Metadata XML..");
	// const reflectionResponse = await axios.get(REFLECTION_METADATA_URL);
	// console.log(`\tDone! (${reflectionTimer.get()}ms)`);
	// if (reflectionResponse.status !== 200) {
	// 	throw new Error("Response status non-200!");
	// }
	// const reflectionMetadata = new ReflectionMetadata(reflectionResponse.data);

	// const enumTimer = new Timer();
	// console.log("\tGenerating enums..");
	// await new EnumGenerator(targetDir, "generated_enums.d.ts", reflectionMetadata).generate(api.Enums);
	// console.log(`\tDone! (${enumTimer.get()}ms)`);

	// const classTimer = new Timer();
	// console.log("\tGenerating classes..");
	// await new ClassGenerator(targetDir, "generated_classes.d.ts", reflectionMetadata).generate(api.Classes);
	// console.log(`\tDone! (${classTimer.get()}ms)`);

	// console.log(`Done! (${totalTimer.get()}ms)`);
})();
