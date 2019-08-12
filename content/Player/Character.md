The Character property contains a reference to a `Model` containing a `Humanoid`, body parts, scripts and other objects required for simulating the player's avatar in-game. The model is parented to the `Workspace`, but may be moved.

Initially, this property is nil then set when the player's character first spawns. Use the [Player.CharacterAdded](https://developer.roblox.com/api-reference/event/Player/CharacterAdded) event to detect when a player's character properly loads, and the [Player.CharacterRemoving](https://developer.roblox.com/api-reference/event/Player/CharacterRemoving) event to detect when the character is about to despawn. Avoid using [Instance.GetPropertyChangedSignal](https://developer.roblox.com/api-reference/function/Instance/GetPropertyChangedSignal) on this property.

## Notes

LocalScripts that are cloned from `StarterGui` or `StarterPack` into a player's `Backpack` or `PlayerGui` are often run before the old Character model is deleted. Player.Character still refers to a model, but that model's parent is nil and it is has been destroyed. Because of this, if the Character already exists, you should check to make sure that the Character's parent is not nil before using it.

So if you're writing a `LocalScript`, do this:

```lua
local player = game.Players.LocalPlayer
local character = player.Character
if not character or not character.Parent then
	character = player.CharacterAdded:wait()
end
```

But from the server it's fine to do this:

```lua
if player.Character then
	-- do something
end
```

Or if you want to wait until the character respawns from a server `Script`:

```lua
local character = player.Character or player.CharacterAdded:wait()
```
