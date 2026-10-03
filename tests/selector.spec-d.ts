import { expectTypeOf, it } from "vitest";

// `game` is the DataModel global from include/roblox.d.ts.

// Subject resolution: single class

const parts = game.QueryDescendants("Part");
it("infers the type of parts", () => {
	expectTypeOf(parts).toEqualTypeOf<Part[]>();
});
const taggedParts = game.QueryDescendants("Part.Fruit");
it("infers the type of tagged parts", () => {
	expectTypeOf(taggedParts).toEqualTypeOf<Part[]>();
});
const namedParts = game.QueryDescendants("Part#RedTree");
it("infers the type of named parts", () => {
	expectTypeOf(namedParts).toEqualTypeOf<Part[]>();
});
const baseParts = game.QueryDescendants("BasePart");
it("infers the type of base parts", () => {
	expectTypeOf(baseParts).toEqualTypeOf<BasePart[]>();
});
const noncollide = game.QueryDescendants("Part[CanCollide = false]");
it("infers the type of noncollide", () => {
	expectTypeOf(noncollide).toEqualTypeOf<Part[]>();
});
const manyAttrs = game.QueryDescendants("Part[$Type=Enemy][$Level=5][Transparency=0.5].Boss#FinalBoss");
it("infers the type of many attrs", () => {
	expectTypeOf(manyAttrs).toEqualTypeOf<Part[]>();
});
const attrDot = game.QueryDescendants("Part[Transparency=0.5]");
it("infers the type of attr dot", () => {
	expectTypeOf(attrDot).toEqualTypeOf<Part[]>();
});
const attrCombinatorChar = game.QueryDescendants('Part[Name="a > b"] > Model');
it("infers the type of attr combinator char", () => {
	expectTypeOf(attrCombinatorChar).toEqualTypeOf<Model[]>();
});
const propertyOnly = game.QueryDescendants("[CanCollide = false]");
it("infers the type of property only", () => {
	expectTypeOf(propertyOnly).toEqualTypeOf<Instance[]>();
});
const attrPresence = game.QueryDescendants("[$FuelCapacity]");
it("infers the type of attr presence", () => {
	expectTypeOf(attrPresence).toEqualTypeOf<Instance[]>();
});
const attrValueOnly = game.QueryDescendants("[$FuelCapacity = 75]");
it("infers the type of attr value only", () => {
	expectTypeOf(attrValueOnly).toEqualTypeOf<Instance[]>();
});

// Combinators (`>` child / `>>` descendant)

const nested = game.QueryDescendants("Workspace > Folder > Model > Part");
it("infers the type of nested", () => {
	expectTypeOf(nested).toEqualTypeOf<Part[]>();
});
const complexCombo = game.QueryDescendants("Model[$Health = 100] > Part.Enemy#Boss");
it("infers the type of complex combo", () => {
	expectTypeOf(complexCombo).toEqualTypeOf<Part[]>();
});
const descendantCombo = game.QueryDescendants("Model >> Part");
it("infers the type of descendant combo", () => {
	expectTypeOf(descendantCombo).toEqualTypeOf<Part[]>();
});
const descendantAttrSubject = game.QueryDescendants("Model >> [$OnFire = true]");
it("infers the type of descendant attr subject", () => {
	expectTypeOf(descendantAttrSubject).toEqualTypeOf<Instance[]>();
});
const leading = game.QueryDescendants("> Model");
it("infers the type of leading", () => {
	expectTypeOf(leading).toEqualTypeOf<Model[]>();
});
const comboTag = game.QueryDescendants("Model > .Tagged");
it("infers the type of combo tag", () => {
	expectTypeOf(comboTag).toEqualTypeOf<Instance[]>();
});
const comboName = game.QueryDescendants("Folder > #SpecialPart");
it("infers the type of combo name", () => {
	expectTypeOf(comboName).toEqualTypeOf<Instance[]>();
});

// Tags / names without a class resolve to Instance

