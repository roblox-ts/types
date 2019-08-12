The MouseHoverLeave event fires when a player's [mouse](https://developer.roblox.com/api-reference/class/Mouse) moves off of the `ClickDetector`'s parent. This event fires when using either a `Script` or `LocalScript`.

Due to the nature of user input, you ought not depend on all [MouseHoverEnter](https://developer.roblox.com/api-reference/event/ClickDetector/MouseHoverEnter) events to fire a matching MouseHoverLeave event.

The player does not have to click the ClickDetector for this event to fire. If you want an function to run when the player clicks, you can use [ClickDetector.MouseClick](https://developer.roblox.com/api-reference/event/ClickDetector/MouseClick) and [ClickDetector.RightMouseClick](https://developer.roblox.com/api-reference/event/ClickDetector/RightMouseClick) events.