// @ts-check
//
// Unit-test runner for the QueryDescendants selector resolver (include/selector.d.ts).
//
// Methodology (mirrors the original investigation): the only reliable way to validate
// template-literal type metaprogramming is empirically — drive the TypeScript compiler
// API over a fixture and read back the *actual* inferred type for each declaration.
//
//   1. createProgram over [selector.d.ts, mocks.d.ts, cases.ts]
//   2. getTypeChecker -> typeToString for every variable declaration in cases.ts
//   3. compare against the `//=>` annotation on the same line (union order normalized)
//   4. for `// @expect-error` markers, assert the following statement is rejected
//
// Exits non-zero if any case fails.

const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const TEST_DIR = __dirname;
const ROOT = path.resolve(TEST_DIR, "..");

const SELECTOR_DTS = path.join(ROOT, "include", "selector.d.ts");
const MOCKS_DTS = path.join(TEST_DIR, "mocks.d.ts");
const CASES_TS = path.join(TEST_DIR, "cases.ts");

/** @type {ts.CompilerOptions} */
const compilerOptions = {
	strict: true,
	target: ts.ScriptTarget.ES2020,
	module: ts.ModuleKind.CommonJS,
	types: [],
	noEmit: true,
	skipLibCheck: true,
};

const program = ts.createProgram([SELECTOR_DTS, MOCKS_DTS, CASES_TS], compilerOptions);
const checker = program.getTypeChecker();
const casesSource = program.getSourceFile(CASES_TS);
if (!casesSource) {
	console.error("Could not load test/cases.ts");
	process.exit(1);
}

const casesText = fs.readFileSync(CASES_TS, "utf8");
const rawLines = casesText.split("\n");

/**
 * Normalize a printed type so comparison ignores union member ordering (which is not
 * significant in TypeScript). `(B | A)[]` and `(A | B)[]` compare equal.
 * @param {string} typeString
 */
function normalizeType(typeString) {
	let s = typeString.trim();
	const arrayMatch = /^\((.*)\)\[\]$/.exec(s);
	if (arrayMatch) {
		const members = arrayMatch[1].split("|").map(m => m.trim());
		members.sort();
		s = `(${members.join(" | ")})[]`;
	}
	return s;
}

const TYPE_FORMAT_FLAGS =
	ts.TypeFormatFlags.NoTruncation |
	ts.TypeFormatFlags.UseFullyQualifiedType |
	ts.TypeFormatFlags.WriteArrayAsGenericType;

// WriteArrayAsGenericType would print Array<T>; we actually want T[] form to match the
// annotations, so don't use it. Recompute without it.
const PRINT_FLAGS = ts.TypeFormatFlags.NoTruncation;

/** @typedef {{ name: string, line: number, expected: string, actual: string, ok: boolean }} Result */

/** @type {Result[]} */
const results = [];

/**
 * @param {ts.VariableDeclaration} decl
 */
function recordDeclaration(decl) {
	if (!ts.isIdentifier(decl.name)) return;
	const name = decl.name.text;
	const line = casesSource.getLineAndCharacterOfPosition(decl.name.getStart(casesSource)).line;
	const lineText = rawLines[line] ?? "";
	const markerIdx = lineText.indexOf("//=>");
	if (markerIdx === -1) return; // not an annotated case
	const expected = lineText.slice(markerIdx + "//=>".length).trim();

	const type = checker.getTypeAtLocation(decl.name);
	const actual = checker.typeToString(type, decl.name, PRINT_FLAGS);

	const ok = normalizeType(actual) === normalizeType(expected);
	results.push({ name, line: line + 1, expected, actual, ok });
}

ts.forEachChild(casesSource, function visit(node) {
	if (ts.isVariableStatement(node)) {
		for (const decl of node.declarationList.declarations) {
			recordDeclaration(decl);
		}
	}
	ts.forEachChild(node, visit);
});

// ----- expect-error handling -----

// Lines (0-based) that should produce a type error: the first statement line after each
// `// @expect-error` marker.
/** @type {Set<number>} */
const expectedErrorLines = new Set();
for (let i = 0; i < rawLines.length; i++) {
	if (rawLines[i].trim().startsWith("// @expect-error")) {
		for (let j = i + 1; j < rawLines.length; j++) {
			const t = rawLines[j].trim();
			if (t === "" || t.startsWith("//")) continue;
			expectedErrorLines.add(j);
			break;
		}
	}
}

/** @type {Map<number, string>} */
const actualErrors = new Map();
for (const diag of ts.getPreEmitDiagnostics(program)) {
	if (!diag.file || diag.file.fileName !== casesSource.fileName) continue;
	if (diag.start === undefined) continue;
	const line = diag.file.getLineAndCharacterOfPosition(diag.start).line;
	const message = ts.flattenDiagnosticMessageText(diag.messageText, "\n");
	if (!actualErrors.has(line)) actualErrors.set(line, message);
}

// ----- report -----

let failures = 0;

console.log("Type resolution cases:\n");
for (const r of results) {
	const status = r.ok ? "PASS" : "FAIL";
	if (!r.ok) failures++;
	console.log(`  [${status}] ${r.name} (line ${r.line})`);
	if (!r.ok) {
		console.log(`         expected: ${r.expected}`);
		console.log(`         actual:   ${r.actual}`);
	}
}

console.log("\nCompile-error cases:\n");
const allErrorLines = new Set([...expectedErrorLines, ...actualErrors.keys()]);
const sortedErrorLines = [...allErrorLines].sort((a, b) => a - b);
for (const line of sortedErrorLines) {
	const expected = expectedErrorLines.has(line);
	const actual = actualErrors.has(line);
	const ok = expected && actual;
	const status = ok ? "PASS" : "FAIL";
	if (!ok) failures++;
	const stmt = (rawLines[line] ?? "").trim();
	console.log(`  [${status}] line ${line + 1}: ${stmt}`);
	if (expected && !actual) console.log(`         expected a type error here, but none was reported`);
	if (!expected && actual) console.log(`         unexpected type error: ${actualErrors.get(line)}`);
}

const total = results.length + sortedErrorLines.length;
console.log(`\n${total - failures}/${total} checks passed.`);

if (failures > 0) {
	console.error(`\n${failures} check(s) failed.`);
	process.exit(1);
}
console.log("\nAll checks passed.");
