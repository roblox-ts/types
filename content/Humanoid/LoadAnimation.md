This function loads an `Animation` onto a `Humanoid`, returning an `AnimationTrack` that can be used for playback.

## How to load an Animation

The following code can be used to load an `Animation` onto a `Humanoid`.

```lua
local animationTrack = humanoid:LoadAnimation(animation)
animationTrack:Play()
```

## Should I load an Animation on the client or server?

If the `Humanoid` is controlled by a particular client, as is the case with `Player` [Characters](https://developer.roblox.com/api-reference/property/Player/Character) then [Animations](https://developer.roblox.com/api-reference/class/Animation) should be loaded and played from that client.

If the `Humanoid` belongs to a NPC (Non Player Character) which the server has [network ownership][1] of then the [Animations](https://developer.roblox.com/api-reference/class/Animation) should be loaded and played from the server.

Although generally it is not advisable to do so, these rules can be bypassed using the `Animator` object.

[1]: http://robloxdev.com/articles/Network-Ownership
@param animation The `Animation` to load
@returns The `AnimationTrack` created