import { ApiEnum } from "../api";
import { Generator } from "./Generator";

export class EnumGenerator extends Generator {
	public async generate(rbxEnums: Array<ApiEnum>) {
		this.write(`// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!`);
		this.write(``);
		this.write('/// <reference no-default-lib="true"/>');
		this.write('/// <reference path="../roblox.d.ts" />');
		this.write(``);
		this.write(`// GENERATED ROBLOX ENUMS`);
		this.write(``);
		this.write(`type Enums = typeof Enum;`);
		this.write(``);
		this.write(`interface EnumItem {`);
		this.pushIndent();
		this.write(`Name: string;`);
		this.write(`Value: number;`);
		this.write(`EnumType: Enum;`);
		this.popIndent();
		this.write(`}`);
		this.write(``);
		this.write(`interface Enum {`);
		this.pushIndent();
		this.write(`GetEnumItems(this: defined): Array<EnumItem>;`);
		this.popIndent();
		this.write(`}`);
		this.write(``);
		this.write(`declare namespace Enum {`);
		this.pushIndent();
		this.write(
			`type EnumType<T extends { Name: string }> = { GetEnumItems(this: defined): Array<T> } & { [K in T["Name"]]: Extract<T, { Name: K }> };`,
		);
		this.write(`export function GetEnums(this: Enums): Array<Enum>;`);
		this.write(``);

		for (const { Name: enumTypeName, Items: enumTypeItems } of rbxEnums) {
			const enumItemNames = new Array<string>();

			this.write(`export namespace ${enumTypeName} {`);
			this.pushIndent();
			for (const {
				Name: enumItemName,
				Value: enumItemValue,
				LegacyNames: enumItemLegacyNames,
			} of enumTypeItems) {
				enumItemNames.push(enumItemName);
				this.write(`export interface ${enumItemName} {`);
				this.pushIndent();
				this.write(`Name: "${enumItemName}";`);
				this.write(`Value: ${enumItemValue};`);
				this.write(`EnumType: EnumType<${enumTypeName}>;`);
				this.popIndent();
				this.write(`}`);
				this.write(``);
				this.write(`export const ${enumItemName}: ${enumItemName};`);
				for (const enumItemLegacyName of enumItemLegacyNames ?? []) {
					this.write(`/** @deprecated renamed to ${enumItemName} */`);
					this.write(`export const ${enumItemLegacyName}: ${enumItemName};`);
				}
				this.write(``);
			}
			this.write(`export function GetEnumItems(this: defined): Array<${enumTypeName}>`);
			this.popIndent();
			this.write(`}`);
			this.write(`export type ${enumTypeName} = ${enumTypeName}.${enumItemNames.join(` | ${enumTypeName}.`)};`);
		}
		this.popIndent();
		this.write(`}`);
		this.write(``);
		this.write(`declare type CastsToEnum<T extends EnumItem> = T | T["Name" | "Value"];`);
	}
}
