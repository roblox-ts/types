This property determines a [GUI's](https://developer.roblox.com/api-reference/class/GuiObject) pixel and scalar size using a `UDim2`. Its value can be expressed as `UDim2.new(ScalarX, PixelX, ScalarY, PixelY)` or `({ScalarX, PixelX}, {ScalarY, PixelY})`. Position is centered around a GUI's [GuiObject.AnchorPoint](https://developer.roblox.com/api-reference/property/GuiObject/AnchorPoint).

An element’s position can also be set by modifying both its scalar and pixel positions at the same time. For instance, tits position can be set to `({0.25, 100}, {0.25, 100})`.

The scalar size is relative to the scalar size of parent GUI elements, if any. For example, if AnchorPoint is set to `{0, 0}{0, 0}`  and Position is set to `{0, 0}, {0, 0}`, the element will render at the top left corner of the parent element. Similarly, if AnchorPoint is set to `{0, 0}{0, 0}` and Position is set to `{0.5, 0}, {0.5, 0}`, the top left corner of the element will render at the center of the parent element.

The pixel portions of the `UDim2` value are the same regardless of the parent GUI's size. The values represent the position of the object in pixels. For example, if set to `{0, 100}, {0, 150}` the element's AnchorPoint will render with on the screen 100 pixels from the left and 150 pixels from the top.

An object's actual pixel position can be read from the [GuiBase2d.AbsolutePosition](https://developer.roblox.com/api-reference/property/GuiBase2d/AbsolutePosition) property.