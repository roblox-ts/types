This property is a reference to the `Terrain` object parented to the `Workspace`.

![An example of Roblox terrain][1]

This property, like [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera), ensures that developers to not inadvertently index a descendant of `Workspace` named 'Terrain' when looking for a game's `Terrain` object. Without this property, developers would need to use the [Instance.FindFirstChildOfClass](https://developer.roblox.com/api-reference/function/Instance/FindFirstChildOfClass) function.

```lua
workspace.Terrain.WaterColor = Color3.new(0, 1, 0) -- make the water green
```

[1]: https://developer.roblox.com/assets/5b65bf0c4bf5bf624023ee26/Terrain.png