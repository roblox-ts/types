/// <reference no-default-lib="true"/>

/**
 * Resolves the selector strings accepted by `Instance:QueryDescendants()` to the type of the
 * instances they match, so string-literal selectors get a precise return type. The grammar is
 * documented at https://create.roblox.com/docs/reference/engine/classes/Instance#QueryDescendants
 *
 * Only the class named in the last combinator segment affects the result, unioned across
 * comma-separated selectors. `.Tag` and `#Name` carry no class information and resolve to
 * `Instance`; attribute filters and pseudo-classes never change the class. Note that
 * whitespace is not a combinator in this grammar (descendant matching is `>>`), so spaces
 * are ignored rather than treated as separators.
 *
 * Dynamic templates and selectors exceeding the bounded analysis budget fall back to
 * `Instance`. Validation checks unsupported pseudo-classes and empty list entries; it
 * is not a complete runtime grammar check.
 */
declare namespace Selector {
	// Bounds are deliberately below TypeScript's recursion limit. A broad string means
	// analysis stopped; callers must preserve it as an Instance fallback, never a partial type.
	type OtherWhitespace = "\t" | "\n" | "\r" | "\f" | "\v";
	type Trim<T extends string, Steps extends Array<unknown> = []> = Steps["length"] extends 128
		? string
		: T extends `${infer S} `
			? Trim<S, [...Steps, unknown]>
			: T extends ` ${infer S}`
				? Trim<S, [...Steps, unknown]>
				: T;

	// Infinite template-literal key sets (including `${number}`) have no required keys.
	// Unlike `string extends S`, this also detects selectors such as `Part.${string}`.
	type IsDynamic<S extends string> = Record<never, never> extends Record<S, unknown> ? true : false;

	// Only the final combinator segment can determine the subject type.
	type LastSegment<S extends string, Steps extends Array<unknown> = []> = Steps["length"] extends 128
		? string
		: S extends `${string}>${infer R}`
			? LastSegment<R, [...Steps, unknown]>
			: S;

	type CutAt<S extends string, D extends string> = S extends `${infer Prefix}${D}${string}` ? Prefix : S;

	type LeadingClass<S extends string> = CutAt<CutAt<CutAt<CutAt<Trim<S>, ":">, ".">, "#">, " ">;

	// Consume a quoted value without interpreting the other quote character as syntax.
	// Values without backslashes use a single template match, regardless of their length.
	type QuotedRest<S extends string, Quote extends "'" | '"'> = S extends `${infer A}${Quote}${infer B}`
		? A extends `${string}\\${string}`
			? EscapedQuotedRest<S, Quote>
			: B
		: string;

	type EscapedQuotedRest<
		S extends string,
		Quote extends string,
		Steps extends Array<unknown> = [],
	> = Steps["length"] extends 256
		? string
		: S extends `\\${string}${infer Rest}`
			? EscapedQuotedRest<Rest, Quote, [...Steps, unknown]>
			: S extends `${Quote}${infer Rest}`
				? Rest
				: S extends `${string}${infer Rest}`
					? EscapedQuotedRest<Rest, Quote, [...Steps, unknown]>
					: string;

	type StripQuote<
		S extends string,
		Quote extends "'" | '"',
		Out extends string,
		Steps extends Array<unknown>,
	> = S extends `${infer A}${Quote}${infer B}`
		? QuotedRest<B, Quote> extends infer Rest extends string
			? string extends Rest
				? string
				: StripQuotes<Rest, `${Out}${A}`, [...Steps, unknown]>
			: never
		: `${Out}${S}`;

	type StripQuotes<
		S extends string,
		Out extends string = "",
		Steps extends Array<unknown> = [],
	> = Steps["length"] extends 128
		? string
		: S extends `${infer A}'${string}`
			? A extends `${string}"${string}`
				? StripQuote<S, '"', Out, Steps>
				: StripQuote<S, "'", Out, Steps>
			: S extends `${string}"${string}`
				? StripQuote<S, '"', Out, Steps>
				: `${Out}${S}`;

	// Quoted delimiters must be removed before filters or pseudo-class groups are read.
	// Sharing this normalization between validation and inference also lets the checker cache it.
	// A dot is an opaque filter marker: it preserves a nonempty selector inside :not([$x]).
	type StripFilters<S extends string, Steps extends Array<unknown> = []> = Steps["length"] extends 128
		? string
		: S extends `${infer A}[${string}]${infer B}`
			? StripFilters<`${A}.${B}`, [...Steps, unknown]>
			: S;
	type ReplaceWhitespace<
		S extends string,
		W extends string,
		Steps extends Array<unknown> = [],
	> = Steps["length"] extends 128
		? string
		: S extends `${infer A}${W}${infer B}`
			? ReplaceWhitespace<`${A} ${B}`, W, [...Steps, unknown]>
			: S;
	type NormalizeWhitespace<S extends string> = S extends `${string}${OtherWhitespace}${string}`
		? ReplaceWhitespace<
				ReplaceWhitespace<ReplaceWhitespace<ReplaceWhitespace<ReplaceWhitespace<S, "\t">, "\n">, "\r">, "\f">,
				"\v"
			>
		: S;
	type Normalize<S extends string> = NormalizeWhitespace<StripFilters<StripQuotes<S>>>;