const tagged = game.QueryDescendants(".Fruit");
it("infers the type of tagged", () => {
	expectTypeOf(tagged).toEqualTypeOf<Instance[]>();
});
const named = game.QueryDescendants("#MyPart");
it("infers the type of named", () => {
	expectTypeOf(named).toEqualTypeOf<Instance[]>();
});

// Selector lists (comma) union the subjects

const mixed = game.QueryDescendants("Part, Model, SpotLight");
it("infers the type of mixed", () => {
	expectTypeOf(mixed).toEqualTypeOf<(Part | Model | SpotLight)[]>();
});
const mixedCombinators = game.QueryDescendants("Folder > Part, Model .Foo, ImageButton#CloseButton");
it("infers the type of mixed combinators", () => {
	expectTypeOf(mixedCombinators).toEqualTypeOf<(Part | Model | ImageButton)[]>();
});
const complex = game.QueryDescendants("Model.Apple[$Kind = Red], Part#Tree");
it("infers the type of complex", () => {
	expectTypeOf(complex).toEqualTypeOf<(Model | Part)[]>();
});
const kitchen = game.QueryDescendants("Part[Anchored=true], Model > SpotLight.Bright, ImageButton, .UI");
it("infers the type of kitchen", () => {
	expectTypeOf(kitchen).toEqualTypeOf<(Part | SpotLight | ImageButton | Instance)[]>();
});

// Pseudo-classes (`:not` / `:has`)

const notPseudo = game.QueryDescendants("Part:not(.Foo)");
it("infers the type of not pseudo", () => {
	expectTypeOf(notPseudo).toEqualTypeOf<Part[]>();
});
const hasPseudo = game.QueryDescendants("Model:has(.Child)");
it("infers the type of has pseudo", () => {
	expectTypeOf(hasPseudo).toEqualTypeOf<Model[]>();
});
const pseudoChild = game.QueryDescendants("Folder > Part:not(#Excluded)");
it("infers the type of pseudo child", () => {
	expectTypeOf(pseudoChild).toEqualTypeOf<Part[]>();
});
const pseudoList = game.QueryDescendants("Part:not(.A), Model:has(#B)");
it("infers the type of pseudo list", () => {
	expectTypeOf(pseudoList).toEqualTypeOf<(Part | Model)[]>();
});
const pseudoInnerComma = game.QueryDescendants("Part:not(.A, .B, .C)");
it("infers the type of pseudo inner comma", () => {
	expectTypeOf(pseudoInnerComma).toEqualTypeOf<Part[]>();
});
const tagThenPseudo = game.QueryDescendants("Part.Enemy:not(#Boss)");
it("infers the type of tag then pseudo", () => {
	expectTypeOf(tagThenPseudo).toEqualTypeOf<Part[]>();
});
const nameThenPseudo = game.QueryDescendants("Part#Boss:has(.Weapon)");
it("infers the type of name then pseudo", () => {
	expectTypeOf(nameThenPseudo).toEqualTypeOf<Part[]>();
});
const tagThenPseudoList = game.QueryDescendants("Part.Enemy:not(.A), Model");
it("infers the type of tag then pseudo list", () => {
	expectTypeOf(tagThenPseudoList).toEqualTypeOf<(Part | Model)[]>();
});
const pseudoThenTag = game.QueryDescendants("Part:not(.Rotten).Fruit");
it("infers the type of pseudo then tag", () => {
	expectTypeOf(pseudoThenTag).toEqualTypeOf<Part[]>();
});
const pseudoQuotedInnerComma = game.QueryDescendants("Part:has(Model[Name = 'a,b'], Folder)");
it("infers the type of pseudo quoted inner comma", () => {
	expectTypeOf(pseudoQuotedInnerComma).toEqualTypeOf<Part[]>();
});
const pseudoNestedList = game.QueryDescendants("Part:has(Model:has([Name = 'a,b']), Folder), TextButton");
it("infers the type of pseudo nested list", () => {
	expectTypeOf(pseudoNestedList).toEqualTypeOf<(Part | TextButton)[]>();
});
const bareNotPseudo = game.QueryDescendants(":not(SpotLight, PointLight)");
it("infers the type of bare not pseudo", () => {
	expectTypeOf(bareNotPseudo).toEqualTypeOf<Instance[]>();
});
const bareHasPseudo = game.QueryDescendants(":has(Tool)");
it("infers the type of bare has pseudo", () => {
	expectTypeOf(bareHasPseudo).toEqualTypeOf<Instance[]>();
});
const hasRelativeChild = game.QueryDescendants("MeshPart:has(> .SwordPart)");
it("infers the type of has relative child", () => {
	expectTypeOf(hasRelativeChild).toEqualTypeOf<MeshPart[]>();
});
const hasNestedRelativeNot = game.QueryDescendants("MeshPart:has(> :not(SurfaceAppearance, Texture))");
it("infers the type of has nested relative not", () => {
	expectTypeOf(hasNestedRelativeNot).toEqualTypeOf<MeshPart[]>();
});

