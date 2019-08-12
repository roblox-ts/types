This property works in conjunction with the `GuiObject.Size|Size` property to determine the screen size of a GUI element.

The [Enum.SizeConstraint](https://developer.roblox.com/search#stq=SizeConstraint) enum will determine the axes that influence the scalar size of an object.

This property is useful for creating onscreen controls that are meant to scale with either the width or height of a parent object, but not both. This preserves the aspect ratio of the GUI element in question. For example, setting to RelativeYY with a Size of `{1, 0}, {1, 0}` will make the UI element square, with both the X and Y sizes equal to the parent element's Y size.