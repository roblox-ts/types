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

	type SolveHead<Head extends string | undefined> = Head extends string
		? Trim<Head> extends infer C extends keyof Instances
			? Instances[C]
			: Instance
		: Instance;

	type AddSolvedHead<Result, Head extends string | undefined> = [Result] extends [never]
		? SolveHead<Head>
		: Result | SolveHead<Head>;

	type HeadBreak = ":" | "." | "#" | "[" | " ";

	type ReadHead<
		Head extends string | undefined = undefined,
		Done extends boolean = false,
		C extends string = "",
	> = Done extends true
		? [Head, Done]
		: Head extends undefined
			? Trim<C> extends ""
				? [undefined, false]
				: C extends HeadBreak
					? ["", true]
					: [C, false]
			: C extends HeadBreak
				? [Head, true]
				: [`${Head}${C}`, false];

	type SolveChars<
		S extends string,
		Head extends string | undefined = undefined,
		Done extends boolean = false,
		Result = never,
		Depth extends Array<any> = [],
	> = S extends `${infer C}${infer Rest}`
		? Depth extends []
			? C extends "("
				? SolveChars<Rest, Head, Done, Result, [any]>
				: C extends ","
					? SolveChars<Rest, undefined, false, AddSolvedHead<Result, Head>, Depth>
					: C extends ">"
						? SolveChars<Rest, undefined, false, Result, Depth>
						: ReadHead<Head, Done, C> extends [
									infer NextHead extends string | undefined,
									infer NextDone extends boolean,
							  ]
							? SolveChars<Rest, NextHead, NextDone, Result, Depth>
							: never
			: C extends "("
				? SolveChars<Rest, Head, Done, Result, [...Depth, any]>
				: C extends ")"
					? SolveChars<Rest, Head, Done, Result, Depth extends [any, ...infer D] ? D : []>
					: SolveChars<Rest, Head, Done, Result, Depth>
		: AddSolvedHead<Result, Head>;

	// Tokenizer path. `Solve` routes here only for the shapes the string matching below can't
	// split safely: quoted values and nested parens.
	type SlowSolve<T extends string> = SolveChars<T>;

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

	// Remove (...) and [...] groups so pseudo-class contents and filter values can't leak into the
	// fast splitters. The residue sits after the class's ":" / "[", so leading-class extraction is fine.
	type StripFiltersAndParens<S extends string> = S extends `${infer A}[${string}]${infer B}`
		? StripFiltersAndParens<`${A}${B}`>
		: S extends `${infer A}(${string})${infer B}`
			? StripFiltersAndParens<`${A}${B}`>
			: S;

	type FastClause<S extends string> =
		LeadingClass<LastSegment<S>> extends infer C extends keyof Instances ? Instances[C] : Instance;

	type FastSolve<S extends string> = S extends `${infer A},${infer B}` ? FastClause<A> | FastSolve<B> : FastClause<S>;

	type SolveUnquoted<S extends string> = S extends `${string}(${string}(${string})${string})${string}`
		? SlowSolve<S>
		: FastSolve<StripFiltersAndParens<S>>;

	// Remove quoted segments so hidden separators and ':' inside attribute values are ignored.
	type StripQuotes<S extends string> = S extends `${infer A}'${string}'${infer B}` ? StripQuotes<`${A}${B}`> : S;

	// Validation only cares about selector-list separators and pseudo-class names, so attribute
	// filters can be removed before checking; their contents never introduce either.
	type StripValidationGroups<S extends string> = S extends `${infer A}'${string}'${infer B}`
		? StripValidationGroups<`${A}${B}`>
		: S extends `${infer A}[${string}]${infer B}`
			? StripValidationGroups<`${A}${B}`>
			: S;

	// --- Selector validation: only :not() and :has() are valid pseudo-classes ---
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

	type ValidateUnquoted<S extends string, Q extends string> = Q extends `${string}:${string}`
		? CheckPseudos<Q> extends infer Bad
			? [Bad] extends [never]
				? HasEmptyListItem<Q> extends true
					? `Invalid selector: empty selector in list (check for a stray or trailing comma)`
					: S
				: `Invalid selector: ':${Bad & string}' is not a supported pseudo-class (only ':not()' and ':has()' are allowed)`
			: never
		: Q extends `${string},${string}`
			? HasEmptyListItem<Q> extends true
				? `Invalid selector: empty selector in list (check for a stray or trailing comma)`
				: S
			: S;

	// Returns S when valid, otherwise a human-readable error string.
	export type ValidateSelector<S extends string> = string extends S
		? S
		: StripValidationGroups<S> extends infer Q extends string
			? ValidateUnquoted<S, Q>
			: never;

	// Routes between the two paths. Quoted values are stripped before solving so their hidden
	// separators cannot affect fast splitting; nested pseudo-classes still use the tokenizer.
	export type Solve<S extends string> = S extends `${string}'${string}`
		? SolveUnquoted<StripQuotes<S>>
		: SolveUnquoted<S>;
}
