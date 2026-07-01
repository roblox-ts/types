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

	// Aware of paren depth and quotes: a break character only separates at paren depth 0 and
	// outside quotes, so the contents of :not(...) / :has(...) and quoted attribute values
	// (their inner "," and ">"/">>") stay in one group.
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

	// Tokenizer path. `Solve` routes here only for the shapes the string matching below can't
	// split safely: quoted values and nested parens.
	type SlowSolve<T extends string> = SolveEachClause<Parse<Lex<T>>>[number];

	// String-matching path for everything else. It recovers just the subject class of each
	// comma group, which avoids the tokenizer's per-character recursion (and with it, TS's
	// recursion limit on long selectors).

	// Everything before the last ">" cannot affect the subject, so peel up to it (covers both
	// ">" and ">>", spaced or not).
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

	// Remove (...) groups so pseudo-class contents (inner commas/combinators) can't leak into the
	// fast splitters. The residue sits after the class's ":", so leading-class extraction is fine.
	type StripParens<S extends string> = S extends `${infer A}(${string})${infer B}` ? StripParens<`${A}${B}`> : S;

	// Remove [...] filters: their contents don't affect the subject class, but an unquoted special
	// char in a value (e.g. "." in "[Transparency=0.5]", ">" in "[a>b]") would fool the fast
	// splitters / leading-class extraction. Brackets don't nest, so one pass per group works.
	type StripBrackets<S extends string> = S extends `${infer A}[${string}]${infer B}` ? StripBrackets<`${A}${B}`> : S;

	type FastClause<S extends string> =
		LeadingClass<LastSegment<S>> extends infer C extends keyof Instances ? Instances[C] : Instance;

	type FastSolve<S extends string> = S extends `${infer A},${infer B}` ? FastClause<A> | FastSolve<B> : FastClause<S>;

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

	// Routes between the two paths. Quoted values can hide separators from the strippers above,
	// and a nested pseudo-class (e.g. ":has(X:has(.y), Z)") leaves its top-level comma behind
	// after StripParens, so both shapes go through the tokenizer. Everything else is stripped
	// down to bare segments and solved by string matching.
	export type Solve<S extends string> = S extends `${string}'${string}`
		? SlowSolve<S>
		: S extends `${string}(${string}(${string})${string})${string}`
			? SlowSolve<S>
			: FastSolve<StripBrackets<StripParens<S>>>;
}
