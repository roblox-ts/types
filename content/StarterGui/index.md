The StarterGui service is a container object designed to hold [GUI objects](https://developer.roblox.com/api-reference/class/LayerCollector) such as [ScreenGuis](https://developer.roblox.com/api-reference/class/ScreenGui).

## StarterGui as a container

When a [Players’](https://developer.roblox.com/api-reference/class/Player) [character](https://developer.roblox.com/api-reference/property/Player/Character) respawns, the contents of their `PlayerGui` is emptied. Children of the `StarterGui` are then copied (along with their descendants) into the `StarterGui`.

[GUI objects](https://developer.roblox.com/api-reference/class/LayerCollector) such as [ScreenGuis](https://developer.roblox.com/api-reference/class/ScreenGui) with their [ResetOnSpawn](https://developer.roblox.com/api-reference/property/LayerCollector/ResetOnSpawn) property set to false will only be placed into each [Player’s](https://developer.roblox.com/api-reference/class/Player) `PlayerGui` once and will not be deleted when the `Player` respawns.

## StarterGui as an interface

The StarterGui also includes a range of functions allowing you to interact with the `CoreGui`. For example [StarterGui.SetCoreGuiEnabled](https://developer.roblox.com/api-reference/function/StarterGui/SetCoreGuiEnabled) can be used to disable elements of the `CoreGui`. [StarterGui.SetCore](https://developer.roblox.com/api-reference/function/StarterGui/SetCore) can perform a range of functions including creating notifications and system messages.