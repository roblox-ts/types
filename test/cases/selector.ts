// Test cases for the `QueryDescendants` selector resolver (include/selector.d.ts).
//
// Compiled against the real published types (see test/prelude.d.ts). Each `const` /
// `declare const` below is annotated with the type the resolver is expected to
// produce, written after a `//=>` marker. The runner (test/run.js) drives the
// TypeScript compiler API to read back the *actual* inferred type for every
// declaration and compares it against the annotation. Union member order is not
// significant in TypeScript, so the comparison normalizes unions before comparing.
//
// Lines preceding a statement with `// @expect-error` assert that the statement is
// rejected by the type-checker (used for selector-validation failures at the call site).

// ===== Subject resolution: single class =====

const parts = instance.QueryDescendants("Part"); //=> Part[]
const taggedParts = instance.QueryDescendants("Part.Fruit"); //=> Part[]
const namedParts = instance.QueryDescendants("Part#RedTree"); //=> Part[]
const noncollide = instance.QueryDescendants("Part[CanCollide = false]"); //=> Part[]
const manyAttrs = instance.QueryDescendants("Part[$Type=Enemy][$Level=5][Transparency=0.5].Boss#FinalBoss"); //=> Part[]
const attrDot = instance.QueryDescendants("Part[Transparency=0.5]"); //=> Part[]
const attrCombinatorChar = instance.QueryDescendants("Part[Health>50] > Model"); //=> Model[]

// ===== Combinators (`>` child / `>>` descendant) — only the last segment is the subject =====

const nested = instance.QueryDescendants("Workspace > Folder > Model > Part"); //=> Part[]
const complexCombo = instance.QueryDescendants("Model[$Health = 100] > Part.Enemy#Boss"); //=> Part[]
const leading = instance.QueryDescendants("> Model"); //=> Model[]
const trailing = instance.QueryDescendants("Model >"); //=> Instance[]
const comboTag = instance.QueryDescendants("Model > .Tagged"); //=> Instance[]
const comboName = instance.QueryDescendants("Folder > #SpecialPart"); //=> Instance[]

// ===== Tags / names without a class resolve to Instance =====

const tagged = instance.QueryDescendants(".Fruit"); //=> Instance[]
const named = instance.QueryDescendants("#MyPart"); //=> Instance[]

// ===== Selector lists (comma) union the subjects =====

const mixed = instance.QueryDescendants("Part, Model, SpotLight"); //=> (Part | Model | SpotLight)[]
const mixedCombinators = instance.QueryDescendants("Folder > Part, Model .Foo, ImageButton#CloseButton"); //=> (Part | Model | ImageButton)[]
const complex = instance.QueryDescendants("Model.Apple[$Kind = Red], Part#Tree"); //=> (Model | Part)[]
const kitchen = instance.QueryDescendants("Part[Anchored=true], Model > SpotLight.Bright, ImageButton, .UI"); //=> (Part | SpotLight | ImageButton | Instance)[]

// ===== Pseudo-classes (`:not` / `:has`) are filters — they never change the subject =====

const notPseudo = instance.QueryDescendants("Part:not(.Foo)"); //=> Part[]
const hasPseudo = instance.QueryDescendants("Model:has(.Child)"); //=> Model[]
const pseudoChild = instance.QueryDescendants("Folder > Part:not(#Excluded)"); //=> Part[]
const pseudoList = instance.QueryDescendants("Part:not(.A), Model:has(#B)"); //=> (Part | Model)[]
const pseudoInnerComma = instance.QueryDescendants("Part:not(.A, .B, .C)"); //=> Part[]

// ===== Quoted attribute values (slow/tokenizer path) — inner commas/combinators don't split =====

const quotedComma = instance.QueryDescendants("Part[Name = 'Hello, World']"); //=> Part[]
const quotedCombinator = instance.QueryDescendants("Model[Name = 'a > b'] > Part"); //=> Part[]

// ===== Dynamic (non-literal) and empty selectors fall back to Instance[] =====

const fallback = instance.QueryDescendants(instance.Name); //=> Instance[]
const emptyString = instance.QueryDescendants(""); //=> Instance[]

// ===== Validation: ValidateSelector resolves to a readable error string for bad input =====

declare const v_valid: Selector.ValidateSelector<"Part">; //=> "Part"
declare const v_badPseudo: Selector.ValidateSelector<"Part:foo(x)">; //=> "Invalid selector: ':foo' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)"
declare const v_pseudoNoArgs: Selector.ValidateSelector<"Part:hover">; //=> "Invalid selector: ':hover' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)"
declare const v_trailingComma: Selector.ValidateSelector<"Part,">; //=> "Invalid selector: empty selector in list (check for a stray or trailing comma)"
declare const v_leadingComma: Selector.ValidateSelector<", Part">; //=> "Invalid selector: empty selector in list (check for a stray or trailing comma)"
declare const v_doubleComma: Selector.ValidateSelector<"Part,,Model">; //=> "Invalid selector: empty selector in list (check for a stray or trailing comma)"

// ===== Validation surfaces as a call-site compile error =====

// @expect-error unsupported pseudo-class is rejected at the call site
instance.QueryDescendants("Part:foo(x)");
// @expect-error stray trailing comma is rejected at the call site
instance.QueryDescendants("Part,");
// @expect-error leading comma is rejected at the call site
instance.QueryDescendants(", Part");
