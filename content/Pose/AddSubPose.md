This function adds a sub `Pose` to the `Pose` by parenting it to it. It is functionally identical to setting the new pose's [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) to the pose.

Note, this function will not error when an instance other than a `Pose` is given as the pose parameter and will parent it successfully.
@param pose The `Pose` to be added.