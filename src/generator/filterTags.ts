const IGNORED_TAGS = new Set(["Deprecated", "ReadOnly"]);

export function filterTags(tag: unknown): tag is string {
	return typeof tag === "string" && !IGNORED_TAGS.has(tag);
}
