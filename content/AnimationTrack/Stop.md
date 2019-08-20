Stops the `AnimationTrack`. Once called playback of the `AnimationTrack` will stop and the weight of the animation will move towards zero over a length of time specified by the optional fadeTime parameter.

For example, if Stop is called with a fadeTime of 2 seconds it will take two seconds for the weight of the `AnimationTrack` to reach zero and its effects completely end. Please note this will be the case regardless of the initial weight of the animation.

It is not recommended to use a fadeTime of 0 seconds to try to override this effect and end the animation immediately as presently, this causes the `AnimationTrack` poses to freeze.
@param fadeTime The time, in seconds, for which animation weight is to be faded out over.