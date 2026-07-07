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
	type Trim<T extends string> = T extends `${infer S} ` ? Trim<S> : T extends ` ${infer S}` ? Trim<S> : T;

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

	// Nested pseudo-classes can contain selector lists, so this path tracks only top-level
	// separators while keeping the subject class from the current segment.
	type SlowSolve<T extends string> = SolveChars<T>;

	// Only the final combinator segment can determine the subject type.
	type LastSegment<S extends string> = S extends `${string}>${infer R}` ? LastSegment<R> : S;

	type CutAt<S extends string, D extends string> = S extends `${infer Prefix}${D}${string}` ? Prefix : S;

	type LeadingClass<S extends string> = CutAt<CutAt<CutAt<CutAt<Trim<S>, ":">, ".">, "#">, " ">;

	// Filters do not affect the subject class, but their values can contain selector separators.
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

	type StripQuotes<S extends string> = S extends `${infer A}'${string}'${infer B}` ? StripQuotes<`${A}${B}`> : S;

	// Attribute values are not selector syntax, even when they contain ":" or ",".
	type StripValidationGroups<S extends string> = S extends `${infer A}'${string}'${infer B}`
		? StripValidationGroups<`${A}${B}`>
		: S extends `${infer A}[${string}]${infer B}`
			? StripValidationGroups<`${A}${B}`>
			: S;

	type SupportedPseudo = "not" | "has";

	type CheckPseudos<S extends string> = S extends `${string}:${infer R}`
		? R extends `${infer Name}(${infer Rest}`
			? Name extends SupportedPseudo
				? CheckPseudos<Rest>
				: Name
			: R // ':' not followed by 'name(' -> pseudo-classes require arguments
		: never;

	// The whole-empty selector "" is intentionally allowed.
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

	export type ValidateSelector<S extends string> = string extends S
		? S
		: StripValidationGroups<S> extends infer Q extends string
			? ValidateUnquoted<S, Q>
			: never;

	// Quoted values are stripped before solving so most selectors can stay on the cheaper path.
	export type Solve<S extends string> = S extends `${string}'${string}`
		? SolveUnquoted<StripQuotes<S>>
		: SolveUnquoted<S>;
}
