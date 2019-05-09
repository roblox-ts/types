# rbx-safe-types

This is a drop-in replacement for rbx-types.

# How to use

To install, run one of the following commands, depending on your operating system:

## Windows
```
npm i rbx-types & npm i rbx-safe-types & CD node_modules & MOVE /Y rbx-safe-types\include\* rbx-types\include & DEL rbx-types\include\manual.d.ts & RMDIR /Q rbx-safe-types\include & CD ..
```

## MacOS / Any OS with GNU installed
```
npm i rbx-types & npm i rbx-safe-types & cd node_modules & mv rbx-safe-types/include/* rbx-types/include & rm rbx-types/include/manual.d.ts & rm -r rbx-safe-types/include & CD ..
```

Due to TypeScript's caching, you might see some definition conflicts for about 30 seconds. Either give it a second or restart VSCode by pressing (Ctrl+Shift+P) and selecting `Reload Window`.

# Differences
Here are the reasons I use rbx-safe-types over rbx-types:

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

- rbx-safe-types disallows referencing instances through the dot operator without an explicit definition. This helps avoid name collisions, and can also increases transpiler performance [in cases like this](https://github.com/roblox-ts/roblox-ts/issues/281). There are two alternatives, shown below:
	```ts
	const Workspace = game.GetService("Workspace");
	const ReplicatedStorage = game.GetService("ReplicatedStorage");

	// bad practice, and disallowed in rbx-safe-types:
	const myPart = Workspace.Maps.Valiant.Houses;

	// safer, won't ever have property conflicts, etc.
	const houses = Workspace
		.FindFirstChild("Maps")!
		.FindFirstChild("Valiant")!
		.FindFirstChild("Houses")!;

	// Another alternative is using unioned types:
	interface RemotesChildren {
		Chatted: RemoteEvent;
		Attacked: RemoteEvent;
		Usurped: RemoteEvent & {
			ShouldReplicate: BoolValue;
		};
	}

	const remoteFolder = ReplicatedStorage.WaitForChild("Remotes") as Folder & RemotesChildren;
	print(remoteFolder.Chatted); // exists! Chatted is a RemoteEvent
	print(remoteFolder.Usurped.ShouldReplicate.Value); // TS knows that .Value is a boolean!
	```
	Consider this code, which rbx-types will improperly handle:
	```ts
	function f(a: Instance) {
		return a.JobId;
	}

	// rbx-types thinks this returns an Instance.
	f(game);
	// rbx-safe-types will give you an error,
	// because your function signature should accept a DataModel instead of an Instance:

	function g(a: DataModel) {
		return a.JobId;
	}

	g(game); // works! returns a string
	```
	Any time you have a type which is less specific than the actual instance, you risk running into property-instance name collisions. Thus, rbx-safe-types disallows inferring that accessing non-members are `Instance` types.
- rbx-safe-types does not assume that indexing arrays results in defined values.
- rbx-safe-types pulls documentation from https://developer.roblox.com/api-reference and thus has far more documentation.
- rbx-safe-types sometimes contains better type information. For example, the fields in [GetFriendsOnline](https://developer.roblox.com/api-reference/function/Player/GetFriendsOnline) which may or may not be undefined can be validated by checking the `LocationType`, which rbx-safe-types has a const enum for.
- rbx-safe-types doesn't have a bunch of internal members of Instances which look like: `_210: never`
- rbx-safe-types removes 99% of the internal `Rbx_` classes. Those that remain now carry the prefix `RbxInternal` instead to avoid confusion for users.
- rbx-safe-types has more dank documentation:

![AddAccessory docs](https://user-images.githubusercontent.com/15217173/54723753-a2040380-4b36-11e9-90ff-b1ab72f5b8e2.png)

(this documentation was copied from [this page](https://developer.roblox.com/api-reference/function/Humanoid/AddAccessory), but I thought it was particularly funny)
