The TouchSwipe event fires when the player performs a swipe gesture on the UI element using a touch-enabled device. It fires with the direction of the gesture (Up, Down, Left or Right) and the number of touch points involved in the gesture. Swipe gestures are often used to change tabs in mobile UIs.

Since this event only requires one finger, this event can be simulated in Studio using the emulator and a mouse. Below is an example of TouchSwipe being fired on a Frame that is [GuiObject.Active](https://developer.roblox.com/api-reference/property/GuiObject/Active). Below, the event fires when the Frame moves and changes color slightly. The code for this can be found the code samples.

![TouchSwipe event firing on a Frame][1]

This event is part of a family of touch-related events. Other events like this one are [GuiObject.TouchTap](https://developer.roblox.com/api-reference/event/GuiObject/TouchTap), [GuiObject.TouchRotate](https://developer.roblox.com/api-reference/event/GuiObject/TouchRotate), [GuiObject.TouchPinch](https://developer.roblox.com/api-reference/event/GuiObject/TouchPinch), [GuiObject.TouchPan](https://developer.roblox.com/api-reference/event/GuiObject/TouchPan) and [Guiobject.TouchLongPress](https://developer.roblox.com/search#stq=TouchLongPress). In addition, `UserInputService` has a similarly named event that is not restricted to a specific UI element: [UserInputService.TouchSwipe](https://developer.roblox.com/api-reference/event/UserInputService/TouchSwipe).

[1]: https://developer.roblox.com/assets/bltca477d4e524ee20d/TouchSwipe.gif