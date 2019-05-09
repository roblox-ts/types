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
		for (const { Name: enumTypeName, Items: enumTypeItems } of rbxEnums) {
			/* OLD VERSION
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
			*/
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
				this.write(`EnumType: Enum_${enumTypeName};`);
				this.popIndent();
				this.write(`}`);
				this.write(``);
				this.write(`export const ${enumItemName}: ${enumItemName};`);
				this.write(``);
			}
			this.write(`export function GetEnumItems(): Array<${enumTypeName}>;`);
			this.popIndent();
			this.write(`}`);
			this.write(`export type ${enumTypeName} = ${enumTypeName}.${enumItemNames.join(` | ${enumTypeName}.`)};`);
			this.write(``);
		}
		this.write(`export function GetEnums(): Array<Enum_${enumTypeNames.join(" | Enum_")}>;`);
		this.popIndent();
		this.write(`}`);
		this.write(``);

		for (const { Name: enumTypeName, Items: enumTypeItems } of rbxEnums) {
			this.write(`interface Enum_${enumTypeName} {`);
			this.pushIndent();
			for (const { Name: enumItemName, Value: enumItemValue } of enumTypeItems) {
				this.write(`${enumItemName}: Enum.${enumTypeName}.${enumItemName};`);
			}
			this.write(`GetEnumItems(): Array<Enum.${enumTypeName}>;`);
			this.popIndent();
			this.write(`}`);
			this.write(``);
		}

		this.write(``);
		this.write(
			`declare type CastsToEnum<T extends ${"\n\t"}| Enum.${enumTypeNames.join(
				`${"\n\t"}| Enum.`,
			)}${"\n"}> = T | T["Name" | "Value"];`,
		);
	}
}
