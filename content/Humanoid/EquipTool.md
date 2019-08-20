This function makes the `Humanoid` equip the given `Tool`.

The below example would cause *Player1* to equip a tool in `Workspace` named *'Tool'*.

```lua
Workspace.Player1.Humanoid:EquipTool(Workspace.Tool)
```

When this function is called, the humanoid will automatically unequip any [Tools](https://developer.roblox.com/api-reference/class/Tool) that it currently has equipped

Although they will be equipped, [Tools](https://developer.roblox.com/api-reference/class/Tool) for which [Tool.RequiresHandle](https://developer.roblox.com/api-reference/property/Tool/RequiresHandle) is *true* will not function if they have no handle, regardless if this function is used to equip them or not

## See also

 - To unequip tools, use [Humanoid.UnequipTools](https://developer.roblox.com/api-reference/function/Humanoid/UnequipTools)
@param tool The `Tool` to equip