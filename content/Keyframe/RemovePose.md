This function removes a `Pose` from the `Keyframe` by setting its [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) to nil.

The `Pose`'s [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) is set to nil, but it is not destroyed. This means, provided the pose is referenced it can be re-parented later.

Note, this function will not error when an instance other than a `Pose` is given as the pose parameter.
@param pose The `Pose` to be removed.