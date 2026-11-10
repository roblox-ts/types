import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: [],
		typecheck: {
			checker: "tsc",
			enabled: true,
			include: ["**/*.spec-d.ts"],
			only: true,
			tsconfig: "./tests/tsconfig.json",
		},
	},
});
