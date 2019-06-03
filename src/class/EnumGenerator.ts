import { ApiEnum } from "../api";
import { Generator } from "./Generator";

export class EnumGenerator extends Generator {
	public async generate(rbxEnums: Array<ApiEnum>) {
		const enumTypeNames = new Array<string>();

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
		this.write(`type EnumType<T extends { Name: string }> = { [K in T["Name"]]: Extract<T, { Name: K }> };`);
		this.write(``);
		this.write(`interface EnumItem {`);
		this.pushIndent();
		this.write(`Name: string;`);
		this.write(`Value: number;`);
		this.write(`EnumType: EnumItemGroup;`);
		this.popIndent();
		this.write(`}`);
		this.write(`type EnumItemGroup = { GetEnumItems(): Array<EnumItem> } & { [index: string]: EnumItem };`);
		this.write(`export function GetEnums(): Array<EnumItemGroup>;`);
		this.write(``);

		for (const { Name: enumTypeName, Items: enumTypeItems } of rbxEnums) {
			enumTypeNames.push(enumTypeName);
			const enumItemNames = new Array<string>();

			this.write(`export namespace ${enumTypeName} {`);
			this.pushIndent();
			for (const { Name: enumItemName, Value: enumItemValue } of enumTypeItems) {
				enumItemNames.push(enumItemName);
				this.write(`export interface ${enumItemName} {`);
				this.pushIndent();
				this.write(`Name: "${enumItemName}";`);
				this.write(`Value: ${enumItemValue};`);
				this.write(`EnumType: EnumType<Enum.${enumTypeName}>;`);
				this.popIndent();
				this.write(`}`);
				this.write(``);
				this.write(`export const ${enumItemName}: ${enumItemName};`);
				this.write(``);
			}
			this.write(`export function GetEnumItems(): Array<${enumTypeName}>`);
			this.popIndent();
			this.write(`}`);
			this.write(`export type ${enumTypeName} = ${enumTypeName}.${enumItemNames.join(` | ${enumTypeName}.`)};`);
		}
		this.popIndent();
		this.write(`}`);
		this.write(``);

		// this.write(`interface Enum {`);
		// this.pushIndent();
		// for (const { Name: enumTypeName } of rbxEnums) {
		// 	this.write(`${enumTypeName}: EnumType<Enum.${enumTypeName}>`);
		// }
		// this.popIndent();
		// this.write(`}`);
		// this.write(``);
		this.write(
			`declare type CastsToEnum<T extends \n\t| Enum.${enumTypeNames.join(
				`\n\t| Enum.`,
			)}\n> = T | T["Name" | "Value"];`,
		);
	}
}
