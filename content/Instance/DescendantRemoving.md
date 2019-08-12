DescendantRemoving fires **immediately before** the [Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) of a descendant of the `Instance` changes such that the object is no longer a descendant of the Instance. [Destroy](https://developer.roblox.com/api-reference/function/Instance/Destroy) and [Remove](https://developer.roblox.com/api-reference/function/Instance/Remove) change an object's Parent to nil, so calling these on a descendant of an object will therefore cause this event to fire.

Since this event fires before the the descendant's removal, the Parent of the descendant will be unchanged, i.e., it will still be a descendant at the time of this event firing. If the descendant is also a child of the object, It will also fire before ChildRemoved. There is no similar event called "DescendantRemoved".

If a descendant has children, this event fires with the descendant first followed by its descendants.

## Example

The example below should help clarify how DescendantRemoving fires when there are several objects involved.

![A cropped screenshot of the Explorer window. A Model contains ModelA and ModelB, which each contain a Part, PartA and PartB respectively. PartA contains a Fire object named FireA.][1]

* Calling [Remove](https://developer.roblox.com/api-reference/function/Instance/Remove) on **PartA** would cause DescendantRemoving to fire on both **ModelA** and **Model**, in that order.

* Setting the [Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) of **PartA** to **ModelB** would cause DescendantRemoving to fire on **ModelA** but not **Model** (as Model would still be an ancestor of PartA).

* Calling [Destroy](https://developer.roblox.com/api-reference/function/Instance/Destroy) on **ModelA** would cause DescendantRemoving to fire multiple times on several objects:

	1. On **Model** with **ModelA**, **PartA** then **FireA**.

	2. On **ModelA**, with **PartA** then **FireA**.

	3. On **PartA** with **FireA**.

## Warning

This event fires with the descendant object that is being removed. Attempting to set the [Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) of the descendant being removed to something else **will fail** with the following warning: "Something unexpectedly tried to set the parent of X to Y while trying to set the parent of X. Current parent is Z", where X is the removing descendant, Y is the ignored parent setting, and Z is the original parent of X. Below is an example that demonstrates this:

```lua
workspace.DescendantRemoving:Connect(function(descendant)
	-- Don't manipulate the parent of descendant in this function!
	-- This event fires BECAUSE the parent of descendant was manipulated,
	-- and the change hasn't happened yet, i.e. this function fires before that happens.
	-- Therefore, it is problematic to change the parent like this:
	descendant.Parent = game
end)
local part = Instance.new("Part")
part.Parent = workspace
part.Parent = nil -- This triggers DescendantRemoving on Workspace:
--&gt; Something unexpectedly tried to set the parent of Part to NULL while trying to set the parent of Part. Current parent is Workspace.
```

See also [DescendantAdded](https://developer.roblox.com/api-reference/event/Instance/DescendantAdded).

[1]: https://developer.roblox.com/assets/5bedf8a8a79094cd2b6a1c41/DescendantRemoving2.png