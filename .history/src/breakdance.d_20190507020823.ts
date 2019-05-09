declare module "breakdance" {
	const str: (
		HTMLtoConvert: string,
		options?: {
			comments?: boolean;
		},
	) => string;
	export = str;
}