const nestedChild = game.QueryDescendants("Part:has(Model:not(.A)):not(.B) > Folder, TextButton:has(> :not(Frame))");
it("infers the type of nested child", () => {
	expectTypeOf(nestedChild).toEqualTypeOf<(Folder | TextButton)[]>();
});
const nestedSiblingPseudos = game.QueryDescendants("Part:not(:has(Model, Folder)):has(TextLabel), Model");
it("infers the type of nested sibling pseudos", () => {
	expectTypeOf(nestedSiblingPseudos).toEqualTypeOf<(Part | Model)[]>();
});

// Quoted attribute values

const quotedComma = game.QueryDescendants("Part[Name = 'Hello, World']");
it("infers the type of quoted comma", () => {
	expectTypeOf(quotedComma).toEqualTypeOf<Part[]>();
});
const quotedCombinator = game.QueryDescendants("Model[Name = 'a > b'] > Part");
it("infers the type of quoted combinator", () => {
	expectTypeOf(quotedCombinator).toEqualTypeOf<Part[]>();
});
const quotedBracketAndComma = game.QueryDescendants("Model[Name = 'a], b > c'] > TextButton");
it("infers the type of quoted bracket and comma", () => {
	expectTypeOf(quotedBracketAndComma).toEqualTypeOf<TextButton[]>();
});

// Dynamic (non-literal) and empty selectors fall back to Instance[]

const fallback = game.QueryDescendants(game.Name);
it("infers the type of fallback", () => {
	expectTypeOf(fallback).toEqualTypeOf<Instance[]>();
});
const emptyString = game.QueryDescendants("");
it("infers the type of empty string", () => {
	expectTypeOf(emptyString).toEqualTypeOf<Instance[]>();
});

// Validation: readable error strings

declare const validationSuccess: Selector.ValidateSelector<"Part">;
it("infers the type of validation success", () => {
	expectTypeOf(validationSuccess).toEqualTypeOf<"Part">();
});
declare const validationBadPseudo: Selector.ValidateSelector<"Part:foo(x)">;
it("infers the type of validation bad pseudo", () => {
	expectTypeOf(
		validationBadPseudo,
	).toEqualTypeOf<"Invalid selector: ':foo' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)">();
});
declare const validationPseudoNoArgs: Selector.ValidateSelector<"Part:hover">;
it("infers the type of validation pseudo no args", () => {
	expectTypeOf(
		validationPseudoNoArgs,
	).toEqualTypeOf<"Invalid selector: ':hover' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)">();
});
declare const validationTrailingComma: Selector.ValidateSelector<"Part,">;
it("infers the type of validation trailing comma", () => {
	expectTypeOf(
		validationTrailingComma,
	).toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();
});
declare const validationLeadingComma: Selector.ValidateSelector<", Part">;
it("infers the type of validation leading comma", () => {
	expectTypeOf(
		validationLeadingComma,
	).toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();
});
declare const validationDoubleComma: Selector.ValidateSelector<"Part,,Model">;
it("infers the type of validation double comma", () => {
	expectTypeOf(
		validationDoubleComma,
	).toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();
});
declare const validationQuotedPseudo: Selector.ValidateSelector<"Part[Name=':foo(x)']">;
it("infers the type of validation quoted pseudo", () => {
	expectTypeOf(validationQuotedPseudo).toEqualTypeOf<"Part[Name=':foo(x)']">();
});
declare const validationQuotedComma: Selector.ValidateSelector<"Part[Name=',']">;
it("infers the type of validation quoted comma", () => {
	expectTypeOf(validationQuotedComma).toEqualTypeOf<"Part[Name=',']">();
});
declare const validationBracketPseudo: Selector.ValidateSelector<"Part[Name='http://example.com']">;
it("infers the type of validation bracket pseudo", () => {
	expectTypeOf(validationBracketPseudo).toEqualTypeOf<"Part[Name='http://example.com']">();
});
declare const validationBracketComma: Selector.ValidateSelector<"Part[Name='Hello,World']">;
it("infers the type of validation bracket comma", () => {
	expectTypeOf(validationBracketComma).toEqualTypeOf<"Part[Name='Hello,World']">();
});

