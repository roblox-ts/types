import { expectTypeOf, it } from "vitest";
// Doubling finite literal strings avoids giant fixtures and exercises the public call signature.
// These used to cause TS2589, so merely inspecting Selector.Solve is not sufficient.
type Twice<S extends string> = `${S}${S}`;
type Times16<S extends string> = Twice<Twice<Twice<Twice<S>>>>;
type Times64<S extends string> = Twice<Twice<Times16<S>>>;
type Times256<S extends string> = Twice<Twice<Times64<S>>>;

declare const longList: `${Times64<"Part.Fruit,">}Model`;
it("resolves long selector lists within the work limit", () => {
	expectTypeOf(game.QueryDescendants(longList)).toEqualTypeOf<(Part | Model)[]>();
});
declare const longNestedName: `Part.${Times256<"abcdef">}:has(:not(Model))`;
it("resolves long names within the work limit", () => {
	expectTypeOf(game.QueryDescendants(longNestedName)).toEqualTypeOf<Part[]>();
});
declare const longQuotedValue: `Part[Name="${Times256<"a,>()">}"]:has(:not(Model))`;
it("resolves long quoted values within the work limit", () => {
	expectTypeOf(game.QueryDescendants(longQuotedValue)).toEqualTypeOf<Part[]>();
});

// Work limits must discard the entire partial result, including unprocessed list branches.
declare const excessiveList: `${Times256<"Part,">}Model`;
it("falls back when selector lists exceed the work limit", () => {
	expectTypeOf(game.QueryDescendants(excessiveList)).toEqualTypeOf<Instance[]>();
});
declare const excessiveGroups: `Part${Times256<":has(Model)">}, Model`;
it("falls back when pseudo-class groups exceed the work limit", () => {
	expectTypeOf(game.QueryDescendants(excessiveGroups)).toEqualTypeOf<Instance[]>();
});
declare const excessiveNesting: `Part${Times256<":has(">}Model${Times256<")">}, Model`;
it("falls back when pseudo-class nesting exceeds the work limit", () => {
	expectTypeOf(game.QueryDescendants(excessiveNesting)).toEqualTypeOf<Instance[]>();
});
declare const excessiveFilters: `Part${Times256<"[$FuelCapacity]">}, Model`;
it("falls back when filters exceed the work limit", () => {
	expectTypeOf(game.QueryDescendants(excessiveFilters)).toEqualTypeOf<Instance[]>();
});
declare const excessiveQuotes: `Part${Times256<'[Name="x"]'>}, Model`;
it("falls back when quoted filters exceed the work limit", () => {
	expectTypeOf(game.QueryDescendants(excessiveQuotes)).toEqualTypeOf<Instance[]>();
});
declare const excessiveCombinators: `${Times256<"Folder >">}Part`;
it("falls back when combinators exceed the work limit", () => {
	expectTypeOf(game.QueryDescendants(excessiveCombinators)).toEqualTypeOf<Instance[]>();
});
declare const excessiveWhitespace: `${Times256<" ">}Part`;
it("falls back when spaces exceed the work limit", () => {
	expectTypeOf(game.QueryDescendants(excessiveWhitespace)).toEqualTypeOf<Instance[]>();
});
declare const excessiveTabs: `${Times256<"\t">}Part`;
it("falls back when tabs exceed the work limit", () => {
	expectTypeOf(game.QueryDescendants(excessiveTabs)).toEqualTypeOf<Instance[]>();
});
declare const excessiveEscapedValue: `Part[Name="\\${Times256<"x">}"], Model`;
it("falls back when escaped values exceed the work limit", () => {
	expectTypeOf(game.QueryDescendants(excessiveEscapedValue)).toEqualTypeOf<Instance[]>();
});
