The Sound.Loaded event fires when the `/Sound` is loaded.

Note this event will only fire at the time the sound is loaded. This means if it is listened for when the sound is already loaded it will not return. Therefore it is recommended to check [Sound.IsLoaded](https://developer.roblox.com/api-reference/property/Sound/IsLoaded) prior to connecting to this event.