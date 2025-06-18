import assert from "assert";
import ts from "typescript";

import { CUSTOM_DEFITIONS_PATH, EXPECTED_EXTRA_MEMBERS, MEMBER_BLACKLIST, TSCONFIG_PATH } from "../../../constants";
import { SecurityLevel } from "../../../enums";
import { ApiClass, ApiMember } from "../../../types/ApiDump";
import { Context } from "../../../types/Context";
import { createParseConfigFileHost } from "../../../util/createParseConfigFileHost";
import { getOrSetDefault } from "../../../util/getOrSetDefault";
import { filterTags } from "../../filterTags";
import { transformDocs } from "../../transformDocs";
import { getSafeClassName } from "../alias";
import { createExtendsClause } from "../createExtendsClause";
import { createTypeElementsFromApiMembers } from "../createTypeElementsFromApiMembers";
import { setJsDocComment } from "../setJsDocComment";

const parsedCommandLine = ts.getParsedCommandLineOfConfigFile(TSCONFIG_PATH, undefined, createParseConfigFileHost());
assert(parsedCommandLine, "Failed to parse tsconfig.json");

const compilerHost = ts.createCompilerHost(parsedCommandLine.options, true);
const program = ts.createProgram(parsedCommandLine.fileNames, parsedCommandLine.options, compilerHost);

const customDefinitionsSourceFile = program.getSourceFile(CUSTOM_DEFITIONS_PATH);
assert(customDefinitionsSourceFile, `Failed to find ${CUSTOM_DEFITIONS_PATH}`);

const overrideInterfaceMap = new Map<string, ts.InterfaceDeclaration>();
for (const statement of customDefinitionsSourceFile.statements) {
	if (ts.isInterfaceDeclaration(statement)) {
		overrideInterfaceMap.set(statement.name.text, statement);
	}
}

function createNominalTag(apiClass: ApiClass) {
	const nominalTag = ts.factory.createPropertySignature(
		[ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword)],
		`_nominal_${apiClass.Name}`,
		undefined,
		ts.factory.createTypeOperatorNode(
			ts.SyntaxKind.UniqueKeyword,
			ts.factory.createKeywordTypeNode(ts.SyntaxKind.SymbolKeyword),
		),
	);
	setJsDocComment(nominalTag, [
		"**DO NOT USE!**",
		"",
		"This field exists to force TypeScript to recognize this as a nominal type",
		"@hidden",
		"@deprecated",
	]);
	return nominalTag;
}

function insertDeprecatedTag(comments: Array<string>, apiEntry: ApiClass | ApiMember) {
	if (apiEntry.Tags) {
		const deprecatedTagIdx = apiEntry.Tags.indexOf("Deprecated");
		if (deprecatedTagIdx !== -1) {
			const metadata = apiEntry.Tags.at(deprecatedTagIdx + 1);
			if (
				metadata &&
				typeof metadata !== "string" &&
				// several members have a PreferredDescriptorName which is the same as the member name
				// suspect this is because it's referencing an API on a different class of the same name, but doesn't say so
				// for now, we'll skip these because it's confusing
				metadata.PreferredDescriptorName !== apiEntry.Name
			) {
				comments.push(`@deprecated ${metadata.PreferredDescriptorName}`);
			} else {
				comments.push("@deprecated");
			}
		}
	}
}

