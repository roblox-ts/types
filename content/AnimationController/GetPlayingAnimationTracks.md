Returns a table of all `AnimationTrack`s that are currently being played by an `AnimationController`.

A typical use for this function is stopping currently playing tracks using [AnimationTrack.Stop](https://developer.roblox.com/api-reference/function/AnimationTrack/Stop).

Note this function will not return `AnimationTrack`s that have loaded but are not playing. If the developer wishes to track these they will need to index them manually. See below for one example of how this could be achieved:

```lua
local animationTracks = {}
local track = animationController:LoadTrack(animation)
table.insert(animationTracks, track)
```

@returns An array of playing `AnimationTrack`s.