Returns the first ancestor of the `Instance` whose [Instance.ClassName](https://developer.roblox.com/api-reference/property/Instance/ClassName) is equal to the given className.

This function works upwards, meaning it starts at the `Instance`'s immediate [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) and works up towards the `DataModel`. If no matching ancestor is found, it returns nil.

A common use of this function is finding the `Model` a `BasePart` belongs to. For example:

```lua
local model = part:FindFirstAncestorOfClass("Model")
```

This function is a variant of [Instance.FindFirstAncestor](https://developer.roblox.com/api-reference/function/Instance/FindFirstAncestor) which checks the [Instance.ClassName](https://developer.roblox.com/api-reference/property/Instance/ClassName) property rather than [Instance.Name](https://developer.roblox.com/api-reference/property/Instance/Name). [Instance.FindFirstAncestorWhichIsA](https://developer.roblox.com/api-reference/function/Instance/FindFirstAncestorWhichIsA) also exists, using the [Instance.IsA](https://developer.roblox.com/api-reference/function/Instance/IsA) method instead to respect class inheritance.
@param className The `Instance/ClassName` to be looked for.
@returns The `Instance` found.