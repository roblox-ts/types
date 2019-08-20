The Button1Down even fires when the the player presses their left mouse button.

This can also be accessed from a `Tool`. For example, when placed in a `LocalScript`, the code below prints Button1Down whenever the left mouse button is pressed:

```lua
local Tool = script.Parent --make sure this is a Tool object

Tool.Equipped:Connect(function(Mouse)
	Mouse.Button1Down:Connect(function()
		print("Button1Down")
	end)
end).
```

Developers can find out the position of the mouse in world-space, and if it is pointing at any `BasePart`, using the [Mouse.Hit](https://developer.roblox.com/api-reference/property/Mouse/Hit) and [Mouse.Target](https://developer.roblox.com/api-reference/property/Mouse/Target) properties.

For information on how to obtain the mouse object, please see the `Mouse` page.

Note, developers are recommended to use `UserInputService` instead of the `Mouse` object in new work.