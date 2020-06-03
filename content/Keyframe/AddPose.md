This function adds a `Pose` to the `Keyframe` by parenting it to the keyframe. It is functionally identical to setting the pose's [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) to the keyframe.

Note, this function will not error when an instance other than a `Pose` is given as the pose parameter and will parent it successfully.
@param pose The `Pose` to be added.