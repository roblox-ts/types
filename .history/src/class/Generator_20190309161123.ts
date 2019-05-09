import * as fs from "fs";
import * as path from "path";
import { ReflectionMetadata } from "./ReflectionMetadata";

export class Generator {
	protected stream: fs.WriteStream;
	protected indent = "";

	constructor(outputDir: string, fileName: string, protected metadata?: ReflectionMetadata) {
		if (!fs.existsSync(outputDir)) {
			fs.mkdirSync(outputDir);
		}
		this.stream = fs.createWriteStream(path.join(outputDir, fileName));
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
