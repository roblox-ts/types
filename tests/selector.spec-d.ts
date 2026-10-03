import { expectTypeOf, it } from "vitest";

// `game` is the DataModel global from include/roblox.d.ts.

// Subject resolution: single class

it("resolves Part as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part")).toEqualTypeOf<Part[]>();
});
it("resolves Part.Fruit as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part.Fruit")).toEqualTypeOf<Part[]>();
});
it("resolves Part#RedTree as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part#RedTree")).toEqualTypeOf<Part[]>();
});
it("resolves BasePart as BasePart[]", () => {
	expectTypeOf(game.QueryDescendants("BasePart")).toEqualTypeOf<BasePart[]>();
});
it("resolves Part[CanCollide = false] as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part[CanCollide = false]")).toEqualTypeOf<Part[]>();
});
it("resolves Part[$Type=Enemy][$Level=5][Transparency=0.5].Boss#FinalBoss as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part[$Type=Enemy][$Level=5][Transparency=0.5].Boss#FinalBoss")).toEqualTypeOf<
		Part[]
	>();
});
it("resolves Part[Transparency=0.5] as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part[Transparency=0.5]")).toEqualTypeOf<Part[]>();
});
it('resolves Part[Name="a > b"] > Model as Model[]', () => {
	expectTypeOf(game.QueryDescendants('Part[Name="a > b"] > Model')).toEqualTypeOf<Model[]>();
});
it("resolves [CanCollide = false] as Instance[]", () => {
	expectTypeOf(game.QueryDescendants("[CanCollide = false]")).toEqualTypeOf<Instance[]>();
});
it("resolves [$FuelCapacity] as Instance[]", () => {
	expectTypeOf(game.QueryDescendants("[$FuelCapacity]")).toEqualTypeOf<Instance[]>();
});
it("resolves [$FuelCapacity = 75] as Instance[]", () => {
	expectTypeOf(game.QueryDescendants("[$FuelCapacity = 75]")).toEqualTypeOf<Instance[]>();
});

// Combinators (`>` child / `>>` descendant)

it("resolves Workspace > Folder > Model > Part as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Workspace > Folder > Model > Part")).toEqualTypeOf<Part[]>();
});
it("resolves Model[$Health = 100] > Part.Enemy#Boss as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Model[$Health = 100] > Part.Enemy#Boss")).toEqualTypeOf<Part[]>();
});
it("resolves Model >> Part as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Model >> Part")).toEqualTypeOf<Part[]>();
});
it("resolves Model >> [$OnFire = true] as Instance[]", () => {
	expectTypeOf(game.QueryDescendants("Model >> [$OnFire = true]")).toEqualTypeOf<Instance[]>();
});
it("resolves > Model as Model[]", () => {
	expectTypeOf(game.QueryDescendants("> Model")).toEqualTypeOf<Model[]>();
});
it("resolves Model > .Tagged as Instance[]", () => {
	expectTypeOf(game.QueryDescendants("Model > .Tagged")).toEqualTypeOf<Instance[]>();
});
it("resolves Folder > #SpecialPart as Instance[]", () => {
	expectTypeOf(game.QueryDescendants("Folder > #SpecialPart")).toEqualTypeOf<Instance[]>();
});

// Tags / names without a class resolve to Instance

it("resolves .Fruit as Instance[]", () => {
	expectTypeOf(game.QueryDescendants(".Fruit")).toEqualTypeOf<Instance[]>();
});
it("resolves #MyPart as Instance[]", () => {
	expectTypeOf(game.QueryDescendants("#MyPart")).toEqualTypeOf<Instance[]>();
});

// Selector lists (comma) union the subjects

it("resolves Part, Model, SpotLight as (Part | Model | SpotLight)[]", () => {
	expectTypeOf(game.QueryDescendants("Part, Model, SpotLight")).toEqualTypeOf<(Part | Model | SpotLight)[]>();
});
it("resolves Folder > Part, Model .Foo, ImageButton#CloseButton as (Part | Model | ImageButton)[]", () => {
	expectTypeOf(game.QueryDescendants("Folder > Part, Model .Foo, ImageButton#CloseButton")).toEqualTypeOf<
		(Part | Model | ImageButton)[]
	>();
});
it("resolves Model.Apple[$Kind = Red], Part#Tree as (Model | Part)[]", () => {
	expectTypeOf(game.QueryDescendants("Model.Apple[$Kind = Red], Part#Tree")).toEqualTypeOf<(Model | Part)[]>();
});
it("resolves Part[Anchored=true], Model > SpotLight.Bright, ImageButton, .UI as (Part | SpotLight | ImageButton | Instance)[]", () => {
	expectTypeOf(
		game.QueryDescendants("Part[Anchored=true], Model > SpotLight.Bright, ImageButton, .UI"),
	).toEqualTypeOf<(Part | SpotLight | ImageButton | Instance)[]>();
});

