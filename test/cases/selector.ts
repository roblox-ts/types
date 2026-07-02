/// <reference path="../../include/roblox.d.ts" />

// Cases for the QueryDescendants selector resolver (include/selector.d.ts), checked by
// `npm test` (src/tests/run.ts). `game` is the DataModel global from include/roblox.d.ts.
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
const attrCombinatorChar = game.QueryDescendants("Part[Health>50] > Model"); //=> Model[]
const propertyOnly = game.QueryDescendants("[CanCollide = false]"); //=> Instance[]
const attrPresence = game.QueryDescendants("[$FuelCapacity]"); //=> Instance[]
const attrValueOnly = game.QueryDescendants("[$FuelCapacity = 75]"); //=> Instance[]

// Combinators (`>` child / `>>` descendant)

const nested = game.QueryDescendants("Workspace > Folder > Model > Part"); //=> Part[]
const complexCombo = game.QueryDescendants("Model[$Health = 100] > Part.Enemy#Boss"); //=> Part[]
const descendantCombo = game.QueryDescendants("Model >> Part"); //=> Part[]
const descendantAttrSubject = game.QueryDescendants("Model >> [$OnFire = true]"); //=> Instance[]
const leading = game.QueryDescendants("> Model"); //=> Model[]
const trailing = game.QueryDescendants("Model >"); //=> Instance[]
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
const pseudoQuotedInnerComma = game.QueryDescendants("Part:has(Model[Name = 'a,b'], Folder)"); //=> Part[]
const pseudoNestedList = game.QueryDescendants("Part:has(Model:has([Name = 'a,b']), Folder), TextButton"); //=> (Part | TextButton)[]
const pseudoTrailingCombinator = game.QueryDescendants("Part:has(Model:has(.x)) >"); //=> Instance[]
const bareNotPseudo = game.QueryDescendants(":not(SpotLight, PointLight)"); //=> Instance[]
const bareHasPseudo = game.QueryDescendants(":has(Tool)"); //=> Instance[]
const hasRelativeChild = game.QueryDescendants("MeshPart:has(> .SwordPart)"); //=> MeshPart[]
const hasNestedRelativeNot = game.QueryDescendants("MeshPart:has(> :not(SurfaceAppearance, Texture))"); //=> MeshPart[]

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
declare const validationBracketPseudo: Selector.ValidateSelector<"Part[Url=http://example.com]">; //=> "Part[Url=http://example.com]"
declare const validationBracketComma: Selector.ValidateSelector<"Part[Name=Hello,World]">; //=> "Part[Name=Hello,World]"

// Validation at call sites

// @ts-expect-error unsupported pseudo-class is rejected at the call site
game.QueryDescendants("Part:foo(x)");
// @ts-expect-error stray trailing comma is rejected at the call site
game.QueryDescendants("Part,");
// @ts-expect-error leading comma is rejected at the call site
game.QueryDescendants(", Part");
