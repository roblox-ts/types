# rbx-safe-types
This is a drop-in replacement for rbx-types.

# How to use
0) Install via the command: `npm install rbx-safe-types`

1) Drag the .d.ts files from this library's include folder to rbx-types' include folder. Overwrite the files in there, since these files are the only ones that should used by the transpiler and your project.

2) Restart VSCode by pressing (Ctrl+Shift+P) and selecting Reload Window

3) Enjoy!

# Advantages
Advantages of using rbx-safe-types over rbx-types:

- rbx-safe-types allows type narrowing via ClassName
	```ts
	const part = {} as Instance;

	if (part.IsA("Part")) {
		// part is: Part | FlagStand | Platform | Seat | SkateboardPlatform | SpawnLocation
	}

	if (part.ClassName === "Part") {
		// part is: Part
	}
	```
- rbx-safe-types requires explicitness in specifying instance types which are instantiable and superclasses to other types. Consider the following code:

	```ts
	// in rbx-types, this accepts Script | LocalScript
	// in rbx-safe-types, this accepts only an object for which the ClassName is Script
	function getScriptClassName(script: Script) {
		return script.ClassName;
	}

	// in rbx-types, this accepts StarterPlayerScripts | StarterCharacterScripts
	// in rbx-safe-types, this accepts only an object for which the ClassName is StarterPlayerScripts
	function getObjectClassName(obj: StarterPlayerScripts) {
		return obj.ClassName;
	}

	// in rbx-types this accepts Model | Status | Workspace;
	// in rbx-safe-types, this accepts only an object for which the ClassName is Model
	function getModelClassName(obj: Model) {
		return obj.ClassName;
	}
	```
	Basically, in rbx-safe-types a `Script` is `ClassName === "Script"` and in rbx-types it is `IsA("Script")`. In other words, in rbx-types a `Script` is equivalent to rbx-safe-types' `Script | LocalScript`. The same behavior applies to everything in the `InstanceBases` interface.

- rbx-safe-types disallows referencing instances through the dot operator because it's bad practice and can cause name collisions. Disabling random indexing also increases performance [in cases like this](https://github.com/roblox-ts/roblox-ts/issues/281).
	```ts
	const Workspace = game.GetService("Workspace");

	// bad practice:
	const myPart = Workspace.Maps.Valiant.Houses;

	// safer, won't ever have property conflicts, etc.
	Workspace
		.FindFirstChild("Maps")!
		.FindFirstChild("Valiant")!
		.FindFirstChild("Houses")!;
	```
	Consider this code, which rbx-types will improperly handle:
	```ts
	function f(a: Instance) {
		return a.JobId;
	}

	// should return a string, returns an Instance
	f(game);

	// properly returns an Instance
	f(game.Workspace);
	```
	Any time you have a type which is less specific than the actual instance, you risk running into property-instance name collisions. Thus, rbx-safe-types disallows inferring that accessing non-members are `Instance` types.
- rbx-safe-types assumes that properties of classes which are some kind of Instance type are possibly undefined unless manually specified. For example, `WeldConstraint.Part0` or `Model.PrimaryPart` could be undefined.

- rbx-safe-types naively parses https://developer.roblox.com/api-reference for descriptions, and thus has far more type data.
- rbx-safe-types is less automated, and updated manually
- rbx-safe-types sometimes contains better type information. For example, the fields in [GetFriendsOnline](https://developer.roblox.com/api-reference/function/Player/GetFriendsOnline) which may or may not be undefined can be validated by checking the `LocationType`, which rbx-safe-types has a const enum for.
