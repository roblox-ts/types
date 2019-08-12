This function unequips any `Tool` currently equipped by the `Humanoid`

The unequipped `Tool` will be parented to the `Backpack` of the `Player` associated with the `Humanoid`.

If no `Tool` is equipped, this function will do nothing.

Although [Tools](https://developer.roblox.com/api-reference/class/Tool) can be equipped by NPCs (Non Player Characters), this function only works on [Humanoids](https://developer.roblox.com/api-reference/class/Humanoid) with a corresponding `Player`. This is because a `Backpack` object is required to parent the unequipped `Tool` to.

## See also

 - To instead equip a `Tool`, use [Humanoid.EquipTool](https://developer.roblox.com/api-reference/function/Humanoid/EquipTool)