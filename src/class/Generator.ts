import fs from "fs-extra";
import path from "path";

import type { ApiDocs } from "./ApiDocs";

export abstract class Generator {
	protected stream: fs.WriteStream;
	protected indent = "";

	constructor(
		filePath: string,
		protected apiDocs: ApiDocs,
	) {
		fs.ensureFileSync(filePath);
		this.stream = fs.createWriteStream(path.join(filePath));
	}

	public writeMultilineDescription(description: Array<string>) {
		if (description.length > 0) {
			this.write(`/**`);

			for (const part of description) {
				this.write(` * ${part.trim()}`);
			}
			this.write(" */");
		}
	}

	public pushIndent() {
		this.indent += "\t";
	}

	public popIndent() {
		this.indent = this.indent.substr(1);
	}

	public write(line: string) {
		this.stream.write((line.length > 0 ? this.indent + line : "") + "\n");
	}

	protected finish() {
		return new Promise(resolve => {
			this.stream.close(resolve);
		});
	}
}
