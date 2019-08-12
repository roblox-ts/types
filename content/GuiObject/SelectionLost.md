This event fires when the Gamepad selector stops focusing on the [GUI](https://developer.roblox.com/api-reference/class/GuiObject).

If you want to check from the Gamepad select starts focusing on the GUI element, you can use the [GuiObject.SelectionGained](https://developer.roblox.com/api-reference/event/GuiObject/SelectionGained) event.

When a GUI loses selection focus, the value of the [SelectionObject](https://developer.roblox.com/search#stq=SelectionObject) property changes either to nil or to the GUI element that gains selection focus. To determine which GUI gained selection, or if no GUI is selected, check the value of this property.