Smoothly moves a GUI to a new [DataType.UDim2](https://developer.roblox.com/search#stq=UDim2) position in the specified time using the specified [EasingDirection](https://developer.roblox.com/search#stq=EasingDirection) and [EasingStyle](https://developer.roblox.com/search#stq=EasingStyle).

This function will return whether the tween will play. It will not play if another tween is acting on the `GuiObject` and the override parameter is false.

## See also

 - [GuiObject.TweenSize](https://developer.roblox.com/api-reference/function/GuiObject/TweenSize), tweens a GUI's size

 - [GuiObject.TweenSizeAndPosition](https://developer.roblox.com/api-reference/function/GuiObject/TweenSizeAndPosition), tweens a GUI's size and position synchronously
@param endPosition Where the GUI should move to
@param easingDirection The direction in which to ease the GUI to the *endPosition*
@param easingStyle The style in which to ease the GUI to the *endPosition*
@param time How long, in seconds, the tween should take to complete
@param override Whether the tween can be overridden by another tween before it finishes
@param callback A callback function to execute when the tween completes
@returns Whether the tween will play