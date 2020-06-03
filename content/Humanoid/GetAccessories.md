This function returns an array of [Accessories](https://developer.roblox.com/api-reference/class/Accessory) that the `Humanoid` is currently wearing.

All `Accessory` objects parented to the [Humanoid's](https://developer.roblox.com/api-reference/class/Humanoid) parent will be included, regardless of if they are attached to the `Humanoid` or not. If the humanoid is not wearing any accessories, the array will be empty.

If the `Humanoid` has no [Accessories](https://developer.roblox.com/api-reference/class/Accessory) an empty array will be returned

## See also

 - Use [Humanoid.AddAccessory](https://developer.roblox.com/api-reference/function/Humanoid/AddAccessory) to attach an `Accessory` to a `Humanoid`
@returns An array of `Accessory|Accessories` that are parented to the `Humanoid|Humanoid's` parent.