// Pseudo-classes (`:not` / `:has`)

it("resolves Part:not(.Foo) as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part:not(.Foo)")).toEqualTypeOf<Part[]>();
});
it("resolves Model:has(.Child) as Model[]", () => {
	expectTypeOf(game.QueryDescendants("Model:has(.Child)")).toEqualTypeOf<Model[]>();
});
it("resolves Folder > Part:not(#Excluded) as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Folder > Part:not(#Excluded)")).toEqualTypeOf<Part[]>();
});
it("resolves Part:not(.A), Model:has(#B) as (Part | Model)[]", () => {
	expectTypeOf(game.QueryDescendants("Part:not(.A), Model:has(#B)")).toEqualTypeOf<(Part | Model)[]>();
});
it("resolves Part:not(.A, .B, .C) as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part:not(.A, .B, .C)")).toEqualTypeOf<Part[]>();
});
it("resolves Part.Enemy:not(#Boss) as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part.Enemy:not(#Boss)")).toEqualTypeOf<Part[]>();
});
it("resolves Part#Boss:has(.Weapon) as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part#Boss:has(.Weapon)")).toEqualTypeOf<Part[]>();
});
it("resolves Part.Enemy:not(.A), Model as (Part | Model)[]", () => {
	expectTypeOf(game.QueryDescendants("Part.Enemy:not(.A), Model")).toEqualTypeOf<(Part | Model)[]>();
});
it("resolves Part:not(.Rotten).Fruit as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part:not(.Rotten).Fruit")).toEqualTypeOf<Part[]>();
});
it("resolves Part:has(Model[Name = 'a,b'], Folder) as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part:has(Model[Name = 'a,b'], Folder)")).toEqualTypeOf<Part[]>();
});
it("resolves Part:has(Model:has([Name = 'a,b']), Folder), TextButton as (Part | TextButton)[]", () => {
	expectTypeOf(game.QueryDescendants("Part:has(Model:has([Name = 'a,b']), Folder), TextButton")).toEqualTypeOf<
		(Part | TextButton)[]
	>();
});
it("resolves :not(SpotLight, PointLight) as Instance[]", () => {
	expectTypeOf(game.QueryDescendants(":not(SpotLight, PointLight)")).toEqualTypeOf<Instance[]>();
});
it("resolves :has(Tool) as Instance[]", () => {
	expectTypeOf(game.QueryDescendants(":has(Tool)")).toEqualTypeOf<Instance[]>();
});
it("resolves MeshPart:has(> .SwordPart) as MeshPart[]", () => {
	expectTypeOf(game.QueryDescendants("MeshPart:has(> .SwordPart)")).toEqualTypeOf<MeshPart[]>();
});
it("resolves MeshPart:has(> :not(SurfaceAppearance, Texture)) as MeshPart[]", () => {
	expectTypeOf(game.QueryDescendants("MeshPart:has(> :not(SurfaceAppearance, Texture))")).toEqualTypeOf<MeshPart[]>();
});

it("resolves Part:has(Model:not(.A)):not(.B) > Folder, TextButton:has(> :not(Frame)) as (Folder | TextButton)[]", () => {
	expectTypeOf(
		game.QueryDescendants("Part:has(Model:not(.A)):not(.B) > Folder, TextButton:has(> :not(Frame))"),
	).toEqualTypeOf<(Folder | TextButton)[]>();
});
it("resolves Part:not(:has(Model, Folder)):has(TextLabel), Model as (Part | Model)[]", () => {
	expectTypeOf(game.QueryDescendants("Part:not(:has(Model, Folder)):has(TextLabel), Model")).toEqualTypeOf<
		(Part | Model)[]
	>();
});

// Quoted attribute values

it("resolves Part[Name = 'Hello, World'] as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part[Name = 'Hello, World']")).toEqualTypeOf<Part[]>();
});
it("resolves Model[Name = 'a > b'] > Part as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Model[Name = 'a > b'] > Part")).toEqualTypeOf<Part[]>();
});
it("resolves Model[Name = 'a], b > c'] > TextButton as TextButton[]", () => {
	expectTypeOf(game.QueryDescendants("Model[Name = 'a], b > c'] > TextButton")).toEqualTypeOf<TextButton[]>();
});

