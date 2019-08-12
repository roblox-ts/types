The MouseEnter event fires when a user moves their mouse into a [GUI](https://developer.roblox.com/api-reference/class/GuiObject) element.

Please do not rely on the `x` and `y` arguments passed by this event as a fool-proof way to to determine where the user's mouse is when it enters a GUI. These coordinates may vary even when the mouse enters the GUI via the same edge - particularly when the mouse enters the element quickly. This is due to the fact the coordinates indicate the position of the mouse when the event fires rather than the exact moment the mouse enters the GUI.

This event fires even when the GUI element renders beneath another element.

If you would like to track when a user's mouse leaves a GUI element, you can use the [GuiObject.MouseLeave](https://developer.roblox.com/api-reference/event/GuiObject/MouseLeave) event.

## See also

 - [GuiObject.MouseLeave](https://developer.roblox.com/api-reference/event/GuiObject/MouseLeave)

 - [GuiObject.MouseMoved](https://developer.roblox.com/api-reference/event/GuiObject/MouseMoved)

 - [GuiObject.MouseWheelForward](https://developer.roblox.com/api-reference/event/GuiObject/MouseWheelForward)

 - [GuiObject.MouseWheelBackward](https://developer.roblox.com/api-reference/event/GuiObject/MouseWheelBackward)