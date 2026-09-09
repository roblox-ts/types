import { fixupPluginRules } from "@eslint/compat";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import noAutofix from "eslint-plugin-no-autofix";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default defineConfig(
	{ ignores: [".github/**", "include/generated/**", "devhub-scraper-master/**", "tests/**", "out/**"] },
	js.configs.recommended,
	...tseslint.configs.recommended,
	prettierRecommended,
	{
		files: ["**/*.ts"],
		languageOptions: {
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: __dirname,
			},
		},
		plugins: {
			"no-autofix": fixupPluginRules(noAutofix),
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			// keep the existing lint policy when recommended presets change
			"no-class-assign": "error",
			"no-constant-binary-expression": "off",
			"no-empty-static-block": "off",
			"no-inner-declarations": ["error", "functions", { blockScopedFunctions: "disallow" }],
			"no-shadow-restricted-names": ["error", { reportGlobalThis: false }],
			"no-unassigned-vars": "off",
			"no-unused-private-class-members": "off",
			"no-useless-assignment": "off",
			"no-with": "error",
			"preserve-caught-error": "off",

			"prettier/prettier": "warn",
			"@typescript-eslint/array-type": [
				"warn",
				{
					default: "generic",
					readonly: "generic",
				},
			],
			"@typescript-eslint/no-floating-promises": [
				"error",
				{
					ignoreVoid: true,
					checkThenables: true,
				},
			],
			"@typescript-eslint/no-unused-vars": ["warn", { caughtErrors: "none" }],
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/no-empty-function": "off",
			"@typescript-eslint/no-namespace": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-use-before-define": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-require-imports": "error",
			"@typescript-eslint/no-unused-expressions": "warn",
			curly: ["warn", "multi-line", "consistent"],
			"no-autofix/prefer-const": "warn",
			"no-constant-condition": [
				"error",
				{
					checkLoops: false,
				},
			],
			"no-debugger": "off",
			"no-empty": [
				"error",
				{
					allowEmptyCatch: true,
				},
			],
			"no-extra-boolean-cast": "off",
			"no-undef-init": "error",
			"prefer-const": "off",
			"simple-import-sort/exports": "warn",
			"simple-import-sort/imports": "warn",
			"no-restricted-syntax": [
				"error",
				{
					selector: 'TSMethodSignature > .params:first-child[name!="this"]',
					message: "You must add a `this` parameter definition",
				},
				{
					selector: "TSMethodSignature[params<1]",
					message: "You must add a `this` parameter definition",
				},
			],
			// no-restricted-types retains the old ban-types restrictions and autofixes
			"@typescript-eslint/no-restricted-types": [
				"error",
				{
					types: {
						String: { fixWith: "string" },
						Boolean: { fixWith: "boolean" },
						Number: { fixWith: "number" },
						Symbol: { fixWith: "symbol" },
						BigInt: { fixWith: "bigint" },
						Function: true,
						Object: { suggest: ["object", "unknown", "NonNullable<unknown>"] },
						"{}": { suggest: ["object", "unknown", "Record<string, never>", "NonNullable<unknown>"] },
					},
				},
			],
			"@typescript-eslint/no-unsafe-function-type": "off",
			"@typescript-eslint/no-wrapper-object-types": "off",
			"@typescript-eslint/prefer-namespace-keyword": "off",
			"@typescript-eslint/no-empty-object-type": "off",
		},
	},
	{
		files: ["include/**/*.ts"],
		languageOptions: { parserOptions: { project: "./include/tsconfig.json" } },
		rules: {
			"@typescript-eslint/no-restricted-types": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/triple-slash-reference": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					varsIgnorePattern: "_",
					caughtErrors: "none",
				},
			],
			"@typescript-eslint/no-empty-object-type": "off",
			"@typescript-eslint/no-unsafe-function-type": "off",
			"@typescript-eslint/no-wrapper-object-types": "off",
		},
	},
);
