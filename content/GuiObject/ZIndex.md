This property determines the order in which a [GUI](https://developer.roblox.com/api-reference/class/GuiObject) renders to the screen relative to other GUIs.

By default, GUIs render in ascending priority order where lower values are rendered first. As a result, GUIs with lower ZIndex values appear under higher values. You can change the render order by changing the value of `ScreenGui.ZIndexBehavior`.

The range of valid values is 1 to 999,999,999, inclusive. If you are unsure if you will need to layer an element between two already-existing elements in the future, it can be a good idea to use multiples of 100, i.e. 0, 100, 200. This ensures a large gap of ZIndex values you can use for elements rendered in-between other elements.

## See also

 -  [GuiObject.LayoutOrder](https://developer.roblox.com/api-reference/property/GuiObject/LayoutOrder), which controls the sort order of a GUI when used with a `UIGridStyleLayout` instead of render order.