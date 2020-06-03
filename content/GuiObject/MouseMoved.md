Fires whenever a user moves their mouse while it is inside a [GUI](https://developer.roblox.com/api-reference/class/GuiObject) element. It is similar to [Mouse.Move](https://developer.roblox.com/api-reference/event/Mouse/Move), which fires regardless whether the user's mouse is over a GUI element.

Note, this event fires when the mouse's position is updated, therefore it will fire repeatedly whilst being moved.

The `x` and `y` arguments indicate the updated screen coordinates of the user's mouse in pixels. These can be useful to determine the mouse's location on the GUI, screen, and delta since the mouse's previous position if it is being tracked in a global variable.

The code below demonstrates how to determine the [DataType.Vector2](https://developer.roblox.com/search#stq=Vector2) offset of the user's mouse relative to a GUI element:

```lua
local CustomScrollingFrame = script.Parent
local SubFrame = CustomScrollingFrame:FindFirstChild("SubFrame")

local mouse = game.Players.LocalPlayer:GetMouse()
function getPosition(X, Y)
	local gui_X = CustomScrollingFrame.AbsolutePosition.X
	local gui_Y = CustomScrollingFrame.AbsolutePosition.Y
	
	
	local pos = Vector2.new(math.abs(X - gui_X), math.abs(Y - gui_Y - 36))
	print(pos)
end

CustomScrollingFrame.MouseMoved:Connect(getPosition)
```

Note that this event may not fire exactly when the user's mouse enters or exits a GUI element. Therefore, the `x` and `y` arguments may not match up perfectly to the coordinates of the GUI's edges.

## See also

 - [GuiObject.MouseEnter](https://developer.roblox.com/api-reference/event/GuiObject/MouseEnter)

 - [GuiObject.MouseLeave](https://developer.roblox.com/api-reference/event/GuiObject/MouseLeave)

 - [GuiObject.MouseWheelForward](https://developer.roblox.com/api-reference/event/GuiObject/MouseWheelForward)

 - [GuiObject.MouseWheelBackward](https://developer.roblox.com/api-reference/event/GuiObject/MouseWheelBackward)