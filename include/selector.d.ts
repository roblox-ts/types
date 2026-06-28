/// <reference no-default-lib="true"/>

/**
 * Type-level resolver for the jQuery/CSS-like selector strings accepted by
 * `Instance:QueryDescendants()`.
 *
 * The selector grammar mirrors Roblox's `StyleRule` syntax:
 *
 * - `ClassName` — matches via `IsA` (polymorphic). Abstract bases such as
 *   `BasePart`/`GuiObject` are valid and resolve to that base type.
 * - `.Tag` (CollectionService) / `#Name` (`Instance.Name`) — resolve to
 *   `Instance` because they carry no class information.
 * - `[property = value]` / `[$attribute = value]` — attribute/property filters.
 * - Combinators: `>` (child), `>>` (descendant, also the implicit first
 *   filter), `,` (selector list).
 * - Pseudo-classes: `:not(...)`, `:has(...)`.
 *
 * Whitespace is intentionally **not** a descendant combinator — Roblox uses
 * `>>`, unlike CSS.
 *
 * Only the **last** combinator segment's class determines the return type (the
 * selector's subject), unioned across comma-separated selectors. Pseudo-classes
 * never change the subject's class, so they are treated as ignorable filters.
 *
 * @see ValidateSelector — surfaces readable compile errors for malformed selectors.
 * @see Solve — resolves a selector string to its matched instance type.
 */
declare namespace Selector {
	type BreakSymbols = "[" | "]" | "<" | ">" | "=" | "'" | "." | "#" | "," | ":" | "(" | ")";
	type ContinuousBreakSymbols = ">";

	type FollowBreakSymbols<T extends string, Curr extends string = ""> = T extends `${infer C}${infer Rest}`
		? C extends ContinuousBreakSymbols
			? FollowBreakSymbols<Rest, `${Curr}${C}`>
			: [T, Curr]
		: [T, Curr];

	type Trim<T extends string> = T extends `${infer S} ` ? Trim<S> : T extends ` ${infer S}` ? Trim<S> : T;

	type Lex<
		T extends string,
		Curr extends string = "",
		Acc extends Array<string> = [],
	> = T extends `${infer C}${infer Rest}`
		? C extends BreakSymbols
			? FollowBreakSymbols<Rest, C> extends [infer NextT extends string, infer Brk extends string]
				? Curr extends ""
					? Lex<NextT, Curr, [...Acc, Brk]>
					: Lex<NextT, "", [...Acc, Curr, Brk]>
				: never
			: Lex<Rest, `${Curr}${C}`, Acc>
		: Curr extends ""
			? Acc
			: [...Acc, Curr];

	type ArrayWith<C extends number, Acc extends Array<any> = []> = Acc extends { length: C }
		? Acc
		: ArrayWith<C, [...Acc, any]>;

	type Consume<T extends Array<any>, C extends number> = T extends [...ArrayWith<C>, ...infer R] ? R : [];

	type ConsumeWhitespace<T extends Array<string>> = T extends [
		infer U extends string,
		...infer Rest extends Array<string>,
	]
		? Trim<U> extends ""
			? ConsumeWhitespace<Rest>
			: [U, ...Rest]
		: never;

