import { describe, expectTypeOf, it } from "vitest";

type Twice<S extends string> = `${S}${S}`;
type Times16<S extends string> = Twice<Twice<Twice<Twice<S>>>>;
type Times64<S extends string> = Twice<Twice<Times16<S>>>;
type Times256<S extends string> = Twice<Twice<Times64<S>>>;

describe("selector work limits", () => {
	it("should resolve long selector lists within the work limit", () => {
		let longList!: `${Times64<"Part.Fruit,">}Model`;

		expectTypeOf(game.QueryDescendants(longList)).toEqualTypeOf<Array<Model | Part>>();
	});

	it("should resolve long names within the work limit", () => {
		let longNestedName!: `Part.${Times256<"abcdef">}:has(:not(Model))`;

		expectTypeOf(game.QueryDescendants(longNestedName)).toEqualTypeOf<Array<Part>>();
	});

	it("should resolve long quoted values within the work limit", () => {
		let longQuotedValue!: `Part[Name="${Times256<"a,>()">}"]:has(:not(Model))`;

		expectTypeOf(game.QueryDescendants(longQuotedValue)).toEqualTypeOf<Array<Part>>();
	});

	it("should fall back when selector lists exceed the work limit", () => {
		let excessiveList!: `${Times256<"Part,">}Model`;

		expectTypeOf(game.QueryDescendants(excessiveList)).toEqualTypeOf<Array<Instance>>();
	});

	it("should fall back when pseudo-class groups exceed the work limit", () => {
		let excessiveGroups!: `Part${Times256<":has(Model)">}, Model`;

		expectTypeOf(game.QueryDescendants(excessiveGroups)).toEqualTypeOf<Array<Instance>>();
	});

	it("should fall back when pseudo-class nesting exceeds the work limit", () => {
		let excessiveNesting!: `Part${Times256<":has(">}Model${Times256<")">}, Model`;

		expectTypeOf(game.QueryDescendants(excessiveNesting)).toEqualTypeOf<Array<Instance>>();
	});

	it("should fall back when filters exceed the work limit", () => {
		let excessiveFilters!: `Part${Times256<"[$FuelCapacity]">}, Model`;

		expectTypeOf(game.QueryDescendants(excessiveFilters)).toEqualTypeOf<Array<Instance>>();
	});

	it("should fall back when quoted filters exceed the work limit", () => {
		let excessiveQuotes!: `Part${Times256<'[Name="x"]'>}, Model`;

		expectTypeOf(game.QueryDescendants(excessiveQuotes)).toEqualTypeOf<Array<Instance>>();
	});

	it("should fall back when combinators exceed the work limit", () => {
		let excessiveCombinators!: `${Times256<"Folder >">}Part`;

		expectTypeOf(game.QueryDescendants(excessiveCombinators)).toEqualTypeOf<Array<Instance>>();
	});

	it("should fall back when spaces exceed the work limit", () => {
		let excessiveWhitespace!: `${Times256<" ">}Part`;

		expectTypeOf(game.QueryDescendants(excessiveWhitespace)).toEqualTypeOf<Array<Instance>>();
	});

	it("should fall back when tabs exceed the work limit", () => {
		let excessiveTabs!: `${Times256<"\t">}Part`;

		expectTypeOf(game.QueryDescendants(excessiveTabs)).toEqualTypeOf<Array<Instance>>();
	});

	it("should fall back when escaped values exceed the work limit", () => {
		let excessiveEscapedValue!: `Part[Name="\\${Times256<"x">}"], Model`;

		expectTypeOf(game.QueryDescendants(excessiveEscapedValue)).toEqualTypeOf<Array<Instance>>();
	});
});
