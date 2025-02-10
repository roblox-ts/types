import { ApiDocsEntry } from "./ApiDocs";
import { ApiDump } from "./ApiDump";

export interface Context {
	apiDump: ApiDump;
	docs: Map<string, ApiDocsEntry>;
	superClassMap: Map<string, string>;
}
