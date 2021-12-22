import libxmljs from "libxmljs2";

function classPrefix(className: string) {
	return `//Item[@class='ReflectionMetadataClass']/Properties/string[@name='Name'][text()='${className}']/../../`;
}

const LINK_REGEX = /<a href="([^"]+)"[^>]+>([^<]+)<\/a>/g;

function filter(s: string): string {
	s = s.replace(LINK_REGEX, (substring, ...args) => {
		const link = args[0];
		const text = args[1];
		return `[${text}](${link})`;
	});

	return s;
}

export class ReflectionMetadata {
	private metadata: libxmljs.Document;

	constructor(rawXml: string) {
		this.metadata = libxmljs.parseXml(rawXml);
	}

	private get(query: string) {
		const result = this.metadata.get(query);
		if (result) {
			return filter((result as libxmljs.Text).text());
		}
	}

	public getClassDescription(className: string) {
		return this.get(classPrefix(className) + `Properties/string[@name='summary']`);
	}

	public getMemberDescription(memberSpecifier: Array<string>, className: string, name: string) {
		const memberSpecifierStr = memberSpecifier.map((v) => `@class='${v}'`).join(" or ");
		return this.get(
			classPrefix(className) +
				`Item[${memberSpecifierStr}]/` +
				`Item[@class='ReflectionMetadataMember']/` +
				`Properties/` +
				`string[@name='Name'][text()='${name}']/` +
				`../` +
				`string[@name='summary']`,
		);
	}

	public getPropertyDescription(className: string, name: string) {
		return this.getMemberDescription(["ReflectionMetadataProperties"], className, name);
	}

	public getMethodDescription(className: string, name: string) {
		return this.getMemberDescription(
			["ReflectionMetadataFunctions", "ReflectionMetadataYieldFunctions"],
			className,
			name,
		);
	}

	public getCallbackDescription(className: string, name: string) {
		return this.getMemberDescription(["ReflectionMetadataCallbacks"], className, name);
	}

	public getEventDescription(className: string, name: string) {
		return this.getMemberDescription(["ReflectionMetadataEvents"], className, name);
	}
}