// Validation at call sites

it('rejects game.QueryDescendants("Part:foo(x)");', () => {
	// @ts-expect-error Invalid selector: ':foo' is not a supported pseudo-class
	game.QueryDescendants("Part:foo(x)");
});
it('rejects game.QueryDescendants("Part,");', () => {
	// @ts-expect-error Invalid selector: empty selector in list
	game.QueryDescendants("Part,");
});
it('rejects game.QueryDescendants(", Part");', () => {
	// @ts-expect-error Invalid selector: empty selector in list
	game.QueryDescendants(", Part");
});

// Double quotes, mixed quote characters, and opaque filter contents on both parser paths.

const apostrophes = game.QueryDescendants(`Part[Name="O'Brien"], Model[Name="O'Brien"]`);
it("infers the type of apostrophes", () => {
	expectTypeOf(apostrophes).toEqualTypeOf<(Part | Model)[]>();
});
const doubleQuotedBracket = game.QueryDescendants(`Part[Name="a], > Folder"]`);
it("infers the type of double quoted bracket", () => {
	expectTypeOf(doubleQuotedBracket).toEqualTypeOf<Part[]>();
});
const doubleQuotedPseudo = game.QueryDescendants(`Part[Name="a]:foo(x)"]`);
it("infers the type of double quoted pseudo", () => {
	expectTypeOf(doubleQuotedPseudo).toEqualTypeOf<Part[]>();
});
const doubleQuotedNested = game.QueryDescendants(`Part[Name="a,b"]:has(> :not(Folder))`);
it("infers the type of double quoted nested", () => {
	expectTypeOf(doubleQuotedNested).toEqualTypeOf<Part[]>();
});
const doubleQuotedParenthesis = game.QueryDescendants(`Folder[Name="("] > Part:has(:not(Model))`);
it("infers the type of double quoted parenthesis", () => {
	expectTypeOf(doubleQuotedParenthesis).toEqualTypeOf<Part[]>();
});
const mixedQuotes = game.QueryDescendants(`Part[Name='a"b'], Model[Name="a'b"]`);
it("infers the type of mixed quotes", () => {
	expectTypeOf(mixedQuotes).toEqualTypeOf<(Part | Model)[]>();
});
const quotedEmptyList = game.QueryDescendants(`Part[Name="(),:not(,)"]`);
it("infers the type of quoted empty list", () => {
	expectTypeOf(quotedEmptyList).toEqualTypeOf<Part[]>();
});
const filterOnlyNested = game.QueryDescendants(`Part:has([$FuelCapacity])`);
it("infers the type of filter only nested", () => {
	expectTypeOf(filterOnlyNested).toEqualTypeOf<Part[]>();
});
const filterOnlyList = game.QueryDescendants(`Part, [$FuelCapacity]`);
it("infers the type of filter only list", () => {
	expectTypeOf(filterOnlyList).toEqualTypeOf<(Part | Instance)[]>();
});

