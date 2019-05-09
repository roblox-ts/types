declare module "breakdance" {
	const str: (
		HTMLtoConvert: string,
		options?: {
			/**
			 * Include HTML code comments in the generated markdown string. Disabled by default.
			 * @default undefined
			 */
			comments?: boolean;
			condense?: boolean;
			domain?: string;
		},
	) => string;
	export = str;
}
