import TurndownService from "turndown";
import z from "zod";

const GLOBAL_TYPE_PREFIX = "@roblox/globaltype/";

const turndownService = new TurndownService({
	headingStyle: "atx",
	bulletListMarker: "*",
	codeBlockStyle: "fenced",
	fence: "```",
	emDelimiter: "*",
	strongDelimiter: "**",
	linkStyle: "inlined",
	linkReferenceStyle: "full",
});

const ApiDocsSchema = z.record(
	z.union([
		z.object({
			documentation: z.optional(z.string().transform(documentation => turndownService.turndown(documentation))),
			params: z.optional(
				z.array(
					z.object({
						name: z.string(),
						documentation: z.string(),
					}),
				),
			),
			keys: z.optional(z.record(z.string())),
			learn_more_link: z.optional(z.string().url()),
			code_sample: z.optional(z.string()),
		}),
		z.undefined(), // Force union with undefined to set index signature type to be possibly undefined.
	]),
);

type ApiDocsSchema = z.infer<typeof ApiDocsSchema>;

// Using Zod's introspection, generate an "empty" return type for when API members are missing.
const apiDocsDefaultMember = ApiDocsSchema.valueSchema.options[0].parse({});

export class ApiDocs {
	private api: ApiDocsSchema;

	constructor(rawApi: unknown) {
		this.api = ApiDocsSchema.parse(rawApi);
	}

	public getInstanceDocumentation(instanceName: string) {
		const instancePath = `${GLOBAL_TYPE_PREFIX}${instanceName}`;

		const instanceApiDocs = this.api[instancePath];

		if (instanceApiDocs !== undefined) {
			return instanceApiDocs;
		} else {
			return apiDocsDefaultMember;
		}
	}

	public getInstanceMemberDocumentation(instanceName: string, memberName: string) {
		const instanceMemberPath = `${GLOBAL_TYPE_PREFIX}${instanceName}.${memberName}`;

		const instanceMemberApiDocs = this.api[instanceMemberPath];

		if (instanceMemberApiDocs !== undefined) {
			return instanceMemberApiDocs;
		} else {
			return apiDocsDefaultMember;
		}
	}
}