const escapedDouble = game.QueryDescendants('Part[Name="a\\"], > Model"], Folder');
it("infers the type of escaped double", () => {
	expectTypeOf(escapedDouble).toEqualTypeOf<(Part | Folder)[]>();
});
const escapedSingle = game.QueryDescendants("Part[Name='a\\'], > Model'], Folder");
it("infers the type of escaped single", () => {
	expectTypeOf(escapedSingle).toEqualTypeOf<(Part | Folder)[]>();
});
const escapedBackslash = game.QueryDescendants('Part[Name="a\\\\"], Model');
it("infers the type of escaped backslash", () => {
	expectTypeOf(escapedBackslash).toEqualTypeOf<(Part | Model)[]>();
});

// Dynamic templates can introduce combinators or additional selector-list branches.

const dynamicTag = game.QueryDescendants(`Part.${game.Name}`);
it("infers the type of dynamic tag", () => {
	expectTypeOf(dynamicTag).toEqualTypeOf<Instance[]>();
});
const dynamicName = game.QueryDescendants(`Part#${game.Name}`);
it("infers the type of dynamic name", () => {
	expectTypeOf(dynamicName).toEqualTypeOf<Instance[]>();
});
const dynamicPseudo = game.QueryDescendants(`Part:has(${game.Name})`);
it("infers the type of dynamic pseudo", () => {
	expectTypeOf(dynamicPseudo).toEqualTypeOf<Instance[]>();
});
const dynamicFilter = game.QueryDescendants(`Part[Name="${game.Name}"]`);
it("infers the type of dynamic filter", () => {
	expectTypeOf(dynamicFilter).toEqualTypeOf<Instance[]>();
});
declare const numericTemplate: `Part.Tag${number}`;
const dynamicNumber = game.QueryDescendants(numericTemplate);
it("infers the type of dynamic number", () => {
	expectTypeOf(dynamicNumber).toEqualTypeOf<Instance[]>();
});
declare const finiteTemplate: `Part.Tag${boolean}`;
const finiteNumberOfSelectors = game.QueryDescendants(finiteTemplate);
it("infers the type of finite number of selectors", () => {
	expectTypeOf(finiteNumberOfSelectors).toEqualTypeOf<Part[]>();
});
declare const selectorUnion: "Part" | "Model";
const unionResult = game.QueryDescendants(selectorUnion);
it("infers the type of union result", () => {
	expectTypeOf(unionResult).toEqualTypeOf<(Part | Model)[]>();
});
declare const mixedTemplateUnion: "Part" | `Model.${string}`;
const mixedTemplateResult = game.QueryDescendants(mixedTemplateUnion);
it("infers the type of mixed template result", () => {
	expectTypeOf(mixedTemplateResult).toEqualTypeOf<(Part | Instance)[]>();
});

// Keep each union member paired with its own validation result.

declare const invalidPseudoUnion: "Part" | "Model:foo(x)";
it("rejects game.QueryDescendants(invalidPseudoUnion);", () => {
	// @ts-expect-error Invalid selector: ':foo' is not a supported pseudo-class
	game.QueryDescendants(invalidPseudoUnion);
});
declare const invalidCommaUnion: "Part" | "Model,";
it("rejects game.QueryDescendants(invalidCommaUnion);", () => {
	// @ts-expect-error Invalid selector: empty selector in list
	game.QueryDescendants(invalidCommaUnion);
});
declare const validatedUnion: Selector.ValidateSelector<"Part" | "Model:foo(x)">;
it("infers the type of validated union", () => {
	expectTypeOf(validatedUnion).toEqualTypeOf<
		"Part" | "Invalid selector: ':foo' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)"
	>();
});

// Nested list boundaries must not hide empty entries.

