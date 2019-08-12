When [AnimationTrack.Play](https://developer.roblox.com/api-reference/function/AnimationTrack/Play) is called the track's animation will begin playing and the weight of the animation will increase from 0 to the specified weight (defaults to 1) over the specified fadeTime (defaults to 0.1).

The speed the `AnimationTrack` will play at is determined by the speed parameter (defaults to 1). When the speed is equal to 1 the number of seconds the track will take to complete is equal to the track's [AnimationTrack.Length](https://developer.roblox.com/api-reference/property/AnimationTrack/Length) property. For example, a speed of 2 will cause the track to play twice as fast.

The weight and speed of the animation can also be changed after the animation has begun playing by using the [AnimationTrack.AdjustWeight](https://developer.roblox.com/api-reference/function/AnimationTrack/AdjustWeight) and [AnimationTrack.AdjustSpeed](https://developer.roblox.com/api-reference/function/AnimationTrack/AdjustSpeed) methods.

If the developer wants to start the animation at a specific point using [AnimationTrack.TimePosition](https://developer.roblox.com/api-reference/property/AnimationTrack/TimePosition), it is important the animation is played before this is done.
@param fadeTime The duration of time that the animation's weight should be faded in for.
@param weight The weight the animation is to be played at.
@param speed The playback speed of the animation.