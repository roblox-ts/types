import { transformHtml } from "../transformHtml";

export function transformDocs(content: string) {
	try {
		const markdown = transformHtml(content);
		const sanitized = markdown.replace(/\*\//g, "*\\/");

		return sanitized;
	} catch (e) {
		console.warn("Failed to transform docs:", e);
		return content;
	}
}
