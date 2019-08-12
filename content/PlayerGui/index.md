The PlayerGui object is a container that holds a `Player`'s user GUI. If a `ScreenGui` is a descendant of a PlayerGui, then any `GuiObject` inside of the ScreenGui will be drawn to the player's screen. Any `LocalScript` will run as soon as it is inserted into a PlayerGui.

When a player first joins a game, their PlayerGui is automatically inserted into their `Player` object. When the player's [Player.Character](https://developer.roblox.com/api-reference/property/Player/Character) spawns for the first time all of the contents of `StarterGui` are automatically copied into the player's PlayerGui. Note that if [Players.CharacterAutoLoads](https://developer.roblox.com/api-reference/property/Players/CharacterAutoLoads) is set to false the character will not spawn and StarterGui contents will not be copied until [Player.LoadCharacter](https://developer.roblox.com/api-reference/function/Player/LoadCharacter) is called. If [StarterGui.ResetPlayerGuiOnSpawn](https://developer.roblox.com/api-reference/property/StarterGui/ResetPlayerGuiOnSpawn) is set to true then every time the player's character respawns all of the contents of that player's PlayerGui is cleared and replaced with the contents of StarterGui.

```lua
-- Accessing PlayerGui from a LocalScript:
game:GetService('Players').LocalPlayer:WaitForChild('PlayerGui')
```
