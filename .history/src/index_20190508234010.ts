import axios from "axios";
import * as fs from "fs";
import fetch from "node-fetch";
import * as path from "path";
import { ApiDump } from "./api";
import { ClassGenerator } from "./class/ClassGenerator";
import { EnumGenerator } from "./class/EnumGenerator";
import { ReflectionMetadata } from "./class/ReflectionMetadata";
import { Timer } from "./class/Timer";

const BASE_URL = "https://raw.githubusercontent.com/CloneTrooper1019/Roblox-Client-Watch/roblox/";
const API_DUMP_URL = BASE_URL + "API-Dump.json";
const REFLECTION_METADATA_URL = BASE_URL + "ReflectionMetadata.xml";

(async () => {
	const targetDir = path.resolve(__dirname, "..", "include");

	function getLink() {}

	const data = `SetTopbarTransparency sets the transparency of the Topbar CoreGui. A value of 0 is completely opaque, and a value of 1 is completely transparent. Values outside of the range [0, 1] are clamped. The default transparency of the topbar is 0.5. The current transparency can be retrieved using the similarly-named \`PlayerGui/GetTopbarTransparency|GetTopbarTransparency\` function.

## Comparison of Values
The screenshots below show the topbar at 1.0, 0.5 and 0.0 transparency.
<img src="/assets/5c2a51f2ad2d87331bc45024/Topbar_Transparency_1.0.png" alt="The TopBar with a transparency of 1.0 (completely hidden)]" style="display:inline;">&nbsp;<img src="/assets/5c2a5257ac4084cd1b196622/Topbar_Transparency_0.5.png" alt="The TopBar with a transparency of 0.5 (50% transparency)]" style="display:inline;">&nbsp;<img src="/assets/5c2a5230be5779ad1a89484d/Topbar_Transparency_0.png" alt="The TopBar with a transparency of 0.0 (completely opaque)" style="display:inline;">

## Usage
This method is often used when re-styling the topbar to match the visual aesthetic of a game. By hiding the topbar, you can create your own custom topbar. See the code samples for an example.

## Alternative
Using the \`StarterGui/SetCore\` method with the \`TopbarEnabled\` option allows you to enable/disable the entire topbar and all of its features (player list, health, etc). By contrast, this method only affects how the topbar is displayed.

To make a \`Humanoid\` walk to a point, use the \`Humanoid/MoveTo\` function
For \`Player|Players\` the \`Player/Move|Player:Move\` function exists that calls this function
`;

	const q = data.replace(/`(\w+)[\/\|]([^`]+)`/g, (_, a: string, b: string) => {
		/* - To make a`Humanoid` walk to a point, use the `Humanoid/MoveTo` function
					- For `Player|Players` the `Player/Move|Player:Move` function exists that calls this function
					*/

		console.log(a, b);

		const c = b.match(/^(.+?)\|(.+)$/);

		console.log(c);

		return (
			"`" +
			b.replace(/(\w+)[\/\|]([^`]+)/g, (c: any, d: any, e: string) => {
				return e;
			}) +
			"`"
		);
	});
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
