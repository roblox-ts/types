Fires when an object is parented to this `Instance`.

Note, when using this function on a client to detect objects created by the server it is necessary to use [Instance.WaitForChild](https://developer.roblox.com/api-reference/function/Instance/WaitForChild) when indexing these object's descendants. This is because the object and its descendants are not guaranteed to replicate from the server to the client simultaneously. For example:

```lua
workspace.ChildAdded:Connect(function(child)
	-- need to use WaitForChild as descendants may not have replicated yet
	local head = child:WaitForChild("Head")
end)
```

Note, this function only works for immediate children of the `Instance`. For a function that captures all descendants, use [Instance.DescendantAdded](https://developer.roblox.com/api-reference/event/Instance/DescendantAdded).

See also, [Instance.ChildRemoved](https://developer.roblox.com/api-reference/event/Instance/ChildRemoved).