This function takes a screen position and returns a list of all the visible [GuiObjects](https://developer.roblox.com/api-reference/class/GuiObject) that are occupying that screen position.

The main use case is to get GUI objects under the player’s [Player.Mouse](https://developer.roblox.com/search#stq=Mouse) or touch inputs to do things like allow selection or highlighting. These effects can already be achieved using [GuiObject.MouseEnter](https://developer.roblox.com/api-reference/event/GuiObject/MouseEnter) and [GuiObject.MouseLeave](https://developer.roblox.com/api-reference/event/GuiObject/MouseLeave) but this requires the developer to track these events for their UI objects all the time even if they only need this functionality in specific circumstances.

Since the child classes of `BasePlayerGui` inherit this function, it can be fired by class objects such as the `PlayerGui` and `StarterGui` folders.
@param x The x position on the screen relative to the top left corner after the `GuiService/GuiInset|GuiInset` is applied
@param y The y position on the screen relative to the top left corner after the `GuiService/GuiInset|GuiInset` is applied
@returns A table of the visible `GuiObject|GuiObjects` that occupy the given screen space