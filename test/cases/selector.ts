/// <reference path="../../include/roblox.d.ts" />

// Test cases for the `QueryDescendants` selector resolver (include/selector.d.ts), run by
// test/run.ts against the real published types (`game` is the real `DataModel` global from
// include/roblox.d.ts). Each declaration's `//=>` annotation is the expected resolved type; a
// `// @expect-error` line asserts the following call is rejected (selector validation).

// ===== Subject resolution: single class =====

const parts = game.QueryDescendants("Part"); //=> Part[]
const taggedParts = game.QueryDescendants("Part.Fruit"); //=> Part[]
const namedParts = game.QueryDescendants("Part#RedTree"); //=> Part[]
const noncollide = game.QueryDescendants("Part[CanCollide = false]"); //=> Part[]
const manyAttrs = game.QueryDescendants("Part[$Type=Enemy][$Level=5][Transparency=0.5].Boss#FinalBoss"); //=> Part[]
const attrDot = game.QueryDescendants("Part[Transparency=0.5]"); //=> Part[]
const attrCombinatorChar = game.QueryDescendants("Part[Health>50] > Model"); //=> Model[]

// ===== Combinators (`>` child / `>>` descendant) — only the last segment is the subject =====

const nested = game.QueryDescendants("Workspace > Folder > Model > Part"); //=> Part[]
const complexCombo = game.QueryDescendants("Model[$Health = 100] > Part.Enemy#Boss"); //=> Part[]
const leading = game.QueryDescendants("> Model"); //=> Model[]
const trailing = game.QueryDescendants("Model >"); //=> Instance[]
const comboTag = game.QueryDescendants("Model > .Tagged"); //=> Instance[]
const comboName = game.QueryDescendants("Folder > #SpecialPart"); //=> Instance[]

// ===== Tags / names without a class resolve to Instance =====

const tagged = game.QueryDescendants(".Fruit"); //=> Instance[]
const named = game.QueryDescendants("#MyPart"); //=> Instance[]

// ===== Selector lists (comma) union the subjects =====

const mixed = game.QueryDescendants("Part, Model, SpotLight"); //=> (Part | Model | SpotLight)[]
const mixedCombinators = game.QueryDescendants("Folder > Part, Model .Foo, ImageButton#CloseButton"); //=> (Part | Model | ImageButton)[]
const complex = game.QueryDescendants("Model.Apple[$Kind = Red], Part#Tree"); //=> (Model | Part)[]
const kitchen = game.QueryDescendants("Part[Anchored=true], Model > SpotLight.Bright, ImageButton, .UI"); //=> (Part | SpotLight | ImageButton | Instance)[]

// ===== Pseudo-classes (`:not` / `:has`) are filters — they never change the subject =====

const notPseudo = game.QueryDescendants("Part:not(.Foo)"); //=> Part[]
const hasPseudo = game.QueryDescendants("Model:has(.Child)"); //=> Model[]
const pseudoChild = game.QueryDescendants("Folder > Part:not(#Excluded)"); //=> Part[]
const pseudoList = game.QueryDescendants("Part:not(.A), Model:has(#B)"); //=> (Part | Model)[]
const pseudoInnerComma = game.QueryDescendants("Part:not(.A, .B, .C)"); //=> Part[]

// ===== Quoted attribute values (slow/tokenizer path) — inner commas/combinators don't split =====

const quotedComma = game.QueryDescendants("Part[Name = 'Hello, World']"); //=> Part[]
const quotedCombinator = game.QueryDescendants("Model[Name = 'a > b'] > Part"); //=> Part[]

// ===== Dynamic (non-literal) and empty selectors fall back to Instance[] =====

const fallback = game.QueryDescendants(game.Name); //=> Instance[]
const emptyString = game.QueryDescendants(""); //=> Instance[]

// ===== Validation: ValidateSelector resolves to a readable error string for bad input =====

declare const validationSuccess: Selector.ValidateSelector<"Part">; //=> "Part"
declare const validationBadPseudo: Selector.ValidateSelector<"Part:foo(x)">; //=> "Invalid selector: ':foo' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)"
declare const validationPseudoNoArgs: Selector.ValidateSelector<"Part:hover">; //=> "Invalid selector: ':hover' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)"
declare const validationTrailingComma: Selector.ValidateSelector<"Part,">; //=> "Invalid selector: empty selector in list (check for a stray or trailing comma)"
declare const validationLeadingComma: Selector.ValidateSelector<", Part">; //=> "Invalid selector: empty selector in list (check for a stray or trailing comma)"
declare const validationDoubleComma: Selector.ValidateSelector<"Part,,Model">; //=> "Invalid selector: empty selector in list (check for a stray or trailing comma)"

// ===== Validation surfaces as a call-site compile error =====

// @expect-error unsupported pseudo-class is rejected at the call site
game.QueryDescendants("Part:foo(x)");
// @expect-error stray trailing comma is rejected at the call site
game.QueryDescendants("Part,");
// @expect-error leading comma is rejected at the call site
game.QueryDescendants(", Part");
