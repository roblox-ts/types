Returns true if an `Instance` is an ancestor of the given descendant.

An `Instance` is considered the ancestor of an object if the object's [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) or one of it's parent's [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) is set to the `Instance`.

See also, [Instance.IsDescendantOf](https://developer.roblox.com/api-reference/function/Instance/IsDescendantOf).
@param descendant The descendant `Instance`.
@returns True if the `Instance` is an ancestor of the given descendant.