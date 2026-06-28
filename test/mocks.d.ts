/// <reference path="../include/selector.d.ts" />

// Minimal stand-ins for `@rbxts/types` so the selector resolver can be exercised in
// isolation. These mirror the shape the resolver depends on:
//
//   * a global `Instance` carrying the `QueryDescendants` overload (copied verbatim
//     from `customDefinitions.d.ts` so the test exercises the real call signature),
//   * an `Instances` map keyed by class name, and
//   * brand-distinct mock classes so union members stay distinguishable when the
//     resolved type is printed back out by the compiler.
//
// The real `@rbxts/types` build runs with `noLib`, providing `Array` itself; here we
// declare a minimal `Array` so the resolver's tuple/array machinery type-checks
// without pulling in the full standard library.

interface Array<T> {
	length: number;
	[index: number]: T;
}

interface ReadonlyArray<T> {
	length: number;
	readonly [index: number]: T;
}

interface Instance {
	readonly Name: string;
	QueryDescendants<S extends string>(
		this: Instance,
		selector: Selector.ValidateSelector<S> extends S ? S : Selector.ValidateSelector<S>,
	): string extends S ? Array<Instance> : Array<Selector.Solve<S>>;
}

// Brand-distinct mock classes (string-literal phantom field keeps them nominal
// without needing a `Symbol` global under the minimal lib above).
interface Part extends Instance {
	readonly _nominal_Part: "Part";
}
interface Model extends Instance {
	readonly _nominal_Model: "Model";
}
interface SpotLight extends Instance {
	readonly _nominal_SpotLight: "SpotLight";
}
interface ImageButton extends Instance {
	readonly _nominal_ImageButton: "ImageButton";
}
interface Folder extends Instance {
	readonly _nominal_Folder: "Folder";
}
interface Workspace extends Instance {
	readonly _nominal_Workspace: "Workspace";
}

interface Instances {
	Part: Part;
	Model: Model;
	SpotLight: SpotLight;
	ImageButton: ImageButton;
	Folder: Folder;
	Workspace: Workspace;
}

declare const instance: Instance;
