export function fatal(...messages: Array<string>) {
	console.error(messages.join(" "));
	process.exitCode = 1;
}
