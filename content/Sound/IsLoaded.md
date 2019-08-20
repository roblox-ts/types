This property will be true when the `Sound` has loaded loaded from Roblox servers and is ready to play.

In Roblox, audio files are not stored in games themselves but hosted on the Roblox servers and referenced by the [Sound.SoundId](https://developer.roblox.com/api-reference/property/Sound/SoundId) property. This means that they need to be downloaded to a client's device before they can be played. This can take a while depending on the user's internet connection, the length of the sound and the number of other objects that need to be loaded.

Developers can use the [Sound.IsLoaded](https://developer.roblox.com/api-reference/property/Sound/IsLoaded) property and the [Sound.Loaded](https://developer.roblox.com/api-reference/event/Sound/Loaded) event if they wish to verify a sound has loaded before playing it.
	
This property will be true when the `Sound` has loaded loaded from Roblox servers and is ready to play.

In Roblox, audio files are not stored in games themselves but hosted on the Roblox servers and referenced by the [Sound.SoundId](https://developer.roblox.com/api-reference/property/Sound/SoundId) property. This means that they need to be downloaded to a client's device before they can be played. This can take a while depending on the user's internet connection, the length of the sound and the number of other objects that need to be loaded.

Developers can use the [Sound.IsLoaded](https://developer.roblox.com/api-reference/property/Sound/IsLoaded) property and the [Sound.Loaded](https://developer.roblox.com/api-reference/event/Sound/Loaded) event if they wish to verify a sound has loaded before playing it.

Tags: ReadOnly, NotReplicated