it('rejects game.QueryDescendants("Part:not(,Model)");', () => {
	// @ts-expect-error Invalid selector: empty selector in list
	game.QueryDescendants("Part:not(,Model)");
});
it('rejects game.QueryDescendants("Part:not(Model,)");', () => {
	// @ts-expect-error Invalid selector: empty selector in list
	game.QueryDescendants("Part:not(Model,)");
});
it('rejects game.QueryDescendants("Part:not(Model,,Folder)");', () => {
	// @ts-expect-error Invalid selector: empty selector in list
	game.QueryDescendants("Part:not(Model,,Folder)");
});
it('rejects game.QueryDescendants("Part:has(,Model)");', () => {
	// @ts-expect-error Invalid selector: empty selector in list
	game.QueryDescendants("Part:has(,Model)");
});
it('rejects game.QueryDescendants("Part:has(Model,)");', () => {
	// @ts-expect-error Invalid selector: empty selector in list
	game.QueryDescendants("Part:has(Model,)");
});
it('rejects game.QueryDescendants("Part:has(:not(Model,))");', () => {
	// @ts-expect-error Invalid selector: empty selector in list
	game.QueryDescendants("Part:has(:not(Model,))");
});
it('rejects game.QueryDescendants("Part:not()");', () => {
	// @ts-expect-error Invalid selector: empty selector in list
	game.QueryDescendants("Part:not()");
});
it('rejects game.QueryDescendants("Part:has( )");', () => {
	// @ts-expect-error Invalid selector: empty selector in list
	game.QueryDescendants("Part:has( )");
});
it('rejects game.QueryDescendants("Part:has(Model:foo(.x))");', () => {
	// @ts-expect-error Invalid selector: ':foo' is not a supported pseudo-class
	game.QueryDescendants("Part:has(Model:foo(.x))");
});
// Collections-only syntax is not supported by QueryDescendants.
it('rejects game.QueryDescendants("Part:in-radius(10, .Target)");', () => {
	// @ts-expect-error Invalid selector: ':in-radius' is not a supported pseudo-class
	game.QueryDescendants("Part:in-radius(10, .Target)");
});

// Other documented forms and whitespace (whitespace is not a combinator).

const enumFilter = game.QueryDescendants("Part[Material=Neon]");
it("infers the type of enum filter", () => {
	expectTypeOf(enumFilter).toEqualTypeOf<Part[]>();
});
const attributeAbsent = game.QueryDescendants(":not([$OnFire])");
it("infers the type of attribute absent", () => {
	expectTypeOf(attributeAbsent).toEqualTypeOf<Instance[]>();
});
const leadingDescendant = game.QueryDescendants(">> Part");
it("infers the type of leading descendant", () => {
	expectTypeOf(leadingDescendant).toEqualTypeOf<Part[]>();
});
const hierarchyNegation = game.QueryDescendants(":not(Model > .SwordPart)");
it("infers the type of hierarchy negation", () => {
	expectTypeOf(hierarchyNegation).toEqualTypeOf<Instance[]>();
});
const whitespace = game.QueryDescendants("\n Part\n >\tModel\r\n");
it("infers the type of whitespace", () => {
	expectTypeOf(whitespace).toEqualTypeOf<Model[]>();
});
const whitespaceSuffix = game.QueryDescendants("Part\t.Fruit");
it("infers the type of whitespace suffix", () => {
	expectTypeOf(whitespaceSuffix).toEqualTypeOf<Part[]>();
});
const whitespaceNested = game.QueryDescendants("MeshPart:has(\n> :not(SurfaceAppearance, Texture)\n)");
it("infers the type of whitespace nested", () => {
	expectTypeOf(whitespaceNested).toEqualTypeOf<MeshPart[]>();
});
it('rejects game.QueryDescendants("Part:not(\t,Model)");', () => {
	// @ts-expect-error Invalid selector: empty selector in list
	game.QueryDescendants("Part:not(\t,Model)");
});
it('rejects game.QueryDescendants("Part:not(Model,\n)");', () => {
	// @ts-expect-error Invalid selector: empty selector in list
	game.QueryDescendants("Part:not(Model,\n)");
});

// Compatibility fallbacks for incomplete input; these are not engine-valid selectors.

const trailing = game.QueryDescendants("Model >");
it("infers the type of trailing", () => {
	expectTypeOf(trailing).toEqualTypeOf<Instance[]>();
});
const pseudoTrailingCombinator = game.QueryDescendants("Part:has(Model:has(.x)) >");
it("infers the type of pseudo trailing combinator", () => {
	expectTypeOf(pseudoTrailingCombinator).toEqualTypeOf<Instance[]>();
});
