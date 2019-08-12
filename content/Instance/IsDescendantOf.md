Returns true if an `Instance` is a descendant of the given ancestor.

An `Instance` is considered the descendant of an object if the `Instance`'s parent or one of its parent's parent is set to the object.

Note, `DataModel` is a descendant of nil. This means IsDescendantOf cannot be used with a parameter of nil to check if an object has been removed.

See also, [Instance.IsAncestorOf](https://developer.roblox.com/api-reference/function/Instance/IsAncestorOf).
@param ancestor The ancestor `Instance`.
@returns True if the `Instance` is a descendant of the given ancestor.