export function createInstanceInterface(ctx: Context, apiClass: ApiClass, securityLevel: SecurityLevel) {
	let typeParameters: Array<ts.TypeParameterDeclaration> | undefined;

	let heritageClauses =
		apiClass.Superclass === "<<<ROOT>>>" ? undefined : [createExtendsClause(getSafeClassName(apiClass.Superclass))];

	const overrideMembers = new Map<string, Array<ts.TypeElement>>();
	
	if (apiClass.Name === "SharedTable") {
		const keyType = ts.factory.createTypeParameterDeclaration(
			undefined,
			"K",
			ts.factory.createUnionTypeNode([
				ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
				ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
			]),
		);
		const valueType = ts.factory.createTypeParameterDeclaration(undefined, "V");
		typeParameters = [keyType, valueType];

		const iter = ts.factory.createMethodSignature(
			undefined,
			ts.factory.createComputedPropertyName(
				ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("Symbol"), "iterator"),
			),
			undefined,
			[],
			[],
			ts.factory.createTypeReferenceNode("IterableFunction", [
				ts.factory.createTypeReferenceNode("LuaTuple", [
					ts.factory.createTupleTypeNode([
						ts.factory.createTypeReferenceNode("K"),
						ts.factory.createTypeReferenceNode("V"),
					]),
				]),
			]),
		);

		getOrSetDefault(
			overrideMembers,
			"[Symbol.iterator]",
			() => new Array<ts.TypeElement>(),
		).push(iter);
	}
	
	const overrideInterface = overrideInterfaceMap.get(getSafeClassName(apiClass.Name));
	if (overrideInterface) {
		for (const member of overrideInterface.members) {
			const name = member.name?.getText();
			if (name) {
				getOrSetDefault(overrideMembers, name, () => new Array<ts.TypeElement>()).push(member);
			}
		}
		if (overrideInterface.typeParameters) {
			typeParameters = [...overrideInterface.typeParameters];
		}
		if (overrideInterface.heritageClauses) {
			heritageClauses = [...overrideInterface.heritageClauses];
		}
	}

	const members = new Array<ts.TypeElement>();
	const memberNames = new Set<string>(apiClass.Members.map(v => v.Name));

	members.push(createNominalTag(apiClass));

	for (const apiMember of apiClass.Members) {
		if (MEMBER_BLACKLIST.get(apiClass.Name)?.has(apiMember.Name)) continue;

		if (apiMember.Tags?.includes("NotScriptable")) continue;

		const typeElements = createTypeElementsFromApiMembers(
			ctx,
			securityLevel,
			apiClass,
			apiMember,
			overrideMembers,
			memberNames,
		);

		if (typeElements.length > 0) {
			const [first] = typeElements;

			const comments = new Array<string>();

			const apiDocsEntry = ctx.docs.get(`@roblox/globaltype/${apiClass.Name}.${apiMember.Name}`);
			if (apiDocsEntry?.documentation) {
				comments.push(transformDocs(apiDocsEntry.documentation));
			}

			if (comments.length > 0) comments.push("");

			comments.push(`- **ThreadSafety**: ${apiMember.ThreadSafety}`);
			if (apiMember.Tags) {
				comments.push(`- **Tags**: ${apiMember.Tags.filter(filterTags).join(", ")}`);
			}

			if (comments.length > 0) comments.push("");

			comments.push(
				`[Creator Hub](https://create.roblox.com/docs/reference/engine/classes/${apiClass.Name}#${apiMember.Name})`,
			);

			if (apiDocsEntry?.params) {
				for (const param of apiDocsEntry.params) {
					const paramDocsEntry = ctx.docs.get(param.documentation);
					if (paramDocsEntry) {
						const name = param.name === "self" ? "this" : param.name;
						comments.push(`@param ${name} ${transformDocs(paramDocsEntry.documentation)}`);
					}
				}
			}

			if (apiDocsEntry?.returns) {
				for (const key of apiDocsEntry.returns) {
					const returnEntry = ctx.docs.get(key);
					if (returnEntry?.documentation) {
						comments.push(`@returns ${transformDocs(returnEntry.documentation)}`);
					}
				}
			}

			if (comments.length > 0) comments.push("");

			insertDeprecatedTag(comments, apiMember);

			setJsDocComment(first, comments);
		}

		members.push(...typeElements);
	}

	const expectedExtraMembers = EXPECTED_EXTRA_MEMBERS.get(apiClass.Name) ?? [];
	for (const [key, overrides] of overrideMembers) {
		if (memberNames.has(key)) continue;
		if (expectedExtraMembers.includes(key)) {
			members.push(...overrides);
		} else {
			throw new Error(`Unexpected extra member: ${apiClass.Name}.${key}`);
		}
	}

	const interfaceDeclaration = ts.factory.createInterfaceDeclaration(
		undefined,
		getSafeClassName(apiClass.Name),
		typeParameters,
		heritageClauses,
		members,
	);

	if (overrideInterface) {
		ts.copyComments(overrideInterface, interfaceDeclaration);
	}

	const comments = new Array<string>();

	const apiDocsEntry = ctx.docs.get(`@roblox/globaltype/${apiClass.Name}`);
	if (apiDocsEntry?.documentation) {
		comments.push(`${transformDocs(apiDocsEntry.documentation)}\n`);
	}

	if (apiClass.Tags) {
		comments.push(`- **Tags**: ${apiClass.Tags.filter(filterTags).join(", ")}\n`);
	}

	comments.push(`[Creator Hub](https://create.roblox.com/docs/reference/engine/classes/${apiClass.Name})`);

	if (comments.length > 0) comments.push("");

	insertDeprecatedTag(comments, apiClass);

	setJsDocComment(interfaceDeclaration, comments);

	return interfaceDeclaration;
}
