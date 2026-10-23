/// <reference path="../include/roblox.d.ts" />

// Cases for the QueryDescendants selector resolver (include/selector.d.ts), checked by
// `npm test` (src/runTests.ts). `game` is the DataModel global from include/roblox.d.ts.
// `//=> <type>` asserts the type inferred for the declaration; `// @ts-expect-error` asserts
// that the statement below it fails to type-check.

// Subject resolution: single class

const parts = game.QueryDescendants("Part"); //=> Part[]
const taggedParts = game.QueryDescendants("Part.Fruit"); //=> Part[]
const namedParts = game.QueryDescendants("Part#RedTree"); //=> Part[]
const baseParts = game.QueryDescendants("BasePart"); //=> BasePart[]
const noncollide = game.QueryDescendants("Part[CanCollide = false]"); //=> Part[]
const manyAttrs = game.QueryDescendants("Part[$Type=Enemy][$Level=5][Transparency=0.5].Boss#FinalBoss"); //=> Part[]
const attrDot = game.QueryDescendants("Part[Transparency=0.5]"); //=> Part[]
const attrCombinatorChar = game.QueryDescendants('Part[Name="a > b"] > Model'); //=> Model[]
const propertyOnly = game.QueryDescendants("[CanCollide = false]"); //=> Instance[]
const attrPresence = game.QueryDescendants("[$FuelCapacity]"); //=> Instance[]
const attrValueOnly = game.QueryDescendants("[$FuelCapacity = 75]"); //=> Instance[]

// Combinators (`>` child / `>>` descendant)

const nested = game.QueryDescendants("Workspace > Folder > Model > Part"); //=> Part[]
const complexCombo = game.QueryDescendants("Model[$Health = 100] > Part.Enemy#Boss"); //=> Part[]
const descendantCombo = game.QueryDescendants("Model >> Part"); //=> Part[]
const descendantAttrSubject = game.QueryDescendants("Model >> [$OnFire = true]"); //=> Instance[]
const leading = game.QueryDescendants("> Model"); //=> Model[]
const comboTag = game.QueryDescendants("Model > .Tagged"); //=> Instance[]
const comboName = game.QueryDescendants("Folder > #SpecialPart"); //=> Instance[]

// Tags / names without a class resolve to Instance

const tagged = game.QueryDescendants(".Fruit"); //=> Instance[]
const named = game.QueryDescendants("#MyPart"); //=> Instance[]

// Selector lists (comma) union the subjects

const mixed = game.QueryDescendants("Part, Model, SpotLight"); //=> (Part | Model | SpotLight)[]
const mixedCombinators = game.QueryDescendants("Folder > Part, Model .Foo, ImageButton#CloseButton"); //=> (Part | Model | ImageButton)[]
const complex = game.QueryDescendants("Model.Apple[$Kind = Red], Part#Tree"); //=> (Model | Part)[]
const kitchen = game.QueryDescendants("Part[Anchored=true], Model > SpotLight.Bright, ImageButton, .UI"); //=> (Part | SpotLight | ImageButton | Instance)[]

// Pseudo-classes (`:not` / `:has`)

const notPseudo = game.QueryDescendants("Part:not(.Foo)"); //=> Part[]
const hasPseudo = game.QueryDescendants("Model:has(.Child)"); //=> Model[]
const pseudoChild = game.QueryDescendants("Folder > Part:not(#Excluded)"); //=> Part[]
const pseudoList = game.QueryDescendants("Part:not(.A), Model:has(#B)"); //=> (Part | Model)[]
const pseudoInnerComma = game.QueryDescendants("Part:not(.A, .B, .C)"); //=> Part[]
const tagThenPseudo = game.QueryDescendants("Part.Enemy:not(#Boss)"); //=> Part[]
const nameThenPseudo = game.QueryDescendants("Part#Boss:has(.Weapon)"); //=> Part[]
const tagThenPseudoList = game.QueryDescendants("Part.Enemy:not(.A), Model"); //=> (Part | Model)[]
const pseudoThenTag = game.QueryDescendants("Part:not(.Rotten).Fruit"); //=> Part[]
const pseudoQuotedInnerComma = game.QueryDescendants("Part:has(Model[Name = 'a,b'], Folder)"); //=> Part[]
const pseudoNestedList = game.QueryDescendants("Part:has(Model:has([Name = 'a,b']), Folder), TextButton"); //=> (Part | TextButton)[]
const bareNotPseudo = game.QueryDescendants(":not(SpotLight, PointLight)"); //=> Instance[]
const bareHasPseudo = game.QueryDescendants(":has(Tool)"); //=> Instance[]
const hasRelativeChild = game.QueryDescendants("MeshPart:has(> .SwordPart)"); //=> MeshPart[]
const hasNestedRelativeNot = game.QueryDescendants("MeshPart:has(> :not(SurfaceAppearance, Texture))"); //=> MeshPart[]

