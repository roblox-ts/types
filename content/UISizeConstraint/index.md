The UISizeConstraint ensures a `GuiObject` does not become larger or smaller than the [UISizeConstraint.MaxSize](https://developer.roblox.com/api-reference/property/UISizeConstraint/MaxSize) and [UISizeConstraint.MinSize](https://developer.roblox.com/api-reference/property/UISizeConstraint/MinSize).

For example, if the MaxSize is set to `{200, 200}` and the MinSize is set to `{100, 100}`, then the constrained GuiObject cannot scale to be larger than 200 pixels wide and 200 pixels tall or smaller than 100 pixels wide and 100 pixels tall.

If the object with this constraint is also under the control of a `UILayout` such as `UIGridLayout`, then the constraint determines the objects size and overwrites any size the layout would apply.

A UISizeConstraint can be applied to a GuiObject by parenting it to that object.