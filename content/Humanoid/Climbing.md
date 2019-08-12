Fires when the speed at which a `Humanoid` is climbing changes.

[Humanoids](https://developer.roblox.com/api-reference/class/Humanoid) can climb up ladders made out of [Parts](https://developer.roblox.com/api-reference/class/BasePart) or [TrussParts](https://developer.roblox.com/api-reference/class/TrussPart).

[Humanoids](https://developer.roblox.com/api-reference/class/Humanoid) climb at 70% of their [Humanoid.WalkSpeed](https://developer.roblox.com/api-reference/property/Humanoid/WalkSpeed).

This event will not always fire with a speed of 0 when the `Humanoid` stops climbing.

## See also

 - For swimming and running see the [Humanoid.Swimming](https://developer.roblox.com/api-reference/event/Humanoid/Swimming) and [Humanoid.Running](https://developer.roblox.com/api-reference/event/Humanoid/Running) events

 - You can also detect when a `Humanoid` is climbing using the [Humanoid.StateChanged](https://developer.roblox.com/api-reference/event/Humanoid/StateChanged) event

 - You can disable climbing using the [Humanoid.SetStateEnabled](https://developer.roblox.com/api-reference/function/Humanoid/SetStateEnabled) function