The Mouse object is the code interface for the computer mouse.

## How to get the Mouse?

A Mouse object is not createable, but can be obtained using the [Player.GetMouse](https://developer.roblox.com/api-reference/function/Player/GetMouse), [Tool.Equipped](https://developer.roblox.com/api-reference/event/Tool/Equipped). The `PluginMouse` object, which inherits from Mouse can be created using the `Plugin` [Plugin.GetMouse](https://developer.roblox.com/api-reference/function/Plugin/GetMouse) function.

```lua
local Players = game:GetService("Players")
local localPlayer = Players.LocalPlayer -- from a LocalScript
local mouse = Player:GetMouse()
```
*
```lua
Tool.Equipped:Connect(function(mouse)
	-- got mouse
end)
```

## Mouse alternatives

There is a degree of overlap between the functionality offered by `ContextActionService`, `UserInputService` and the Mouse object.

Mouse, by and large, has been superseded by `UserInputService` which offers wider additional functionality for interacting with the mouse as well as other input types. For example:

 - `UserInputService` supports other inputs such as key presses and mobile inputs whereas `Mouse` does not

 - `UserInputService` includes additional mouse features such as [UserInputService.MouseBehavior](https://developer.roblox.com/api-reference/property/UserInputService/MouseBehavior) and [UserInputService.MouseDeltaSensitivity](https://developer.roblox.com/api-reference/property/UserInputService/MouseDeltaSensitivity)

In most cases developers are advised to use the new `UserInputService`. However the Mouse object remains supported for a number of reasons.

 - Mouse existed long before `UserInputService` and a large number of places and gear items are dependent on it

 - The `PluginMouse` object is still used by plugins accessing the mouse

 - The mouse object is embedded into `Tool`s and is easier to pick up for new developers