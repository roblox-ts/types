The RightMouseClick event fires when a player presses and releases the right mouse button while the cursor is hovering over a `BasePart` or `Model` with a `ClickDetector`. Additionally, the Player's [Character](https://developer.roblox.com/api-reference/property/Player/Character) must be within the [MaxActivationDistance](https://developer.roblox.com/api-reference/property/ClickDetector/MaxActivationDistance) of the clicked object. This event fires when using either a `Script` or `LocalScript`.

## Related Events

* If you want to check when a player left clicks on the ClickDetector, you can use the [MouseClick](https://developer.roblox.com/api-reference/event/ClickDetector/MouseClick) event.

* If you want a function to fire when a player hovers on or off of the ClickDetector without clicking it you can use the [MouseHoverEnter](https://developer.roblox.com/api-reference/event/ClickDetector/MouseHoverEnter) and [MouseHoverLeave](https://developer.roblox.com/api-reference/event/ClickDetector/MouseHoverLeave) events.