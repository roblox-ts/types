This object stores all the `Keyframe`s for an animation, determines if the animation is looped, and determines its priority against other animations.

## What is a Keyframe Sequence?

The animation data Roblox uses in the playback of an animation, referenced by the [Animation.AnimationId](https://developer.roblox.com/api-reference/property/Animation/AnimationId) property, is constructed from a KeyframeSequence. Every animation has a KeyframeSequence associated with it. KeyframeSequences are usually created by the Roblox Animation Editor but can be created through other plugins or even manually. Once uploaded to Roblox, their Content ID is used for the [Animation.AnimationId](https://developer.roblox.com/api-reference/property/Animation/AnimationId) property.

Note, in most cases developers do not need to manipulate KeyframeSequences as the animation editor covers most animation functionality. However, in some cases a developer may wish to generate an animation from a `Script` or build their own plugin.

## KeyframeSequence Properties

The priority and looped animation settings are set by [KeyframeSequence.Priority](https://developer.roblox.com/api-reference/property/KeyframeSequence/Priority) and [KeyframeSequence.Loop](https://developer.roblox.com/api-reference/property/KeyframeSequence/Loop). Note these can be eventually overwritten by the `AnimationTrack` properties.

The length of an animation is determined by the last `Keyframe` in the sequence, meaning the `Keyframe` with the highest [Keyframe.Time](https://developer.roblox.com/api-reference/property/Keyframe/Time) property.

## KeyframeSequence Structure

KeyframeSequences are a container that hold `Keyframe`s. Keyframes represent a 'key' frame in the animation, that are interpolated between during playback.

Keyframes contain `Pose`s. `Pose`s are specific to each `BasePart` being animated and contain the `CFrame` applied to the `Motor6D` connecting to the part. Poses are named according to the `BasePart` they correspond with. For this reason, animations require distinct part names to play correctly.

Poses are structured based on joint hierarchy. Each `Pose` is parented to the `Pose` corresponding to the part it is attached to. In practice, this means the poses branch out from the root part. See below for a visual example.

![][1]

## Using KeyframeSequences when making animations

KeyframeSequences must be first uploaded to Roblox before they can be played. This can be done by right clicking on the KeyframeSequence and clicking 'Save to Roblox'. Alternatively, [Plugin.SaveSelectedToRoblox](https://developer.roblox.com/api-reference/function/Plugin/SaveSelectedToRoblox) can be used. This will bring up the animation upload window.

In some cases, a developer may want to preview an Animation before uploading it to the Roblox site. This can be achieved by generating a temporary id using [KeyframeSequenceProvider.RegisterKeyframeSequence](https://developer.roblox.com/api-reference/function/KeyframeSequenceProvider/RegisterKeyframeSequence). This will generate a hash id that can be used for localized animation testing.

## Obtaining KeyframeSequences

In some cases the developer may wish to download the KeyframeSequence corresponding to an existing uploaded Animation. This can be done so using [KeyframeSequenceProvider.GetKeyframeSequenceAsync](https://developer.roblox.com/api-reference/function/KeyframeSequenceProvider/GetKeyframeSequenceAsync).

[1]: https://developer.roblox.com/assets/blt2e767397c28fecda/KeyframeSequence_-_Copy.png