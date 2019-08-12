Returns the first ancestor of the `Instance` whose [Instance.Name](https://developer.roblox.com/api-reference/property/Instance/Name) is equal to the given name.

This function works upwards, meaning it starts at the `Instance`'s immediate [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) and works up towards the `DataModel`. If no matching ancestor is found, it returns nil.

The following code snippet would find the first ancestor of the object named 'Car'.

```lua
local car = object:FindFirstAncestor("Car")
```

For variants of this function that find ancestors of a specific class, please see [Instance.FindFirstAncestorOfClass](https://developer.roblox.com/api-reference/function/Instance/FindFirstAncestorOfClass) and [Instance.FindFirstAncestorWhichIsA](https://developer.roblox.com/api-reference/function/Instance/FindFirstAncestorWhichIsA).
@param name The `Instance/Name` to be looked for.
@returns The `Instance` found.