	// Paren-depth- and quote-aware: a break character only separates when we are
	// at paren depth 0 and outside a quoted string. This keeps the contents of
	// :not(...) / :has(...) — including inner "," and ">"/">>" — inside one group,
	// and also prevents special characters inside quoted attribute values from
	// being treated as separators.
	type ParseSeparatedWithBreak<
		Tokens extends Array<string>,
		BreakCharacters extends string,
		Curr extends Array<string> = [],
		CurrBreak extends string | undefined = undefined,
		Acc extends Array<[Array<string>, string | undefined]> = [],
		Depth extends Array<any> = [],
		InQuote extends boolean = false,
	> = Tokens extends [infer T extends string, ...infer Rest extends Array<string>]
		? T extends "'"
			? ParseSeparatedWithBreak<
					Rest,
					BreakCharacters,
					[...Curr, T],
					CurrBreak,
					Acc,
					Depth,
					InQuote extends true ? false : true
				>
			: InQuote extends true
				? ParseSeparatedWithBreak<Rest, BreakCharacters, [...Curr, T], CurrBreak, Acc, Depth, InQuote>
				: T extends "("
					? ParseSeparatedWithBreak<
							Rest,
							BreakCharacters,
							[...Curr, T],
							CurrBreak,
							Acc,
							[...Depth, any],
							InQuote
						>
					: T extends ")"
						? ParseSeparatedWithBreak<
								Rest,
								BreakCharacters,
								[...Curr, T],
								CurrBreak,
								Acc,
								Depth extends [any, ...infer D] ? D : [],
								InQuote
							>
						: Depth extends []
							? T extends BreakCharacters
								? ParseSeparatedWithBreak<
										Rest,
										BreakCharacters,
										[],
										T,
										[...Acc, [Curr, CurrBreak]],
										Depth,
										InQuote
									>
								: ParseSeparatedWithBreak<
										Rest,
										BreakCharacters,
										[...Curr, T],
										CurrBreak,
										Acc,
										Depth,
										InQuote
									>
							: ParseSeparatedWithBreak<
									Rest,
									BreakCharacters,
									[...Curr, T],
									CurrBreak,
									Acc,
									Depth,
									InQuote
								>
		: Curr extends []
			? CurrBreak extends undefined
				? Acc
				: [...Acc, [[], CurrBreak]]
			: [...Acc, [Curr, CurrBreak]];

	export type ParseSeparated<Tokens extends Array<string>, BreakCharacters extends string> =
		ParseSeparatedWithBreak<Tokens, BreakCharacters> extends infer L extends Array<
			[Array<string>, string | undefined]
		>
			? { [k in keyof L]: L[k][0] }
			: never;

	type ParseQuotedString<Tokens extends Array<string>, Acc extends string = ""> = Tokens extends
		| []
		| ["'", ...Array<any>]
		? [Tokens, Acc]
		: ParseQuotedString<Consume<Tokens, 1>, `${Acc}${Tokens[0]}`>;

	type MaybeParseQuotesIntoString<Tokens extends Array<string>> = Tokens[0] extends "'"
		? ParseQuotedString<Consume<Tokens, 1>>[1]
		: Trim<Tokens[0]>;

	type MaybeParseProperties<Tokens extends Array<string>, Result> = Tokens extends []
		? Result
		: Tokens[0] extends "["
			? Result & {
					filter: {
						key: Trim<Tokens[1]>;
						value: MaybeParseQuotesIntoString<ConsumeWhitespace<Consume<Tokens, 3>>>;
					};
				}
			: Result;

	type ParseClauseInner<Tokens extends Array<string>> = Tokens extends []
		? { kind: "empty" }
		: Tokens[0] extends "."
			? MaybeParseProperties<Consume<Tokens, 2>, { kind: "tag"; tag: Trim<Tokens[1]> }>
			: Tokens[0] extends "#"
				? MaybeParseProperties<Consume<Tokens, 2>, { kind: "name"; name: Trim<Tokens[1]> }>
				: Trim<Tokens[0]> extends ""
					? { kind: "empty" }
					: MaybeParseProperties<Consume<Tokens, 1>, { kind: "class"; class: Trim<Tokens[0]> }>;

	type ParseClause<Tokens extends Array<string>> =
		ParseSeparatedWithBreak<Tokens, ">" | ">>"> extends infer List extends Array<
			[Array<string>, string | undefined]
		>
			? {
					[K in keyof List]: ParseClauseInner<ConsumeWhitespace<List[K][0]>> & { relationship: List[K][1] };
				}
			: never;

	type Parse<Tokens extends Array<string>> =
		ParseSeparated<Tokens, ","> extends infer List extends Array<Array<string>>
			? { [k in keyof List]: ParseClause<ConsumeWhitespace<List[k]>> }
			: never;

	type Last<T> = T extends [...infer _, infer U] ? U : never;

	type SolveClause<T> =
		Last<T> extends { kind: "class"; class: infer U }
			? U extends keyof Instances
				? Instances[U]
				: Instance
			: Instance;

	type SolveEachClause<T> = T extends [] ? Array<Instance> : { [K in keyof T]: SolveClause<T[K]> };

	// --- Tokenizer-based path: full correctness for parens (:has/:not) and quotes ---
	type SlowSolve<T extends string> = SolveEachClause<Parse<Lex<T>>>[number];

