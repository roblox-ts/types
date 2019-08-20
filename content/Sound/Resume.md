Resumes the `Sound`. Sets [Sound.Playing](https://developer.roblox.com/api-reference/property/Sound/Playing) to true. Does not alter [Sound.TimePosition](https://developer.roblox.com/api-reference/property/Sound/TimePosition) and thus can be used to resume the playback of a sound stopped using [Sound.Pause](https://developer.roblox.com/api-reference/function/Sound/Pause).

The impact of the different sound functions on [Sound.Playing](https://developer.roblox.com/api-reference/property/Sound/Playing) and [Sound.TimePosition](https://developer.roblox.com/api-reference/property/Sound/TimePosition) are shown below.

| Function | Sound.Playing | Sound.TimePosition |
| --- | --- | --- |
| Sound:Play() | True | Last value set in Lua (default 0) |
| Sound:Pause() | False | - |
| Sound:Resume() | True | - |
| Sound:Stop() | False | 0 |