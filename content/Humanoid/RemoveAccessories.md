This function removes all [Accessories](https://developer.roblox.com/api-reference/class/Accessory) worn by the `Humanoid`.

## How does RemoveAccessories work?

When this function is called, all [Accessories](https://developer.roblox.com/api-reference/class/Accessory) sharing an [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) with the `Humanoid` will be removed. For `Player`, [Characters](https://developer.roblox.com/api-reference/property/Player/Character) this will remove all hats being worn as hats take the form of [Accessories](https://developer.roblox.com/api-reference/class/Accessory) in the data model.

[Instance.Destroy](https://developer.roblox.com/api-reference/function/Instance/Destroy) is called on the removed [Accessories](https://developer.roblox.com/api-reference/class/Accessory), meaning their [Parents](https://developer.roblox.com/api-reference/property/Instance/Parent) are set to nil and locked.

The `Humanoid` does not need to belong to a `Player` [Player.Character](https://developer.roblox.com/api-reference/property/Player/Character) for this to work. This function will remove [Accessories](https://developer.roblox.com/api-reference/class/Accessory) parented to the [Humanoid's](https://developer.roblox.com/api-reference/class/Humanoid) [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) regardless of where the `Humanoid` is.

## See also

 - To attach an `Accessory` use the [Humanoid.AddAccessory](https://developer.roblox.com/api-reference/function/Humanoid/AddAccessory) function

 - To get all [Accessories](https://developer.roblox.com/api-reference/class/Accessory) belonging to a `Humanoid` use the [Humanoid.GetAccessories](https://developer.roblox.com/api-reference/function/Humanoid/GetAccessories) function