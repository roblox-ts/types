Plays the `Sound`. Sets [Sound.TimePosition](https://developer.roblox.com/api-reference/property/Sound/TimePosition) to the last value set by a `Script` (or 0 if it has not been set), and then sets [Sound.Playing](https://developer.roblox.com/api-reference/property/Sound/Playing) to true.

The impact of the different `Sound` functions on [Sound.Playing](https://developer.roblox.com/api-reference/property/Sound/Playing) and [Sound.TimePosition](https://developer.roblox.com/api-reference/property/Sound/TimePosition) are shown below.

| Function | Sound.Playing | Sound.TimePosition |
| --- | --- | --- |
| Sound:Play() | True | Last value set in Lua (default 0) |
| Sound:Pause() | False | - |
| Sound:Resume() | True | - |
| Sound:Stop() | False | 0 |