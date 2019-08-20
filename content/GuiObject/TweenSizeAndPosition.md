Smoothly resizes and moves a GUI to a new [DataType.UDim2](https://developer.roblox.com/search#stq=UDim2) size and position in the specified time using the specified [EasingDirection](https://developer.roblox.com/search#stq=EasingDirection) and [EasingStyle](https://developer.roblox.com/search#stq=EasingStyle).

This function will return whether the tween will play. Normally this will always return true, but it will return false if another tween is active and override is set to false.

## See also

 - [GuiObject.TweenSize](https://developer.roblox.com/api-reference/function/GuiObject/TweenSize), tweens a GUI's size

 - [GuiObject.TweenPosition](https://developer.roblox.com/api-reference/function/GuiObject/TweenPosition), tweens a GUI's position
@param endSize The size that the GUI should resize
@param endPosition Where the GUI should move to
@param easingDirection The direction in which to ease the GUI to the *endPosition*
@param easingStyle The style in which to ease the GUI to the *endPosition*
@param time How long, in seconds, the tween should take to complete
@param override Whether another tween play, cancelling this tween, before the GUI reaches the *endPosition*
@param callback A callback function to execute when the tween completes
@returns Whether the tween will play