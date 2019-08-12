The MouseLeave event fires when a user moves their mouse out of a [GUI](https://developer.roblox.com/api-reference/class/GuiObject) element.

Please do not rely on the `x` and `y` arguments passed by this event as a fool-proof way to to determine where the user's mouse is when it leaves a GUI. These coordinates may vary even when the mouse leaves the GUI via the same edge - particularly when the mouse leaves the element quickly. This is due to the fact the coordinates indicate the position of the mouse when the event fires rather than the exact moment the mouse leaves the GUI.

This event fires even when the GUI element renders beneath another element.

## See also

 - [GuiObject.MouseEnter](https://developer.roblox.com/api-reference/event/GuiObject/MouseEnter)

 - [GuiObject.MouseMoved](https://developer.roblox.com/api-reference/event/GuiObject/MouseMoved)

 - [GuiObject.MouseWheelForward](https://developer.roblox.com/api-reference/event/GuiObject/MouseWheelForward)

 - [GuiObject.MouseWheelBackward](https://developer.roblox.com/api-reference/event/GuiObject/MouseWheelBackward)