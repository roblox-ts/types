When detecting changes in the mouse's position on-screen, it is recommended that you use [ContextActionService.BindAction](https://developer.roblox.com/api-reference/function/ContextActionService/BindAction) with `Enum.UserInputType.MouseMovement` or [UserInputService.InputChanged](https://developer.roblox.com/api-reference/event/UserInputService/InputChanged), which both describe the position of the mouse using the [Position](https://developer.roblox.com/api-reference/property/InputObject/Position) (a [DataType.Vector3](https://developer.roblox.com/search#stq=Vector3)) of an `InputObject`,  instead of using this and related properties.

The Y property describes the vertical component of the mouse's position on the screen. The position is measured in pixels relative to the top left corner, under the topbar. This property can be used in conjunction with [Mouse.X](https://developer.roblox.com/api-reference/property/Mouse/X) to produce a [DataType.Vector2](https://developer.roblox.com/search#stq=Vector2) representing the mouse's position:

```lua
local position = Vector2.new(mouse.X, mouse.Y)
```

This property does not fire [Changed](https://developer.roblox.com/api-reference/event/Instance/Changed) or the signal returned from [GetPropertyChangedSignal](https://developer.roblox.com/api-reference/function/Instance/GetPropertyChangedSignal). Use the [Mouse.Move](https://developer.roblox.com/api-reference/event/Mouse/Move) event instead.
	
When detecting changes in the mouse's position on-screen, it is recommended that you use [ContextActionService.BindAction](https://developer.roblox.com/api-reference/function/ContextActionService/BindAction) with `Enum.UserInputType.MouseMovement` or [UserInputService.InputChanged](https://developer.roblox.com/api-reference/event/UserInputService/InputChanged), which both describe the position of the mouse using the [Position](https://developer.roblox.com/api-reference/property/InputObject/Position) (a [DataType.Vector3](https://developer.roblox.com/search#stq=Vector3)) of an `InputObject`,  instead of using this and related properties.

The Y property describes the vertical component of the mouse's position on the screen. The position is measured in pixels relative to the top left corner, under the topbar. This property can be used in conjunction with [Mouse.X](https://developer.roblox.com/api-reference/property/Mouse/X) to produce a [DataType.Vector2](https://developer.roblox.com/search#stq=Vector2) representing the mouse's position:

```lua
local position = Vector2.new(mouse.X, mouse.Y)
```

This property does not fire [Changed](https://developer.roblox.com/api-reference/event/Instance/Changed) or the signal returned from [GetPropertyChangedSignal](https://developer.roblox.com/api-reference/function/Instance/GetPropertyChangedSignal). Use the [Mouse.Move](https://developer.roblox.com/api-reference/event/Mouse/Move) event instead.

Tags: ReadOnly, NotReplicated