import { createExtendsClause } from "../createExtendsClause";
import { createTypeElementsFromApiMembers } from "../createTypeElementsFromApiMembers";
import { SecurityLevel } from "../../../enums";
import { ApiClass } from "../../../types/ApiDump";
import ts from "typescript";
import { createParseConfigFileHost } from "../../../util/createParseConfigFileHost";
import { getOrSetDefault } from "../../../util/getOrSetDefault";
import { CUSTOM_DEFITIONS_PATH, TSCONFIG_PATH } from "../../../constants";
import { getSafeClassName } from "../alias";
import { Context } from "../../../types/Context";
import assert from "assert";
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

const MEMBER_BLACKLIST = new Map([
	["Workspace", new Set(["FilteringEnabled"])],
	["CollectionService", new Set(["GetCollection"])],
	["Instance", new Set(["children", "Remove"])],
	["BodyGyro", new Set(["cframe"])],
	["BodyAngularVelocity", new Set(["angularvelocity"])],
	["BodyPosition", new Set(["lastForce"])],
	["DataStoreService", new Set(["GetDataFromEmptyScopeDataStoreAsyncTemporary"])],
	["Debris", new Set(["MaxItems"])],
	["LayerCollector", new Set(["GetLayoutNodeTree"])],
	["GuiBase3d", new Set(["Color"])],
	["Model", new Set(["move"])],
	["Players", new Set(["playerFromCharacter", "players"])],
	["ServiceProvider", new Set(["service"])],
	["DataModel", new Set(["lighting"])],
	["PackageLink", new Set(["SerializedDefaultAttributes"])],
]);

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

export function createInstanceInterface(ctx: Context, apiClass: ApiClass, securityLevel: SecurityLevel) {
	let typeParameters: Array<ts.TypeParameterDeclaration> | undefined;

	let heritageClauses =
		apiClass.Superclass === "<<<ROOT>>>" ? undefined : [createExtendsClause(getSafeClassName(apiClass.Superclass))];

	const overrideMembers = new Map<string, Array<ts.TypeElement>>();
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
			if (apiDocsEntry) {
				if (apiDocsEntry.documentation) {
					comments.push(apiDocsEntry.documentation);
				}
				if (apiDocsEntry.params) {
					for (const param of apiDocsEntry.params) {
						const paramDocsEntry = ctx.docs.get(param.documentation);
						if (paramDocsEntry) {
							const name = param.name === "self" ? "this" : param.name;
							comments.push(`@param ${name} ${paramDocsEntry.documentation}`);
						}
					}
				}
				if (apiDocsEntry.returns) {
					for (const key of apiDocsEntry.returns) {
						const returnEntry = ctx.docs.get(key);
						if (returnEntry?.documentation) {
							comments.push(`@returns ${returnEntry.documentation}`);
						}
					}
				}
			}

			if (comments.length > 0) {
				comments.push("");
			}

			comments.push(
				`[Creator Hub](https://create.roblox.com/docs/reference/engine/classes/${apiClass.Name}#${apiMember.Name})`,
			);

			setJsDocComment(first, comments);
		}

		members.push(...typeElements);
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

	const jsDocComments = new Array<string>();

	const apiDocsEntry = ctx.docs.get(`@roblox/globaltype/${apiClass.Name}`);
	if (apiDocsEntry) {
		if (apiDocsEntry.documentation) {
			jsDocComments.push(apiDocsEntry.documentation);
		}
	}

	if (jsDocComments.length > 0) {
		jsDocComments.push("");
	}

	jsDocComments.push(`[Creator Hub](https://create.roblox.com/docs/reference/engine/classes/${apiClass.Name})`);

	setJsDocComment(interfaceDeclaration, jsDocComments);

	return interfaceDeclaration;
}