const nestedChild = game.QueryDescendants("Part:has(Model:not(.A)):not(.B) > Folder, TextButton:has(> :not(Frame))"); //=> (Folder | TextButton)[]
const nestedSiblingPseudos = game.QueryDescendants("Part:not(:has(Model, Folder)):has(TextLabel), Model"); //=> (Part | Model)[]

// Quoted attribute values

const quotedComma = game.QueryDescendants("Part[Name = 'Hello, World']"); //=> Part[]
const quotedCombinator = game.QueryDescendants("Model[Name = 'a > b'] > Part"); //=> Part[]
const quotedBracketAndComma = game.QueryDescendants("Model[Name = 'a], b > c'] > TextButton"); //=> TextButton[]

// Dynamic (non-literal) and empty selectors fall back to Instance[]

const fallback = game.QueryDescendants(game.Name); //=> Instance[]
const emptyString = game.QueryDescendants(""); //=> Instance[]

// Validation: readable error strings

declare const validationSuccess: Selector.ValidateSelector<"Part">; //=> "Part"
declare const validationBadPseudo: Selector.ValidateSelector<"Part:foo(x)">; //=> "Invalid selector: ':foo' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)"
declare const validationPseudoNoArgs: Selector.ValidateSelector<"Part:hover">; //=> "Invalid selector: ':hover' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)"
declare const validationTrailingComma: Selector.ValidateSelector<"Part,">; //=> "Invalid selector: empty selector in list (check for a stray or trailing comma)"
declare const validationLeadingComma: Selector.ValidateSelector<", Part">; //=> "Invalid selector: empty selector in list (check for a stray or trailing comma)"
declare const validationDoubleComma: Selector.ValidateSelector<"Part,,Model">; //=> "Invalid selector: empty selector in list (check for a stray or trailing comma)"
declare const validationQuotedPseudo: Selector.ValidateSelector<"Part[Name=':foo(x)']">; //=> "Part[Name=':foo(x)']"
declare const validationQuotedComma: Selector.ValidateSelector<"Part[Name=',']">; //=> "Part[Name=',']"
declare const validationBracketPseudo: Selector.ValidateSelector<"Part[Name='http://example.com']">; //=> "Part[Name='http://example.com']"
declare const validationBracketComma: Selector.ValidateSelector<"Part[Name='Hello,World']">; //=> "Part[Name='Hello,World']"

// Validation at call sites

// @ts-expect-error Invalid selector: ':foo' is not a supported pseudo-class
game.QueryDescendants("Part:foo(x)");
// @ts-expect-error Invalid selector: empty selector in list
game.QueryDescendants("Part,");
// @ts-expect-error Invalid selector: empty selector in list
game.QueryDescendants(", Part");

// Double quotes, mixed quote characters, and opaque filter contents on both parser paths.

const apostrophes = game.QueryDescendants(`Part[Name="O'Brien"], Model[Name="O'Brien"]`); //=> (Part | Model)[]
const doubleQuotedBracket = game.QueryDescendants(`Part[Name="a], > Folder"]`); //=> Part[]
const doubleQuotedPseudo = game.QueryDescendants(`Part[Name="a]:foo(x)"]`); //=> Part[]
const doubleQuotedNested = game.QueryDescendants(`Part[Name="a,b"]:has(> :not(Folder))`); //=> Part[]
const doubleQuotedParenthesis = game.QueryDescendants(`Folder[Name="("] > Part:has(:not(Model))`); //=> Part[]
const mixedQuotes = game.QueryDescendants(`Part[Name='a"b'], Model[Name="a'b"]`); //=> (Part | Model)[]
const quotedEmptyList = game.QueryDescendants(`Part[Name="(),:not(,)"]`); //=> Part[]
const filterOnlyNested = game.QueryDescendants(`Part:has([$FuelCapacity])`); //=> Part[]
const filterOnlyList = game.QueryDescendants(`Part, [$FuelCapacity]`); //=> (Part | Instance)[]

