import assert from "assert";
import render from "dom-serializer";
import { ChildNode, DomHandler, Element, Text } from "domhandler";
import { ElementType, Parser } from "htmlparser2";

export const ASSETS_SITE_URL = "https://prod.docsiteassets.roblox.com";

function parse(content: string) {
	let result: Array<ChildNode> = [];
	const handler = new DomHandler((error, dom) => {
		if (error) {
			throw error;
		}
		result = dom;
	});
	const parser = new Parser(handler);
	parser.write(content);
	parser.end();
	return result;
}

function url(str: string) {
	return `${ASSETS_SITE_URL}${str.startsWith("/") ? "" : "/"}${str}`;
}

function assertNode(value: unknown, node: ChildNode, message?: string): asserts value {
	if (!value) {
		assert(false, `${message ?? ""}\n${node.type}\n${render(node)}`);
	}
}

function assertTag(
	node: ChildNode,
	tagName: string | ReadonlyArray<string>,
	message?: string,
): asserts node is Element {
	const tagSet = new Set<string>();
	if (typeof tagName === "string") {
		tagSet.add(tagName);
	} else {
		tagName.forEach(v => tagSet.add(v));
	}
	if (node.type !== ElementType.Tag || !tagSet.has(node.tagName)) {
		assertNode(false, node, message);
	}
}

function getChildren(node: Element) {
	return node.children.filter(child => child.type !== ElementType.Text || child.nodeValue.trim() !== "");
}

const TAG_TRANSFORMERS: { [K in string]?: (node: Element) => string } = {
	code: node => `\`${transformNodeList(node.children)}\``,
	strong: node => `**${transformNodeList(node.children)}**`,
	br: () => `\n\n`,
	li: node => `- ${transformNodeList(node.children)}\n`,
	em: node => `*${transformNodeList(node.children)}*`,
	ul: node => `${transformNodeList(getChildren(node))}\n`,
	kbd: node => `\`${transformNodeList(node.children)}\``,
	ol: node => {
		let result = "";
		let index = 1;
		for (const child of getChildren(node)) {
			if ("children" in child) {
				result += `${index}. ${transformNodeList(child.children)}\n`;
				index++;
			}
		}
		return result;
	},
	pre: node => {
		const codeNode = getChildren(node)[0];
		assertTag(codeNode, "code", "Unexpected pre child");
		// <pre><code class=\"language-lua\">
		const className = codeNode.attribs.class;
		const language = className.startsWith("language-") ? className.slice("language-".length) : "";
		return `\n\`\`\`${language}\n${transformNodeList(codeNode.children)}\n\`\`\``;
	},
	a: node => `[${transformNodeList(node.children)}](${node.attribs.href})`,
	img: node => `![${node.attribs.alt ?? ""}](${url(node.attribs.src)})`,
	table: node => {
		const rowNodes = new Array<ChildNode>();
		for (const child of getChildren(node)) {
			if (child.type === ElementType.Tag && (child.tagName === "thead" || child.tagName === "tbody")) {
				getChildren(child).forEach(v => rowNodes.push(v));
			} else {
				rowNodes.push(child);
			}
		}

		const data = new Array<Array<string>>();
		for (const rowNode of rowNodes) {
			assertTag(rowNode, "tr", "Unexpected table row");
			const row = new Array<string>();
			for (const cellNode of getChildren(rowNode)) {
				assertTag(cellNode, ["th", "td"], "Unexpected table cell");
				row.push(transformNodeList(cellNode.children).trim());
			}
			data.push(row);
		}

		const columnWidths = new Array<number>();

		for (let y = 0; y < data.length; y++) {
			const row = data[y];
			for (let x = 0; x < row.length; x++) {
				const cell = data[y][x];
				columnWidths[x] = Math.max(columnWidths[x] ?? 0, cell.length);
			}
		}

		const borderRow = new Array<string>();
		for (let x = 0; x < data[0].length; x++) {
			borderRow.push("-".repeat(columnWidths[x] ?? 0));
		}
		data.splice(1, 0, borderRow);

		let result = "";

		for (let y = 0; y < data.length; y++) {
			result += "| ";
			const row = data[y];
			for (let x = 0; x < row.length; x++) {
				const cell = data[y][x];
				result += cell.padEnd(columnWidths[x] ?? 0);
				result += " |";
				if (x < row.length - 1) {
					result += " ";
				}
			}
			result += "\n";
		}

		return result;
	},
};

const ELEMENT_TRANSFORMERS = {
	[ElementType.Text]: (node: Text) => render(node, { encodeEntities: false }),

	[ElementType.Tag]: (node: Element) => {
		const transformer = TAG_TRANSFORMERS[node.tagName];
		if (!transformer) {
			assert(false, `Unexpected tag name: "${node.tagName}"\n${render(node)}`);
		}
		return transformer(node);
	},

	[ElementType.Script]: () => assert(false),
	[ElementType.Style]: () => assert(false),

	// unused
	[ElementType.CDATA]: () => assert(false),
	[ElementType.Comment]: () => assert(false),
	[ElementType.Directive]: () => assert(false),
	[ElementType.Root]: () => assert(false),
};

function transformNode(node: ChildNode): string {
	return ELEMENT_TRANSFORMERS[node.type](node as never) as string;
}

function transformNodeList(nodes: Array<ChildNode>): string {
	let result = "";
	for (const node of nodes) {
		result += transformNode(node);
	}
	return result;
}

export function transformHtml(content: string) {
	return transformNodeList(parse(content));
}
