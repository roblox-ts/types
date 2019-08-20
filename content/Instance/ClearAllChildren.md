This function destroys all of an `Instance`'s children.

As [Instance.Destroy](https://developer.roblox.com/api-reference/function/Instance/Destroy) also calls itself on the children of an object it is used on, this function will destroy all descendants.

## Alternatives to ClearAllChildren

If the developer does not wish to destroy all descendants, they should use [Instance.GetChildren](https://developer.roblox.com/api-reference/function/Instance/GetChildren) or [Instance.GetDescendants](https://developer.roblox.com/api-reference/function/Instance/GetDescendants) to loop through an object and select what to destroy. For example, the following code sample will destroy all parts in an object.

```lua
for _, instance in pairs(object:GetDescendants()) do
	if instance:IsA("BasePart") then
		instance:Destroy()
	end
end
```
