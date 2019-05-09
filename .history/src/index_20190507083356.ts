import axios from "axios";
import * as fs from "fs";
import fetch from "node-fetch";
import * as path from "path";
import { inspect } from "util";
import { ApiDump } from "./api";
import { ClassGenerator } from "./class/ClassGenerator";
import { EnumGenerator } from "./class/EnumGenerator";
import { Generator } from "./class/Generator";
import { ReflectionMetadata } from "./class/ReflectionMetadata";
import { Timer } from "./class/Timer";

const BASE_URL = "https://raw.githubusercontent.com/CloneTrooper1019/Roblox-Client-Watch/roblox/";
const API_DUMP_URL = BASE_URL + "API-Dump.json";
const REFLECTION_METADATA_URL = BASE_URL + "ReflectionMetadata.xml";

interface Options {
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

	preprocess: (AST: any, Node: any) => void;
	compile: (AST: any) => { output: string };
	before: { [key: string]: (node: BreakdanceNode) => void };
	/**
	 * Specify the root domain name to prefix onto href or src paths that do not start with `#` or contain `://`.
	 */
	domain?: string;
}

const breakdance = require("breakdance") as (HTML: string, options: Partial<Options>) => string;

type BreakdanceNode =
	| {
			val: string;
			type: string;
			nodes: undefined;
			parent: BreakdanceNode | null;
			next: BreakdanceNode | null;
			prev: BreakdanceNode | null;
			html?: string;
	  }
	| {
			val: undefined;
			type: string;
			nodes: Array<BreakdanceNode>;
			parent: BreakdanceNode | null;
			next: BreakdanceNode | null;
			prev: BreakdanceNode | null;
			html?: string;
	  };

(async () => {
	const targetDir = path.resolve(__dirname, "..", "include");

	function processBreakdownNode(node: BreakdanceNode, index: number = 0) {
		if (node.nodes) {
			node.nodes.forEach(processBreakdownNode);

			if (node.type.match(/^h[1-6]$/)) {
				const parent = node.parent!;
				const parentArray = parent.nodes!;
				const [, textNode] = node.nodes;

				for (const dead of parentArray.splice(index - 1, 3, textNode)) {
					dead.val = undefined;
					dead.next = null;
					dead.prev = null;
					dead.parent = null;
					dead.nodes = undefined;
				}

				const previous = parentArray[index - 1];
				const next = parentArray[index + 1];

				textNode.parent = parent;
				textNode.prev = previous;
				textNode.next = next;

				if (previous) previous.next = textNode;
				if (next) next.prev = textNode;
			}
		}
	}

	function processText(text: string) {
		const assets = new Map<string, string>();
		return breakdance(
			text
				.replace(/```([^]+?)```/g, (a, b) => {
					if (b.substr(0, 3) === "lua") {
						return "```\n" + a.trim() + "\n```";
					} else {
						return "```lua\n" + b.trim() + "\n```";
					}
				})
				.replace(/    [^]+?\n\n/g, a => {
					const found = true;

					const middle = a.trim().replace(/.+/g, s => {
						let gotLocal = false;
						const str = s.replace(/^    /, () => {
							gotLocal = true;
							return "";
						});

						if (!gotLocal) {
							found = false;
						}

						return str;
					});

					return found ? "```lua\n" + middle + "\n```" : a;
				})
				.replace(/\[(\d+)\]: (\/assets\/.+)/g, (_, a: string, b: string) => {
					assets.set(a, b);
					return "";
				})
				.replace(/(!\[[^\]]+])\[(\d+)\]/g, (_, a: string, b: string) => {
					return a + `[https://developer.roblox.com${assets.get(b)}]`;
				}),
			{
				before: {
					table(node) {
						node.html = node.html!.replace(/<\/?h[1-6]>/g, "");
						processBreakdownNode(node);
					},

					h2(node) {
						console.log(node);
					},
				},

				domain: "https://developer.roblox.com/",
			},
		)
			.replace(/<br>|\*\/|\/\*/g, "")
			.replace(/`(\w+)[\/\|]([^`]+)`/g, (_, a, b) => {
				return "`" + b + "`";
			})
			.trim();
	}

	const link = "https://developer.roblox.com/api-reference/function/Humanoid/Move.json";
	new Promise((resolve, reject) => {
		// setTimeout(reject, 10000);
		fetch(link)
			.then(response => {
				if (response.status !== 200) {
					throw new Error("bad request");
				}
				return response.text();
			})
			.then(rawData => {
				const obj = JSON.parse(rawData);
				const functionData: {
					description: string;
					code_sample: Array<{ display_title: string; code_summary: string; code_sample: string }>;
				} = obj.entry.modular_blocks[0].api_function_section.current_function[0];
				const parentFolder = "cache";
				if (!fs.existsSync(parentFolder)) {
					fs.mkdirSync(parentFolder);
				}
				const classFolder = `${parentFolder}\\${"Humanoid"}`;

				if (!fs.existsSync(classFolder)) {
					fs.mkdirSync(classFolder);
				}
				const cache = new Generator(classFolder, "Move" + ".ts");
				const cache2 = new Generator(classFolder, "Move" + ".md");

				const { description: text } = functionData;

				let samples = "\n\n### Code Samples\n";

				for (const code of functionData.code_sample) {
					samples +=
						"\n#### " +
						code.display_title +
						"\n\n" +
						processText(code.code_summary) +
						"\n```lua\n" +
						code.code_sample +
						"\n```";
				}

				cache2.write(text);
				cache.write("\n" + "/** " + processText(text) + samples + "\n*/\nfunction zoom(){}");
				const desc = ""; // typeof rawData === "string" ? getDescriptionFromHtml(rawData, link) : "";
				if (desc !== "") {
					// const cache = new Generator(classFolder, rbxMemberName + ".md");
					// cache.write(desc);
					resolve();
				} else {
					throw new Error("bad data");
				}
			})
			.catch(reject);
	}).catch(errorMessage => {
		console.log("\tFailed for " + link + "\n" + errorMessage);
		return "";
	});

	// console.log(
	// 	breakdance(text, {
	// 		before: {
	// 			table(node) {
	// 				node.html = node.html!.replace(/<\/?h[1-6]>/g, "");
	// 				processBreakdownNode(node);
	// 			},
	// 		},
	// 		domain: "https://developer.roblox.com/",
	// 	}),
	// );

	// displayAST(ast);
	// const rendered = breakdance.compile(ast);
	// console.log(rendered.output);

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
