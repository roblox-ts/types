The AnimationPlayed event fires when an `AnimationTrack` begins playing on the `Humanoid`.

A common use for this function is to connect the [AnimationTrack.KeyframeReached](https://developer.roblox.com/api-reference/event/AnimationTrack/KeyframeReached) event for the playing AnimationTrack, so additional effects can be added to the animation (for example [Sounds](https://developer.roblox.com/api-reference/class/Sound) and [ParticleEmitters](https://developer.roblox.com/api-reference/class/ParticleEmitter)).

This event can be used for any `Humanoid` regardless if it belongs to the local player's client or not.

## See also

 - For the `AnimationController` equivalent of this event, please see [AnimationController.AnimationPlayed](https://developer.roblox.com/api-reference/event/AnimationController/AnimationPlayed)