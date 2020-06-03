This function removes a `Keyframe` from the `KeyframeSequence` by setting its parent to nil. It is functionally identical to setting the keyframe's parent to nil

The `Keyframe`'s parent is set to nil, but it is not destroyed. This means, provided the keyframe is referenced it can be re-parented later.

Note, this function will not error when an `Instance` other than a `Keyframe` is given as the keyframe parameter.
@param keyframe The `Keyframe` to be removed.