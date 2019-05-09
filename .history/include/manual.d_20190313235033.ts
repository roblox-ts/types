/// <reference no-default-lib="true"/>
/// <reference path="roblox.d.ts" />
/// <reference path="generated_enums.d.ts" />
/// <reference path="generated_classes.d.ts" />

// GENERATED API OVERRIDES

interface AnimationController extends RbxInstance {
	/** This event fires whenever the AnimationController begins playing an animation. It returns the AnimationTrack playing.
	 *
	 * The AnimationTrack can be used to access the animation’s playback functions and events. It will only fire for animations playing on the specific AnimationController.
	 *
	 * See Humanoid.AnimationPlayed for the Humanoid variant of this function.
	 */
	readonly AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
	/** Returns a table of all AnimationTracks that are currently being played by an AnimationController.
	 * A typical use for this function is stopping currently playing tracks using AnimationTrack:Stop.
	 * Note this function will not return AnimationTracks that have loaded but are not playing. If the developer wishes to track these they will need to index them manually. See below for one example of how this could be achieved:
	 * ```ts
const animationTracks = new Array<AnimationTrack>();
const track = animationController.LoadTrack(animation);
animationTracks.push(track);
```
	 * ### Stop All Tracks
	 * This sample contains a quick function to stop all playing AnimationTracks on an AnimationController or Humanoid.
	 * ```ts
function stopAllTracks(animationController) {
		for (const track of animationController.GetPlayingAnimationTracks()) {
			track.Stop();
		}
}
```
	 */
	GetPlayingAnimationTracks(): Array<AnimationTrack>;
	/** This function loads an Animation onto an AnimationController, returning an AnimationTrack that can be used for playback.

How to load an Animation
The following code can be used to load an Animation onto an AnimationController.
```ts
const animationTrack = animationController.LoadAnimation(animation)
animationTrack.Play()
```
Should I load an Animation on the client or server?
In order for AnimationTracks to replicate correctly, it’s important to know when they should be loaded on the client (via a LocalScript) or on the server (via a Script). If an AnimationController is created on the server, its animations should be loaded and played on the server unless a player has been assigned network ownership of the Model's root part using BasePart:SetNetworkOwner. If an AnimationController is created on the client it should be animated by the client.

Although it is not recommended, if a developer wishes to play animations on a locally controlled Model from the server they can use the Animator object.

Note this differs slightly for animations playing on Player characters, for more information on this please see Humanoid:LoadAnimation.
*/
	LoadAnimation(animation: Animation): AnimationTrack;
}

interface Animator extends RbxInstance {
	/** Loads an Animation onto an Animator, returning an AnimationTrack. Used to load animations on locally controlled models (such as player characters) from the server.
	 * A Model is considered locally controlled if it has network ownership of the model, clients have network ownership of the local character model by default and other models can be assigned to a different client using BasePart:SetNetworkOwner.
	 * It is best practice to only animate a model from the server if the server has network ownership, and for this reason most developers will not need to use the Animator:LoadAnimation function as they can load animations directly from the Humanoid or AnimationController.
	 * Note if the server has network ownership of the model,
	 * and the AnimationController or Humanoid was created on the server,
	 * then Animator:LoadAnimation does not need to be used as LoadAnimation can be used directly
	 * from the Humanoid or AnimationController on the server.
	 */
	LoadAnimation(animation: Animation): AnimationTrack;
}

interface AssetService extends RbxInstance {
	/** [yielding function] Clones a place which has a placeId equal to the given templatePlaceID, placing it into the inventory of the given player with the given name and description, if they accept when prompted. This method cannot be used to clone places that you do not own, or those which have disabled the use of the CreatePlace API in their place’s configuration. */
	CreatePlaceInPlayerInventoryAsync(
		player: Player,
		placeName: string,
		templatePlaceID: number,
		description?: string,
	): number;
	/** Returns a StandardPages object which contains the name and placeId of places within the current ‘Game’ (otherwise known as a ‘Universe’).
	 * The following code goes through each page of games in the universe and prints the Name and PlaceId.
	 * ```lua
local pages = game:GetService("AssetService"):GetGamePlacesAsync()
while true do
     for _,place in pairs(pages:GetCurrentPage()) do
          print("Name: " .. place.Name)
          print("PlaceId: " .. tostring(place.PlaceId))
     end
     if pages.IsFinished then
          -- we reached the last page of results
          break
     end
     pages:AdvanceToNextPageAsync()
end
```
	*/
	GetGamePlacesAsync(): StandardPages;
	/** [yielding function] Returns an array of assetIds that are contained in a specified package. */
	GetAssetIdsForPackage(packageAssetId: number): Array<number>;
}

interface RbxBasePart extends RbxInstance {
	/** Fired when a `BasePart|part` stops touching another part. This event fires under similar conditions to those of `/BasePart/Touched`. */
	readonly TouchEnded: RBXScriptSignal<(otherPart: BasePart) => void>;
	/** The Touched event fires when a part comes in contact with another part. For instance, if PartA bumps into PartB, then PartA.Touched fires with PartB, and PartB fires with PartA.
	 *
	 * This event only fires as a result of physics movement, so it will not fire if the CFrame property was changed such that the part overlaps another part. This also means that at least one of the parts involved must not be `/BasePart/Anchored` at the time of the collision.
	 *
	 * Many types of parts are removed or destroyed as soon as they hit another part. This means that it is possible for the other part’s `/Instance/Parent` to be nil.
	 * Be sure to check that `otherPart.Parent` is not nil before using it, such as calling `/Instance/FindFirstChild`. */
	readonly Touched: RBXScriptSignal<(otherPart: BasePart) => void>;

	/** Returns whether the parts can collide with each other or not. This function takes into account the collision groups of the two parts.
	 * This function will error if the specified part is not a BasePart.Returns whether the parts can collide with each other.
	 */
	CanCollideWith(part: BasePart): boolean;

	/** The CanSetNetworkOwnership function checks whether you can set a `BasePart|part's` network ownership.
	 *
	 * The function’s return value verifies whether or not you can call `BasePart/SetNetworkOwner` or `BasePart/SetNetworkOwnershipAuto` without encountering an error. It returns true if you can modify/read the network ownership, or returns false and the reason you can’t, as a string.
	 *
	 * ### See Also
	 *
	 * - [Network ownership](https://developer.roblox.com/articles/Network-Ownership) */
	CanSetNetworkOwnership(): LuaTuple<[boolean, string | undefined]>;

	/** Returns a table of parts connected to the the object by any kind of rigid joint.

If *recursive* is true this function will return all of the parts in the assembly rigidly connected to the BasePart.

### Rigid Joints

When a joint connects two parts together `(Part0 → Part1)`, a joint is **rigid** if the physics of `Part1` are completely locked down by `Part0`.

This only applies to the following joint types: `Weld`, `Snap`, `ManualWeld`, `Motor`, `Motor6D`, and `WeldConstraint` */
	GetConnectedParts(recursive?: boolean): Array<BasePart>;

	/** Returns the current player who is the network owner of this part, or nil in case of the server. */
	GetNetworkOwner(): Player | undefined;

	/** Returns the base part of an assembly (a collection of parts connected together). When moving an assembly of parts using a [CFrame](https://developer.roblox.com/api-reference/datatype/CFrame) it is important to move this base part (this will move all other parts connected to it accordingly. */
	GetRootPart(): BasePart;
	/** Return all Joints or Constraints that is connected to this Part. */
	GetJoints(): Array<Constraint | JointInstance>;
	/** Returns a table of all parts that are physically interacting with this part. If the part itself has CanCollide set to false, then this function will return an empty table UNLESS it has a `TouchInterest` (AKA: Something is connected to its Touched event). Parts that are adjacent but not intersecting are not considered touching. */
	GetTouchingParts(): Array<BasePart>;
	/** Sets the given player as network owner for this and all connected parts.

When playerInstance is nil, the server will be the owner instead of a player.Sets the given player as network owner for this and all connected parts.

### See Also

- [NetworkOwnership](https://developer.roblox.com/articles/Network-Ownership) */
	SetNetworkOwner(playerInstance?: Player): void;
	/** This is a server-only function that uses [CSG](https://developer.roblox.com/articles/3D-Modeling-with-Parts) to subtract the geometry of a table of `BasePart|BaseParts` from the calling `BasePart`. It returns a parentless `UnionOperation` named **Union** with the following specs:

- The faces of the returned `UnionOperation` inherit the colors of the original parts’ faces.
- The `PartOperation/UsePartColor|UsePartColor` property will be false.
- The `PartOperation/Collisi` */
	SubtractAsync(parts: Array<BasePart>, collisionfidelity?: Enum.CollisionFidelity): UnionOperation;
	/** This is a server-only function that uses [CSG](https://developer.roblox.com/articles/3D-Modeling-with-Parts) to combine the geometry of the calling `BasePart` with a table of other `BasePart|BaseParts`. It returns a parentless `UnionOperation` named **Union** with the following specs:

- The faces of the returned `UnionOperation` inherit the colors of the original parts’ faces.
- The `PartOperation/UsePartColor|UsePartColor` */
	UnionAsync(parts: Array<BasePart>, collisionfidelity?: Enum.CollisionFidelity): UnionOperation;
}

interface BillboardGui extends RbxLayerCollector {
	/** The Object the billboard gui uses as its base to render from.  Currently, the only way to set this property is through a script, and must exist in the workspace.  This will only render if the object assigned derives from BasePart. */
	Adornee: BasePart | Attachment | undefined;
	/** Specifies a Player that the BillboardGui will not render to. */
	PlayerToHideFrom: Player | undefined;
}

interface BindableEvent extends RbxInstance {
	/** This event fires when the Fire() method is used.  Receives the variable length arguments from Fire(). */
	readonly Event: RBXScriptSignal<(...arguments: Array<unknown>) => void>;
	/** Calling this method will fire the “Event” event. This function does not yield, even no script has connected to the “Event” event and even if a connected function yields. There are limitations on the values that can be sent as arguments; see the [code samples](https://developer.roblox.com/api-reference/function/BindableEvent/Fire) */
	Fire(...arguments: Array<unknown>): void;
}

interface BindableFunction extends RbxInstance {
	/** Invoke will call the OnInvoke callback and return any values that were returned by the callback (if any). If the OnInvoke callback is not set, this method will yield until one is set. If OnInvoke yields, this method will also yield. There are limitations on the values that can be sent as arguments; see the code samples. */
	Invoke(...arguments: Array<unknown>): Array<unknown>;
	/** Should be defined as a function. This function is called when Invoke() is called. Number of arguments is variable.
	 * This callback can be set multiple times, but cannot be called directly. It is called when the `BindableFunction/Invoke` method is called, using the same arguments as parameters.
	 *
	 * There are limitations on the valid parameters this callback can return (see the code samples to learn more).
	 */
	OnInvoke: (...arguments: Array<unknown>) => any;
}

interface Camera extends RbxInstance {
	/** Where the Camera's focus is.  Any rotation of the camera will be about this subject.
 * When using the default [camera scripts](), the CameraSubject property has two roles:

- Defining the object the `Camera` is to follow, in the case of the *‘Follow’*, *‘Attach’*, *‘Track’*, *‘Watch’* and *‘Custom’* `Camera/CameraType|CameraTypes`
- For all `Camera/CameraType|CameraTypes` but *‘Scriptable’*, the object whose position the `Camera|Camera's``Camera/Focus` will be set to

CameraSubject accepts a variety of `Instance|Instances`. The default [camera scripts]() respond differently to different CameraSubject types:

- `Humanoid`: By default the CameraSubject is set to the `Players/LocalPlayer|LocalPlayer's``Humanoid`. The camera scripts will follow the `Humanoid` factoring in the `Humanoid|Humanoid's` current state and `Humanoid/CameraOffset`
- `BasePart`: The camera scripts will follow the position of any `BasePart`, with a vertical offset in the case of `VehicleSeat|VehicleSeats`

You can configure the `Camera` to follow a `Model` by setting the CameraSubject to the model’s `Model/PrimaryPart`.

The CameraSubject cannot be set to *nil*. If it is, it will revert to its previous value.

To restore the CameraSubject to its default value, set it to the `Players/LocalPlayer|LocalPlayer's``Humanoid` like so:

```lua
local Players = game:GetService("Players")

local localPlayer = Players.LocalPlayer

local function resetCameraSubject()
	if workspace.CurrentCamera and localPlayer.Character then
		local humanoid = localPlayer.Character:FindFirstChildOfClass("Humanoid")
		if humanoid then
			workspace.CurrentCamera.CameraSubject = humanoid
		end
	end
end
``` */
	CameraSubject: Humanoid | BasePart | undefined;
	/** This function returns an array of `BasePart|BaseParts` that are obscuring the lines of sight between `Camera|Camera’s` `Camera/CFrame` and the *castPoints*.

GetPartsObscuringTarget is used by the ‘Invisicam’ in in the default [camera scripts]() to hide parts between the `Camera|Camera’s``Camera/CFrame` and `Camera/Focus`.

Any `Instance|Instances` included in the *ignoreList* array will, along with their descendants, be ignored.

See below for a visual example of this function. The `Camera` is represented by the grey camera model and the cast points are represented by the colored dots. The `Part|Parts` highlighted in red are the ones that would be returned.

![A visual demonstration of the function](https://developer.roblox.com/assets/5b842528a3326f570bb88a6b/GetPartsObscuringTarget.png)

The castPoints parameter is given as an array of `DataType/Vector3|Vector3s`, for example:

```
local castPoints = {Vector3.new(0, 10, 0), Vector3.new(0, 15, 0)}
local ignoreList = {}
workspace.CurrentCamera:GetPartsObscuringTarget(castPoints, ignoreList)
```

The array of `BasePart|BaseParts` returned is in an arbitrary order, and no additional raycast data is provided (for example hit position, hit material and surface normal). If this information is required, you should a `Workspace` raycast function such as `Workspace/FindPartOnRayWithIgnoreList`.

If `Terrain` obscures a cast point, `BasePart|BaseParts` obscuring the cast point between the obscuring `Terrain` and the cast point will not be returned.

Note, this function benefits from internal optimisations that make it more performant than casting a ray for each cast point individually. */
	GetPartsObscuringTarget(castPoints: Array<Vector3>, ignoreList: Array<Instance>): Array<Instance>;

