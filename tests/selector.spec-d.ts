import { describe, expectTypeOf, it } from "vitest";

describe("QueryDescendants selectors", () => {
	it("should resolve Part as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Part.Fruit as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part.Fruit")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Part#RedTree as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part#RedTree")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve BasePart as BasePart[]", () => {
		expectTypeOf(game.QueryDescendants("BasePart")).toEqualTypeOf<Array<BasePart>>();
	});

	it("should resolve Part[CanCollide = false] as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part[CanCollide = false]")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Part[$Type=Enemy][$Level=5][Transparency=0.5].Boss#FinalBoss as Part[]", () => {
		expectTypeOf(
			game.QueryDescendants("Part[$Type=Enemy][$Level=5][Transparency=0.5].Boss#FinalBoss"),
		).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Part[Transparency=0.5] as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part[Transparency=0.5]")).toEqualTypeOf<Array<Part>>();
	});

	it('should resolve Part[Name="a > b"] > Model as Model[]', () => {
		expectTypeOf(game.QueryDescendants('Part[Name="a > b"] > Model')).toEqualTypeOf<Array<Model>>();
	});

	it("should resolve [CanCollide = false] as Instance[]", () => {
		expectTypeOf(game.QueryDescendants("[CanCollide = false]")).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve [$FuelCapacity] as Instance[]", () => {
		expectTypeOf(game.QueryDescendants("[$FuelCapacity]")).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve [$FuelCapacity = 75] as Instance[]", () => {
		expectTypeOf(game.QueryDescendants("[$FuelCapacity = 75]")).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve Workspace > Folder > Model > Part as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Workspace > Folder > Model > Part")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Model[$Health = 100] > Part.Enemy#Boss as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Model[$Health = 100] > Part.Enemy#Boss")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Model >> Part as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Model >> Part")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Model >> [$OnFire = true] as Instance[]", () => {
		expectTypeOf(game.QueryDescendants("Model >> [$OnFire = true]")).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve > Model as Model[]", () => {
		expectTypeOf(game.QueryDescendants("> Model")).toEqualTypeOf<Array<Model>>();
	});

	it("should resolve Model > .Tagged as Instance[]", () => {
		expectTypeOf(game.QueryDescendants("Model > .Tagged")).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve Folder > #SpecialPart as Instance[]", () => {
		expectTypeOf(game.QueryDescendants("Folder > #SpecialPart")).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve .Fruit as Instance[]", () => {
		expectTypeOf(game.QueryDescendants(".Fruit")).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve #MyPart as Instance[]", () => {
		expectTypeOf(game.QueryDescendants("#MyPart")).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve Part, Model, SpotLight as (Part | Model | SpotLight)[]", () => {
		expectTypeOf(game.QueryDescendants("Part, Model, SpotLight")).toEqualTypeOf<Array<Model | Part | SpotLight>>();
	});

	it("should resolve Folder > Part, Model .Foo, ImageButton#CloseButton as (Part | Model | ImageButton)[]", () => {
		expectTypeOf(game.QueryDescendants("Folder > Part, Model .Foo, ImageButton#CloseButton")).toEqualTypeOf<
			Array<ImageButton | Model | Part>
		>();
	});

	it("should resolve Model.Apple[$Kind = Red], Part#Tree as (Model | Part)[]", () => {
		expectTypeOf(game.QueryDescendants("Model.Apple[$Kind = Red], Part#Tree")).toEqualTypeOf<Array<Model | Part>>();
	});

	it("should resolve Part[Anchored=true], Model > SpotLight.Bright, ImageButton, .UI as (Part | SpotLight | ImageButton | Instance)[]", () => {
		expectTypeOf(
			game.QueryDescendants("Part[Anchored=true], Model > SpotLight.Bright, ImageButton, .UI"),
		).toEqualTypeOf<Array<ImageButton | Instance | Part | SpotLight>>();
	});

	it("should resolve Part:not(.Foo) as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part:not(.Foo)")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Model:has(.Child) as Model[]", () => {
		expectTypeOf(game.QueryDescendants("Model:has(.Child)")).toEqualTypeOf<Array<Model>>();
	});

	it("should resolve Folder > Part:not(#Excluded) as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Folder > Part:not(#Excluded)")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Part:not(.A), Model:has(#B) as (Part | Model)[]", () => {
		expectTypeOf(game.QueryDescendants("Part:not(.A), Model:has(#B)")).toEqualTypeOf<Array<Model | Part>>();
	});

	it("should resolve Part:not(.A, .B, .C) as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part:not(.A, .B, .C)")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Part.Enemy:not(#Boss) as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part.Enemy:not(#Boss)")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Part#Boss:has(.Weapon) as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part#Boss:has(.Weapon)")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Part.Enemy:not(.A), Model as (Part | Model)[]", () => {
		expectTypeOf(game.QueryDescendants("Part.Enemy:not(.A), Model")).toEqualTypeOf<Array<Model | Part>>();
	});

	it("should resolve Part:not(.Rotten).Fruit as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part:not(.Rotten).Fruit")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Part:has(Model[Name = 'a,b'], Folder) as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part:has(Model[Name = 'a,b'], Folder)")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Part:has(Model:has([Name = 'a,b']), Folder), TextButton as (Part | TextButton)[]", () => {
		expectTypeOf(game.QueryDescendants("Part:has(Model:has([Name = 'a,b']), Folder), TextButton")).toEqualTypeOf<
			Array<Part | TextButton>
		>();
	});

	it("should resolve :not(SpotLight, PointLight) as Instance[]", () => {
		expectTypeOf(game.QueryDescendants(":not(SpotLight, PointLight)")).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve :has(Tool) as Instance[]", () => {
		expectTypeOf(game.QueryDescendants(":has(Tool)")).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve MeshPart:has(> .SwordPart) as MeshPart[]", () => {
		expectTypeOf(game.QueryDescendants("MeshPart:has(> .SwordPart)")).toEqualTypeOf<Array<MeshPart>>();
	});

	it("should resolve MeshPart:has(> :not(SurfaceAppearance, Texture)) as MeshPart[]", () => {
		expectTypeOf(game.QueryDescendants("MeshPart:has(> :not(SurfaceAppearance, Texture))")).toEqualTypeOf<
			Array<MeshPart>
		>();
	});

	it("should resolve Part:has(Model:not(.A)):not(.B) > Folder, TextButton:has(> :not(Frame)) as (Folder | TextButton)[]", () => {
		expectTypeOf(
			game.QueryDescendants("Part:has(Model:not(.A)):not(.B) > Folder, TextButton:has(> :not(Frame))"),
		).toEqualTypeOf<Array<Folder | TextButton>>();
	});

	it("should resolve Part:not(:has(Model, Folder)):has(TextLabel), Model as (Part | Model)[]", () => {
		expectTypeOf(game.QueryDescendants("Part:not(:has(Model, Folder)):has(TextLabel), Model")).toEqualTypeOf<
			Array<Model | Part>
		>();
	});

	it("should resolve Part[Name = 'Hello, World'] as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part[Name = 'Hello, World']")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Model[Name = 'a > b'] > Part as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Model[Name = 'a > b'] > Part")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Model[Name = 'a], b > c'] > TextButton as TextButton[]", () => {
		expectTypeOf(game.QueryDescendants("Model[Name = 'a], b > c'] > TextButton")).toEqualTypeOf<
			Array<TextButton>
		>();
	});

	it("should fall back for dynamic selectors", () => {
		expectTypeOf(game.QueryDescendants(game.Name)).toEqualTypeOf<Array<Instance>>();
	});

	it("should fall back for empty selectors", () => {
		expectTypeOf(game.QueryDescendants("")).toEqualTypeOf<Array<Instance>>();
	});

	describe("selector validation", () => {
		it("should accept supported selectors", () => {
			expectTypeOf<Selector.ValidateSelector<"Part">>().toEqualTypeOf<"Part">();
		});

		it("should report unsupported pseudo-classes", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part:foo(x)">
			>().toEqualTypeOf<"Invalid selector: ':foo' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)">();
		});

		it("should report unsupported pseudo-classes without arguments", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part:hover">
			>().toEqualTypeOf<"Invalid selector: ':hover' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)">();
		});

		it("should report trailing commas", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part,">
			>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();
		});

		it("should report leading commas", () => {
			expectTypeOf<
				Selector.ValidateSelector<", Part">
			>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();
		});

		it("should report empty selector-list entries", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part,,Model">
			>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();
		});

		it("should ignore pseudo-class syntax in quoted values", () => {
			expectTypeOf<Selector.ValidateSelector<"Part[Name=':foo(x)']">>().toEqualTypeOf<"Part[Name=':foo(x)']">();
		});

		it("should ignore commas in quoted values", () => {
			expectTypeOf<Selector.ValidateSelector<"Part[Name=',']">>().toEqualTypeOf<"Part[Name=',']">();
		});

		it("should preserve URLs in quoted values", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part[Name='http://example.com']">
			>().toEqualTypeOf<"Part[Name='http://example.com']">();
		});

		it("should preserve commas in bracket values", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part[Name='Hello,World']">
			>().toEqualTypeOf<"Part[Name='Hello,World']">();
		});

		it("should reject unsupported pseudo-classes at the call site", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part:foo(x)">
			>().toEqualTypeOf<"Invalid selector: ':foo' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)">();

			// @ts-expect-error -- invalid selector
			game.QueryDescendants("Part:foo(x)");
		});

		it("should reject trailing commas at the call site", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part,">
			>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();

			// @ts-expect-error -- invalid selector
			game.QueryDescendants("Part,");
		});

		it("should reject leading commas at the call site", () => {
			expectTypeOf<
				Selector.ValidateSelector<", Part">
			>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();

			// @ts-expect-error -- invalid selector
			game.QueryDescendants(", Part");
		});
	});

	it('should resolve Part[Name="O\'Brien"], Model[Name="O\'Brien"] as (Part | Model)[]', () => {
		expectTypeOf(game.QueryDescendants('Part[Name="O\'Brien"], Model[Name="O\'Brien"]')).toEqualTypeOf<
			Array<Model | Part>
		>();
	});

	it('should resolve Part[Name="a], > Folder"] as Part[]', () => {
		expectTypeOf(game.QueryDescendants('Part[Name="a], > Folder"]')).toEqualTypeOf<Array<Part>>();
	});

	it('should resolve Part[Name="a]:foo(x)"] as Part[]', () => {
		expectTypeOf(game.QueryDescendants('Part[Name="a]:foo(x)"]')).toEqualTypeOf<Array<Part>>();
	});

	it('should resolve Part[Name="a,b"]:has(> :not(Folder)) as Part[]', () => {
		expectTypeOf(game.QueryDescendants('Part[Name="a,b"]:has(> :not(Folder))')).toEqualTypeOf<Array<Part>>();
	});

	it('should resolve Folder[Name="("] > Part:has(:not(Model)) as Part[]', () => {
		expectTypeOf(game.QueryDescendants('Folder[Name="("] > Part:has(:not(Model))')).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Part[Name='a\"b'], Model[Name=\"a'b\"] as (Part | Model)[]", () => {
		expectTypeOf(game.QueryDescendants("Part[Name='a\"b'], Model[Name=\"a'b\"]")).toEqualTypeOf<
			Array<Model | Part>
		>();
	});

	it('should resolve Part[Name="(),:not(,)"] as Part[]', () => {
		expectTypeOf(game.QueryDescendants('Part[Name="(),:not(,)"]')).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Part:has([$FuelCapacity]) as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part:has([$FuelCapacity])")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve Part, [$FuelCapacity] as (Part | Instance)[]", () => {
		expectTypeOf(game.QueryDescendants("Part, [$FuelCapacity]")).toEqualTypeOf<Array<Instance | Part>>();
	});

	it('should resolve Part[Name="a\\"], > Model"], Folder as (Part | Folder)[]', () => {
		expectTypeOf(game.QueryDescendants('Part[Name="a\\"], > Model"], Folder')).toEqualTypeOf<
			Array<Folder | Part>
		>();
	});

	it("should resolve Part[Name='a\\'], > Model'], Folder as (Part | Folder)[]", () => {
		expectTypeOf(game.QueryDescendants("Part[Name='a\\'], > Model'], Folder")).toEqualTypeOf<
			Array<Folder | Part>
		>();
	});

	it('should resolve Part[Name="a\\\\"], Model as (Part | Model)[]', () => {
		expectTypeOf(game.QueryDescendants('Part[Name="a\\\\"], Model')).toEqualTypeOf<Array<Model | Part>>();
	});

	it("should fall back when a tag is dynamic", () => {
		expectTypeOf(game.QueryDescendants(`Part.${game.Name}`)).toEqualTypeOf<Array<Instance>>();
	});

	it("should fall back when a name is dynamic", () => {
		expectTypeOf(game.QueryDescendants(`Part#${game.Name}`)).toEqualTypeOf<Array<Instance>>();
	});

	it("should fall back when a pseudo-class argument is dynamic", () => {
		expectTypeOf(game.QueryDescendants(`Part:has(${game.Name})`)).toEqualTypeOf<Array<Instance>>();
	});

	it("should fall back when a filter value is dynamic", () => {
		expectTypeOf(game.QueryDescendants(`Part[Name="${game.Name}"]`)).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve numeric template as Instance[]", () => {
		let numericTemplate!: `Part.Tag${number}`;

		expectTypeOf(game.QueryDescendants(numericTemplate)).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve finite template as Part[]", () => {
		let finiteTemplate!: `Part.Tag${boolean}`;

		expectTypeOf(game.QueryDescendants(finiteTemplate)).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve selector union as (Part | Model)[]", () => {
		let selectorUnion!: "Model" | "Part";

		expectTypeOf(game.QueryDescendants(selectorUnion)).toEqualTypeOf<Array<Model | Part>>();
	});

	it("should resolve mixed template union as (Part | Instance)[]", () => {
		let mixedTemplateUnion!: "Part" | `Model.${string}`;

		expectTypeOf(game.QueryDescendants(mixedTemplateUnion)).toEqualTypeOf<Array<Instance | Part>>();
	});

	it("should reject unions containing an unsupported pseudo-class", () => {
		let invalidPseudoUnion!: "Model:foo(x)" | "Part";

		expectTypeOf<Selector.ValidateSelector<typeof invalidPseudoUnion>>().toEqualTypeOf<
			"Invalid selector: ':foo' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)" | "Part"
		>();

		// @ts-expect-error -- invalid selector
		game.QueryDescendants(invalidPseudoUnion);
	});

	it("should reject unions containing a trailing comma", () => {
		let invalidCommaUnion!: "Model," | "Part";

		expectTypeOf<Selector.ValidateSelector<typeof invalidCommaUnion>>().toEqualTypeOf<
			"Invalid selector: empty selector in list (check for a stray or trailing comma)" | "Part"
		>();

		// @ts-expect-error -- invalid selector
		game.QueryDescendants(invalidCommaUnion);
	});

	it("should validate each selector union member independently", () => {
		expectTypeOf<Selector.ValidateSelector<"Model:foo(x)" | "Part">>().toEqualTypeOf<
			"Invalid selector: ':foo' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)" | "Part"
		>();
	});

	describe("nested selector-list validation", () => {
		it("should reject leading commas in :not()", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part:not(,Model)">
			>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();

			// @ts-expect-error -- invalid selector
			game.QueryDescendants("Part:not(,Model)");
		});

		it("should reject trailing commas in :not()", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part:not(Model,)">
			>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();

			// @ts-expect-error -- invalid selector
			game.QueryDescendants("Part:not(Model,)");
		});

		it("should reject empty entries in :not() selector lists", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part:not(Model,,Folder)">
			>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();

			// @ts-expect-error -- invalid selector
			game.QueryDescendants("Part:not(Model,,Folder)");
		});

		it("should reject leading commas in :has()", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part:has(,Model)">
			>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();

			// @ts-expect-error -- invalid selector
			game.QueryDescendants("Part:has(,Model)");
		});

		it("should reject trailing commas in :has()", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part:has(Model,)">
			>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();

			// @ts-expect-error -- invalid selector
			game.QueryDescendants("Part:has(Model,)");
		});

		it("should reject trailing commas in nested pseudo-classes", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part:has(:not(Model,))">
			>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();

			// @ts-expect-error -- invalid selector
			game.QueryDescendants("Part:has(:not(Model,))");
		});

		it("should reject empty :not() arguments", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part:not()">
			>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();

			// @ts-expect-error -- invalid selector
			game.QueryDescendants("Part:not()");
		});

		it("should reject whitespace-only :has() arguments", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part:has( )">
			>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();

			// @ts-expect-error -- invalid selector
			game.QueryDescendants("Part:has( )");
		});

		it("should reject unsupported pseudo-classes nested in :has()", () => {
			expectTypeOf<
				Selector.ValidateSelector<"Part:has(Model:foo(.x))">
			>().toEqualTypeOf<"Invalid selector: ':foo' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)">();

			// @ts-expect-error -- invalid selector
			game.QueryDescendants("Part:has(Model:foo(.x))");
		});
	});

	it("should reject collection-only pseudo-classes", () => {
		expectTypeOf<
			Selector.ValidateSelector<"Part:in-radius(10, .Target)">
		>().toEqualTypeOf<"Invalid selector: ':in-radius' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)">();

		// @ts-expect-error -- invalid selector
		game.QueryDescendants("Part:in-radius(10, .Target)");
	});

	it("should resolve Part[Material=Neon] as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part[Material=Neon]")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve :not([$OnFire]) as Instance[]", () => {
		expectTypeOf(game.QueryDescendants(":not([$OnFire])")).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve >> Part as Part[]", () => {
		expectTypeOf(game.QueryDescendants(">> Part")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve :not(Model > .SwordPart) as Instance[]", () => {
		expectTypeOf(game.QueryDescendants(":not(Model > .SwordPart)")).toEqualTypeOf<Array<Instance>>();
	});

	it("should resolve \n Part\n >\tModel\r\n as Model[]", () => {
		expectTypeOf(game.QueryDescendants("\n Part\n >\tModel\r\n")).toEqualTypeOf<Array<Model>>();
	});

	it("should resolve Part\t.Fruit as Part[]", () => {
		expectTypeOf(game.QueryDescendants("Part\t.Fruit")).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve MeshPart:has(\n> :not(SurfaceAppearance, Texture)\n) as MeshPart[]", () => {
		expectTypeOf(game.QueryDescendants("MeshPart:has(\n> :not(SurfaceAppearance, Texture)\n)")).toEqualTypeOf<
			Array<MeshPart>
		>();
	});

	it("should reject tab-only entries in nested selector lists", () => {
		expectTypeOf<
			Selector.ValidateSelector<"Part:not(\t,Model)">
		>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();

		// @ts-expect-error -- invalid selector
		game.QueryDescendants("Part:not(\t,Model)");
	});

	it("should reject newline-only trailing entries in nested selector lists", () => {
		expectTypeOf<
			Selector.ValidateSelector<"Part:not(Model,\n)">
		>().toEqualTypeOf<"Invalid selector: empty selector in list (check for a stray or trailing comma)">();

		// @ts-expect-error -- invalid selector
		game.QueryDescendants("Part:not(Model,\n)");
	});

	it("should fall back for trailing combinators", () => {
		expectTypeOf(game.QueryDescendants("Model >")).toEqualTypeOf<Array<Instance>>();
	});

	it("should fall back for trailing combinators after nested pseudo-classes", () => {
		expectTypeOf(game.QueryDescendants("Part:has(Model:has(.x)) >")).toEqualTypeOf<Array<Instance>>();
	});
});
