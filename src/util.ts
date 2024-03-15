export function fatal(...messages: Array<string>) {
	console.error(messages.join(" "));
	process.exitCode = 1;
}

export function getJSDocLearnMoreLink(link: string) {
	return `{@link ${link} Learn More}`;
}
