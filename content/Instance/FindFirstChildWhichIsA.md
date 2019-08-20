Returns the first child of the `Instance` for whom [Instance.IsA](https://developer.roblox.com/api-reference/function/Instance/IsA) returns true for the given className.

If no matching child is found, this function returns nil. If the optional recursive argument is true, this function searches all descendants rather than only the immediate children of the `Instance`.

Unlike [Instance.FindFirstChildOfClass](https://developer.roblox.com/api-reference/function/Instance/FindFirstChildOfClass), this function uses [Instance.IsA](https://developer.roblox.com/api-reference/function/Instance/IsA) which respects class inheritance. For example:

```lua
print(part:IsA("Part")) --> true
print(part:IsA("BasePart")) --> true
print(part:IsA("Instance")) --> true
```

Therefore, the following code sample will return the first `BasePart` child, regardless of if it is a `WedgePart`, `MeshPart` or `Part`.

```lua
local part = object:FindFirstChildWhichIsA("BasePart")
```

Developers looking for a child by name, should use [Instance.FindFirstChild](https://developer.roblox.com/api-reference/function/Instance/FindFirstChild) instead.
@param className The `Instance/ClassName` to be searched for.
@param recursive Whether or not the search should be conducted recursively. 
@returns The `Instance` found.