// Type-level tests for the handwritten declarations in include/.
//
// Hand-tracing template-literal types is unreliable, so these tests build a program over
// include/roblox.d.ts and every *.ts file in tests/, then ask the checker what it
// actually infers at each annotated declaration.
//
// `//=> <type>` after a variable declaration asserts its inferred type (union member order
// is ignored); `// @ts-expect-error` asserts that the statement below it fails to type-check.

import assert from "assert";
import fs from "fs";
import path from "path";
import ts from "typescript";

import { INCLUDE_FOLDER_PATH, TSCONFIG_PATH } from "./constants";
import { createParseConfigFileHost } from "./util/createParseConfigFileHost";

// ANSI colors, unconditionally — the GitHub Actions log viewer renders them.
const paint =
	(code: string) =>
	(s: string): string =>
		`\x1b[${code}m${s}\x1b[0m`;
const green = paint("32");
const red = paint("31");
const cyan = paint("36");
const bold = paint("1");
const dim = paint("2");
const tick = green("✓");
const cross = red("✗");

const ROOT = path.join(__dirname, "..");
const ROBLOX_DTS = path.join(INCLUDE_FOLDER_PATH, "roblox.d.ts");
const CASES_DIR = path.join(ROOT, "tests");

const caseFiles = fs
	.readdirSync(CASES_DIR)
	.filter(f => f.endsWith(".ts"))
	.map(f => path.join(CASES_DIR, f))
	.sort();

assert(caseFiles.length > 0, `No case files found in ${CASES_DIR}`);

// Use include/'s own compiler options so the test program can't drift from how those
// declarations are otherwise checked; skipLibCheck matches `npm run check`.
const parsedCommandLine = ts.getParsedCommandLineOfConfigFile(TSCONFIG_PATH, undefined, createParseConfigFileHost());
assert(parsedCommandLine, "Failed to parse include/tsconfig.json");

const program = ts.createProgram([ROBLOX_DTS, ...caseFiles], {
	...parsedCommandLine.options,
	noEmit: true,
	skipLibCheck: true,
});
const checker = program.getTypeChecker();

// typeToString prints union members in checker-internal order, so unions compare member-wise.
// The split is textual and only handles top-level unions, which is all the annotations use.
function normalizeType(typeString: string): string {
	const s = typeString.trim();
	const arrayMatch = /^\((.*)\)\[\]$/.exec(s);
	const members = (arrayMatch ? arrayMatch[1] : s)
		.split("|")
		.map(m => m.trim())
		.sort();
	return arrayMatch ? `(${members.join(" | ")})[]` : members.join(" | ");
}

const PRINT_FLAGS = ts.TypeFormatFlags.NoTruncation;

interface Result {
	file: string;
	name: string;
	line: number;
	expected: string;
	actual: string;
	ok: boolean;
}

const results: Array<Result> = [];
let total = 0;
let failures = 0;

console.log(bold(`Type-level tests · ${caseFiles.length} suite${caseFiles.length === 1 ? "" : "s"}`));

for (const caseFile of caseFiles) {
	const source = program.getSourceFile(caseFile);
	assert(source, `Could not load ${caseFile}`);
	const rawLines = fs.readFileSync(caseFile, "utf8").split("\n");
	const relName = path.relative(ROOT, caseFile);

	// ----- type-resolution cases (`//=>` annotations) -----

	const visit = (node: ts.Node): void => {
		if (ts.isVariableStatement(node)) {
			for (const decl of node.declarationList.declarations) {
				if (!ts.isIdentifier(decl.name)) continue;
				const line = source.getLineAndCharacterOfPosition(decl.name.getStart(source)).line;
				const lineText = rawLines[line] ?? "";
				const markerIdx = lineText.indexOf("//=>");
				if (markerIdx === -1) continue;
				const expected = lineText.slice(markerIdx + "//=>".length).trim();
				const type = checker.getTypeAtLocation(decl.name);
				const actual = checker.typeToString(type, decl.name, PRINT_FLAGS);
				const ok = normalizeType(actual) === normalizeType(expected);
				if (!ok) failures++;
				results.push({ file: relName, name: decl.name.text, line: line + 1, expected, actual, ok });
			}
		}
		ts.forEachChild(node, visit);
	};
	ts.forEachChild(source, visit);

	// ----- rejection cases (`// @ts-expect-error`) -----
	//
	// The directive suppresses the error it expects: a correctly rejected statement produces
	// no diagnostic, and a wrongly accepted one produces "Unused '@ts-expect-error' directive"
	// on the directive line.

	const directiveLines = new Set<number>();
	for (let i = 0; i < rawLines.length; i++) {
		if (rawLines[i].trim().startsWith("// @ts-expect-error")) directiveLines.add(i);
	}

	const diagByLine = new Map<number, string>();
	for (const diag of ts.getPreEmitDiagnostics(program, source)) {
		if (!diag.file || diag.file.fileName !== source.fileName || diag.start === undefined) continue;
		const line = diag.file.getLineAndCharacterOfPosition(diag.start).line;
		if (!diagByLine.has(line)) diagByLine.set(line, ts.flattenDiagnosticMessageText(diag.messageText, "\n"));
	}

	// ----- report for this file -----

	console.log(`\n${bold(cyan(relName))}`);
	for (const r of results.filter(r => r.file === relName)) {
		total++;
		console.log(`  ${r.ok ? tick : cross} ${r.name} ${dim(`(line ${r.line})`)}`);
		if (!r.ok) {
			console.log(`      ${dim("expected:")} ${green(r.expected)}`);
			console.log(`      ${dim("actual:  ")} ${red(r.actual)}`);
		}
	}
	for (const line of [...directiveLines].sort((a, b) => a - b)) {
		total++;
		const ok = !diagByLine.has(line);
		if (!ok) failures++;
		const stmt = (rawLines[line + 1] ?? "").trim();
		console.log(`  ${ok ? tick : cross} ${dim("rejects:")} ${stmt} ${dim(`(line ${line + 2})`)}`);
		if (!ok) console.log(`      ${red("expected this selector to be rejected, but it type-checks")}`);
	}
	// Diagnostics on lines without a directive are failures in positive cases.
	for (const [line, message] of [...diagByLine].sort((a, b) => a[0] - b[0])) {
		if (directiveLines.has(line)) continue;
		total++;
		failures++;
		console.log(
			`  ${cross} ${dim("unexpected error:")} ${(rawLines[line] ?? "").trim()} ${dim(`(line ${line + 1})`)}`,
		);
		console.log(`      ${red(message)}`);
	}
}

const passed = total - failures;
if (failures > 0) {
	console.error(`\n${cross} ${bold(red(`${failures} of ${total} checks failed`))} ${dim(`(${passed} passed)`)}`);
	process.exit(1);
}
console.log(`\n${tick} ${bold(green(`All ${total} checks passed`))}`);