	// Jump between parentheses rather than visiting every character. Quoted values and
	// filters are already opaque, so only these delimiters affect nesting.
	type StripClose<
		S extends string,
		Out extends string,
		Depth extends Array<unknown>,
		Steps extends Array<unknown>,
	> = S extends `${string})${infer Rest}`
		? Depth extends [unknown, ...infer D]
			? StripParens<Rest, Out, D, [...Steps, unknown]>
			: string
		: string;

	type StripParens<
		S extends string,
		Out extends string = "",
		Depth extends Array<unknown> = [],
		Steps extends Array<unknown> = [],
	> = Steps["length"] extends 128
		? string
		: S extends `${infer A}(${infer B}`
			? A extends `${string})${string}`
				? StripClose<S, Out, Depth, Steps>
				: StripParens<B, Depth extends [] ? `${Out}${A}` : Out, [...Depth, unknown], [...Steps, unknown]>
			: S extends `${string})${string}`
				? StripClose<S, Out, Depth, Steps>
				: Depth extends []
					? `${Out}${S}`
					: string;

	type FastClause<S extends string> = S extends keyof Instances
		? Instances[S]
		: LeadingClass<LastSegment<S>> extends infer C extends keyof Instances
			? Instances[C]
			: Instance;

	// Accumulate the union so long lists remain tail-recursive.
	type FastSolve<S extends string, Result = never, Steps extends Array<unknown> = []> = Steps["length"] extends 128
		? Instance
		: S extends `${infer A},${infer B}`
			? FastSolve<B, Result | FastClause<A>, [...Steps, unknown]>
			: Result | FastClause<S>;

	type StripFlatParens<S extends string, Steps extends Array<unknown> = []> = Steps["length"] extends 128
		? string
		: S extends `${infer A}(${string})${infer B}`
			? StripFlatParens<`${A}${B}`, [...Steps, unknown]>
			: S;

	type SolveNormalized<S extends string> = string extends S
		? Instance
		: S extends `${string}(${string}`
			? S extends `${string}(${string}(${string})${string})${string}`
				? FastSolve<StripParens<S>>
				: FastSolve<StripFlatParens<S>>
			: S extends `${string},${string}`
				? FastSolve<S>
				: FastClause<S>;

	type SupportedPseudo = "not" | "has";

	type CheckPseudos<S extends string, Steps extends Array<unknown> = []> = Steps["length"] extends 128
		? never
		: S extends `${string}:${infer R}`
			? R extends `${infer Name}(${infer Rest}`
				? Name extends SupportedPseudo
					? CheckPseudos<Rest, [...Steps, unknown]>
					: Name
				: R // ':' not followed by 'name(' -> pseudo-classes require arguments
			: never;

	// Parentheses delimit nested lists just as commas delimit their entries.
	type HasEmptyGroup<S extends string, Steps extends Array<unknown> = []> = Steps["length"] extends 128
		? false
		: S extends `${string}(${infer Rest}`
			? Trim<Rest> extends `)${string}` | `,${string}`
				? true
				: HasEmptyGroup<Rest, [...Steps, unknown]>
			: false;

	// The whole-empty selector "" is intentionally allowed.
	type HasEmptyListItem<S extends string> = S extends `${string},${string}` ? CheckListItems<S> : false;
	type CheckListItems<S extends string, Steps extends Array<unknown> = []> = Steps["length"] extends 128
		? false
		: S extends `${infer A},${infer B}`
			? Trim<A> extends "" | `${string}(` | `)${string}`
				? true
				: CheckListItems<B, [...Steps, unknown]>
			: Trim<S> extends "" | `)${string}`
				? true
				: false;

	type ValidateUnquoted<S extends string, Q extends string> = Q extends `${string}:${string}`
		? CheckPseudos<Q> extends infer Bad
			? [Bad] extends [never]
				? true extends HasEmptyListItem<Q> | HasEmptyGroup<Q>
					? `Invalid selector: empty selector in list (check for a stray or trailing comma)`
					: S
				: `Invalid selector: ':${Bad & string}' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)`
			: never
		: Q extends `${string},${string}`
			? true extends HasEmptyListItem<Q> | HasEmptyGroup<Q>
				? `Invalid selector: empty selector in list (check for a stray or trailing comma)`
				: S
			: S;

	// Distribute over the original selector so each normalized branch retains its own input.
	export type ValidateSelector<S extends string> = S extends `${string}${":" | ","}${string}`
		? IsDynamic<S> extends true
			? S
			: Normalize<S> extends infer Q extends string
				? string extends Q
					? S
					: ValidateUnquoted<S, Q>
				: never
		: S;

	export type Solve<S extends string> = S extends keyof Instances
		? Instances[S]
		: IsDynamic<S> extends true
			? Instance
			: SolveNormalized<Normalize<S>>;
}
