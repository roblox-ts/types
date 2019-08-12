Fires when the `Sound` has completed playback and stopped. Note this event will not fire for sounds with [Sound.Looped](https://developer.roblox.com/api-reference/property/Sound/Looped) set to true as they continue playing upon reaching their end.

This event is often used to destroy a sound when it has completed playback.

```lua
sound:Play()
sound.Ended:Wait()
sound:Destroy()
```

This event only fires if the sound has reached its end. This means it will also not fire when the sound is stopped before playback has completed, for this use [Sound.Stopped](https://developer.roblox.com/api-reference/event/Sound/Stopped).