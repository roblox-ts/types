This property controls the sorting order of a [GUI](https://developer.roblox.com/api-reference/class/GuiObject) when using a `UIGridStyleLayout` (such as `UIListLayout` or `UIPageLayout`) with [UIGridStyleLayout.SortOrder](https://developer.roblox.com/api-reference/property/UIGridStyleLayout/SortOrder) set to [Enum.SortOrder.LayoutOrder](https://developer.roblox.com/search#stq=SortOrder). It has no functionality if the GUI does not have a sibling UI Layout.

It is a signed 32-bit int, so it can be set to any value from -2,147,483,648 to 2,147,483,647 (inclusive). GUIs are placed in ascending order where lower values take more priority over, and are ordered before, higher values. Values that are equal will fall back to the order they were added in.

If you are unsure if you will need to add an element between two already-existing elements in the future, it can be a good idea to use multiples of 100, i.e. 0, 100, 200. This ensures a large gap of LayoutOrder values you can use for elements ordered in-between other elements.

## See also

 - [GuiObject.ZIndex](https://developer.roblox.com/api-reference/property/GuiObject/ZIndex), which determines the GUI render order instead of placement order.