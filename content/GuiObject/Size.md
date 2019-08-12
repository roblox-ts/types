This property determines a [GUI's](https://developer.roblox.com/api-reference/class/GuiObject) scalar and pixel size using a `UDim2`. Its value can be expressed as `UDim2.new(ScalarX, PixelX, ScalarY, PixelY)` or `({ScalarX, PixelX}, {ScalarY, PixelY})`.

The scalar size is relative to the scalar size of parent GUI elements, if any. For example, if the GUI's scalar size is `UDim2.new(0.5, 0, 0.5, 0) and it is not the descendant of a GUI, then it will occupy half of the screen horizontally and vertically. However, if the GUI is the child of a GUI with a scalar size of `UDim2.new(0.5, 0, 0.5, 0), then the GUI's scalar size will render to be half the scalar size of its parent both horizontally and vertically and will occupy a quarter of the screen in both dimensions.

The pixel portions of the `UDim2` value are the same regardless of the parent GUI's size. The values represent the size of the object in pixels. For example, if Position is set to `{0, 100}, {0, 150}` the element will render with a width of 100 pixels and height of 150 pixels.

If the GUI has a parent, its size of each axis is also influenced by the parent's [GuiObject.SizeConstraint](https://developer.roblox.com/api-reference/property/GuiObject/SizeConstraint).

Although it is possible to use negative sizes when creating GUIs, it's more often better to manipulate [GuiObject.AnchorPoint](https://developer.roblox.com/api-reference/property/GuiObject/AnchorPoint) instead.

An object's actual pixel size can be read from the [GuiBase2d.AbsoluteSize](https://developer.roblox.com/api-reference/property/GuiBase2d/AbsoluteSize) property.