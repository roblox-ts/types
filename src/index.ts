import assert from "assert";
import fs from "fs/promises";
import path from "path";
import ts from "typescript";

import { GENERATED_FOLDER_PATH } from "./constants";
import { SecurityLevel } from "./enums";
import { createEnumsSourceFile } from "./generator/enums/createEnumsSourceFile";
import { createApiSourceFile } from "./generator/instances/createApiSourceFile";
import { ApiDocs, ApiDocsEntry } from "./types/ApiDocs";
import { ApiDump } from "./types/ApiDump";
import { Context } from "./types/Context";

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

async function generateEnumsDts(ctx: Context) {
	const sourceFile = createEnumsSourceFile(ctx);
	const contents = printer.printFile(sourceFile);
	await fs.writeFile(path.join(GENERATED_FOLDER_PATH, "enums.d.ts"), contents);
}

async function generateApiDts(ctx: Context, securityLevel: SecurityLevel) {
	const sourceFile = createApiSourceFile(ctx, securityLevel);
	const contents = printer.printFile(sourceFile);
	await fs.writeFile(path.join(GENERATED_FOLDER_PATH, `${SecurityLevel[securityLevel]}.d.ts`), contents);
}

const ROBLOX_CLIENT_TRACKER_URL_BASE =
	"https://raw.githubusercontent.com/MaximumADHD/Roblox-Client-Tracker/refs/heads/roblox";
const API_DUMP_URL = `${ROBLOX_CLIENT_TRACKER_URL_BASE}/Mini-API-Dump.json`;
const API_DOCS_URL = `${ROBLOX_CLIENT_TRACKER_URL_BASE}/api-docs/mini/en-us.json`;

async function main() {
	const apiDumpResponse = await fetch(API_DUMP_URL);
	assert(apiDumpResponse.ok, "Failed to fetch API dump");
	const apiDump = (await apiDumpResponse.json()) as ApiDump;

	const apiDocsResponse = await fetch(API_DOCS_URL);
	assert(apiDocsResponse.ok, "Failed to fetch API docs");
	const apiDocs = (await apiDocsResponse.json()) as ApiDocs;

	const docs = new Map<string, ApiDocsEntry>(Object.entries(apiDocs));

	const superClassMap = new Map<string, string>(apiDump.Classes.map(v => [v.Name, v.Superclass]));

	const ctx: Context = { apiDump, docs, superClassMap };

	await generateApiDts(ctx, SecurityLevel.None);
	await generateApiDts(ctx, SecurityLevel.PluginSecurity);
	await generateEnumsDts(ctx);
}

void main();
