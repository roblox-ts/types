This function adds a `Keyframe` to the `KeyframeSequence` by parenting it to the `KeyframeSequence`. It is functionally identical to setting the `Keyframe`'s [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) to the `KeyframeSequence`.

Note, this function will not error when an instance other than a `Keyframe` is given as the keyframe parameter and will parent it successfully.
@param keyframe The `Keyframe` to be added.