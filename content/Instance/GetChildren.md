Returns an array (a numerically indexed table) containing all of the `Instance`'s direct children, or every `Instance` whose [Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) is equal to the object. The array can be iterated upon using either a numeric or generic for-loop:

```lua
-- Numeric for-loop example
local children = workspace:GetChildren()
for i = 1, #children do
	local child = children[i]
	print(child.Name .. " is child number " .. i)
end
```
	 *
```lua
-- Generic for-loop example
local children = workspace:GetChildren()
for i, child in ipairs(children) do
	print(child.Name .. " is child number " .. i)
end
```

The children are sorted by the order in which their [Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) property was set to the object.

See also the [GetDescendants](https://developer.roblox.com/api-reference/function/Instance/GetDescendants) function.
@returns An array containing the `Instance`'s children.