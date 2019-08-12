Fires when a child is removed from this `Instance`.

Removed refers to when an object's parent is changed from this `Instance` to something other than this `Instance`. Note, this event will also fire when a child is destroyed (using [Instance.Destroy](https://developer.roblox.com/api-reference/function/Instance/Destroy)) as the destroy function sets an object's parent to nil.

This function only works for immediate children of the `Instance`. For a function that captures all descendants, use [Instance.DescendantRemoved](https://developer.roblox.com/search#stq=DescendantRemoved).

See also [Instance.ChildAdded](https://developer.roblox.com/api-reference/event/Instance/ChildAdded).