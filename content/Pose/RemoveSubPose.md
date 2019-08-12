This function removes a sub `Pose` from the `Pose` by parenting it to nil. It is functionally identical to setting the new pose's [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) to nil.

Note, this function will not error when an instance other than a `Pose` is given as the pose parameter and remove it successfully.
@param pose The `Pose` to be removed.