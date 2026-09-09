const { fixupPluginRules } = require("@eslint/compat");
const js = require("@eslint/js");
const noAutofix = require("eslint-plugin-no-autofix");
const prettierRecommended = require("eslint-plugin-prettier/recommended");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const tseslint = require("typescript-eslint");

module.exports = [
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
				},
			],
			"@typescript-eslint/no-unused-vars": "warn",
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
			"@typescript-eslint/no-empty-object-type": [
				"error",
				{
					allowInterfaces: "always",
				},
			],
		},
	},
	{
		files: ["include/**/*.ts"],
		languageOptions: { parserOptions: { project: "./include/tsconfig.json" } },
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/triple-slash-reference": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					varsIgnorePattern: "_",
				},
			],
			"@typescript-eslint/no-empty-object-type": "off",
			"@typescript-eslint/no-unsafe-function-type": "off",
			"@typescript-eslint/no-wrapper-object-types": "off",
		},
	},
];
