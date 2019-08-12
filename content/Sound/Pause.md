Sets [Sound.Playing](https://developer.roblox.com/api-reference/property/Sound/Playing) to false. This pauses the playback of the `Sound` if the sound is playing. Unlike [Sound.Stop](https://developer.roblox.com/api-reference/function/Sound/Stop) it does not reset [Sound.TimePosition](https://developer.roblox.com/api-reference/property/Sound/TimePosition) meaning the sound can be resumed using [Sound.Resume](https://developer.roblox.com/api-reference/function/Sound/Resume).

The impact of the different Sound functions on [Sound.Playing](https://developer.roblox.com/api-reference/property/Sound/Playing) and [Sound.TimePosition](https://developer.roblox.com/api-reference/property/Sound/TimePosition) are shown below.

| Function | Sound.Playing | Sound.TimePosition |
| --- | --- | --- |
| Sound:Play() | True | Last value set in Lua (default 0) |
| Sound:Pause() | False | - |
| Sound:Resume() | True | - |
| Sound:Stop() | False | 0 |