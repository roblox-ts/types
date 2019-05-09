declare module "breakdance" {
	const str: (
		HTMLtoConvert: string,
		options?: {
			/**
			 * Include HTML code comments in the generated markdown string. Disabled by default.
			 * @default undefined
			 */
			comments?: boolean;
			/**
			 * Collapse more than two newlines to only two newlines. Enabled by default.
			 * @default true
			 */
			condense?: boolean;
			/**
			 *
			 */
			domain?: string;
		},
	) => string;
	export = str;
}