	// --- Fast path: delimiter-level string matching, no char-by-char lexing ---
	// LastSegment: peel everything up to the final ">" (handles ">" and ">>", spaced or not,
	// in O(number of ">") rather than O(characters)).
	type LastSegment<S extends string> = S extends `${string}>${infer R}` ? LastSegment<R> : S;

	// Leading class name of a trimmed segment: prefix before the first : . # [ or space, trimmed.
	type LeadingClass<S extends string> =
		Trim<S> extends infer T extends string
			? T extends `${infer C}:${string}`
				? Trim<C>
				: T extends `${infer C}.${string}`
					? Trim<C>
					: T extends `${infer C}#${string}`
						? Trim<C>
						: T extends `${infer C}[${string}`
							? Trim<C>
							: T extends `${infer C} ${string}`
								? Trim<C>
								: T
			: never;

	// Remove (...) groups by string matching so pseudo-class contents (inner commas/combinators)
	// can't leak into the fast splitters. Leftover residue always sits after the class's ":",
	// so leading-class extraction is unaffected (except deeply nested :has( , ) — see router).
	type StripParens<S extends string> = S extends `${infer A}(${string})${infer B}` ? StripParens<`${A}${B}`> : S;

	// Remove [...] attribute/property filters by string matching. Their contents never affect
	// the subject class, but an unquoted special character inside a value (e.g. the "." in
	// "[Transparency=0.5]" or a ">" in "[a>b]") would otherwise fool the fast splitters/leading-
	// class extraction. Brackets don't nest, so a single non-greedy pass per group is enough.
	type StripBrackets<S extends string> = S extends `${infer A}[${string}]${infer B}` ? StripBrackets<`${A}${B}`> : S;

	type FastClause<S extends string> =
		LeadingClass<LastSegment<S>> extends infer C extends keyof Instances ? Instances[C] : Instance;

	type FastSolve<S extends string> = S extends `${infer A},${infer B}` ? FastClause<A> | FastSolve<B> : FastClause<S>;

	// Router: only selectors containing "(" (pseudo-classes) or "'" (quoted values) need the
	// tokenizer; everything else takes the cheap path.
	// --- Selector validation: only :not() and :has() are valid pseudo-classes ---
	// Remove quoted segments so ':' inside an attribute value is never read as a pseudo-class.
	type StripQuotes<S extends string> = S extends `${infer A}'${string}'${infer B}` ? StripQuotes<`${A}${B}`> : S;

	type SupportedPseudo = "not" | "has";

	// never => all pseudo-classes are supported; otherwise the first offending name.
	type CheckPseudos<S extends string> = S extends `${string}:${infer R}`
		? R extends `${infer Name}(${infer Rest}`
			? Name extends SupportedPseudo
				? CheckPseudos<Rest>
				: Name
			: R // ':' not followed by 'name(' -> pseudo-classes require arguments
		: never;

	// true if a comma-separated list has an empty item (leading/trailing/double comma).
	// The whole-empty selector "" has no comma and is intentionally allowed (-> Instance[]).
	type HasEmptyListItem<S extends string> = S extends `${string},${string}` ? CheckListItems<S> : false;
	type CheckListItems<S extends string> = S extends `${infer A},${infer B}`
		? Trim<A> extends ""
			? true
			: CheckListItems<B>
		: Trim<S> extends ""
			? true
			: false;

	// Returns S when valid, otherwise a human-readable error string.
	export type ValidateSelector<S extends string> = string extends S
		? S
		: StripQuotes<S> extends infer Q extends string
			? CheckPseudos<Q> extends infer Bad
				? [Bad] extends [never]
					? HasEmptyListItem<Q> extends true
						? `Invalid selector: empty selector in list (check for a stray or trailing comma)`
						: S
					: `Invalid selector: ':${Bad & string}' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)`
				: never
			: never;

	// Nested pseudo-classes that contain a top-level comma, e.g. ":has(X:has(.y), Z)", and any
	// quoted value still go through the tokenizer; everything else is stripped + fast.
	export type Solve<S extends string> = S extends `${string}'${string}`
		? SlowSolve<S>
		: S extends `${string}(${string}(${string})${string})${string}`
			? SlowSolve<S> // nested parens (rare) -> tokenizer for full correctness
			: FastSolve<StripBrackets<StripParens<S>>>;
}
