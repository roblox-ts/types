Returns the time position of the first `Keyframe` of the given name in an `AnimationTrack`. If multiple `Keyframe`s share the same name, it will return the earliest one in the animation.

This function will return an error if it is uses with an invalid keyframe name (one that does not exist for example) or if the underlying `Animation` has not yet loaded. To address this make sure only correct keyframe names are used and the animation has loaded before calling this function.

To check if the animation has loaded, verify that the `AnimationTrack`'s [AnimationTrack.Length](https://developer.roblox.com/api-reference/property/AnimationTrack/Length) is greater than zero.
@param keyframeName The name associated with the `Keyframe` to be found.
@returns The time, in seconds, the `Keyframe` occurs at normal playback speed.