export interface ApiDocsParam {
	name: string;
	documentation: string;
}

export interface ApiDocsEntry {
	documentation: string;
	learn_more_link?: string;
	code_sample?: string;
	params?: Array<ApiDocsParam>;
	returns?: Array<string>;
}

export interface ApiDocs {
	[key: string]: ApiDocsEntry;
}
