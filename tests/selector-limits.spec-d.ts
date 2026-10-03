import { expectTypeOf, it } from "vitest";
// Doubling finite literal strings avoids giant fixtures and exercises the public call signature.
// These used to cause TS2589, so merely inspecting Selector.Solve is not sufficient.
type Twice<S extends string> = `${S}${S}`;
type Times16<S extends string> = Twice<Twice<Twice<Twice<S>>>>;
type Times64<S extends string> = Twice<Twice<Times16<S>>>;
type Times256<S extends string> = Twice<Twice<Times64<S>>>;

declare const longList: `${Times64<"Part.Fruit,">}Model`;
const longListResult = game.QueryDescendants(longList);
it("infers the type of long list result", () => {
	expectTypeOf(longListResult).toEqualTypeOf<(Part | Model)[]>();
});
declare const longNestedName: `Part.${Times256<"abcdef">}:has(:not(Model))`;
const longNestedResult = game.QueryDescendants(longNestedName);
it("infers the type of long nested result", () => {
	expectTypeOf(longNestedResult).toEqualTypeOf<Part[]>();
});
declare const longQuotedValue: `Part[Name="${Times256<"a,>()">}"]:has(:not(Model))`;
const longQuotedResult = game.QueryDescendants(longQuotedValue);
it("infers the type of long quoted result", () => {
	expectTypeOf(longQuotedResult).toEqualTypeOf<Part[]>();
});

// Work limits must discard the entire partial result, including unprocessed list branches.
declare const excessiveList: `${Times256<"Part,">}Model`;
const excessiveListResult = game.QueryDescendants(excessiveList);
it("infers the type of excessive list result", () => {
	expectTypeOf(excessiveListResult).toEqualTypeOf<Instance[]>();
});
declare const excessiveGroups: `Part${Times256<":has(Model)">}, Model`;
const excessiveGroupResult = game.QueryDescendants(excessiveGroups);
it("infers the type of excessive group result", () => {
	expectTypeOf(excessiveGroupResult).toEqualTypeOf<Instance[]>();
});
declare const excessiveNesting: `Part${Times256<":has(">}Model${Times256<")">}, Model`;
const excessiveNestedResult = game.QueryDescendants(excessiveNesting);
it("infers the type of excessive nested result", () => {
	expectTypeOf(excessiveNestedResult).toEqualTypeOf<Instance[]>();
});
declare const excessiveFilters: `Part${Times256<"[$FuelCapacity]">}, Model`;
const excessiveFilterResult = game.QueryDescendants(excessiveFilters);
it("infers the type of excessive filter result", () => {
	expectTypeOf(excessiveFilterResult).toEqualTypeOf<Instance[]>();
});
declare const excessiveQuotes: `Part${Times256<'[Name="x"]'>}, Model`;
const excessiveQuoteResult = game.QueryDescendants(excessiveQuotes);
it("infers the type of excessive quote result", () => {
	expectTypeOf(excessiveQuoteResult).toEqualTypeOf<Instance[]>();
});
declare const excessiveCombinators: `${Times256<"Folder >">}Part`;
const excessiveCombinatorResult = game.QueryDescendants(excessiveCombinators);
it("infers the type of excessive combinator result", () => {
	expectTypeOf(excessiveCombinatorResult).toEqualTypeOf<Instance[]>();
});
declare const excessiveWhitespace: `${Times256<" ">}Part`;
const excessiveWhitespaceResult = game.QueryDescendants(excessiveWhitespace);
it("infers the type of excessive whitespace result", () => {
	expectTypeOf(excessiveWhitespaceResult).toEqualTypeOf<Instance[]>();
});
declare const excessiveTabs: `${Times256<"\t">}Part`;
const excessiveTabResult = game.QueryDescendants(excessiveTabs);
it("infers the type of excessive tab result", () => {
	expectTypeOf(excessiveTabResult).toEqualTypeOf<Instance[]>();
});
declare const excessiveEscapedValue: `Part[Name="\\${Times256<"x">}"], Model`;
const excessiveEscapedResult = game.QueryDescendants(excessiveEscapedValue);
it("infers the type of excessive escaped result", () => {
	expectTypeOf(excessiveEscapedResult).toEqualTypeOf<Instance[]>();
});
