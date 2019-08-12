Fires every time playback of an `AnimationTrack` reaches a `Keyframe` that does not have the default name - "Keyframe".

This event allows a developer to run code at predefined points in an animation (set by `Keyframe` names). This allows the default functionality of Roblox animations to be expanded upon by adding `Sound`s or `ParticleEffect`s at different points in an animation.

`Keyframe` names do not need to be unique. For example, if an Animation has three keyframes named "Particles" the KeyframeReached event will fire each time one of these keyframes is reached.

`Keyframe` names can be set in the Roblox Animation Editor when creating or editing an animation. They cannot however be set by a `Script` on an existing animation prior to playing it.