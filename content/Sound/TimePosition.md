Shows the progress in seconds of the `Sound`. Can be changed to move the playback position of the sound. If the sound is already playing then playback will snap to the specified position. If it is not playing the `Sound` will begin playback at the set position when the sound is next played.

As a `Sound` is played, TimePosition increases at a rate of [Sound.PlaybackSpeed](https://developer.roblox.com/api-reference/property/Sound/PlaybackSpeed) per second. Once TimePosition reaches [Sound.TimeLength](https://developer.roblox.com/api-reference/property/Sound/TimeLength) the Sound will stop unless it is looped. This means, unless [Sound.Looped](https://developer.roblox.com/api-reference/property/Sound/Looped) is set to true setting TimePosition to a value equal or greater to [Sound.TimeLength](https://developer.roblox.com/api-reference/property/Sound/TimeLength) will stop the sound.

Note that setting TimePositio` to a value greater than the length in a looped track will not cause it to wrap around. If that behavior is desired the developer should do the following.

```lua
if newPosition &gt;= sound.TimeLength then
	newPosition = newPosition - sound.TimeLength
end
sound.TimePosition = newPosition
```

Setting TimePosition to a value less than zero currently does not influence playback, but this behavior should not be relied upon.