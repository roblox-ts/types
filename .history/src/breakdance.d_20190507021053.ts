declare module "breakdance" {
	const str: (
		HTMLtoConvert: string,
		options?: {
			/**
			 * Include HTML code comments in the generated markdown string. Disabled by default.
			 *
			 * Default: `undefined`
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
			 *
			 * Default: `undefined`
			 */
			domain?: string;
		},
	) => string;
	export = str;
}
