Fired when the right mouse button is released.

```lua
mouse.Button2Up:Connect(function()
print("button 2 up!")
end
```

For information on how to obtain the `Mouse` object, please see the `Mouse` page.

Developers can find out the position of the mouse in world-space, and if it is pointing at any `BasePart` using the [Mouse.Hit](https://developer.roblox.com/api-reference/property/Mouse/Hit) and [Mouse.Target](https://developer.roblox.com/api-reference/property/Mouse/Target) properties.

Note, developers are recommended to use `UserInputService` instead of the `Mouse` object in new work.