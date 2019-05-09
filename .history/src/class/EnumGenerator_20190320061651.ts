import { ApiEnum } from "../api";
import { Generator } from "./Generator";

export class EnumGenerator extends Generator {
	public async generate(rbxEnums: Array<ApiEnum>) {
		this.write(`// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!`);
		this.write(``);
		this.write('/// <reference no-default-lib="true"/>');
		this.write('/// <reference path="roblox.d.ts" />');
		this.write('/// <reference path="generated_classes.d.ts" />');
		this.write(``);
		this.write(`// GENERATED ROBLOX ENUMS`);
		this.write(``);
		this.write(`declare namespace Enum {`);
		this.pushIndent();
		for (let i = 0; i < rbxEnums.length; i++) {
			const rbxEnum = rbxEnums[i];
			this.write(`enum ${rbxEnum.Name} {`);
			this.pushIndent();
			for (let j = 0; j < rbxEnum.Items.length; j++) {
				const rbxEnumItem = rbxEnum.Items[j];
				const name = rbxEnumItem.Name;
				const value = rbxEnumItem.Value;
				const comma = j === rbxEnum.Items.length - 1 ? "" : ",";
				this.write(`${name} = ${value}${comma}`);
			}
			this.popIndent();
			this.write(`}`);
		}
		this.popIndent();
		this.write(`}`);
	}
}
