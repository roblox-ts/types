import axios from "axios";
import * as fs from "fs";
import * as path from "path";
import { inspect } from "util";
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

	preprocess: (callback: (AST: any) => void) => void;
	compile: (AST: any) => { output: string };
	before(type: string | Array<string>, callback: (node: BreakdanceNode) => void): void;
};

type BreakdanceNode =
	| {
			val: string;
			type: string;
			nodes: undefined;
			parent: BreakdanceNode | null;
			next: BreakdanceNode | null;
			prev: BreakdanceNode | null;
	  }
	| {
			val: undefined;
			type: string;
			nodes: Array<BreakdanceNode>;
			parent: BreakdanceNode | null;
			next: BreakdanceNode | null;
			prev: BreakdanceNode | null;
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
	const breakdance = new Breakdance();

	function processBreakdownNode(node: BreakdanceNode, index: number) {
		if (node.nodes) {
			node.nodes.forEach(processBreakdownNode);

			if (node.type.match(/^h[1-6]$/)) {
				// console.log(node.parent!.nodes!.splice(index, 1));
				const parent = node.parent!;
				const grandparent = parent.parent!;

				const parentArray = parent.nodes!;

				const [, textNode] = node.nodes;
				for (const dead of parentArray.splice(index - 1, 3, textNode)) {
					dead.val = undefined;
					dead.next = null;
					dead.prev = null;
					dead.parent = null;
					dead.nodes = undefined;
				}
				textNode.parent = parent;
				textNode.prev = parentArray[index - 1];
				textNode.next = parentArray[index + 1];
				if (parentArray[index - 1]) parentArray[index - 1].next = textNode;
				if (parentArray[index + 1]) parentArray[index + 1].prev = textNode;
				for (const subNode of parentArray) {
					// console.log("\t<", `"${subNode.type}"`, `"${subNode.val}">`);
				}
				// console.log();
				// console.log();
			}
		}
	}

	// breakdance.before("table", node => {
	// 	processBreakdownNode(node, 0);
	// 	return node;
	// });

	// breakdance.preprocess(AST => {
	// 	console.log(AST);
	// 	// do stuff with cheerio AST
	// });

	function findTables(node: BreakdanceNode) {
		// console.log(node.type);

		if (node.type === "table") {
			processBreakdownNode(node, 0);
		}

		if (node.nodes) {
			for (const subNode of node.nodes!) {
				findTables(subNode);
			}
		}
	}

	const ast = breakdance.parse(str) as BreakdanceNode;
	// findTables(ast);

	function displayAST(node: BreakdanceNode, depth: number = 0) {
		if (node.val !== undefined) {
			console.log("\t".repeat(depth) + node.type, `"${node.val.trim()}"`);
		} else {
			console.log("\t".repeat(depth) + node.type + ":");
			for (const subNode of node.nodes) {
				displayAST(subNode, depth + 1);
			}
		}
	}
	displayAST(ast);
	console.log();
	const rendered = breakdance.compile(ast);
	console.log(rendered.output);

	// if (true) console.log(rendered);
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
