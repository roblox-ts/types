declare module "breakdance" {
	const str: (
		HTMLtoConvert: string,
		options?: {
			comments?: boolean;
			condense?: boolean;
			domain?: string;
		},
	) => string;
	export = str;
}
