Fired when the mouse is moved.

Note, this event is fired when the mouse's position is updated, therefore it will fire repeatedly whilst being moved.

For information on how to obtain the `Mouse` object, please see the `Mouse` page.

Developers can find out the position of the mouse in world-space, and if it is pointing at any `BasePart` using the [Mouse.Hit](https://developer.roblox.com/api-reference/property/Mouse/Hit) and [Mouse.Target](https://developer.roblox.com/api-reference/property/Mouse/Target) properties.

```lua
mouse.Move:Connect(function()
	local position = mouse.Hit.p
	local target = mouse.Target
	print(target, position)
end)
```

Note, developers are recommended to use `UserInputService` instead of the `Mouse` object in new work.