	/** Takes a 3D position in the world and projects it onto x,y coordinates of screen space. Returns two values, first is a Vector3 that has x,y position and z position which is distance from camera (negative if behind camera, positive if in front). Second return value is a boolean indicating if the first argument is an on-screen coordinate.
	 * This function returns the screen location and depth of a `DataType/Vector3` *worldPoint* and whether this point is visible on the screen or not.

This function takes in account the current GUI inset (such as the space occupied by the top bar). This means the 2D position returned is in the same term as GUI positions and can be used to place GUI elements. For an otherwise identical function that ignores the GUI inset, see `Camera/WorldToViewportPoint`.

For example:

```
local camera = workspace.CurrentCamera
Local worldPoint = Vector3.new(0, 10, 0)
local vector, onScreen = camera:WorldToScreenPoint(worldPoint)

local screenPoint = Vector2.new(vector.X, vector.Y)
local depth = vector.Z
```

Note this function does not perform any raycasting, meaning the visible bool will be true regardless if the *worldPoint* is obscured by `BasePart|BaseParts` or `Terrain`. */
	WorldToScreenPoint(worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
	/** Same as WorldToScreenPoint, except no GUI offsets are taken into account.
	 * This function returns the screen location and depth of a `DataType/Vector3` *worldPoint* and whether this point is visible on the screen or not.

This function does not take in account the current GUI inset (such as the space occupied by the top bar). This means the 2D position returned is taken from the top left corner of the viewport. This means, unless you are using `ScreenGui/IgnoreGuiInset` this position is not appropriate for placing GUI elements. For an otherwise identical function that accounts for the GUI inset, see `Camera/WorldToScreenPoint`.

For example:

```lua
local camera = workspace.CurrentCamera
local worldPoint = Vector3.new(0, 10, 0)
local vector, inViewport = camera:WorldToViewportPoint(worldPoint)

local viewportPoint = Vector2.new(vector.X, vector.Y)
local depth = vector.Z
```

Note this function does not perform any raycasting, meaning the visible bool will be true regardless if the *worldPoint* is obscured by `BasePart|BaseParts` or `Terrain`. */
	WorldToViewportPoint(worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
}

interface Chat extends RbxInstance {
	/** Fires when `Chat/Chat` is called. */
	readonly Chatted: RBXScriptSignal<(part: BasePart, message: string, color: Enum.ChatColor) => void>;
	/** The Chat function fires the `Chat/Chatted` event with the parameters specified in this method.

By default, there is a `LocalScript` inside of each player’s `PlayerScripts` object named *BubbleChat*, which causes a dialog-like billboard to appear above the *partOrCharacter* when the chatted event is fired.

*Note:* Since dialogs are controlled by a LocalScript, you will not be able to see any dialogs created from this method unless you are running in *Play Solo* mode. */
	Chat(partOrCharacter: BasePart | Model, message: string, color?: Enum.ChatColor): void;
	/**
	 * Filters a string being sent to playerTo from playerFrom with filtering that is appropriate to the given player’s account settings. This function should be used any time a user can enter custom text in any context. Some examples of text that should be filtered:

- Custom chat messages
- Entering a custom character name
- Entering a name for a shop in a tycoon
- If the filtered string is being used for a persistent message (such as the name of a shop, writing on a plaque, etc) then the function should be called with the writing player as both the sender and receiver.

Calling FilterString from LocalScripts is deprecated and will be disabled in the future. Text filtering should be done from server-side Scripts using `TextService/FilterStringAsync`.
A game not using this filter function for custom chat or other user generated text may be subjected to moderation action.
	 */
	FilterStringAsync(stringToFilter: string, playerFrom: Player, playerTo: Player): string;

	/** Filters a string sent from *playerFrom* for broadcast to no particular target. The filtered message has more restrictions than `Chat/FilterStringAsync`.

Some examples of where this method could be used:

- \-Message walls
- \-Cross-server shouts
- \-User-created signs

Calling FilterString from `LocalScript`s is deprecated and will be disabled in the future. Text filtering should be done from server-side `Script`s using FilterStringAsync.

*Note:* A game not using this filter function for custom chat or other user generated text may be subjected to moderation action. */
	FilterStringForBroadcast(stringToFilter: string, playerFrom: Player): string;
}

interface ClickDetector extends RbxInstance {
	/** The MouseClick event fires when a player presses and releases the left mouse button while the cursor is hovering over a `BasePart` or `Model` with a `ClickDetector`. Additionally, the Player’s `Player/Character|Character` must be within the `ClickDetector/MaxActivationDistance|MaxActivationDistance` of the clicked object. This event fires when using either a `Script` or `LocalScript`.

## Platform Support

- On `UserInputService/TouchEnabled|TouchEnabled` platforms, this event fires when the user taps on the same model.
- On `UserInputService/GamepadEnabled|GamepadEnabled` platforms, this event fires when the center dot is over the same model and the A button is pressed and released.

## Related Events

- If you want to check when a player right clicks on the ClickDetector, you can use the `ClickDetector/RightMouseClick|RightMouseClick` event.
- If you want a function to fire when a player hovers on or off of the ClickDetector without mouse clicking it you can use the `ClickDetector/MouseHoverEnter|MouseHoverEnter` and `ClickDetector/MouseHoverLeave|MouseHoverLeave` events. */
	readonly MouseClick: RBXScriptSignal<(playerWhoClicked: Player) => void>;
	/** The MouseHoverEnter event fires when the player’s `Mouse|mouse` begins hovering over the `ClickDetector`'s parent. This event fires when using either a `Script` or `LocalScript`.

Due to the nature of user input, you ought not depend on all MouseHoverEnter events to fire a matching `ClickDetector/MouseHoverLeave|MouseHoverLeave` event.

The player does not have to click the ClickDetector for this event to fire. If you want an event to execute when the player clicks, you can use `ClickDetector/MouseClick` and `ClickDetector/RightMouseClick` events. */
	readonly MouseHoverEnter: RBXScriptSignal<(playerWhoHovered: Player) => void>;
	/** The MouseHoverLeave event fires when a player’s `Mouse|mouse` moves off of the `ClickDetector`'s parent. This event fires when using either a `Script` or `LocalScript`.

Due to the nature of user input, you ought not depend on all `ClickDetector/MouseHoverEnter|MouseHoverEnter` events to fire a matching MouseHoverLeave event.

The player does not have to click the ClickDetector for this event to fire. If you want an function to run when the player clicks, you can use `ClickDetector/MouseClick` and `ClickDetector/RightMouseClick` events. */
	readonly MouseHoverLeave: RBXScriptSignal<(playerWhoHovered: Player) => void>;
	/** The RightMouseClick event fires when a player presses and releases the right mouse button while the cursor is hovering over a `BasePart` or `Model` with a `ClickDetector`. Additionally, the Player’s `Player/Character|Character` must be within the `ClickDetector/MaxActivationDistance|MaxActivationDistance` of the clicked object. This event fires when using either a `Script` or `LocalScript`.

## Related Events

- If you want to check when a player left clicks on the ClickDetector, you can use the `ClickDetector/MouseClick|MouseClick` event.
- If you want a function to fire when a player hovers on or off of the ClickDetector without clicking it you can use the `ClickDetector/MouseHoverEnter|MouseHoverEnter` and `ClickDetector/MouseHoverLeave|MouseHoverLeave` events. */
	readonly RightMouseClick: RBXScriptSignal<(playerWhoClicked: Player) => void>;
}

interface CollectionService extends RbxInstance {
	/** Returns a signal that fires when the given tag either has a new instance with that tag added to the data model or that tag is assigned to an instance within the data model. */
	GetInstanceAddedSignal(tag: string): RBXScriptSignal<(instance: Instance) => void>;
	/** Returns a signal that fires when the given tag either has an instance with that tag removed from the data model or that tag is removed from an instance within the data model. */
	GetInstanceRemovedSignal(tag: string): RBXScriptSignal<(instance: Instance) => void>;
	/** Returns an array of all of the instances in the data model which have the given tag. */
	GetTagged<T extends Instance = Instance>(tag: string): Array<T>;
	/** Returns a list of all the collections that an instance belongs to. */
	GetTags(instance: Instance): Array<string>;
}

interface ContentProvider extends RbxInstance {
	/** This function takes an array of `Instance|Instances` as a parameter and yields until all of assets associated with those instances have loaded. This can be used to pause a script and not use content until it is certain that the content has been loaded into the game.

When the function is called, the engine will go through all of the instances in the passed in array (and all of the descendants of the passed in instances). If any of the instances have a property that defines a link to content, such as a `Decal` or a `Sound`, then the function will attempt to load the asset from the Roblox website. If any of the assets fail to load, an error message will appear in the places output, but the PreloadAsync function itself will not error and will continue executing until it has processed each passed in instance. */
	PreloadAsync(contentIdList: Array<Instance>): void;
}

/** @rbxts client */
interface ContextActionService extends RbxInstance {
	/** Fires when the current player equips a [Tool](https://developer.roblox.com/api-reference/class/Tool). */
	readonly LocalToolEquipped: RBXScriptSignal<(toolEquipped: Tool) => void>;
	/** Fires when the current player unequips a [Tool](https://developer.roblox.com/api-reference/class/Tool). */
	readonly LocalToolUnequipped: RBXScriptSignal<(toolUnequipped: Tool) => void>;
	/** BindAction will bind an action to user input given an action handling function. The action handler function will be called when some input matches the provided user input enums.

The method behaves like a stack: if two actions are bound to the same user input, only the most recent action handler will be called. When UnbindAction is called, the action handler is removed from the stack. If an action handler returns `Enum.ContextActionResult.Pass`, an input will call to the next most recently bound action handler. */
	BindAction(
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>,
	): void;

	/** Binds function to fire when specified inputTypes occur. Allows the priority of the bound action to be specified.

If there are multiple actions bound to one of the *inputTypes*, the priority of this action will determine if it will be passed first.Binds function to fire when specified inputTypes occur. Allows the priority of the bound action to be specified. */
	BindActionAtPriority(
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		priorityLevel: number,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>,
	): void;
	/** If 'actionName' key contains a bound action, then this will return the touch button (if was created). Returns nil if a touch button was not created. No guarantees are made whether button will be retrievable when button is manipulated. */
	GetButton(actionName: string): ImageButton | undefined;
}

/** @rbxts server */
interface DataStoreService extends RbxInstance {
	/** Returns a data store with the given name and scope */
	GetDataStore(name: string, scope?: string): GlobalDataStore;
	/** Returns the default data store */
	GetGlobalDataStore(): GlobalDataStore;
	/** Returns an ordered data store with the given name and scope */
	GetOrderedDataStore(name: string, scope?: string): OrderedDataStore;
}

interface Dialog extends RbxInstance {
	/** Fired when a player chooses something to say, through a `Dialog` instance.

This event is client-side only and will not fire on the server. It should be connected to in either a `LocalScript` or a `ModuleScript` required by a `LocalScript`. */
	readonly DialogChoiceSelected: RBXScriptSignal<(player: Player, dialogChoice: Dialog) => void>;
	/** Returns an array of the players currently conversing with this dialog. */
	GetCurrentPlayers(): Array<Player>;
}

interface FlagStand extends RbxDerivesFromPart {
	/** This event fires when a player bearing an opposing flag, and having the same `Player/TeamColor` as the stand, touches the `FlagStand`.

The `Flag` and `FlagStand` objects were created to allow developers to make ‘Capture the Flag’ style games quickly. However they have been deprecated and developers are advised to design their own systems which will be more flexible and reliable.

To get started with this, developers can use the ‘Capture The Flag’ template place provided by Roblox which has a fully functioning system developers can take and use in their own games. A link to the place, which is free to edit, is [here](). */
	readonly FlagCaptured: RBXScriptSignal<(player: Player) => void>;
}

interface GamePassService extends RbxInstance {
	/** This item is deprecated. Do not use it for new work. */
	PlayerHasPass(player: Player, gamePassId: number): boolean;
}

/** @rbxts server */
interface RbxGlobalDataStore extends RbxInstance {
	/** This function returns the value of the entry in the `GlobalDataStore` with the given key. If the key does not exist, returns `nil`. This function caches for about 4 seconds, so you cannot be sure that it returns the current value saved on the Roblox servers.

If this function throws an error, the `Articles/Datastore Errors|error message` will describe the problem. Note that there are also `Articles/Datastore Errors|limits` that apply to this function.

To save a data store entry, you can use one of several possible functions, including `GlobalDataStore/SetAsync|SetAsync()`, `GlobalDataStore/UpdateAsync|UpdateAsync()`, and `GlobalDataStore/IncrementAsync|IncrementAsync()`. */
	GetAsync<T = unknown>(key: string): T | undefined;
	/** Increments the value for a particular key and returns the incremented value. Only works on values that are integers. Note that you can use `GlobalDataStore/OnUpdate|OnUpdate()` to execute a function every time the database updates the key’s value, such as after calling this function.

If this function throws an error, the `Articles/Datastore Errors|error message` will describe the problem. Note that there are also `Articles/Datastore Errors|limits` that apply to this function.

See the `Articles/Data store|Data Stores` article for an in-depth guide on data structure, management, error handling, etc. */
	IncrementAsync(key: string, delta?: number): number;
	/** This function removes the given key from the provided `GlobalDataStore` and returns the value that was associated with that key. If the key is not found in the data store, this function returns `nil`.

If this function throws an error, the `Articles/Datastore Errors|error message` will describe the problem. Note that there are also `Articles/Datastore Errors|limits` that apply to this function.

See the `Articles/Data store|Data Stores` article for an in-depth guide on data structure, management, error handling, etc. */
	RemoveAsync<T = unknown>(key: string): T | undefined;
	/** Sets the value of the key. This overwrites any existing data stored in the key.

 If the previous value of the key is important, use GlobalDataStore/UpdateAsync|UpdateAsync() instead. Using GlobalDataStore/GetAsync|GetAsync() to retrieve a value and then setting the key with GlobalData */
	SetAsync(key: string, value?: any): void;
	/** Retrieves the value of the key from the website, and updates it with a new value. The callback until the value fetched matches the value on the web. Returning nil means it will not save.
	 * This function retrieves the value of a key from a data store and updates it with a new value. Since this function validates the data, it should be used in favor of `GlobalDataStore/SetAsync|SetAsync()` when there’s a chance that more than one server can edit the same data at the same time.
	 *
	 * The second parameter is a function which you need to prov */
	UpdateAsync<O = unknown, R = unknown>(
		key: string,
		transformFunction: (oldValue: O | undefined) => R,
	): R extends undefined ? O | undefined : R;

	/////////////////////////////////////////////////////
	/** Sets callback as a function to be executed any time the value associated with key is changed. It is important to disconnect the connection when the subscription to the key is no longer needed.  */
	OnUpdate<T = unknown>(key: string, callback: (value: T) => void): RBXScriptConnection;
}

interface GroupInfo {
	Name: string;
	Id: number;
	Owner: {
		Name: string;
		Id: number;
	};
	EmblemUrl: string;
	Description: string;
	Roles: Array<{
		Name: string;
		Rank: number;
	}>;
}

interface GetGroupsAsyncResult {
	Name: string;
	Id: number;
	EmblemUrl: string;
	Description: string;
	Rank: number;
	Role: string;
	IsPrimary: boolean;
	IsInClan: boolean;
}

interface GroupService extends RbxInstance {
	/** Returns a `StandardPages` object including information on all of the specified group’s allies.

This pages does not include a list of group IDs but instead a list of group information tables, mirroring the format of those returned by `GroupService/GetGroupInfoAsync`. See below for the structure of these tables.

```
group = {
    Name = "Knights of the Seventh Sanctum",
    Id = 377251,
    Owner = {
        Name = "Vilicus",
        Id = 23415609
    },
    EmblemUrl = "http://www.roblox.com/asset/?id=60428602",
    Description = "We fight alongside the balance to make sure no one becomes to powerful",
    Roles = {
        [1] = {
            Name = "Apprentice",
            Rank = 1
        },
        [2] = {
            Name = "Warrior",
            Rank = 2
        },
        [3] = {
            Name = "Earth Walker",
            Rank = 255
        }
    }
}
```

Note, as this function returns a `StandardPages` object rather than an array, developers may wish to convert it to an array for ease of use (see examples).

This function has a number of useful applications, including detecting if a player is a member of an allied group.

For enemies, use `GroupService/GetEnemiesAsync`. */
	GetAlliesAsync(groupId: number): StandardPages;
	/** Returns a `StandardPages` object including information on all of the specified group’s enemies.

This pages does not include a list of group IDs but instead a list of group information tables, mirroring the format of those returned by `GroupService/GetGroupInfoAsync`. See below for the structure of these tables.

```
group = {
    Name = "Knights of the Seventh Sanctum",
    Id = 377251,
    Owner = {
        Name = "Vilicus",
        Id = 23415609
    },
    EmblemUrl = "http://www.roblox.com/asset/?id=60428602",
    Description = "We fight alongside the balance to make sure no one becomes to powerful",
    Roles = {
        [1] = {
            Name = "Apprentice",
            Rank = 1
        },
        [2] = {
            Name = "Warrior",
            Rank = 2
        },
        [3] = {
            Name = "Earth Walker",
            Rank = 255
        }
    }
}
```

Note, as this function returns a `StandardPages` object rather than an array, developers may wish to convert it to an array for ease of use (see examples).

This function has a number of useful applications, including detecting if a player is a member of an enemy group.

For allies, use `GroupService/GetAlliesAsync`. */
	GetEnemiesAsync(groupId: number): StandardPages;
	/** Returns a table containing information about the given group.

The table returned is the same format as that returned in `GroupService/GetAlliesAsync` and `GroupService/GetEnemiesAsync`. This format can be seen below.

```
group = {
    Name = "Knights of the Seventh Sanctum",
    Id = 377251,
    Owner = {
        Name = "Vilicus",
        Id = 23415609
    },
    EmblemUrl = "http://www.roblox.com/asset/?id=60428602",
    Description = "We fight alongside the balance to make sure no one becomes to powerful",
    Roles = {
        [1] = {
            Name = "Apprentice",
            Rank = 1
        },
        [2] = {
            Name = "Warrior",
            Rank = 2
        },
        [3] = {
            Name = "Earth Walker",
            Rank = 255
        }
    }
}
```

Note, if a group has no owner the Owner field will be set to nil.

This function has a number of useful applications, including loading the latest description and logo of a group for display in a group base. */
	GetGroupInfoAsync(groupId: number): GroupInfo;
	/** Returns a list of tables containing information on all of the groups a given player is a member of.

The list returned will include an entry for every group the player is a member of. These entries are tables with the following fields.

- **Name:** The group’s name
- **Id:** The group ID
- **EmblemUrl:** An asset url linking to the group’s thumbnail (for example: [http://www.roblox.com/asset/?id=276165514]())
- **EmblemId:** The assetId of the emblem, the same which is used in the EmblemUrl
- **Rank:** The rankId the player has (for example: 255 for the owner)
- **Role:** The name of the player’s grouprank (for example: Group Owner)
- **IsPrimary:** A boolean indicating if this is the player’s primary group
- **IsInClan:** A boolean indicating if the player is in this group’s clan

Note unlike `GroupService/GetAlliesAsync` and `GroupService/GetEnemiesAsync`, GetGroupsAsync returns a table rather than a `StandardPages` object. */
	GetGroupsAsync(userId: number): Array<GetGroupsAsyncResult>;
}

interface RbxGuiObject extends RbxGuiBase2d {
	/** Fired when a user begins interacting via a Human-Computer Interface device (Mouse button down, touch begin, keyboard button down, etc.). 'inputObject' is an InputObject, which contains useful data for querying user input.  This event only fires locally. */
	readonly InputBegan: RBXScriptSignal<(input: InputObject) => void>;
	/** Fired when a user changes interacting via a Human-Computer Interface device (Mouse move, touch move, mouse wheel, etc.). 'inputObject' is an InputObject, which contains useful data for querying user input.  This event only fires locally. */
	readonly InputChanged: RBXScriptSignal<(input: InputObject) => void>;
	/** Fired when a user stops interacting via a Human-Computer Interface device (Mouse button up, touch end, keyboard button up, etc.). 'inputObject' is an InputObject, which contains useful data for querying user input.  This event only fires locally. */
	readonly InputEnded: RBXScriptSignal<(input: InputObject) => void>;
	/** Fired when a user holds at least one finger for a short amount of time on the same screen position on a TouchEnabled device. 'touchPositions' is a Lua array of Vector2, each indicating the position of all the fingers involved in the gesture. 'state' indicates the Enum.UserInputState of the gesture.  This event only fires locally. */
	readonly TouchLongPress: RBXScriptSignal<(touchPositions: Array<Vector2>, state: Enum.UserInputState) => void>;
	/** Fired when a user drags at least one finger on a TouchEnabled device. 'touchPositions' is a Lua array of Vector2, each indicating the position of all the fingers involved in the gesture. 'totalTranslation' is a Vector2, indicating how far the pan gesture has gone from its starting point. 'velocity' is a Vector2 that indicates how quickly the gesture is being performed in each dimension. 'state' indicates the Enum.UserInputState of the gesture. */
	readonly TouchPan: RBXScriptSignal<
		(
			touchPositions: Array<Vector2>,
			totalTranslation: Vector2,
			velocity: Vector2,
			state: Enum.UserInputState,
		) => void
	>;
	/** Fired when a user pinches their fingers on a TouchEnabled device. 'touchPositions' is a Lua array of Vector2, each indicating the position of all the fingers involved in the pinch gesture. 'scale' is a float that indicates the difference from the beginning of the pinch gesture. 'velocity' is a float indicating how quickly the pinch gesture is happening. 'state' indicates the Enum.UserInputState of the gesture.  This event only fires locally. */
	readonly TouchPinch: RBXScriptSignal<
		(touchPositions: Array<Vector2>, scale: number, velocity: number, state: Enum.UserInputState) => void
	>;
	/** Fired when a user rotates two fingers on a TouchEnabled device. 'touchPositions' is a Lua array of Vector2, each indicating the position of all the fingers involved in the gesture. 'rotation' is a float indicating how much the rotation has gone from the start of the gesture. 'velocity' is a float that indicates how quickly the gesture is being performed. 'state' indicates the Enum.UserInputState of the gesture.  This event only fires locally. */
	readonly TouchRotate: RBXScriptSignal<
		(touchPositions: Array<Vector2>, rotation: number, velocity: number, state: Enum.UserInputState) => void
	>;
	/** Fired when a user taps their finger on a TouchEnabled device. 'touchPositions' is a Lua array of Vector2, each indicating the position of all the fingers involved in the tap gesture. This event only fires locally.  This event will always fire regardless of game state. */
	readonly TouchTap: RBXScriptSignal<(touchPositions: Array<Vector2>) => void>;
}

interface GuiService extends RbxInstance {
	/** Creates a gui selection group where gamepad gui navigation will only consider selectable gui objects that are within the group (children of selectionParent).

A use case is you have a menu pop open, but there are other selectable objects on the screen (maybe from previous menus), but you want to the user to only be able to select gui objects in the new menu.Creates a gui selection group where gamepad gui navigation will only consider selectable gui objects that are within the group (children of selectionParent). */
	AddSelectionParent(selectionName: string, selectionParent: Instance): void;
	/** Functions similarly to `GuiService/AddSelectionParent`, but you can give it a tuple of `GuiObject` that you want to be contained in the group. */
	AddSelectionTuple(selectionName: string, selections: Array<any>): void;
	/** Returns a Tuple containing two Vector2 values representing the offset of user GUIs in pixels from the top right corner of the screen and the bottom right corner of the screen respectively. */
	GetGuiInset(): LuaTuple<[Vector2, Vector2]>;
}

interface _HapticService extends RbxInstance {
	GetMotor(inputType: Enum.UserInputType, vibrationMotor: Enum.VibrationMotor): LuaTuple<[number]>;
	SetMotor(
		inputType: Enum.UserInputType,
		vibrationMotor: Enum.VibrationMotor,
		...vibrationValues: Array<number>,
	): void;
}

interface HttpHeaders {
	[index: string]: string;
}

interface RequestAsyncRequest {
	Url: string;
	Method?: "GET" | "HEAD" | "POST" | "PUT" | "DELETE";
	Body?: string;
	Headers?: HttpHeaders;
}

interface RequestAsyncResponse {
	Success: boolean;
	StatusCode: number;
	StatusMessage: string;
	Headers: HttpHeaders;
	Body: string;
}

/** @rbxts server */
interface HttpService extends RbxInstance {
	/** Send an HTTP GET request, blocking the current thread until a response is received. If the HTTP response code is not in 200 class of status codes, this function raises an error. A useful endpoint that can help you debug GET request is [https://httpbin.org/get](). It provides a JSON response with information about a GET request, such as headers and URL arguments. */
	GetAsync(url: string, nocache?: boolean, headers?: HttpHeaders): string;

	/** Send an HTTP POST request, blocking the current thread until a response is received. Certain HTTP response codes (like 404 or 403) will raise errors. A useful endpoint that can help you debug POST requests is [https://httpbin.org/post](). It provides a JSON response with information about a POST request, such as headers and URL arguments. */
	PostAsync(
		url: string,
		data: string,
		content_type?: Enum.HttpContentType,
		compress?: boolean,
		headers?: HttpHeaders,
	): string;
	/** The **RequestAsync()** function sends an HTTP request using a dictionary to specify the request data, such as the target URL, method, headers and request body data. It returns a dictionary that describes the response data received.

## Request Dictionary Fields

| Name                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Url**                                                                                                                                                                                                                                                            | string                                                                                                                                                                                                                                                             | yes                                                                                                                                                                                                                                                                | The target URL for this request. Must use `http` or `https` protocols.                                                                                                                                                                                             |
| **Method**                                                                                                                                                                                                                                                         | string                                                                                                                                                                                                                                                             | no                                                                                                                                                                                                                                                                 | The HTTP method being used by this request, most often GET or POST.                                                                                                                                                                                                |
| **Headers**                                                                                                                                                                                                                                                        | dictionary                                                                                                                                                                                                                                                         | no                                                                                                                                                                                                                                                                 | A dictionary of headers to be used with this request. Most HTTP headers are accepted here, but not all.                                                                                                                                                            |
| **Body**                                                                                                                                                                                                                                                           | string                                                                                                                                                                                                                                                             | no                                                                                                                                                                                                                                                                 | The request body. Can be any string, including binary data. Must be excluded when using the GET or HEAD HTTP methods. It might be necessary to specify the Content-Type

 header when sending JSON or other formats. |

### HTTP Headers

In the request dictionary, you can specify custom HTTP headers to use in the request. However, some headers cannot be specified. For example, Content-Length

 is determined from the request body. User-Agent

 and Roblox-Id

 are locked by Roblox. Other headers like `Accept` or Cache-Control

 use default values but can be overridden. More commonly, some REST APIs may require API keys or other service authentication to be specified in request headers.

This method does not detect the format of body content. Many web servers require the Content-Type

 header be set appropriately when sending certain formats. Other methods of `HttpService` use the `Enum/HttpContentType|HttpContentType` enum; for this method set the Content-Type

 header appropriately: `text/plain`, `text/xml`, `application/xml`, `application/json` or application/x-www-form-urlencoded

 are replacement Content-Type

 header values for the respective enum values.

### Response Dictionary Fields

The function returns a dictionary containing the following fields:

| Name                                                                                                                | Type                                                                                                                | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Success**                                                                                                         | boolean                                                                                                             | The success status of the request. This is true if and only if the **StatusCode** lies within the range [200, 299]. |
| **StatusCode**                                                                                                      | integer                                                                                                             | The HTTP response code identifying the status of the response.                                                      |
| **StatusMessage**                                                                                                   | string                                                                                                              | The status message that was sent back.                                                                              |
| **Headers**                                                                                                         | dictionary                                                                                                          | A dictionary of headers that were set in this response.                                                             |
| **Body**                                                                                                            |                                                                                                                     | The request body (content) received in the response.                                                                |

## Error Cases

This method raises an error if the response times out or if the target server rejects the request. If a web service goes down for some reason, it can cause scripts that use this method to stop functioning altogether. It is often a good idea to wrap calls to this method in `pcall` and gracefully handle failure cases if the required information isn’t available.

## Limitations

The current limitation for sending and receiving HTTP requests is 500 requests per minute. Requests over this threshold will fail. Additionally, Roblox domains are blacklisted. This means that HTTP requests cannot be sent to any Roblox owned site, such as [www.roblox.com](). */
	RequestAsync(requestOptions: RequestAsyncRequest): RequestAsyncResponse;
}

interface Humanoid extends RbxInstance {
	/** The AnimationPlayed event fires when an `AnimationTrack` begins playing on the `Humanoid`.

A common use for this function is to connect the `AnimationTrack/KeyframeReached` event for the playing AnimationTrack, so additional effects can be added to the animation (for example `Sound|Sounds` and `ParticleEmitter|ParticleEmitters`).

This event can be used for any `Humanoid` regardless if it belongs to the local player’s client or not.

## See also

- For the `AnimationController` equivalent of this event, please see `AnimationController/AnimationPlayed` */
	readonly AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
	/** This event fires when a `Humanoid` either sits in a `Seat` or `VehicleSeat` or gets up.

When a `Player/Character` comes into contact with a seat they are attached to the seat and a sitting animation plays. For more information on this, please see the `Seat` page.

The *active* parameter will be true if a player has sat down, and false if they have gotten up. The *currentSeatPart* parameter will be the seat part the humanoid is sitting in if they are sat down, or *nil* if they have gotten up.

## See also

- You can check if a humanoid is currently sitting using the `Humanoid/Sit` property
- You can also check the current humanoid seat part using the `Humanoid/SeatPart` property */
	readonly Seated: RBXScriptSignal<(active: boolean, currentSeatPart: Seat | VehicleSeat) => void>;
	/** This event fires when one of the `Humanoid|Humanoid's` limbs come in contact with another `BasePart`.

The `BasePart` the `Humanoid|Humanoid's` limb is touching along with the limb itself is given.

This event will not fire when limbs belonging to the `Humanoid` come into contact with themselves.

## Alternatives to the Humanoid Touched event

Although the Humanoid.Touched event is useful, developers should consider if there are alternatives that suit their needs better before using it.

- In most cases it is advised to connect a `BasePart/Touched` event for `BasePart|BaseParts` of interest instead. This is because the Humanoid Touched event will constantly fire when the humanoid is moving. For example, in a dodgeball game it would be more practical to connect a touched event for the balls rather than the humanoid
- For developers trying to work out when the `Humanoid` has landed on the ground, the `Humanoid/StateChanged` event is more suitable. Alternatively, developers can use `Humanoid/FloorMaterial` to see if the `Humanoid` is standing on anything

## Notes

- Connecting to this event will cause a `TouchTransmitter` to be created in every limb
- The is currently no equivalent of `BasePart/TouchEnded|BasePart.TouchEnded` for `Humanoid|Humanoids` */
	readonly Touched: RBXScriptSignal<(touchingPart: BasePart, humanoidPart: BasePart) => void>;
	/** This yield function makes the `Character|character's` look match that of the passed in `HumanoidDescription`. A copy of the passed look will then be cached in the `Humanoid` as the current HumanoidDescription for the Humanoid.

It allows you to quickly set and store a character’s appearance using a stored look without having to set each property every time.

## See also

- `Humanoid/GetAppliedDescription`, returns the HumanoidDescription currently applied to the Humanoid
- `Players/GetHumanoidDescriptionFromUserId`, gives back a HumanoidDescription which describes the Avatar for the passed in user
- `Players/GetHumanoidDescriptionFromOutfitId`, gives back a HumanoidDescription whose parameters are initialized to match that of the passed in server-side outfit asset
- `Player/LoadCharacterWithHumanoidDescription`, spawns a player with the look from the HumanoidDescription Instance passed in */
	ApplyDescription(humanoidDescription: HumanoidDescription): void;
	GetAppliedDescription(): HumanoidDescription;
	/** This function returns an array of all `AnimationTrack|AnimationTracks` that are currently being played on the `Humanoid`.

A typical use for this function is stopping currently playing tracks using `AnimationTrack/Stop`.

Note this function will not return `AnimationTrack|AnimationTracks` that have loaded but are not playing. If the developer wishes to track these they will need to index them manually. See below for one example of how this could be achieved:

```
local animationTracks = {}
local track = humanoid:LoadTrack(animation)
table.insert(animationTracks, track)
``` */
	GetPlayingAnimationTracks(): Array<AnimationTrack>;
	/** This function loads an `Animation` onto a `Humanoid`, returning an `AnimationTrack` that can be used for playback.

## How to load an Animation

The following code can be used to load an `Animation` onto a `Humanoid`.

```
local animationTrack = humanoid:LoadAnimation(animation)
animationTrack:Play()
```

## Should I load an Animation on the client or server?

If the `Humanoid` is controlled by a particular client, as is the case with `Player` `Player/Character|Characters` then `Animation|Animations` should be loaded and played from that client.

If the `Humanoid` belongs to a NPC (Non Player Character) which the server has [network ownership]() of then the `Animation|Animations` should be loaded and played from the server.

Although generally it is not advisable to do so, these rules can be bypassed using the `Animator` object. */
	LoadAnimation(animation: Animation): AnimationTrack;
	/** Attaches the specified `Accessory` to the `Humanoid`. ![A humanoid with an accessory that was attached using AddAccessory](https://developer.roblox.com/assets/5aae3895c7db666d0b74b15a/AddAccessory.png)

## How are Accessories attached to Humanoids?

![Attachments that share the same name, and thus are used to connect the accessory.](https://developer.roblox.com/assets/5aae3cca23d67a790b463318/AccessoryAttachment.png)

The `Accessory` is parented to the `Humanoid|Humanoid's` parent and then attached.

An `Accessory` is attached to the character by searching for an `Attachment` in the `Humanoid|Humanoid's` parent that shares the same name as an `Attachment` in the accessory’s *Handle* `Part`. If one is found, the *Handle* part will be connected to the parent of the `Attachment` using a `Weld`. This weld will be configured so the `Attachment|Attachments` occupy the same space.

If the required `Attachment` can not be found, then the `Accessory` will remain parented to the `Humanoid|Humanoid's` parent but it will be unattached. */
	AddAccessory(accessory: Accessory): void;
	/** Takes a specified tool and equips it to the Humanoid's Character.  Tool argument should be of type 'Tool'. */
	EquipTool(tool: Tool): void;
	/** This function returns an array of `Accessory|Accessories` that the `Humanoid` is currently wearing.

All `Accessory` objects parented to the `Humanoid|Humanoid's` parent will be included, regardless of if they are attached to the `Humanoid` or not. If the humanoid is not wearing any accessories, the array will be empty.

If the `Humanoid` has no `Accessory|Accessories` an empty array will be returned

## See also

- Use `Humanoid/AddAccessory` to attach an `Accessory` to a `Humanoid` */
	GetAccessories(): Array<Accessory>;
	/** This function returns the `Enum/Limb` enum that is associated with the given `Part`

This function works for both R15 and R6 rigs, for example:

```lua
-- For R15
print(humanoid:GetLimb(character.LeftUpperLeg)) -- Enum.Limb.LeftLeg
print(humanoid:GetLimb(character.LeftLowerLeg)) -- Enum.Limb.LeftLeg
print(humanoid:GetLimb(character.LeftFoot)) -- Enum.Limb.LeftLeg

-- For R6
print(humanoid:GetLimb(character:FindFirstChild("Left Leg"))) -- Enum.Limb.LeftLeg
```

GetLimb will throw an error if the `Part|Part's` parent is not set to the `Humanoid|Humanoid's` parent. */
	GetLimb(part: BasePart): Enum.Limb;
	/** Returns a Enum.BodyPartR15 given a body part in the Humanoid's Character. */
	GetBodyPartR15(part: BasePart): Enum.BodyPartR15;
	/** Attempts to move the Humanoid and it's associated character to 'part'. 'location' is used as an offset from part's origin. */
	MoveTo(location: Vector3, part?: BasePart): void;
	/** Replaces the desired bodypart on the Humanoid's Character using a specified Enum.BodyPartR15 and BasePart. Returns a success boolean. */
	ReplaceBodyPartR15(bodyPart: Enum.BodyPartR15, part: BasePart): boolean;
}

interface SetInfo {
	AssetSetId: string;
	CategoryId: string;
	CreatorName: string;
	Description: string;
	ImageAssetId: string;
	Name: string;
	SetType: string;
}

interface CollectionInfo {
	AssetId: string;
	AssetSetId: string;
	AssetVersionId: string;
	IsTrusted: boolean;
	Name: string;
	CreatorName: string;
}

interface FreeSearchResult {
	CurrentStartIndex: string;
	Results: Array<{
		AssetId: string;
		AssetVersionId: string;
		CreatorName: string;
		Name: string;
	}>;
	TotalCount: string;
}

interface InsertService extends RbxInstance {
	/** Returns a Model containing the Instance that resides at AssetId on the web. This call will also yield the script until the model is returned. Script execution can still continue, however, if you use a [coroutine](http://wiki.roblox.com/index.php?title=Coroutine). */
	LoadAsset(assetId: number): Model;
	/** Similar to LoadAsset, but instead an AssetVersionId is passed in, which refers to a particular version of the asset which is not neccessarily the latest version. */
	LoadAssetVersion(assetVersionId: number): Model;
	/** Returns a table containing a list of the various setIds that are ROBLOX approved. [More info on sets](http://wiki.roblox.com/index.php/Sets) */
	GetBaseSets(): Array<SetInfo>;
	/** Returns a table for the assets stored in the category.  A category is an setId from www.roblox.com that links to a set.  [More info on table format](http://wiki.roblox.com/index.php?title=API:Class/InsertService/GetCollection). [More info on sets](http://wiki.roblox.com/index.php/Sets) */
	GetCollection(categoryId: number): Array<CollectionInfo>;
	/** The GetFreeDecals function retrieves a list of Free `Decal`s from the Catalog. The return type for this method is very odd, as it returns a single table wrapped in a table.

The best way to explain it is to show a visual of the array returned:

```lua
[1] = {
	CurrentStartIndex = 1; -- This can vary depending on the page you input.
	TotalCount = 21; -- Always 21.
	Results = {
		-- All parameters here are psuedo. They can vary depending on the asset.
		[1] = {
			Name = "Asset Name";
			AssetId = 0000000;
			AssetVersionId = 0000000;
			CreatorName = "Roblox";
		},
		-- [2], [3], and so on... up to [21]
	},
}
```

Yikes! That quite confusing. Unfortunately this method was added in the earlier days of Roblox, where easy to understand return-types weren’t a priority.

Thankfully, an example for iterating over this list has been provided at the bottom of this page.

Additionally, if you want to insert `Model|Models` instead, you can use the `InsertService/GetFreeModels` function.

*Note:* The page argument starts at 0. So Page 1 = 0, Page 2 = 1, etc. */
	GetFreeDecals(searchText: string, pageNum: number): Array<FreeSearchResult>;
	/** The GetFreeModels function retrieves a list of Free `Model|Models` from the Catalog. The return type for this method is very odd, as it returns a single table wrapped in a table.

The best way to explain it is to show a visual of the array returned:

```lua
[1] = {
	CurrentStartIndex = 1, -- This can vary depending on the page you input.
	TotalCount = 21, -- Always 21.
	Results = {
		-- All parameters here are psuedo. They can vary depending on the asset.
		[1] = {
			Name = "Asset Name",
			AssetId = 0000000,
			AssetVersionId = 0000000,
			CreatorName = "Roblox",
    		}
    		-- [2], [3], and so on... up to [21]
    	}
}

An example for iterating over this list has been provided at the bottom of this page.

Additionally, if you would like to insert free `Decal|Decals`, you can use the `InsertService/GetFreeDecals` function.
``` */
	GetFreeModels(searchText: string, pageNum: number): Array<FreeSearchResult>;
	/** Returns a table containing a list of the various setIds that correspond to argument 'userId'. [More info on sets](http://wiki.roblox.com/index.php/Sets) */
	GetUserSets(userId: number): Array<SetInfo>;
}

interface CanIndex {
	[i: string]: Instance;
}
interface RbxInstance {
	/** Returns a copy of this Object and all its children. The copy's Parent is nil */
	Clone(): this;
	/** Returns a read-only table of this Object's children */
	GetChildren<T extends Instance = Instance>(): Array<T>;
	/** Returns an array containing all of the descendants of the instance. Returns in preorder traversal, or in other words, where the parents come before their children, depth first. */
	GetDescendants(): Array<Instance>;
	/** Returns the first ancestor of this Instance that matches the first argument 'name'.  The function will return nil if no Instance is found. */
	FindFirstAncestor<T extends Instance = Instance>(name: string): T | undefined;
	/** Returns the first child of this Instance that matches the first argument 'name'.  The second argument 'recursive' is an optional boolean (defaults to false) that will force the call to traverse down thru all of this Instance's descendants until it finds an object with a name that matches the 'name' argument.  The function will return nil if no Instance is found. */
	FindFirstChild<T extends Instance = Instance>(name: string, recursive?: boolean): T | undefined;
	WaitForChild<T extends Instance = Instance>(childName: string): T;
	WaitForChild<T extends Instance = Instance>(childName: string, timeOut: number): T | undefined;
	/** Returns a boolean if this Instance is of type 'className' or a is a subclass of type 'className'.  If 'className' is not a valid class type in ROBLOX, this function will always return false.  [More info](http://wiki.roblox.com/index.php/IsA) */
	IsA<T extends keyof InstanceBases>(className: T): this is InstanceBases[T];
	/** Returns a boolean if this Instance is of type 'className' or a is a subclass of type 'className'.  If 'className' is not a valid class type in ROBLOX, this function will always return false.  [More info](http://wiki.roblox.com/index.php/IsA) */
	IsA(className: string): boolean;
	/** Returns the first child of this Instance that :IsA(className).  The second argument 'recursive' is an optional boolean (defaults to false) that will force the call to traverse down thru all of this Instance's descendants until it finds an object with a name that matches the 'className' argument.  The function will return nil if no Instance is found. */
	FindFirstChildWhichIsA<T extends keyof InstanceBases>(
		className: T,
		recursive?: boolean,
	): InstanceBases[T] | undefined;
	/** Returns the first child of this Instance that :IsA(className).  The second argument 'recursive' is an optional boolean (defaults to false) that will force the call to traverse down thru all of this Instance's descendants until it finds an object with a name that matches the 'className' argument.  The function will return nil if no Instance is found. */
	FindFirstChildWhichIsA(className: string, recursive?: boolean): InstanceBases[keyof InstanceBases] | undefined;
	/** Returns the first ancestor of this Instance with a ClassName equal to 'className'.  The function will return nil if no Instance is found. */
	FindFirstAncestorOfClass<T extends keyof Instances>(className: T): Instances[T] | undefined;
	/** Returns the first ancestor of this Instance with a ClassName equal to 'className'.  The function will return nil if no Instance is found. */
	FindFirstAncestorOfClass(className: string): Instance | undefined;
	/** Returns the first ancestor of this Instance that :IsA(className).  The function will return nil if no Instance is found. */
	FindFirstAncestorWhichIsA<T extends keyof InstanceBases>(className: T): InstanceBases[T] | undefined;
	/** Returns the first ancestor of this Instance that :IsA(className).  The function will return nil if no Instance is found. */
	FindFirstAncestorWhichIsA(className: string): InstanceBases[keyof InstanceBases] | undefined;
	/** Returns the first child of this Instance that with a ClassName equal to 'className'.  The function will return nil if no Instance is found. */
	FindFirstChildOfClass<T extends keyof Instances>(className: T): Instances[T] | undefined;
	/** Returns the first child of this Instance that with a ClassName equal to 'className'.  The function will return nil if no Instance is found. */
	FindFirstChildOfClass(className: string): Instance | undefined;
}

interface RbxJointInstance extends RbxInstance {
	/** The first BasePart that the joint connects. */
	Part0: BasePart | undefined;
	/** The second BasePart that the joint connects. */
	Part1: BasePart | undefined;
}

interface Keyframe extends RbxInstance {
	/** This function adds a `Pose` to the `Keyframe` by parenting it to the keyframe. It is functionally identical to setting the pose’s `Instance/Parent` to the keyframe.

Note, this function will not error when an instance other than a `Pose` is given as the pose parameter and will parent it successfully. */
	AddPose(pose: Pose): void;
	/** This function removes a `Pose` from the `Keyframe` by setting its `Instance/Parent` to nil.

The `Pose`'s `Instance/Parent` is set to nil, but it is not destroyed. This means, provided the pose is referenced it can be re-parented later.

Note, this function will not error when an instance other than a `Pose` is given as the pose parameter. */
	RemovePose(pose: Pose): void;

	/** This function returns an array containing all `Pose|Poses` that have been added to a `Keyframe`. */
	GetPoses(): Array<Pose>;
}

interface KeyframeSequence extends RbxInstance {
	/** This function adds a `Keyframe` to the `KeyframeSequence` by parenting it to the `KeyframeSequence`. It is functionally identical to setting the `Keyframe`'s `Instance/Parent` to the `KeyframeSequence`.

Note, this function will not error when an instance other than a `Keyframe` is given as the keyframe parameter and will parent it successfully. */
	AddKeyframe(keyframe: Keyframe): void;
	/** This function returns an array containing all `Keyframe`s that have been added to a `KeyframeSequence`. This is functionally the same as using the `Instance/GetChildren` function on the `KeyframeSequence`.

Note, this function will return all children of the `KeyframeSequence`, including non `Keyframe`s if any are present. */
	GetKeyframes(): Array<Keyframe>;
	/** This function removes a `Keyframe` from the `KeyframeSequence` by setting its parent to nil. It is functionally identical to setting the keyframe’s parent to nil

The `Keyframe`'s parent is set to nil, but it is not destroyed. This means, provided the keyframe is referenced it can be re-parented later.

Note, this function will not error when an `Instance` other than a `Keyframe` is given as the keyframe parameter. */
	RemoveKeyframe(keyframe: Keyframe): void;
}

interface KeyframeSequenceProvider extends RbxInstance {
	/** Generates a temporary asset ID from a `KeyframeSequence` that can be used for localized testing of an animation.

This function performs the same function to `KeyframeSequenceProvider/RegisterKeyframeSequence` however this function generates an *active://* URL instead of a hash.

The ID generated can be used in an `Animation`'s `Animation/AnimationId` property for testing.

The asset ID generated by this function is temporary and cannot be used outside of Studio. Developers wishing to generate an asset ID that can be used online should upload the `KeyframeSequence` to Roblox. */
	RegisterActiveKeyframeSequence(keyframeSequence: KeyframeSequence): string;
	/** Generates a temporary asset ID from a `KeyframeSequence` that can be used for localized testing of an animation.

This function performs the same function to `KeyframeSequenceProvider/RegisterActiveKeyframeSequence` however this function generates a hash instead of an *active://* URL.

The ID generated can be used for the `Animation/AnimationId` property to test animations.

The asset ID generated by this function is temporary and cannot be used outside of Studio. Developers wishing to generate an asset ID that can be used online should upload the `KeyframeSequence` to Roblox. */
	RegisterKeyframeSequence(keyframeSequence: KeyframeSequence): string;
	/** This function returns an `InventoryPages` object which can be used to iterate over animations owned by a specific user.

This function has a number of potential uses, such as allowing users to browse and import animations into a custom animation plugin. */
	GetAnimations(userId: number): InventoryPages;
	/** GetKeyframeSequenceAsync returns a `KeyframeSequence` based on the specified assetId. The assetId must correspond to an animation. The function will yield until the `KeyframeSequence` is loaded from the website. Because this is a webcall it should wrapped in a pcall. */
	GetKeyframeSequenceAsync(assetId: string): KeyframeSequence;
}

interface LocalizationService extends RbxInstance {
	/** This function takes a player an argument and yields until the cloud localization data for that `Player|player's` locale has been loaded, and then returns a `Translator` object which can be used to perform translations for that locale if any are available.

## See also

- `LocalizationService/GetTranslatorForPlayerAsync`, same functionality as this function except that it yields until the translator has been loaded
- `LocalizationService/GetTranslatorForLocaleAsync`, returns a Translator to be used for translations using the locale data loaded */
	GetTranslatorForPlayer(player: Player): Translator;
}

interface LocalizationEntry {
	Key: string;
	Source: string;
	Context: string;
	Example: string;
	Values: { [index: string]: string };
}

interface LocalizationTable extends RbxInstance {
	/** The GetEntries function returns an array of dictionaries contained in a given `/LocalizationTable`, where each dictionary represents an entry of localization data.

To set the entries of a LocalizationTable, you can use `LocalizationTable/SetEntries`.

Each dictionary in the array contains the following fields:

| Index                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Key                                                                                                                                                                                                                            | `LuaLibrary/String`                                                                                                                                                                                                            | A lookup key for this specific entry in the LocalizationTable.                                                                                                                                                                 |
| Source                                                                                                                                                                                                                         | `LuaLibrary/String`                                                                                                                                                                                                            | The string used to format the localized string. Used as a lookup if a *Key* is not provided.                                                                                                                                   |
| Context                                                                                                                                                                                                                        | `LuaLibrary/String`                                                                                                                                                                                                            | A `Instance/GetFullName` path to the object that was used to generate the LocalizationTable. Used as a lookup if a *Key* is not provided.                                                                                      |
| Example                                                                                                                                                                                                                        | `LuaLibrary/String`                                                                                                                                                                                                            | The string used to format the localization. Optional.                                                                                                                                                                          |
| Values                                                                                                                                                                                                                         | dictionary                                                                                                                                                                                               | A dictionary of language translations for this localization entry. The keys of this dictionary are locale ids, and the values are strings that are used to apply localization for the language corresponding to the locale id. | */
	GetEntries(): Array<LocalizationEntry>;
	/** Returns a `Translator` for keys in this LocalizationTable, in the specified language. */
	GetTranslator(localeId: string): Translator;
}

interface LogInfo {
	message: string;
	messageType: Enum.MessageType;
	timestamp: number;
}

interface LogService extends RbxInstance {
	/** Returns a table of tables, each of which corresponds to something which has been displayed in the output… */
	GetLogHistory(): Array<LogInfo>;
}

interface ReceiptInfo {
	/** the id of the player making the purchase */
	PlayerId: number;
	/** the specific place where the purchase was made */
	PlaceIdWherePurchased: number;
	/** a unique identifier for the purchase, should be used to prevent granting an item multiple times for one purchase */
	PurchaseId: string;
	/** the id of the purchased product */
	ProductId: number;
	/** the type of currency used (Tix, Robux) */
	CurrencyType: Enum.CurrencyType;
	/** the amount of currency spent on the product for this purchase */
	CurrencySpent: number;
}

interface ProductInfo {
	/** The name shown on the asset's page */
	Name: string;
	/** The description as shown on the asset's page; can be nil if blank. */
	Description: string;
	/** The cost of purchasing the asset using Robux */
	PriceInRobux: number;
	/** Timestamp of when the asset was created, e.g. `2018-08-01T17:55:11.98Z` */
	Created: string;
	/** Timestamp of when the asset was last updated by its creator, e.g. `2018-08-01T17:55:11.98Z` */
	Updated: string;
	/** Indicates whether the item is marked as 13+ in catalog */
	ContentRatingTypeId: number;
	/** The minimum Builder's Club subscription necessary to purchase the item */
	MinimumMembershipLevel: number;
	/** Describes whether the asset can be taken for free */
	IsPublicDomain: boolean;
	/** Describes whether the asset is a User Product, Developer Product, or Game Pass */
	ProductType: "User Product" | "Developer Product" | "Game Pass";
	/** A table of information describing the creator of the asset */
	Creator: {
		/** Either `User` or `Group` */
		CreatorType: "User" | "Group";
		/** The ID of the creator user or group */
		CreatorTargetId: number;
		/** The name/username of the creator */
		Name: string;
	};
	IconImageAssetId: number;
	TargetId: number;
}

interface AssetProductInfo extends ProductInfo {
	/** If InfoType was Asset, this is the ID of the given asset. */
	AssetId: number;
	/** The [type of asset](https://developer.roblox.com/articles/Asset-types) (e.g. place, model, shirt) */
	AssetTypeId: number;
	/** Describes whether the asset is purchasable */
	IsForSale: boolean;
	/** Describes whether the asset is a "limited item" that is no longer (if ever) sold */
	IsLimited: boolean;
	/** Describes whether the asset is a "limited unique" ("Limited U") item that only has a fixed number sold */
	IsLimitedUnique: boolean;
	/** Describes whether the asset is marked as "new" in the catalog */
	IsNew: boolean;
	/** The remaining number of items a limited unique item may be sold */
	Remaining: number;
	/** The number of items the asset has been sold */
	Sales: number;
}

interface DeveloperProductInfo extends ProductInfo {
	/** If the InfoType was Product, this is the product's ID */
	ProductId: number;
}

interface RbxServiceProvider extends RbxInstance {
	FindService(className: string): Instance | undefined;
	/** Returns a service with the class name requested. When called with the name of a service (such as Debris) it will return the instance of that service. If the service does not yet exist it will be created and the new service is returned. This is the only way to create some services, and can also be used for services that have unusual names, e.g. RunService’s name is “Run Service”. */
	GetService<T extends keyof Services>(className: T): Services[T];
	GetService(className: string): Instance | undefined;
}

interface DataModel extends RbxServiceProvider {
	/** The Workspace property is a reference to the `Workspace` service.

This property will always point to the `Workspace` and will never be *nil*.

The `Workspace` can also be accessed using the global variable `workspace` and the `ServiceProvider/GetService` function. For example:

```
workspace -- a global variable
game.Workspace -- a property of the DataModel (game)
game:GetService("Workspace") -- workspace is a service
``` */
	readonly Workspace: Workspace;
}

interface MarketplaceService extends RbxInstance {
	/**
	 * Callback that is executed for pending Developer Product receipts.
	 * If this function does not return Enum.ProductPurchaseDecision.PurchaseGranted, then you will not be granted the money for the purchase!
	 * The callback will be invoked with a table, containing the following informational fields:
	 * - **PlayerId** - the id of the player making the purchase.
	 * - **PlaceIdWherePurchased** - the specific place where the purchase was made.
	 * - **PurchaseId** - a unique identifier for the purchase, should be used to prevent granting an item multiple times for one purchase.
	 * - **ProductId** - the id of the purchased product.
	 * - **CurrencyType** - the type of currency used (Tix, Robux).
	 * - **CurrencySpent** - the amount of currency spent on the product for this purchase.
	 */
	ProcessReceipt: (receiptInfo: ReceiptInfo) => Enum.ProductPurchaseDecision;
	/** This event fires when a purchase dialogue of a game pass is closed. This fires right as the dialogue closes when the player presses “Cancel” at the prompt, or “OK” at the success/error message.

- For **developer product** purchase prompts, connect to

`MarketplaceService/PromptProductPurchaseFinished`. In order to

process such purchases you need to set the

`MarketplaceService/ProcessReceipt|ProcessReceipt` callback in a

single script.

- For **affiliate gear sales** or other assets, use

`MarketplaceService/PromptPurchaseFinished`. */
	readonly PromptGamePassPurchaseFinished: RBXScriptSignal<
		(player: Player, gamePassId: number, wasPurchased: boolean) => void
	>;
	/** Fired when a 'player' dismisses a purchase dialog for 'assetId'.  If the player purchased the item 'isPurchased' will be true, otherwise it will be false. This call will produce a warning if called on a guest player. */
	readonly PromptPurchaseFinished: RBXScriptSignal<(player: Player, assetId: number, isPurchased: boolean) => void>;
	/** Takes one argument "assetId" which should be a number of an asset on www.roblox.com.  Returns a table containing the product information (if this process fails, returns an empty table). */
	GetProductInfo(assetId: number, infoType: Enum.InfoType.Asset): AssetProductInfo;
	/** Takes one argument "assetId" which should be a number of an asset on www.roblox.com.  Returns a table containing the product information (if this process fails, returns an empty table). */
	GetProductInfo(assetId: number, infoType: Enum.InfoType.Product): DeveloperProductInfo;
	/** Takes one argument "assetId" which should be a number of an asset on www.roblox.com.  Returns a table containing the product information (if this process fails, returns an empty table). */
	GetProductInfo(assetId: number, infoType: Enum.InfoType.GamePass): AssetProductInfo;
	/** Used to prompt a user to purchase a game pass with the given assetId. */
	PromptGamePassPurchase(player: Player, gamePassId: number): void;
	/** Used to prompt a user to purchase a product with the given product id. */
	PromptProductPurchase(
		player: Player,
		productId: number,
		equipIfPurchased?: boolean,
		currencyType?: Enum.CurrencyType,
	): void;
	/** Will prompt 'player' to purchase the item associated with 'assetId'.  'equipIfPurchased' is an optional argument that will give the item to the player immediately if they buy it (only applies to gear).  'currencyType' is also optional and will attempt to prompt the user with a specified currency if the product can be purchased with this currency, otherwise we use the default currency of the product. */
	PromptPurchase(player: Player, assetId: number, equipIfPurchased?: boolean, currencyType?: Enum.CurrencyType): void;
	/** Checks to see if 'Player' owns the product associated with 'assetId'. Returns true if the player owns it, false otherwise. This call will produce a warning if called on a guest player. */
	PlayerOwnsAsset(player: Player, assetId: number): boolean;
}

interface Model extends RbxDerivesFromModel {
	/** A Part that serves as a reference for the Model's CFrame. Used in conjunction with GetModelPrimaryPartCFrame and SetModelPrimaryPartCFrame. Use this to rotate/translate all Parts relative to the PrimaryPart. */
	PrimaryPart?: BasePart;
	/** Describes the smallest possible rotated cuboid to contain all the parts of the model as a CFrame and Vector3 size.*/
	GetBoundingBox(): LuaTuple<[CFrame, Vector3]>;
}

/** @rbxts server */
interface OrderedDataStore extends RbxGlobalDataStore {
	/** Returns a DataStorePages object. The length of each page is determined by pageSize, and the order is determined by isAscending. minValue and maxValue are optional parameters which will filter the result.  */
	GetSortedAsync(ascending: boolean, pagesize: number, minValue?: number, maxValue?: number): DataStorePages;
}

interface Path extends RbxInstance {
	/** This function returns an array of all the `DataType/PathWaypoint|PathWaypoints` in a `Path`, as computed by `Path/ComputeAsync`.

Each waypoint in the array specifies a `DataType/Vector3` position and `Enum/PathWaypointAction|action` to take when this PathWaypoint is reached. The array is arranged in the order of waypoints from the path start to path end.

If a path could not be computed, this function will return an empty array. */
	GetWaypoints(): Array<PathWaypoint>;
}

interface AgentParameters {
	/** Humanoid radius. Used to determine the minimum separation from obstacles. */
	AgentRadius?: number;
	/** Humanoid height. Empty space smaller than this value, like the space under stairs, will be marked as non-traversable. */
	AgentHeight?: number;
}

interface PathfindingService extends RbxInstance {
	/** Creates a `Path` object based on various agent parameters (see below).

## Agent Parameters

| Key                                                                                                                                                             | Type                                                                                                                                                            | Default                                                                                                                                                         | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AgentRadius**                                                                                                                                                 | integer                                                                                                                                                         | 2                                                                                                                                                               | Humanoid radius. Used to determine the minimum separation from obstacles.                                                                                       |
| **AgentHeight**                                                                                                                                                 | integer                                                                                                                                                         | 5                                                                                                                                                               | Humanoid height. Empty space smaller than this value will be marked as non-traversable

, for instance the space under stairs. |
| **AgentCanJump**                                                                                                                                                | boolean                                                                                                                                                         | true                                                                                                                                                            | Sets whether off-mesh

 links for jumping are allowed.                                                                         | */
	CreatePath(agentParameters?: AgentParameters): Path;
	/** This function is used to find a `Path` between two provided points. This path uses the navigation grid created by `PathfindingService` and makes sure that the path can be followed by a regular-sized

 Roblox character.

This function returns a `Path` object which contains the coordinates of the path. If no path is found between the two points, this function will still return a `Path` object, but that object’s `Path/Status` will be `Enum.PathStatus.NoPath`.

To get the waypoints of a `Path` object, you can use the `Path/GetWaypoints` function. */
	FindPathAsync(start: Vector3, finish: Vector3): Path;
}

interface CollisionGroupInfo {
	id: number;
	mask: number;
	name: string;
}

interface PhysicsService extends RbxInstance {
	/** Returns a table with info on all of the place’s collision groups. Each value in this table is itself a table and contains 3 members:

| Member                                   | Type                                     | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| **id**                                   | integer                                  | The ID of the group                      |
| **mask**                                 | integer                                  | The mask of the group (for internal use) |
| **name**                                 | string                                   | The name of the group                    | */
	GetCollisionGroups(): Array<CollisionGroupInfo>;
}

interface FriendOnlineInfo {
	VisitorId: number;
	UserName: string;
	LastOnline: string;
	IsOnline: boolean;
	LastLocation: string;
	PlaceId: number;
	GameId: string;
	LocationType: 0 | 1 | 2 | 3 | 4;
}

interface Player extends RbxInstance {
	/** The ReplicationFocus `Player` property sets the part to focus replication around a Player. Different Roblox systems that communicate over the network (such as physics, streaming, etc) replicate at different rates depending on how close objects are to the replication focus.

When this property is nil, it reverts to its default behavior which is to treat the local player’s character’s head as the replication focus.

This property should only be set on the server with a `Script`, not a `LocalScript`. Note that this property does not change or update network ownership of parts. */
	ReplicationFocus: BasePart | undefined;
	/** The CharacterAdded event fires when a player’s character spawns (or respawns). This event fires soon after setting `Player/Character` to a non-nil value or calling `Player/LoadCharacter`. Note, CharacterAdded fires when the Character is assigned to the `Player`, which is before the Character is parented to the `Workspace`.

This can be used alongside the `Player/CharacterRemoving` event, which fires right before a player’s character is about to be removed, typically after death. As such, both of these event can potentially fire many times as players die then respawn in a place. If you want to detect when a player joins or leaves the game, you can use the `Players/PlayerAdded` and `Players/PlayerRemoving` events instead.

Note that the `Humanoid` and its body parts (head, torso and limbs) will exist when this event fires, but clothing items like `Hat|Hats` and `Shirt|Shirts`, `Pants` may take a few seconds to be added to the character (connect `Instance/ChildAdded` on the added character to detect these). */
	readonly CharacterAdded: RBXScriptSignal<(character: Model) => void>;
	/** This event fires when the the full appearance of a `Player`'s `Player/Character` has been inserted.

`Player/Character`'s generally have a range of objects modifying their appearance including `Accoutrement|Accoutrements`, `Shirt|Shirts`, `Pants` and `CharacterMesh|CharacterMeshes`. This event will fire when all such objects have been inserted into the `Player/Character`.

One use for this event, is to remove and save aspects of a `Player/Character|Characters` appearance to be used later. See below for an example of this. */
	readonly CharacterAppearanceLoaded: RBXScriptSignal<(character: Model) => void>;
	/** The CharacterRemoving event fires right before a player’s character is removed, such as when the player is respawning.

This event can be used alongside the `Player/CharacterAdded` event, which fires when a player’s character spawns or respawns. For instance, if you would like print a message every time a player spawns and dies:

```lua
local Players = game:GetService("Players")

local function onCharacterSpawned(player)
print(player.Name .. " is spawning")
end

local function onCharacterDespawned(player)
print(player.Name .. " is despawning")
end

local function onPlayerAdded(player)
player.CharacterAdded:connect(function ()
	onCharacterDespawned(player)
end)
player.CharacterRemoving:connect(function ()
	onCharacterDespawned(player)
end)
end

Players.PlayerAdded:connect(onPlayerAdded)
```

This event is only concerned with the `Player/Character|Character` of a `Player`. If you instead need to track when a player joins/leaves the game, use the events `Players/PlayerAdded` and `Players/PlayerRemoving`. */
	readonly CharacterRemoving: RBXScriptSignal<(character: Model) => void>;
	/** The GetFriendsOnline `Player` function returns a `Articles/Table#dictionaries` of online friends, specified by *maxFriends*.

## The Array’s Content

Some fields are only present for certain location types. For example, *PlaceId* won’t be present when the location type is *(mobile) website*.

| Name                                                                                                                                   | Type                                                                                                                                   | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| VisitorId                                                                                                                              | number                                                                                                                                 | The `Player/UserId` of the friend.                                                                                                     |
| UserName                                                                                                                               | string                                                                                                                                 | The user name of the friend.                                                                                                           |
| LastOnline                                                                                                                             | string                                                                                                                                 | When the user was last online.                                                                                                         |
| IsOnline                                                                                                                               | boolean                                                                                                                                | If the friend is currently online.                                                                                                     |
| LastLocation                                                                                                                           | string                                                                                                                                 | The name of the friends current location.                                                                                              |
| PlaceId                                                                                                                                | number                                                                                                                                 | The placeId of the friends last location.                                                                                              |
| GameId                                                                                                                                 | string                                                                                                                                 | The `DataModel/JobId` of the friends last location.                                                                                    |
| LocationType                                                                                                                           | number                                                                                                                                 | The location type of the friends last location. 0 for mobile website. 1 for mobile in game. 2 for website. 3 for studio. 4 for ingame. | */
	GetFriendsOnline(maxFriends?: number): Array<FriendOnlineInfo>;
	/** Returns the mouse being used by the client. */
	GetMouse(): PlayerMouse;
	/**
	 * Loads in a new character for this player.  This will replace the player's current character, if they have one. This should be used in conjunction with Players.CharacterAutoLoads to control spawning of characters. This function only works from a server-side script (NOT a LocalScript).
	 * Also clears the player’s `Backpack` and `PlayerGui`.
	 * @rbxts server
	 */
	LoadCharacter(): void;
	/** @rbxts server */
	LoadCharacterWithHumanoidDescription(humanoidDescription: HumanoidDescription): void;
}

interface CharacterAppearanceInfo {
	bodyColors: {
		leftArmColorId: number;
		torsoColorId: number;
		rightArmColorId: number;
		headColorId: number;
		leftLegColorId: number;
		rightLegColorId: number;
	};
	assets: Array<{
		id: number;
		assetType: {
			name: string;
			id: number;
		};
		name: string;
	}>;
	defaultPantsApplied: boolean;
	defaultShirtApplied: boolean;
	playerAvatarType: string;
	scales: {
		bodyType: number;
		head: number;
		height: number;
		proportion: number;
		depth: number;
		width: number;
	};
}

interface Players extends RbxInstance {
	/** @rbxts client */
	/** This is a read-only property which contains a reference to the `Player` instance for which a `LocalScript` is running. For `Script`s running on the server, this property is nil.

This property is useful when creating GUIs that display information about the player. You can use it to accessing the player’s `Player/Character`, `PlayerGui`, and `Backpack`.

## Loading GUIs

When creating loading GUIs using `ReplicatedFirst`, sometimes a `LocalScript` may run before the `Players/LocalPlayer` is created and becomes available. In such cases, it is useful to yield until it is by using `Instance/GetPropertyChangedSignal`

```lua
local Players = game:GetService("Players")
local player = Players.LocalPlayer or Players:GetPropertyChangedSignal("LocalPlayer"):wait()
```

Note that this technique is not required for `LocalScript|LocalScripts` within in `StarterGui`, `StarterPlayerScripts` or `StarterCharacterScripts`, as these kinds of scripts only run if the `Player` object is already available. */
	readonly LocalPlayer: Player;

	/** This function searches each `Player|player` in `Players` for one whose `Player/UserId` matches the given UserId. If such a player does not exist, it simply returns `nil`. It is equivalent to the following function:

```lua
local Players = game:GetService("Players")
local function getPlayerByUserId(userId)
for _, player in pairs(Players:GetPlayers()) do
	if player.UserId == userId then
		return player
	end
end
end
```

This method is useful in finding the purchaser of a developer product using `MarketplaceService/ProcessReceipt`, which provides a table that includes the purchaser’s UserId and not a reference to the Player object itself. Most games will require a reference to the player in order to grant products. */
	GetPlayerByUserId(userId: number): Player | undefined;

	/** This function returns the `Player` associated with the given `Player/Character`, or `nil` if one cannot be found. It is equivalent to the following function:

```lua
local function getPlayerFromCharacter(character)
	for _, player in pairs(game:GetService("Players"):GetPlayers()) do
		if player.Character == character then
			return player
		end
	end
end
```

This method is often used when some event in player’s character fires (such as their `Humanoid` `Humanoid/Died|dying`). Such an event might not directly reference the Player object, but this method provides easy access. The inverse of this function can be described as getting the Character of a Player. To do this, simply access the Character property. */
	GetPlayerFromCharacter(character: Model): Player | undefined;
	/** This method returns a table of all presently connected `Player`. It functions the same way `Instance/GetChildren` would except that it only returns Player objects. It functions similarly to `Instance/GetChildren` when called on `Players`. 0 When used in conjunction with a for-loop, it is useful for iterating over all players in a game.

```lua
Players = game:GetService("Players")
for i, player in pairs(Players:GetPlayers()) do
    print(player.Name)
end
```

Scripts that connect to `Players/PlayerAdded` are often trying to process every Player that connects to the game. This method is useful for iterating over already-connected players that wouldn’t fire `Players/PlayerAdded|PlayerAdded`. Using this method ensures that no player is missed!

```lua
local Players = game:GetService("Players")

local onPlayerAdded(player)
	print("Player: " .. player.Name)
end

for _, player in pairs(Players:GetPlayers()) do
	onPlayerAdded(player)
end
Players.PlayerAdded:Connect(onPlayerAdded)
``` */
	GetPlayers(): Array<Player>;
	/** This function returns a `Model` containing the assets which the player is wearing, excluding gear.

If you prefer a Lua table of information about these assets instead of a model, use `Players/GetCharacterAppearanceInfoAsync`.

This method behaves similar to `InsertService/LoadAsset`, and is like using `InsertService/LoadAsset|LoadAsset` on the asset information returned by `Players/GetCharacterAppearanceInfoAsync` except faster. */

	GetCharacterAppearanceAsync(userId: number): Model | undefined;
	/** This function returns information about a player’s avatar (ignoring gear) on the Roblox website in the form of a dictionary. It is not to be confused with `Players/GetCharacterAppearanceAsync|GetCharacterAppearanceAsync`, which actually loads the assets described by this method. You can use `InsertService/LoadAsset` to load the assets that are used in the player’s avatar. The structure of the returned dictionary is as follows:

| Name                                                  | Type                                                  | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `bodyColors`                                          | table (see below)                                     | Describes the BrickColor values for each limb         |
| `assets`                                              | table (see below)                                     | Describes the equipped assets (hats, body parts, etc) |
| `defaultPantsApplied`                                 | bool                                                  | Describes whether default pants are applied           |
| `defaultShirtApplied`                                 | bool                                                  | Describes whether default shirt is applied            |
| `playerAvatarType`                                    | string                                                | Either "R15" or "R6"                                  |
| `scales`                                              | table (see below)                                     | Describes various body scaling factors                |

### Assets sub-table

The assets table is an array of tables containing the following keys that describe the assets currently equipped by the player:

| Name                                                                                                  | Type                                                                                                  | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | number                                                                                                | The asset ID of the equipped asset                                                                    |
| `assetType`                                                                                           | table                                                                                                 | A table with `name` and `id` fields, each describing the kind of asset equipped ("Hat", "Face", etc.) |
| `name`                                                                                                | string                                                                                                | The name of the equipped asset                                                                        |

### Scales sub-table

The scales table has the following keys, each a number corresponding to one `Humanoid` scaling property:

`bodyType`, `head`, `height`, `proportion`, `depth`, `width`

### Body Colors sub-table

The body colors table has the following keys, each a number corresponding to a `DataType/BrickColor` ID number which can be used with `BrickColor.new(id)`:

`leftArmColorId`, `torsoColorId`, `rightArmColorId`, `headColorId`, `leftLegColorId`, `rightLegColorId` */
	GetCharacterAppearanceInfoAsync(userId: number): CharacterAppearanceInfo;
	/** The GetFriends `Players` function returns a `FriendPages` object which contains information for all of the given `Player|Player's` friends. The items within the FriendPages object are tables with the following fields:

| Name                              | Type                              | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- |
| Id                                | int64                             | The friend's UserId               |
| Username                          | string                            | The friend's username             |
| IsOnline                          | bool                              | If the friend is currently online |

See the code samples for an easy way to iterate over all a player’s friends. */
	GetFriendsAsync(userId: number): FriendPages;

	GetHumanoidDescriptionFromOutfitId(outfitId: number): HumanoidDescription;
	GetHumanoidDescriptionFromUserId(userId: number): HumanoidDescription;

	/** This function fetches a `Articles/Content|content URL` of an image of a player’s avatar given their `Player/UserId|UserId`, the image size (as an enum) and type (also an enum: avatar, bust, headshot). It also returns a bool describing if the image is ready to be used.

Most often, this method is used with `ImageLabel/Image` to display player pictures next to their username in-game. It is also appropriate for `Decal/Texture` as well.

### Available Sizes

`Enum.ThumbnailSize`: `Size48x48`, `Size60x60`, `Size100x100`, `Size150x150`, `Size180x180`, `Size353x353`, `Size420x420`

### Types of User Thumbnails

| Enum.ThumbnailType                                                                                 | Description                                                                                        | Example (60px)                                                                                     |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `AvatarBust`                                                                                       | Upper chest and head                                                                               | ![]()     |
| `AvatarThumbnail`                                                                                  | Entire avatar                                                                                      | ![]()   |
| `HeadShot`                                                                                         | Just the head and face                                                                             | ![]() | */
	GetUserThumbnailAsync(
		userId: number,
		thumbnailType: Enum.ThumbnailType,
		thumbnailSize: Enum.ThumbnailSize,
	): LuaTuple<[string, boolean]>;
	/** The PlayerAdded event fires when a player enters the game. This is used to fire an event when a player joins a game, such as loading the player’s saved `GlobalDataStore` data.

This can be used alongside the `Player/PlayerRemoving` event, which fires when a player is about to leave the game. For instance, if you would like print a message every time a new player joins or leaves the game:

```
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
	print(player.Name + " joined the game!")
end)

Players.PlayerRemoving:Connect(function(player)
	print(player.Name + " left the game!")
end)
```

If you want to track when a player’s character is added or removed from the game, such as when a player respawns or dies, you can use the `Player/CharacterAdded` and `Player/CharacterRemoving` functions.

## Notes

- Up until recently, this event didn’t work on the client (in `Localscript`s), but this has been changed

- This event does not work as expected in *solo mode*, because the player is created before scripts that connect to PlayerAdded run. To handle this case, as well as cases in which the script is added into the game after a player enters, create an OnPlayerAdded function that you can call to handle a player’s entrance. */
	readonly PlayerAdded: RBXScriptSignal<(player: Player) => void>;
	/** The PlayerRemoving event fires right before a `Player` is leaves the game. This event fires before `Instance/ChildRemoved|ChildRemoved` does on `Players`, and behaves somewhat similarly to `Instance/DescendantRemoving`. Since event fires before the actual removal of a `Player`, this event is useful to store player data using a `GlobalDataStore`.

This can be used alongside the `Player/PlayerAdded` event, which fires when a player joins the game. For instance, if you would like print a message every time a new player joins or leaves the game:

```
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
	print(player.Name + " joined the game!")
end)

Players.PlayerRemoving:Connect(function(player)
	print(player.Name + " left the game!")
end)
```

If you want to track when a player’s character is added or removed from the game, such as when a player respawns or dies, you can use the `Player/CharacterAdded` and `Player/CharacterRemoving` functions. */
	readonly PlayerRemoving: RBXScriptSignal<(player: Player) => void>;
}

interface PointsService extends RbxInstance {
	/** Will attempt to award the 'amount' points to 'userId', returns 'userId' awarded to, the number of points awarded, the new point total the user has in the game, and the total number of points the user now has. Will also fire PointsService.PointsAwarded. Works with server scripts ONLY. */
	AwardPoints(userId: number, amount: number): LuaTuple<[number, number, number, 0]>;
}

interface RemoteEvent extends RbxInstance {
	/** The FireAllClients function fires the `RemoteEvent/OnClientEvent` event for each client.

Unlike `RemoteEvent/FireClient`, this event does not take a target player as an argument. Instead it will fire to all clients who have the same remote event connected to an OnClientEvent event.

Since this function is used to communicate from the server to the client, it will only work when used in a `Script`.

The functionality of this function, as well as other `RemoteEvent` and `RemoteFunction` events and functions, is well documented in [this](https://developer.roblox.com/articles/Remote-Functions-and-Events) article.

## Note

- Data can be passed from server to client through remote events in the same way data is passed from client to server. Any extra information can be passed in as arguments to the `RemoteEvent/FireClient` and FireAllClients functions. Note that the FireClient function still needs to pass the player to send the message to as the first argument. */
	FireAllClients(...arguments: Array<unknown>): void;
	/** Fires `RemoteEvent/OnClientEvent` for the specified player. Only [connections](https://developer.roblox.com/api-reference/datatype/RBXScriptConnection) in `LocalScript`s that are running on the specified player’s client will fire. This varies from the RemoteFunction class which will queue requests.

Since this function is used to communicate from the server to the client, it will only work when used in a `Script`.

The functionality of this function, as well as other `RemoteEvent` and `RemoteFunction` events and functions, is well documented in [this](https://developer.roblox.com/articles/Remote-Functions-and-Events) article.

## Notes

- Data can be passed from server to client through remote events in the same way data is passed from client to server. Any extra information can be passed in as arguments to the FireClient and `RemoteEvent/FireAllClients` functions. Note that the FireClient function still needs to pass the player to send the message to as the first argument.

- Sometimes a game will need to send information from one client to another. Roblox does not support direct client to client contact, so any communication must first go through the server. This is typically done using remote events (although functions could be used if desired). First, the sending client would call FireServer. On the server, the function connected to OnServerEvent would hear this firing, and itself would then call FireClient. */
	FireClient(player: Player, ...arguments: Array<unknown>): void;
	/** The FireServer event fires the `RemoteEvent/OnServerEvent` event on the server using the arguments specified with an additional player argument at the beginning.

Since this function is used to communicate from the client to the server, it will only work when used in a `LocalScript`.

When firing from the client note that nothing has to be passed in by default (unlike firing to the client from the server - where the player is passed in).

The functionality of this function, as well as other `RemoteEvent` and `RemoteFunction` events and functions, is well documented in [this](https://developer.roblox.com/articles/Remote-Functions-and-Events) article. */
	FireServer(...arguments: Array<unknown>): void;
	/** The OnClientEvent event fires listening functions in `LocalScript` when either `RemoteEvent/FireClient` or `RemoteEvent/FireAllClients` is fired by the server from a `Script`.

This is used to retrieve remote events fired by the server and intended for the client. This event is in place to provide a method for communicating between the server and client, which is well documented in [this](https://developer.roblox.com/articles/Remote-Functions-and-Events) article. This event retrieves remote events fired by the server to the client.

To fire from the client to the server, you should use `RemoteEvent/FireServer` and `RemoteEvent/OnServerEvent`. */
	readonly OnClientEvent: RBXScriptSignal<(...arguments: Array<unknown>) => void, true>;
	/** Fires listening functions in `Script` when `RemoteEvent/FireServer` is called from a `LocalScript`.

This is used to retrieve remote events fired by the client and intended for the server. This event is in place to provide a method for communicating between the client and server, which is well documented in [this](https://developer.roblox.com/articles/Remote-Functions-and-Events) article. This event retrieves remote events fired by the client to the server.

To fire from the server to the client, you should use `RemoteEvent/FireClient` and `RemoteEvent/OnClientEvent`. */
	readonly OnServerEvent: RBXScriptSignal<(player: Player, ...arguments: Array<unknown>) => void>;
}

interface RemoteFunction extends RbxInstance {
	/** Calls the method bound to the RemoteFunction by `RemoteFunction/OnClientInvoke` for the given `Player`. Use from a `Script`.

If the result is not needed then it is recommended to use a `RemoteEvent/FireClient` instead, as its call is asynchronous and doesn’t need to wait for a response to continue execution.

This is used to bind functions to invoke the client when the remote event is invoked by the server. This function is in place to provide a method for communicating between the client and server, which is well documented in [this](https://developer.roblox.com/articles/Remote-Functions-and-Events) article.

To fire from the server to the client, you should use `RemoteFunction/InvokeServer` and `RemoteFunction/OnServerInvoke`.

## Note

In practice, the server does not often invoke the client. Clients typically do not have information the server doesn’t have and the actions that only a client can take (displaying a GUI for instance), often do not require a callback. That said, the server invoking clients is still an action that the Roblox engine will support and may be useful in niche situations.

## Warning

If a client disconnects or leaves the game while it is being invoked from the server, the InvokeClient function will error. It is therefore recommended to wrap this function in a pcall so it does stop the execution of other code. */
	InvokeClient(player: Instance, ...arguments: Array<any>): unknown;
	/** Clients invoking the server is often used because the server either has access to information the client does not, or the client is requesting a game action that only the server can perform. When invoked, this calls the method bound to the RemoteFunction by `RemoteFunction/OnServerInvoke`. Use from a `LocalScript`.

If the result is not needed then it is recommended to use a `RemoteEvent/FireServer` instead, as its call is asynchronous and doesn’t need to wait for a response to continue execution.

This is used to bind functions to invoke the server when the remote event is invoked by a client. This function is in place to provide a method for communicating between the client and server, which is well documented in [this][1] article.

To fire from the client to the server, you should use `RemoteFunction/InvokeClient` and `RemoteFunction/OnClientInvoke`.

## Note

When handling the invocation from the client note that nothing has to be passed in by default (unlike invoking the server where the player is passed in). */
	InvokeServer<R = unknown>(...arguments: Array<any>): R;
	/** The OnClientInvoke event fires the bound functions in `LocalScript`s when `RemoteFunction/InvokeClient` is called by the server from a `Script`. When the bound function returns, the returned values are sent back to the server.

This is used to listen to remote functions invoked by the server and intended for the client. This callback is in place to provide a method for communicating between the server and client.

To fire from the client to the server, you should use `RemoteFunction/InvokeServer` and `RemoteFunction/OnServerInvoke`. */
	OnClientInvoke: (arguments: Array<any>) => void;
	/** The OnServerInvoke event fires the bound functions in `Script`s when `RemoteFunction/InvokeServer` is called by the server from a `LocalScript`. When the bound function returns, the returned values are sent back to the client.

This is used to retrieve remote events fired by the client and intended for the server. This event is in place to provide a method for communicating between the client and server, which is well documented in [this][1] article.

To fire from the server to the client, you should use `RemoteFunction/InvokeClient` and `RemoteFunction/OnClientInvoke`.

## Note

- Binding a function to OnServerInvoke is done with the assignment operator `=`, and not with an event. That is because OnServerInvoke is a callback and expects a function to be assigned to it. When the RemoteFunction is invoked, it will execute the function that was assigned to the onInvoke function.

- Only one function can be assigned to OnServerInvoke at a time. If multiple functions are assigned, only the last function to be assigned will be used. */
	OnServerInvoke: (player: Instance, arguments: Array<any>) => void;
}

interface SocialService extends RbxInstance {
	/** An event invoked when a game invite prompt is closed. 'senderPlayer' is the player who closed the prompt and 'recipientIds' is an array of UserIds that were invited. */
	readonly GameInvitePromptClosed: RBXScriptSignal<(senderPlayer: Player, recipientIds: Array<number>) => void>;
	/** Checks if a user can send a game invite. Can only be called from the client. Can throw if the web request fails. Will yield the current thread when called. */
	CanSendGameInviteAsync(targetPlayer: Player): boolean;
	/** Shows a window to the 'targetPlayer' allowing them to invite friends. If 'targetPlayer' can not send invites, this will silently fail. If this is called from the client and the 'targetPlayer' is not the LocalPlayer it will error. */
	PromptGameInvite(targetPlayer: Player): void;
}

interface SoundService extends RbxInstance {
	/** GetListener returns `SoundService`s current listener type and what is set as listener.

The first result returned is the `Enum/ListenerType` of the listener, the second result is dependent on the listener type.

- Camera ListenerType - Does not return a listener object as `Workspace/CurrentCamera` is always used
- CFrame ListenerType - Returns the `DataType/CFrame` used in `SoundService/SetListener`
- ObjectPosition ListenerType - Returns the `BasePart` used in `SoundService/SetListener`
- ObjectCFrame ListenerType - Returns the `BasePart` used in `SoundService/SetListener`

The listener can be changed using `SoundService/SetListener`.

```
local SoundService = game:GetService("SoundService")
SoundService:SetListener(Enum.ListenerType.CFrame, CFrame.new(0, 0, 0))
local listenerType, listener = SoundService:GetListener()
print(listenerType, listener)
```

## What is a listener?

The `SoundService`'s listener determines the point from which audio in the game is being ‘heard’ by the player. For 3D `Sound`s (`Sound`s parented to a `BasePart` or `Attachment`) the listener influences the volume and left/right balance of a playing sound. Listeners have no influence on the playback of 2D `Sound`s as they have no position of emission.

By default, the listener is set to the `Workspace/CurrentCamera`. However, a range of different types of listeners can be used. */
	GetListener():
		| [Enum.ListenerType.Camera, undefined]
		| [Enum.ListenerType.CFrame, CFrame]
		| [Enum.ListenerType.ObjectCFrame, BasePart]
		| [Enum.ListenerType.ObjectPosition, BasePart];
	/** Sets the listener used by the client.

The first parameter is the `Enum/ListenerType` of the listener, the second paramater is dependent on the listener type.

- Camera ListenerType - Does not return a listener object as `Workspace/CurrentCamera` is always used
- CFrame ListenerType - The `DataType/CFrame` to be used
- ObjectPosition ListenerType - The `BasePart` to be used
- ObjectCFrame ListenerType - The `BasePart` to be used

The listener can be retrieved using `SoundService/GetListener`.

```
local SoundService = game:GetService("SoundService")
SoundService:SetListener(Enum.ListenerType.CFrame, CFrame.new(0, 0, 0))
local listenerType, listener = SoundService:GetListener()
print(listenerType, listener)
```

## What is a listener?

The `SoundService`'s listener determines the point from which audio in the game is being ‘heard’ by the player. For 3D `Sound`s (`Sound`s parented to a `BasePart` or `Attachment`) the listener influences the volume and left/right balance of a playing sound. Listeners have no influence on the playback of 2D `Sound`s as they have no position of emission.

By default, the listener is set to the `Workspace/CurrentCamera`. However, a range of different types of listeners can be used. */
	SetListener(listenerType: Enum.ListenerType.Camera): void;
	/** Sets the listener used by the client.

The first parameter is the `Enum/ListenerType` of the listener, the second paramater is dependent on the listener type.

- Camera ListenerType - Does not return a listener object as `Workspace/CurrentCamera` is always used
- CFrame ListenerType - The `DataType/CFrame` to be used
- ObjectPosition ListenerType - The `BasePart` to be used
- ObjectCFrame ListenerType - The `BasePart` to be used

The listener can be retrieved using `SoundService/GetListener`.

```
local SoundService = game:GetService("SoundService")
SoundService:SetListener(Enum.ListenerType.CFrame, CFrame.new(0, 0, 0))
local listenerType, listener = SoundService:GetListener()
print(listenerType, listener)
```

## What is a listener?

The `SoundService`'s listener determines the point from which audio in the game is being ‘heard’ by the player. For 3D `Sound`s (`Sound`s parented to a `BasePart` or `Attachment`) the listener influences the volume and left/right balance of a playing sound. Listeners have no influence on the playback of 2D `Sound`s as they have no position of emission.

By default, the listener is set to the `Workspace/CurrentCamera`. However, a range of different types of listeners can be used. */
	SetListener(listenerType: Enum.ListenerType.CFrame, cframe: CFrame): void;
	/** Sets the listener used by the client.

The first parameter is the `Enum/ListenerType` of the listener, the second paramater is dependent on the listener type.

- Camera ListenerType - Does not return a listener object as `Workspace/CurrentCamera` is always used
- CFrame ListenerType - The `DataType/CFrame` to be used
- ObjectPosition ListenerType - The `BasePart` to be used
- ObjectCFrame ListenerType - The `BasePart` to be used

The listener can be retrieved using `SoundService/GetListener`.

```
local SoundService = game:GetService("SoundService")
SoundService:SetListener(Enum.ListenerType.CFrame, CFrame.new(0, 0, 0))
local listenerType, listener = SoundService:GetListener()
print(listenerType, listener)
```

## What is a listener?

The `SoundService`'s listener determines the point from which audio in the game is being ‘heard’ by the player. For 3D `Sound`s (`Sound`s parented to a `BasePart` or `Attachment`) the listener influences the volume and left/right balance of a playing sound. Listeners have no influence on the playback of 2D `Sound`s as they have no position of emission.

By default, the listener is set to the `Workspace/CurrentCamera`. However, a range of different types of listeners can be used. */
	SetListener(listenerType: Enum.ListenerType.ObjectCFrame, basePart: BasePart): void;
	/** Sets the listener used by the client.

The first parameter is the `Enum/ListenerType` of the listener, the second paramater is dependent on the listener type.

- Camera ListenerType - Does not return a listener object as `Workspace/CurrentCamera` is always used
- CFrame ListenerType - The `DataType/CFrame` to be used
- ObjectPosition ListenerType - The `BasePart` to be used
- ObjectCFrame ListenerType - The `BasePart` to be used

The listener can be retrieved using `SoundService/GetListener`.

```
local SoundService = game:GetService("SoundService")
SoundService:SetListener(Enum.ListenerType.CFrame, CFrame.new(0, 0, 0))
local listenerType, listener = SoundService:GetListener()
print(listenerType, listener)
```

## What is a listener?

The `SoundService`'s listener determines the point from which audio in the game is being ‘heard’ by the player. For 3D `Sound`s (`Sound`s parented to a `BasePart` or `Attachment`) the listener influences the volume and left/right balance of a playing sound. Listeners have no influence on the playback of 2D `Sound`s as they have no position of emission.

By default, the listener is set to the `Workspace/CurrentCamera`. However, a range of different types of listeners can be used. */
	SetListener(listenerType: Enum.ListenerType.ObjectPosition, basePart: BasePart): void;
}

/** @rbxts server */
interface ServerScriptService {}

/** @rbxts server */
interface ServerStorage {}

interface MakeSystemMessageConfig {
	Text: string;
	Color?: Color3;
	Font?: Enum.Font;
	FontSize?: Enum.FontSize;
}

interface SendNotificationConfig {
	Title: string;
	Text: string;
	Icon?: string;
	Duration?: number;
	Callback?: BindableFunction;
	Button1?: string;
	Button2?: string;
}

interface StarterGui extends RbxBasePlayerGui {
	GetCore(parameterName: "PointsNotificationsActive"): boolean;
	GetCore(parameterName: "BadgesNotificationsActive"): boolean;
	GetCore(parameterName: "ChatActive"): boolean;
	GetCore(parameterName: "ChatWindowSize"): UDim2;
	GetCore(parameterName: "ChatWindowPosition"): UDim2;
	GetCore(parameterName: "ChatBarDisabled"): boolean;
	GetCore(parameterName: "GetBlockedUserIds"): Array<number>;
	GetCore(parameterName: "PlayerBlockedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerUnblockedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerMutedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerUnmutedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerFriendedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerUnfriendedEvent"): BindableEvent;
	GetCore(parameterName: "DeveloperConsoleVisible"): boolean;
	GetCore(parameterName: "VRRotationIntensity"): "Low" | "High" | "Smooth";

	SetCore(parameterName: "ChatActive", active: boolean): void;
	SetCore(parameterName: "PointsNotificationsActive", active: boolean): void;
	SetCore(parameterName: "BadgeNotificationsActive", active: boolean): void;
	SetCore(parameterName: "ResetButtonCallback", enabled: boolean): void;
	SetCore(parameterName: "ResetButtonCallback", callback: BindableEvent): void;
	SetCore(parameterName: "ChatMakeSystemMessage", configTable: MakeSystemMessageConfig): void;
	SetCore(parameterName: "ChatWindowSize", windowSize: UDim2): void;
	SetCore(parameterName: "ChatWindowPosition", windowPosition: UDim2): void;
	SetCore(parameterName: "ChatBarDisabled", disabled: boolean): void;
	SetCore(parameterName: "SendNotification", configTable: boolean): void;
	SetCore(parameterName: "TopbarEnabled", enabled: boolean): void;
	SetCore(parameterName: "DeveloperConsoleVisible", visibility: boolean): void;
	SetCore(parameterName: "PromptSendFriendRequest", player: Player): void;
	SetCore(parameterName: "PromptUnfriend", player: Player): void;
	SetCore(parameterName: "PromptBlockPlayer", player: Player): void;
	SetCore(parameterName: "PromptUnblockPlayer", player: Player): void;
	SetCore(parameterName: "SetAvatarContextMenuEnabled", enabled: boolean): void;
	SetCore(parameterName: "AddAvatarContextMenuOption", option: Enum.AvatarContextMenuOption): void;
	SetCore(parameterName: "AddAvatarContextMenuOption", option: [string, BindableFunction]): void;
	SetCore(parameterName: "RemoveAvatarContextMenuOption", option: Enum.AvatarContextMenuOption): void;
	SetCore(parameterName: "RemoveAvatarContextMenuOption", option: [string, BindableFunction]): void;
	SetCore(
		parameterName: "CoreGuiChatConnections",
		connections: { [name: string]: BindableEvent | BindableFunction },
	): void;
}

interface SurfaceGui extends RbxLayerCollector {
	/** The Object the surface gui uses as its base to render from.  Currently, the only way to set this property is through a script, and must exist in the workspace.  This will only render if the object assigned derives from BasePart. */
	Adornee: BasePart | undefined;
}

interface Team extends RbxInstance {
	/** Returns a list of `Player`s who are assigned to the `Team`. A `Player` is considered assigned if their `Player/Team` property is equal to the `Team` and `Player/Neutral` is false.

This function has a number of potential uses, including counting the number of players on a `Team` or giving every `Player` on a `Team` a `Tool`. */
	GetPlayers(): Array<Player>;
	/** Fires whenever a `Player` is assigned to the `Team`. A player is considered assigned if their `Player/Team` property is equal to the `Team` and `Player/Neutral` is false.

This event is team specific and will only fire when a `Player` joints the specific `Team`. Any function connected to this event will be passed the `Player` object of the player who joined the team. For example:

```
Team.PlayerAdded:Connect(function(player)
	print(player.Name.." has joined the team")
end)
``` */
	readonly PlayerAdded: RBXScriptSignal<(player: Player) => void>;
	/** Fires whenever a `Player` is removed from a `Team`. This can be due to the `Player` leaving the game, `Player/Neutral` being set to true or the `Player` joining a different team.

This event is team specific and will only fire when a `Player` leaves the specific `Team`. Any function connected to this event will be passed the `Player` object of the player who left the team. For example:

```
Team.PlayerRemoved:Connect(function(player)
	print(player.Name.." has left the team")
end)
``` */
	readonly PlayerRemoved: RBXScriptSignal<(player: Player) => void>;
}

interface Teams extends RbxInstance {
	/** The GetTeam function returns a table containing the game’s `Team` objects.

Note this will only return Team objects that are directly parented to the `Teams` service. For this reason it is recommended developers only parent `Team` objects to the `Teams` service and not to other `Instance`s (or to each other). */
	GetTeams(): Array<Team>;
}

interface TeleportService {
	/** This event fires if a request to teleport (from a function such as `TeleportService/Teleport`) fails and the player does not leave the current place server.

This event is fired on both the client and the server.

TeleportInitFailed includes a *teleportResult* argument (a `Enum/TeleportResult` enum) describing the reason the teleport failed along with the error message that is displayed to the user.

It is possible for teleportation to fail after the `Player` has left the place due to Roblox server issues. This event will not fire in this case and the user will be disconnected and required to rejoin. */
	readonly TeleportInitFailed: RBXScriptSignal<
		(player: Player, teleportResult: Enum.TeleportResult, errorMessage: string) => void
	>;
	/** This function returns the `DataModel/PlaceId` and `DataModel/JobId` of the server the user with the given `Player/UserId` is in provided it is in the same game as the current place.

`TeleportService/TeleportToPlaceInstance` can then be called with this information to allow a user to join the target user’s server.

This function returns the following values:

|  |
|  |
|  |
|  |
|  |
|  |
|  |

## Caveats

You should be aware of the following limitations when using this function:

- This function can only be called by the server
- This function may fail to return the correct information if the user is teleporting
- It is possible for this function to throw an error, hence developers should wrap it in a pcall (see example below)
- As this function returns the `DataModel/JobId` of the server and not the access code returned by `TeleportService/ReserveServer` the id returned is not appropriate for use with reserved servers

## See also

- For the `DataModel/PlaceId|PlaceIds` and `DataModel/JobId|JobIds` of a `Player|Player’s` friends, use `Player/GetFriendsOnline` */
	GetPlayerPlaceInstanceAsync(userId: number): LuaTuple<[boolean, string, number, string]>;
	/** This function returns an access code that can be used to teleport players to a reserved server, along with the `DataModel/PrivateServerId` for it.

ReserveServer can only be called on the server.

## Reserved Servers

The following are characteristics of reserved servers:

- They can only be accessed using `TeleportService/TeleportToPrivateServer`, with the access code ReserveServer returns
- A game server is started when the access code is first used
- No more than one game server instance can exist at any time for each access code
- Access codes remain valid indefinitely, meaning reserved servers can still be joined if no game server is running (in this case a new game server will be started)

You can see if the current server is a reserved server by using the following code:

```
local isReserved = game.PrivateServerId ~= "" and game.PrivateServerOwnerId == 0
```

The `DataModel/PrivateServerId` is constant across all server instances associated with the server access code, the `DataModel/JobId` is not. */
	ReserveServer(placeId: number): LuaTuple<[string, string]>;
	/** This function teleports a `Player` to the place associated with the given *placeId*.

Teleport can be called both from the client and the server (see examples below).

When teleporting from the client, as only the `Players/LocalPlayer` can be teleported, no *player* argument is required.

You may only teleport players to places within the same game or active start places for other games.

## Teleport data

A *teleportData* parameter can be specified. This is data the client will transmit to the destination place and can be retrieved using `TeleportService/GetLocalPlayerTeleportData`.

The *teleportData* can take any of the following forms:

- A table without mixed keys (all keys are strings or integers)
- A string
- A number
- A bool

As the *teleportData* is transmitted by the client it is not secure. For this reason it should only be used for local settings and not sensitive items (such as the users’ score or in-game currency).

If you need teleport data to persist across multiple teleports, you can use `TeleportService/SetTeleportSetting` and `TeleportService/GetTeleportSetting`.

## Loading screen

A *customLoadingScreen* argument can be specified. This is a `ScreenGui` that is copied (without scripts) into the `CoreGui` of the destination place.

Note, `TeleportService/SetTeleportGui` is the preferred alternative to the *customLoadingScreen* argument as it can be called prior to the teleport.

The loading `ScreenGui` can be obtained in the destination place using `TeleportService/GetArrivingTeleportGui`, where developers can parent it to the `PlayerGui`. It will not be used if the destination place is in a different game.

## Teleport failure

In some circumstances a teleport may fail. This can be due to the developer configuring the teleport incorrectly or issues with Roblox’s servers.

- If a teleportation request is rejected the `TeleportService/TeleportInitFailed` event will fire the error message and a `Enum/TeleportResult` enumerator describing the issue
- Teleports can fail ‘in transit’, after the user has left the server, due to issues with Roblox’s servers. In this case the user will be shown an error message and be required to rejoin the game

## Alternative teleport functions

Before using Teleport, you should check to see if an alternative teleport function is more suitable:

- `TeleportService/TeleportToSpawnByName` is used to teleport a player to a place and spawn them at a specific `SpawnLocation`
- `TeleportService/TeleportPartyAsync` is used to teleport a group of players together to the same server
- `TeleportService/TeleportToPlaceInstance` is used to teleport a player to a specific server in a place
- `TeleportService/TeleportToPrivateServer` is used to teleport a player to a reserved server created using `TeleportService/ReserveServer`

For more information on how to teleport players, see the `Articles/Teleporting Between Places` tutorial. */
	Teleport(placeId: number, player?: Player, teleportData?: any, customLoadingScreen?: Instance): void;
	/** This function teleports one of more `Player|Players` to a reserved server created using `TeleportService/ReserveServer`.

The *reservedServerAccessCode* parameter is the access code returned by `TeleportService/ReserveServer|ReserveServer`.

TeleportToPrivateServer can only be called on the server.

## Spawn name

An optional *spawnName* parameter can be provided, which will cause the `Player|Players` to initially spawn at the `SpawnLocation` of that name in the destination place. The `SpawnLocation` must be valid for the `Player|Players` to spawn on. For example, it must be `SpawnLocation/Neutral|neutral` or set to the same `SpawnLocation/TeamColor|TeamColor` as the `Team` the `Player|Players` will be assigned to upon joining the game.

## Teleport data

A *teleportData* parameter can be specified. This is data the clients will transmit to the destination place and can be retrieved using `TeleportService/GetLocalPlayerTeleportData`.

The *teleportData* can take any of the following forms:

- A table without mixed keys (all keys are strings or integers)
- A string
- A number
- A bool

As the *teleportData* is transmitted by the client it is not secure. For this reason it should only be used for local settings and not sensitive items (such as the users’ score or in-game currency).

If you need teleport data to persist across multiple teleports, you can use `TeleportService/SetTeleportSetting` and `TeleportService/GetTeleportSetting`.

## Loading screen

A *customLoadingScreen* argument can be specified. This is a `ScreenGui` that is copied (without scripts) into the `CoreGui` of the destination place.

You are advised to instead set the loading screen on the client using `TeleportService/SetTeleportGui`. The loading `ScreenGui` should also be parented to the `Player|Player’s` `PlayerGui` a few seconds before the teleport to ensure a smooth transition using a `RemoteEvent`. For an example of this see `TeleportService/SetTeleportGui|SetTeleportGui`

The loading `ScreenGui` can be obtained in the destination place using `TeleportService/GetArrivingTeleportGui`, where developers can parent it to the `PlayerGui`.

## Teleport failure

In some circumstances a teleport may fail. This can be due to the developer configuring the teleport incorrectly or issues with Roblox’s servers.

- If a teleportation request is rejected the `TeleportService/TeleportInitFailed` event will fire the error message and a `Enum/TeleportResult` enumerator describing the issue
- Teleports can fail ‘in transit’, after the user has left the server, due to issues with Roblox’s servers. In this case the user will be shown an error message and be required to rejoin the game

For more information on how to teleport players, see the `Articles/Teleporting Between Places` tutorial. */
	TeleportToPrivateServer(
		placeId: number,
		reservedServerAccessCode: string,
		players: Array<Player>,
		spawnName?: string,
		teleportData?: any,
		customLoadingScreen?: Instance,
	): void;

	/** This function teleports a group of `Player|Players` to the same server instance in the given place. It returns the `DataModel/JobId` of the server instance the players were teleported to.

This function can only be called from the server.

You may only use this function to teleport to a place in the same game. This function can not teleport more than 50 `Player|Players` in a single party.

Currently this function may not work reliably when teleporting `Player|Players` to the same place they are currently in.

## Teleport data

A *teleportData* parameter can be specified. This is data the clients will transmit to the destination place and can be retrieved using `TeleportService/GetLocalPlayerTeleportData`.

The *teleportData* can take any of the following forms:

- A table without mixed keys (all keys are strings or integers)
- A string
- A number
- A bool

As the *teleportData* is transmitted by the client it is not secure. For this reason it should only be used for local settings and not sensitive items (such as the users’ score or in-game currency).

## Loading screen

A *customLoadingScreen* argument can be specified. This is a `ScreenGui` that is copied (without scripts) into the `CoreGui` of the destination place. It can be retrieved at the destination place using `TeleportService/GetArrivingTeleportGui` and will not be used if the destination place is in a different game.

You are advised to instead set the loading screen on the client using `TeleportService/SetTeleportGui`. The loading `ScreenGui` should also be parented to the `Player|Players'` `PlayerGui|PlayerGuis` a few seconds before the teleport to ensure a smooth transition using a `RemoteEvent`. For an example of this see `TeleportService/SetTeleportGui|SetTeleportGui`.

## Teleport failure

In some circumstances a teleport may fail. This can be due to the developer configuring the teleport incorrectly or issues with Roblox’s servers.

- If a teleportation request is rejected the `TeleportService/TeleportInitFailed` event will fire the error message and a `Enum/TeleportResult` enumerator describing the issue
- Teleports can fail ‘in transit’, after the user has left the server, due to issues with Roblox’s servers. In this case the user will be shown an error message and be required to rejoin the game

## See also

- `Player/GetJoinData` to get the `Player/UserId|UserIds` of `Player|Players` teleported together */
	TeleportPartyAsync(
		placeId: number,
		players: Array<Player>,
		teleportData?: any,
		customLoadingScreen?: Instance,
	): string;
}

/** @rbxts array */
type ReadVoxelsArray<T> = Array<Array<Array<T>>> & {
	Size: Vector3;
};

interface Terrain extends RbxBasePart {
	/** Stores a chunk of terrain into a `TerrainRegion` object so it can be loaded back later. Note: `TerrainRegion` data does not replicate between server and client. */
	CopyRegion(region: Region3int16): TerrainRegion;
	/** Applies a chunk of terrain to the Terrain object. Note: `TerrainRegion` data does not replicate between server and client. */
	PasteRegion(region: TerrainRegion, corner: Vector3int16, pasteEmptyCells: boolean): void;
	/** Returns a certain region of [smooth terrain](https://developer.roblox.com/articles/Intro-To-Terrain) in [table format](https://developer.roblox.com/articles/Intro-To-Terrain#Reading_and_writing_voxels). Both of the return arrays have an additional `.Size` property, a [Vector3](https://developer.roblox.com/api-reference/datatype/Vector3). */
	ReadVoxels(
		region: Region3,
		resolution: number,
	): LuaTuple<[ReadVoxelsArray<Enum.Material>, ReadVoxelsArray<number>]>;
	/** Sets a certain region of [smooth terrain](https://developer.roblox.com/articles/Intro-To-Terrain) using the [table format](https://developer.roblox.com/articles/Intro-To-Terrain#Reading_and_writing_voxels) */
	WriteVoxels(
		region: Region3,
		resolution: number,
		materials: Array<Array<Array<Enum.Material>>>,
		occupancy: Array<Array<Array<number>>>,
	): void;
}

interface Tool extends RbxBackpackItem {
	/** Fires when the Player equips the tool */
	readonly Equipped: RBXScriptSignal<(mouse: Mouse) => void>;
}

type Tweenable = number | boolean | CFrame | Rect | Color3 | UDim | UDim2 | Vector2 | Vector2int16 | Vector3;
type FilterMembers<T, U> = Pick<T, { [K in keyof T]: T[K] extends U ? K : never }[keyof T]>;

interface TweenService {
	/** The Create function of `TweenService` creates a new Tween. The function takes three arguments: the object to tween, the `TweenInfo` to use, and a table containing the properties to tween and the values to tween to.

Tweens are used to interpolate the properties of instances. These can be used to create animations for various Roblox objects. Almost any numeric property can be tweened using `TweenService`.

The propertyTable parameter that is passed in needs to be a dictionary where the keys are the string names of the property (e.g. “Position”, “Transparency”, “Color”, etc), and the value is the value the property needs to be at the end of the tween. Note that only specific types of properties can be used with `TweenService`, but multiple properties can be animated in the same tween. The types of properties that can be tweened are:

- number
- bool
- `CFrame`
- `Rect`
- `Color3`
- `UDim`
- `UDim2`
- `Vector2`
- `Vector2int16`
- `Vector3`

The `Tween` created using this function is unique to the object given as the instance parameter. If a developer wishes to apply the same tween effect to another instance, another `Tween` will need to be created.

Details on how the interpolation of the tween is to be carried out are given in the tweenInfo parameter. The `TweenInfo` data type includes a range of properties that can be used to achieve various styles of animation, including reversing and looping `Tween`s (see examples). */
	Create<T extends Instances[keyof Instances]>(
		instance: T,
		tweenInfo: TweenInfo,
		propertyTable: Partial<FilterMembers<T, Tweenable>>,
	): Tween;
}

interface UserInputService {
	/** Fired when a user begins interacting via a Human-Computer Interface device (Mouse button down, touch begin, keyboard button down, etc.). 'inputObject' is an InputObject, which contains useful data for querying user input.  This event only fires locally.  This event will always fire regardless of game state. */
	readonly InputBegan: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	/** Fired when a user changes interacting via a Human-Computer Interface device (Mouse move, touch move, mouse wheel, etc.). 'inputObject' is an InputObject, which contains useful data for querying user input.  This event only fires locally.  This event will always fire regardless of game state. */
	readonly InputChanged: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	/** Fired when a user stops interacting via a Human-Computer Interface device (Mouse button up, touch end, keyboard button up, etc.). 'inputObject' is an InputObject, which contains useful data for querying user input.  This event only fires locally.  This event will always fire regardless of game state. */
	readonly InputEnded: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	GetConnectedGamepads(): Array<Enum.UserInputType>;
	/** Returns an InputObject and a Vector4 that describes the device's current rotation vector. This is fired with an InputObject, which has type Enum.InputType.Gyroscope, and position that shows total rotation in each local device axis. The delta property describes the amount of rotation that last happened. The Vector4 is the device's current quaternion rotation in reference to it's default reference frame. This event only fires locally. */
	GetDeviceRotation(): LuaTuple<[InputObject, CFrame]>;
	/** The GetGamepadState function returns an array of `InputObject|InputObjects` for each input on the gamepad with each input’s last input state. You can iterate through the returned array to determine the last state of each valid input type for the gamepad.

To determine which `Enum/UserInputType` Gamepads are connected, you can use the `UserInputService/GetConnectedGamepads` function.

Since it only fires locally, it can only be used in a `LocalScript`. */
	GetGamepadState(gamepadNum: Enum.UserInputType): Array<InputObject>;
	/** This function returns an array of `InputObject|InputObjects` associated with the keys currently being pressed down.

This array can be iterated through to determine which keys are currently being pressed, using the `InputObject/KeyCode` values.

To check if a specific key is being pressed, use `UserInputService/IsKeyDown`.

As `UserInputService` is client-side only, this function can only be used in a `LocalScript`. */
	GetKeysPressed(): Array<InputObject>;
	/** This function returns an array of `InputObject|InputObjects` corresponding to the mouse buttons currently being pressed down.

Mouse buttons that are tracked by this function include:

|  |
|  |
|  |
|  |
|  |

If the user is not pressing any mouse button down when the function is called, it will return an empty array.

As `UserInputService` is client-side only, this function can only be used in a `LocalScript`. */
	GetMouseButtonsPressed(): Array<InputObject>;
	/** This function returns an array of gamepad `Enum/UserInputType|UserInputTypes` that are connected and enabled for GUI navigation. This list is in descending order of priority, meaning it can be iterated over to determine which gamepad should have navigation control.

Whether a connected gamepad is a navigation gamepad only determines which gamepad(s) control the navigation GUIs. This does not influence navigation controls.

Since `UserInputService` is client-side only, this function can only be used in a `LocalScript`.

## See also

- `UserInputService/SetNavigationGamepad`, to enable or disable a gamepad for GUI navigation
- `UserInputService/IsNavigationGamepad`, to verify if a gamepad is enabled for GUI navigation
- `UserInputService/GetConnectedGamepads`, to return all gamepads connected regardless of GUI navigational control */
	GetNavigationGamepads(): Array<Enum.UserInputType>;
	/** This function returns an array of `Enum/KeyCode|KeyCodes` that the gamepad associated with the given `Enum/UserInputType` supports.

This function can be used to determine which KeyCodes are supported and not supported by a connected gamepad. To determine if a specific KeyCode is supported, use `UserInputService/GamepadSupports`.

If called on a non existent, or non connected, gamepad, this function will return an empty array.

As `UserInputService` is client-side only, this function can only be used in a `LocalScript`.

Check out this [article](https://developer.roblox.com/articles/Gamepad-Haptic-Feedback) to learn more about adding support for gamepad input into your game and [this](https://developer.roblox.com/learn-roblox/cross-platform) page for articles on cross-platform development.

## See also

- `UserInputService/GamepadConnected`
- `UserInputService/GamepadDisconnected`
- `UserInputService/GetConnectedGamepads`
- `UserInputService/GetNavigationGamepads`
- `UserInputService/SetNavigationGamepad`
- `UserInputService/IsNavigationGamepad`
- `UserInputService/IsGamepadButtonDown`
- `UserInputService/GetGamepadState`
- `UserInputService/GetGamepadConnected`
- `UserInputService/GamepadSupports`
- `UserInputService/GamepadEnabled` */
	GetSupportedGamepadKeyCodes(gamepadNum: Enum.UserInputType): Array<Enum.KeyCode>;
}

interface Workspace extends RbxDerivesFromModel {
	/** This property is a reference to the `Terrain` object parented to the `Workspace`.

![An example of Roblox terrain](https://developer.roblox.com/assets/5b65bf0c4bf5bf624023ee26/Terrain.png)

This property, like `Workspace/CurrentCamera`, ensures that developers to not inadvertently index a descendant of `Workspace` named ‘Terrain’ when looking for a game’s `Terrain` object. Without this property, developers would need to use the `Instance/FindFirstChildOfClass` function.

```
workspace.Terrain.WaterColor = Color3.new(0, 1, 0) -- make the water green
``` */
	Terrain: Terrain;
	/** FindPartOnRay uses [raycasting](https://developer.roblox.com/articles/Raycasting) to find the first `BasePart` intersecting with a given `DataType/Ray`. This function returns the position of intersection, the surface normal of the intersecting `BasePart` at the point of intersection, and the `BasePart`'s `BasePart/Material`.
	 * Return type is (BasePart, Vector3) if the ray hits.  If it misses it will return (nil, PointAtEndOfRay)

```lua
local character = game.Players.LocalPlayer.Character
-- Get the head
local head = character:FindFirstChild("Head")
-- Build a ray in the direction the head is facing
local origin = head.Position
local lookDirection = head.CFrame.lookVector
local ray = Ray.new(origin, lookDirection * 500)
-- Raycast, ignoring the player's character
local part, hitPosition = workspace:FindPartOnRay(ray, character)
if part then
	print("Hit part: " .. part:GetFullName())
else
	print("Did not hit part")
end
```

The `terrainCellsAreCubes` and `ignoreWater` parameters determine whether `Terrain` cells should be treated as cubes or not, and whether water should be ignored or not.

If the `ignoreDescendantsInstance` parameter is provided, the raycasting calculation will ignore the given object and all of its descendants. It behaves similar to the `Mouse/TargetFilter` property.

In order to white-list or ignore multiple objects and their descendants, use these variants: `Workspace/FindPartOnRayWithWhitelist|FindPartOnRayWithWhitelist` and `Workspace/FindPartOnRayWithIgnoreList|FindPartOnRayWithIgnoreList`.

## Notes

- Theoretically, a ray extends infinitely in one direction. However, the max length of the direction vector on Roblox is 5000 studs
- The length of the direction vector is important - parts further away than its length will not be tested
- If the ray does not intersect a part, the return values will be nil and the point at the end of the ray, respectively
- Parts that are in a `PhysicsService/SetPartCollisionGroup|collision group` that does not collide with the “Default” collision group are ignored implicitly

For more information on how raycasting works in Roblox, please see the articles on [raycasting basics](https://developer.roblox.com/articles/Raycasting) and [how to make raycasting guns](https://developer.roblox.com/articles/Making-a-ray-casting-laser-gun-in-Roblox). */
	FindPartOnRay(
		ray: Ray,
		ignoreDescendantsInstance?: Instance,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	/** This function returns the first `BasePart` intersecting with the given `DataType/Ray` that isn’t in, or a descendant of an object in, the given ignore list. It also returns the position of intersection, the surface normal of the intersecting part at the point of intersection, and the part’s `BasePart/Material`.

This function is a variant of `Workspace/FindPartOnRay` with the addition of an ignore list. This allows the developer to ignore certain parts or `Model`s.

The terrainCellsAreCubes and ignoreWater parameters determine whether terrain cells should be treated as cubes, and whether water should be ignored.

Those looking to utilize a white list instead should use `Workspace/FindPartOnRayWithWhitelist`.

For more information on how raycasting works in Roblox, please see the articles on [raycasting basics](https://developer.roblox.com/articles/Raycasting) and [how to make raycasting guns](https://developer.roblox.com/articles/Making-a-ray-casting-laser-gun-in-Roblox).

## Notes

- Theoretically, a ray extends infinitely in one direction. However, the max length of the direction vector on Roblox is 5000 studs
- The length of the direction vector is important - parts further away than its length will not be tested
- If the ray does not intersect a part, the return values will be nil and the point at the end of the ray, respectively
- If a nil value is given in the ignore list, instances after this value will not be ignored
- Parts that are in a `PhysicsService/SetPartCollisionGroup|collision group` that does not collide with the “Default” collision group are ignored implicitly */
	FindPartOnRayWithIgnoreList(
		ray: Ray,
		ignoreDescendantsTable: Array<Instance>,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	/** This function returns the first `BasePart` intersecting with the given `DataType/Ray` that is in, or is a descendant of an object in, the given white-list. It also returns the position of intersection, the surface normal of the intersecting part at the point of intersection, and the part’s `BasePart/Material`.

This function is a variant of `Workspace/FindPartOnRay` with the addition of a whitelist. This allows the developer to only look at certain parts or `Model|Models`. This can be particularly useful when, for example, looking for points of intersection between a ray and a single part.

```lua
local function getIntersection(part, ray)
	local whiteList = {part}
	local _, position, normal = workspace:FindPartOnRayWithWhitelist(ray, whiteList)
	return position, normal
end
```

Those looking to utilize an ignore list instead should use `Workspace/FindPartOnRayWithIgnoreList`.

## Notes

- Theoretically, a ray extends infinitely in one direction. However, the max length of the direction vector on Roblox is 5000 studs
- The length of the direction vector is important - parts further away than its length will not be tested
- If the ray does not intersect a part, the return values will be nil and the point at the end of the ray, respectively
- If a nil value is given in the white list, instances after this value will be disregarded
- Parts that are in a `PhysicsService/SetPartCollisionGroup|collision group` that does not collide with the “Default” collision group are ignored implicitly

For more information on how raycasting works in Roblox, please see the articles on [raycasting basics](https://developer.roblox.com/articles/Raycasting) and [how to make raycasting guns](https://developer.roblox.com/articles/Making-a-ray-casting-laser-gun-in-Roblox). */
	FindPartOnRayWithWhitelist(
		ray: Ray,
		whitelistDescendantsTable: Array<Instance>,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;
}
