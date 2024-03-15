import TurndownService from "turndown";
import z from "zod";

import { getJSDocLearnMoreLink } from "../util";

const GLOBAL_TYPE_PREFIX = "@roblox/globaltype/";
const ENUM_PREFIX = "@roblox/enum/";

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
type ApiDocsMember = z.infer<(typeof ApiDocsSchema.valueSchema.options)[0]>;

// Using Zod's introspection, generate an "empty" return type for when API members are missing.
const apiDocsDefaultMember = ApiDocsSchema.valueSchema.options[0].parse({});

export class ApiDocs {
	private api: ApiDocsSchema;

	constructor(rawApi: unknown) {
		this.api = ApiDocsSchema.parse(rawApi);
	}

	public static asDocumentationLineParts(apiDocs: ApiDocsMember) {
		const docsParts = new Array<string>();

		if (apiDocs.documentation) {
			docsParts.push(apiDocs.documentation);
		}

		if (apiDocs.learn_more_link) {
			if (docsParts.length > 0) {
				docsParts.push("");
			}

			docsParts.push(getJSDocLearnMoreLink(apiDocs.learn_more_link));
		}

		return docsParts;
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

	public getEnumDocumentation(enumName: string) {
		const enumPath = `${ENUM_PREFIX}${enumName}`;

		const enumApiDocs = this.api[enumPath];

		if (enumApiDocs !== undefined) {
			return enumApiDocs;
		} else {
			return apiDocsDefaultMember;
		}
	}

	public getEnumMemberDocumentation(enumName: string, memberName: string) {
		const enumMemberPath = `${ENUM_PREFIX}${enumName}.${memberName}`;

		const enumMemberApiDocs = this.api[enumMemberPath];

		if (enumMemberApiDocs !== undefined) {
			return enumMemberApiDocs;
		} else {
			return apiDocsDefaultMember;
		}
	}
}
