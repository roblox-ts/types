This is a read-only property which contains a reference to the `Player` instance for which a `LocalScript` is running. For `Script`s running on the server, this property is nil.

This property is useful when creating GUIs that display information about the player. You can use it to accessing the player's [Player.Character](https://developer.roblox.com/api-reference/property/Player/Character), `PlayerGui`, and `Backpack`.

## Loading GUIs

When creating loading GUIs using `ReplicatedFirst`, sometimes a `LocalScript` may run before the [Players.LocalPlayer](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) is created and becomes available. In such cases, it is useful to yield until it is by using [Instance.GetPropertyChangedSignal](https://developer.roblox.com/api-reference/function/Instance/GetPropertyChangedSignal)

```lua
local Players = game:GetService("Players")
local player = Players.LocalPlayer or Players:GetPropertyChangedSignal("LocalPlayer"):wait()
```

Note that this technique is not required for [LocalScripts](https://developer.roblox.com/api-reference/class/LocalScript) within in `StarterGui`, `StarterPlayerScripts` or `StarterCharacterScripts`, as these kinds of scripts only run if the `Player` object is already available.
@rbxts client