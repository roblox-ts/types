This function returns an [event](https://developer.roblox.com/search#stq=RBXScriptSignal) similar to the [AnimationTrack.KeyframeReached](https://developer.roblox.com/api-reference/event/AnimationTrack/KeyframeReached) event, except it only fires when a specified `KeyframeMarker` has been hit in an [animation](https://developer.roblox.com/api-reference/class/Animation). The difference allows for greater control of when the event will fire.

This event allows a developer to run code at predefined points in an animation (set by `Keyframe` names). This allows the default functionality of Roblox animations to be expanded upon by adding things such as [Sounds](https://developer.roblox.com/api-reference/class/Sound) or [ParticleEffects](https://developer.roblox.com/api-reference/class/ParticleEmitter) at different points in an animation.

To learn more about using this function, see **Animation&nbsp;Events** in the [Using the Animation Editor](https://developer.roblox.com/search#stq=using%20animation%20editor) article.

## Using the Returned Event

The RBXScriptSignal (event) returned by this can be connected to another function. The connection creates a [DataType.RBXScriptConnection](https://developer.roblox.com/search#stq=RBXScriptConnection) listener that executes the connected function every time the animation hits the specified KeyframeMarker until disconnected using Disconnect().

## More about Keyframes

`Keyframe` names do not need to be unique. For example, if an Animation has three keyframes named "Particles" the connected event returned by this function will fire each time one of these keyframes is reached.

`Keyframe` names can be set in the Roblox Animation Editor when creating or editing an animation. They cannot however be set by a `Script` on an existing animation prior to playing it.

## See also

 - `AnimationTrack`, controls the playback of an animation on a `Humanoid` or `AnimationController`

 - `Keyframe`,  holds the [Poses](https://developer.roblox.com/api-reference/class/Pose) applied to joints in a `Model` at a given point of time in an animation

 - [Keyframe.AddMarker](https://developer.roblox.com/api-reference/function/Keyframe/AddMarker)

 - [Keyframe.RemoveMarker](https://developer.roblox.com/api-reference/function/Keyframe/RemoveMarker)

 - [Keyframe.GetMarkers](https://developer.roblox.com/api-reference/function/Keyframe/GetMarkers)
@param name The name of the `KeyFrameMarker` the signal is being created for
@returns The signal created and fired when the animation reaches the created `KeyFrameMarker`