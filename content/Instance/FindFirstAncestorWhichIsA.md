Returns the first ancestor of the `Instance` for whom [Instance.IsA](https://developer.roblox.com/api-reference/function/Instance/IsA) returns true for the given className.

This function works upwards, meaning it starts at the `Instance`'s immediate [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) and works up towards the `DataModel`. If no matching ancestor is found, it returns nil.

Unlike [Instance.FindFirstAncestorOfClass](https://developer.roblox.com/api-reference/function/Instance/FindFirstAncestorOfClass), this function uses [Instance.IsA](https://developer.roblox.com/api-reference/function/Instance/IsA) which respects class inheritance. For example:

```lua
print(part:IsA("Part")) --&gt; true
print(part:IsA("BasePart")) --&gt; true
print(part:IsA("Instance")) --&gt; true
```

Therefore, the following code sample will return the first `BasePart` ancestor, regardless of if it is a `WedgePart`, `MeshPart` or `Part`.

```lua
local part = object:FindFirstAncestorWhichIsA("BasePart")
```

See also, [Instance.FindFirstAncestor](https://developer.roblox.com/api-reference/function/Instance/FindFirstAncestor).
@param className The `Instance/ClassName` to be looked for.
@returns The `Instance` found.