// Dynamic (non-literal) and empty selectors fall back to Instance[]

it("falls back for dynamic selectors", () => {
	expectTypeOf(game.QueryDescendants(game.Name)).toEqualTypeOf<Instance[]>();
});
it("falls back for empty selectors", () => {
	expectTypeOf(game.QueryDescendants("")).toEqualTypeOf<Instance[]>();
});

// Validation: readable error strings

it("accepts supported selectors", () => {
	expectTypeOf<Selector.ValidateSelector<"Part">>().toEqualTypeOf<"Part">();
});
it("reports unsupported pseudo-classes", () => {
	expectTypeOf<
		Selector.ValidateSelector<"Part:foo(x)">
	>().toEqualTypeOf<"Invalid selector: ':foo' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)">();
});
it("reports unsupported pseudo-classes without arguments", () => {
	expectTypeOf<
		Selector.ValidateSelector<"Part:hover">
	>().toEqualTypeOf<"Invalid selector: ':hover' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)">();
});
it("reports trailing commas", () => {
	expectTypeOf<
		Selector.ValidateSelector<"Part,">
	>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();
});
it("reports leading commas", () => {
	expectTypeOf<
		Selector.ValidateSelector<", Part">
	>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();
});
it("reports empty selector-list entries", () => {
	expectTypeOf<
		Selector.ValidateSelector<"Part,,Model">
	>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();
});
it("ignores pseudo-class syntax in quoted values", () => {
	expectTypeOf<Selector.ValidateSelector<"Part[Name=':foo(x)']">>().toEqualTypeOf<"Part[Name=':foo(x)']">();
});
it("ignores commas in quoted values", () => {
	expectTypeOf<Selector.ValidateSelector<"Part[Name=',']">>().toEqualTypeOf<"Part[Name=',']">();
});
it("preserves URLs in quoted values", () => {
	expectTypeOf<
		Selector.ValidateSelector<"Part[Name='http://example.com']">
	>().toEqualTypeOf<"Part[Name='http://example.com']">();
});
it("preserves commas in bracket values", () => {
	expectTypeOf<Selector.ValidateSelector<"Part[Name='Hello,World']">>().toEqualTypeOf<"Part[Name='Hello,World']">();
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

it('resolves Part[Name="O\'Brien"], Model[Name="O\'Brien"] as (Part | Model)[]', () => {
	expectTypeOf(game.QueryDescendants(`Part[Name="O'Brien"], Model[Name="O'Brien"]`)).toEqualTypeOf<
		(Part | Model)[]
	>();
});
it('resolves Part[Name="a], > Folder"] as Part[]', () => {
	expectTypeOf(game.QueryDescendants(`Part[Name="a], > Folder"]`)).toEqualTypeOf<Part[]>();
});
it('resolves Part[Name="a]:foo(x)"] as Part[]', () => {
	expectTypeOf(game.QueryDescendants(`Part[Name="a]:foo(x)"]`)).toEqualTypeOf<Part[]>();
});
it('resolves Part[Name="a,b"]:has(> :not(Folder)) as Part[]', () => {
	expectTypeOf(game.QueryDescendants(`Part[Name="a,b"]:has(> :not(Folder))`)).toEqualTypeOf<Part[]>();
});
it('resolves Folder[Name="("] > Part:has(:not(Model)) as Part[]', () => {
	expectTypeOf(game.QueryDescendants(`Folder[Name="("] > Part:has(:not(Model))`)).toEqualTypeOf<Part[]>();
});
it("resolves Part[Name='a\"b'], Model[Name=\"a'b\"] as (Part | Model)[]", () => {
	expectTypeOf(game.QueryDescendants(`Part[Name='a"b'], Model[Name="a'b"]`)).toEqualTypeOf<(Part | Model)[]>();
});
it('resolves Part[Name="(),:not(,)"] as Part[]', () => {
	expectTypeOf(game.QueryDescendants(`Part[Name="(),:not(,)"]`)).toEqualTypeOf<Part[]>();
});
it("resolves Part:has([$FuelCapacity]) as Part[]", () => {
	expectTypeOf(game.QueryDescendants(`Part:has([$FuelCapacity])`)).toEqualTypeOf<Part[]>();
});
it("resolves Part, [$FuelCapacity] as (Part | Instance)[]", () => {
	expectTypeOf(game.QueryDescendants(`Part, [$FuelCapacity]`)).toEqualTypeOf<(Part | Instance)[]>();
});

it('resolves Part[Name="a\\"], > Model"], Folder as (Part | Folder)[]', () => {
	expectTypeOf(game.QueryDescendants('Part[Name="a\\"], > Model"], Folder')).toEqualTypeOf<(Part | Folder)[]>();
});
it("resolves Part[Name='a\\'], > Model'], Folder as (Part | Folder)[]", () => {
	expectTypeOf(game.QueryDescendants("Part[Name='a\\'], > Model'], Folder")).toEqualTypeOf<(Part | Folder)[]>();
});
it('resolves Part[Name="a\\\\"], Model as (Part | Model)[]', () => {
	expectTypeOf(game.QueryDescendants('Part[Name="a\\\\"], Model')).toEqualTypeOf<(Part | Model)[]>();
});

// Dynamic templates can introduce combinators or additional selector-list branches.

it("falls back when a tag is dynamic", () => {
	expectTypeOf(game.QueryDescendants(`Part.${game.Name}`)).toEqualTypeOf<Instance[]>();
});
it("falls back when a name is dynamic", () => {
	expectTypeOf(game.QueryDescendants(`Part#${game.Name}`)).toEqualTypeOf<Instance[]>();
});
it("falls back when a pseudo-class argument is dynamic", () => {
	expectTypeOf(game.QueryDescendants(`Part:has(${game.Name})`)).toEqualTypeOf<Instance[]>();
});
it("falls back when a filter value is dynamic", () => {
	expectTypeOf(game.QueryDescendants(`Part[Name="${game.Name}"]`)).toEqualTypeOf<Instance[]>();
});
declare const numericTemplate: `Part.Tag${number}`;
it("resolves numeric template as Instance[]", () => {
	expectTypeOf(game.QueryDescendants(numericTemplate)).toEqualTypeOf<Instance[]>();
});
declare const finiteTemplate: `Part.Tag${boolean}`;
it("resolves finite template as Part[]", () => {
	expectTypeOf(game.QueryDescendants(finiteTemplate)).toEqualTypeOf<Part[]>();
});
declare const selectorUnion: "Part" | "Model";
it("resolves selector union as (Part | Model)[]", () => {
	expectTypeOf(game.QueryDescendants(selectorUnion)).toEqualTypeOf<(Part | Model)[]>();
});
declare const mixedTemplateUnion: "Part" | `Model.${string}`;
it("resolves mixed template union as (Part | Instance)[]", () => {
	expectTypeOf(game.QueryDescendants(mixedTemplateUnion)).toEqualTypeOf<(Part | Instance)[]>();
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
it("validates each selector union member independently", () => {
	expectTypeOf<Selector.ValidateSelector<"Part" | "Model:foo(x)">>().toEqualTypeOf<
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

it("resolves Part[Material=Neon] as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part[Material=Neon]")).toEqualTypeOf<Part[]>();
});
it("resolves :not([$OnFire]) as Instance[]", () => {
	expectTypeOf(game.QueryDescendants(":not([$OnFire])")).toEqualTypeOf<Instance[]>();
});
it("resolves >> Part as Part[]", () => {
	expectTypeOf(game.QueryDescendants(">> Part")).toEqualTypeOf<Part[]>();
});
it("resolves :not(Model > .SwordPart) as Instance[]", () => {
	expectTypeOf(game.QueryDescendants(":not(Model > .SwordPart)")).toEqualTypeOf<Instance[]>();
});
it("resolves \n Part\n >\tModel\r\n as Model[]", () => {
	expectTypeOf(game.QueryDescendants("\n Part\n >\tModel\r\n")).toEqualTypeOf<Model[]>();
});
it("resolves Part\t.Fruit as Part[]", () => {
	expectTypeOf(game.QueryDescendants("Part\t.Fruit")).toEqualTypeOf<Part[]>();
});
it("resolves MeshPart:has(\n> :not(SurfaceAppearance, Texture)\n) as MeshPart[]", () => {
	expectTypeOf(game.QueryDescendants("MeshPart:has(\n> :not(SurfaceAppearance, Texture)\n)")).toEqualTypeOf<
		MeshPart[]
	>();
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

it("falls back for trailing combinators", () => {
	expectTypeOf(game.QueryDescendants("Model >")).toEqualTypeOf<Instance[]>();
});
it("falls back for trailing combinators after nested pseudo-classes", () => {
	expectTypeOf(game.QueryDescendants("Part:has(Model:has(.x)) >")).toEqualTypeOf<Instance[]>();
});
