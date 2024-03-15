import { ApiEnum } from "../api";
import { Generator } from "./Generator";

const IDENTIFIER_REGEX = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;

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
		this.write(
			`IsA<T extends Exclude<keyof typeof Enum, "GetEnums">>(name: T): this is typeof Enum[T][Exclude<keyof typeof Enum[T], "GetEnumItems">];`,
		);
		this.popIndent();
		this.write(`}`);
		this.write(``);
		this.write(`interface Enum {`);
		this.pushIndent();
		this.write(`GetEnumItems(this: Enum): Array<EnumItem>;`);
		this.popIndent();
		this.write(`}`);
		this.write(``);
		this.write(`declare namespace Enum {`);
		this.pushIndent();
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
				if (!IDENTIFIER_REGEX.test(enumItemName)) continue;
				enumItemNames.push(enumItemName);
				this.write(`export interface ${enumItemName} extends globalThis.EnumItem {`);
				this.pushIndent();
				this.write(`Name: "${enumItemName}";`);
				this.write(`Value: ${enumItemValue};`);
				this.write(`EnumType: typeof globalThis.Enum.${enumTypeName};`);
				this.popIndent();
				this.write(`}`);
				this.write(``);
				this.write(`export const ${enumItemName}: ${enumItemName};`);
				for (const enumItemLegacyName of enumItemLegacyNames ?? []) {
					if (
						// spaces aren't valid in namespace export names
						!enumItemLegacyName.includes(" ") &&
						// avoid conflicts if legacy name re-used for other item
						!enumTypeItems.find(i => i.Name === enumItemLegacyName)
					) {
						this.write(`/** @deprecated renamed to ${enumItemName} */`);
						this.write(`export const ${enumItemLegacyName}: ${enumItemName};`);
					}
				}
				this.write(``);
			}
			this.write(`export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.${enumTypeName}>;`);
			this.popIndent();
			this.write(`}`);
			const enumUnion =
				enumItemNames.length > 0
					? enumItemNames.map(enumItemName => `${enumTypeName}.${enumItemName}`).join(` | `)
					: "never";
			this.write(`export type ${enumTypeName} = ${enumUnion};`);
			this.write(``);
		}
		this.popIndent();
		this.write(`}`);
		this.write(``);
		this.write(`declare type CastsToEnum<T extends EnumItem> = T | T["Name" | "Value"];`);

		await this.finish();
	}
}
