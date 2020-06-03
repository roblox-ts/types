This property determines whether [GUI objects](https://developer.roblox.com/api-reference/class/LayerCollector) descending from the `StarterGui` are visible in Studio’s edit mode.

As this property defaults to true, [ScreenGuis](https://developer.roblox.com/api-reference/class/ScreenGui), [BillboardGuis](https://developer.roblox.com/api-reference/class/BillboardGui) and [SurfaceGuis](https://developer.roblox.com/api-reference/class/SurfaceGui) descending from the `StarterGui` are not hidden.

Setting this property to false will only affect objects not descending from the `StarterGui`. This means [BillboardGuis](https://developer.roblox.com/api-reference/class/BillboardGui) and [SurfaceGuis](https://developer.roblox.com/api-reference/class/SurfaceGui) descending from the `Workspace` will not be hidden.

This property has no effect outside of Roblox Studio and is intended as a tool to hide the contents of `StarterGui` whilst working in the 3d world.

## Disabling ShowDevelopmentGui by default

You can set this property to be false by default in new places by saving a `Script` with the following code into your local plugins folder.

```lua
print("StarterGui.ShowDevelopmentGui = false") -- a reminder this plugin is active
game:GetService("StarterGui").ShowDevelopmentGui = false
```
