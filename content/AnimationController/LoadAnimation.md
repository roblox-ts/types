This function loads an `Animation` onto an `AnimationController`, returning an `AnimationTrack` that can be used for playback.

## How to load an Animation

The following code can be used to load an `Animation` onto an `AnimationController`.

```lua
local animationTrack = animationController:LoadAnimation(animation)
animationTrack:Play()
```

## Should I load an Animation on the client or server?

In order for `AnimationTrack`s to replicate correctly, it's important to know when they should be loaded on the client (via a `LocalScript`) or on the server (via a `Script`). If an `AnimationController` is created on the server, its animations should be loaded and played on the server unless a player has been assigned network ownership of the `Model`'s root part using [BasePart.SetNetworkOwner](https://developer.roblox.com/api-reference/function/BasePart/SetNetworkOwner). If an `AnimationController` is created on the client it should be animated by the client.

Although it is not recommended, if a developer wishes to play animations on a locally controlled `Model` from the server they can use the `Animator` object.

Note this differs slightly for animations playing on Player characters, for more information on this please see [Humanoid.LoadAnimation](https://developer.roblox.com/api-reference/function/Humanoid/LoadAnimation).
@param animation The `Animation` to be used.
@returns The `AnimationTrack` created.