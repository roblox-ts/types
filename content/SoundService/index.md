A service that determines various aspects of how `Sound`s play in the game. SoundService is also often used to store `SoundGroup`s although this is not mandatory for `SoundGroup`s to work.

## What can SoundService do?

SoundService properties such as [SoundService.AmbientReverb](https://developer.roblox.com/api-reference/property/SoundService/AmbientReverb), [SoundService.DistanceFactor](https://developer.roblox.com/api-reference/property/SoundService/DistanceFactor), [SoundService.DopplerScale](https://developer.roblox.com/api-reference/property/SoundService/DopplerScale) and [SoundService.RolloffScale](https://developer.roblox.com/api-reference/property/SoundService/RolloffScale) can be used to change how all `Sound`s play in the game.

The [SoundService.SetListener](https://developer.roblox.com/api-reference/function/SoundService/SetListener) function allows developers to set the position where sounds are heard from.

[SoundService.PlayLocalSound](https://developer.roblox.com/api-reference/function/SoundService/PlayLocalSound) can be used to play a sound locally regardless of where it is parented to.

Developers looking to find out more about how sound works in Roblox should consult the documentation provided for the [FMOD sound engine][1].

[1]: https://www.fmod.com/docs/api/content/generated/overview/3dsound.html