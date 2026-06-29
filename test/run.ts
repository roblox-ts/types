// Type-level test runner for the published @rbxts/types.
//
// Run with `node test/run.ts` — Node strips the types, no build step (the runner uses only
// erasable syntax). Template-literal type metaprogramming can't be checked by reading the
// source, so this drives the TypeScript compiler API over the real published types
// (include/roblox.d.ts, which pulls in @rbxts/compiler-types, the generated classes, and the
// custom definitions) and reads back what the compiler actually infers.
//
// Every `*.ts` file under test/cases/ is a suite. For each variable declaration annotated with
// `//=> <type>`, the inferred type is compared to the annotation (union order ignored). A
// `// @ts-expect-error` line asserts the following statement is rejected by the type-checker. Add
// a suite by dropping in a file — no runner changes needed. Exits non-zero on failure.

import type { CompilerOptions, Node } from "typescript";

const fs = require("fs") as typeof import("fs");
const path = require("path") as typeof import("path");
const ts = require("typescript") as typeof import("typescript");

// Minimal ANSI coloring, always on — CI log viewers (GitHub Actions included) render ANSI.
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

const TEST_DIR = __dirname;
const ROOT = path.resolve(TEST_DIR, "..");

const ROBLOX_DTS = path.join(ROOT, "include", "roblox.d.ts");
const CASES_DIR = path.join(TEST_DIR, "cases");

const caseFiles = fs
	.readdirSync(CASES_DIR)
	.filter(f => f.endsWith(".ts"))
	.map(f => path.join(CASES_DIR, f))
	.sort();

if (caseFiles.length === 0) {
	console.error(`No case files found in ${CASES_DIR}`);
	process.exit(1);
}

// Mirror include/tsconfig.json / `npm run check`: roblox.d.ts carries a `no-default-lib`
// directive, so the default lib is dropped and @rbxts/compiler-types supplies the lib.
const compilerOptions: CompilerOptions = {
	strict: true,
	target: ts.ScriptTarget.ESNext,
	module: ts.ModuleKind.CommonJS,
	moduleResolution: ts.ModuleResolutionKind.NodeJs,
	types: [],
	noEmit: true,
	skipLibCheck: true,
};

const program = ts.createProgram([ROBLOX_DTS, ...caseFiles], compilerOptions);
const checker = program.getTypeChecker();

/** Normalize a printed type so comparison ignores union member ordering (which is not
 * significant in TypeScript): `(B | A)[]` and `(A | B)[]` compare equal. */
function normalizeType(typeString: string): string {
	let s = typeString.trim();
	const arrayMatch = /^\((.*)\)\[\]$/.exec(s);
	if (arrayMatch) {
		const members = arrayMatch[1].split("|").map(m => m.trim());
		members.sort();
		s = `(${members.join(" | ")})[]`;
	}
	return s;
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
	if (!source) {
		console.error(`Could not load ${caseFile}`);
		process.exit(1);
	}
	const rawLines = fs.readFileSync(caseFile, "utf8").split("\n");
	const relName = path.relative(ROOT, caseFile);

	// ----- type-resolution cases (`//=>` annotations) -----

	const visit = (node: Node): void => {
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
	// `@ts-expect-error` suppresses the error on the next line, so a selector that's correctly
	// rejected produces no diagnostic. If the call instead type-checks, TS reports an
	// "Unused '@ts-expect-error' directive" on the directive line — that's the failure tell.

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
		const ok = !diagByLine.has(line); // directive used (error suppressed) => rejected as expected
		if (!ok) failures++;
		const stmt = (rawLines[line + 1] ?? "").trim();
		console.log(`  ${ok ? tick : cross} ${dim("rejects:")} ${stmt} ${dim(`(line ${line + 2})`)}`);
		if (!ok) console.log(`      ${red("expected this selector to be rejected, but it type-checks")}`);
	}
	// Any diagnostic not silenced by a directive is an unexpected error in a positive case.
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
