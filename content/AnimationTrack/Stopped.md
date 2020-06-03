Fires whenever the `AnimationTrack` finishes playing.

This event has a number of uses. It can be used to wait until an `AnimationTrack` has stopped before continuing (for example, if chaining a series of animations to play after each other). It can also be used to clean up any `Instance`s created during the animation playback.