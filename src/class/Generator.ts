import fs from "fs-extra";
import path from "path";

import { ReflectionMetadata } from "./ReflectionMetadata";

export class Generator {
	protected stream: fs.WriteStream;
	protected indent = "";

	constructor(
		filePath: string,
		protected metadata?: ReflectionMetadata,
	) {
		fs.ensureFileSync(filePath);
		this.stream = fs.createWriteStream(path.join(filePath));
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
}