const escapedDouble = game.QueryDescendants('Part[Name="a\\"], > Model"], Folder'); //=> (Part | Folder)[]
const escapedSingle = game.QueryDescendants("Part[Name='a\\'], > Model'], Folder"); //=> (Part | Folder)[]
const escapedBackslash = game.QueryDescendants('Part[Name="a\\\\"], Model'); //=> (Part | Model)[]

// Dynamic templates can introduce combinators or additional selector-list branches.

const dynamicTag = game.QueryDescendants(`Part.${game.Name}`); //=> Instance[]
const dynamicName = game.QueryDescendants(`Part#${game.Name}`); //=> Instance[]
const dynamicPseudo = game.QueryDescendants(`Part:has(${game.Name})`); //=> Instance[]
const dynamicFilter = game.QueryDescendants(`Part[Name="${game.Name}"]`); //=> Instance[]
declare const numericTemplate: `Part.Tag${number}`;
const dynamicNumber = game.QueryDescendants(numericTemplate); //=> Instance[]
declare const finiteTemplate: `Part.Tag${boolean}`;
const finiteNumberOfSelectors = game.QueryDescendants(finiteTemplate); //=> Part[]
declare const selectorUnion: "Part" | "Model";
const unionResult = game.QueryDescendants(selectorUnion); //=> (Part | Model)[]
declare const mixedTemplateUnion: "Part" | `Model.${string}`;
const mixedTemplateResult = game.QueryDescendants(mixedTemplateUnion); //=> (Part | Instance)[]

// Keep each union member paired with its own validation result.

declare const invalidPseudoUnion: "Part" | "Model:foo(x)";
// @ts-expect-error Invalid selector: ':foo' is not a supported pseudo-class
game.QueryDescendants(invalidPseudoUnion);
declare const invalidCommaUnion: "Part" | "Model,";
// @ts-expect-error Invalid selector: empty selector in list
game.QueryDescendants(invalidCommaUnion);
declare const validatedUnion: Selector.ValidateSelector<"Part" | "Model:foo(x)">; //=> "Part" | "Invalid selector: ':foo' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)"

// Nested list boundaries must not hide empty entries.

// @ts-expect-error Invalid selector: empty selector in list
game.QueryDescendants("Part:not(,Model)");
// @ts-expect-error Invalid selector: empty selector in list
game.QueryDescendants("Part:not(Model,)");
// @ts-expect-error Invalid selector: empty selector in list
game.QueryDescendants("Part:not(Model,,Folder)");
// @ts-expect-error Invalid selector: empty selector in list
game.QueryDescendants("Part:has(,Model)");
// @ts-expect-error Invalid selector: empty selector in list
game.QueryDescendants("Part:has(Model,)");
// @ts-expect-error Invalid selector: empty selector in list
game.QueryDescendants("Part:has(:not(Model,))");
// @ts-expect-error Invalid selector: empty selector in list
game.QueryDescendants("Part:not()");
// @ts-expect-error Invalid selector: empty selector in list
game.QueryDescendants("Part:has( )");
// @ts-expect-error Invalid selector: ':foo' is not a supported pseudo-class
game.QueryDescendants("Part:has(Model:foo(.x))");
// Collections-only syntax is not supported by QueryDescendants.
// @ts-expect-error Invalid selector: ':in-radius' is not a supported pseudo-class
game.QueryDescendants("Part:in-radius(10, .Target)");

// Other documented forms and whitespace (whitespace is not a combinator).

const enumFilter = game.QueryDescendants("Part[Material=Neon]"); //=> Part[]
const attributeAbsent = game.QueryDescendants(":not([$OnFire])"); //=> Instance[]
const leadingDescendant = game.QueryDescendants(">> Part"); //=> Part[]
const hierarchyNegation = game.QueryDescendants(":not(Model > .SwordPart)"); //=> Instance[]
const whitespace = game.QueryDescendants("\n Part\n >\tModel\r\n"); //=> Model[]
const whitespaceSuffix = game.QueryDescendants("Part\t.Fruit"); //=> Part[]
const whitespaceNested = game.QueryDescendants("MeshPart:has(\n> :not(SurfaceAppearance, Texture)\n)"); //=> MeshPart[]
// @ts-expect-error Invalid selector: empty selector in list
game.QueryDescendants("Part:not(\t,Model)");
// @ts-expect-error Invalid selector: empty selector in list
game.QueryDescendants("Part:not(Model,\n)");

// Compatibility fallbacks for incomplete input; these are not engine-valid selectors.

const trailing = game.QueryDescendants("Model >"); //=> Instance[]
const pseudoTrailingCombinator = game.QueryDescendants("Part:has(Model:has(.x)) >"); //=> Instance[]
