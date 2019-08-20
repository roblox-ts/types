Computes the [DataType.Vector2](https://developer.roblox.com/search#stq=Vector2) dimensions (in pixels) that will be taken up with text when using the specified formatting parameters and size constraints.

Note, the fontSize parameter will not accept the [Enum.FontSize](https://developer.roblox.com/search#stq=FontSize) Enum. Instead the integer size corresponding with the [Enum.FontSize](https://developer.roblox.com/search#stq=FontSize) Enum should be used. This is not equal to the value of the [Enum.FontSize](https://developer.roblox.com/search#stq=FontSize) Enum. For example, for *Size11* font, the integer *11* should be used.

This function is a useful alternative to the [TextLabel.TextBounds](https://developer.roblox.com/api-reference/property/TextLabel/TextBounds) property of the `TextLabel` and `TextButton` objects. Using the [TextLabel.TextBounds](https://developer.roblox.com/api-reference/property/TextLabel/TextBounds) property to calculate the dimensions text requires is often impractical as it requires a `TextLabel` object to be created.

With GetTextSize, the dimensions required by a particular text string in a particular `TextLabel` or `TextButton` can be calculated before any object is created or text property set.

Developers are recommended to add a pixel of padding to the result to ensure no text is cut off.
@param string The string for which the text size is to be calculated.
@param fontSize The integer representing the font size used.
@param font The font used.
@param frameSize The `TextLabel/AbsoluteSize` of the text object to be used. Required to compute how the text will wrap.
@returns The size of the space required, in pixels, by the string with the specified formatting.