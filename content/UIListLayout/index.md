A UIListLayout lays out sibling UI elements in a single row within the parent UI element, either horizontally or vertically. Each sibling UI element retains its original [GuiObject.Size](https://developer.roblox.com/api-reference/property/GuiObject/Size), but its [GuiObject.Position](https://developer.roblox.com/api-reference/property/GuiObject/Position) will be taken under control by the UIListLayout. While under control, the Position property of sibling UI elements will not be editable in the Properties window.

By default, it lays out elements from top to bottom in **alphabetical** order, but this can be changed to use elements' [GuiObject.LayoutOrder](https://developer.roblox.com/api-reference/property/GuiObject/LayoutOrder) by changing [UIListLayout.SortOrder](https://developer.roblox.com/search#stq=SortOrder) to LayoutOrder. A UIListLayout will automatically re-layout elements when elements are added/removed, or if a relevant property changes: [GuiObject.LayoutOrder](https://developer.roblox.com/api-reference/property/GuiObject/LayoutOrder), [Instance.Name](https://developer.roblox.com/api-reference/property/Instance/Name) or [GuiObject.Size](https://developer.roblox.com/api-reference/property/GuiObject/Size). This can be triggered manually by calling [UIGridStyleLayout.ApplyLayout](https://developer.roblox.com/api-reference/function/UIGridStyleLayout/ApplyLayout), though this is typically not necessary.

Since each property that changes how elements are laid out will re-apply the layout, it's recommended to set the [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) property last so that the layout is only applied once. Similarly, since adding more UI elements will also re-apply the layout, add the UIListLayout last so it doesn't recalculate positions after each element.

This class is perhaps the simplest of all `UIGridStyleLayout` classes. It saves time by skipping the step of setting each UI element's Position. In the simplest case, laying out UI elements in a column can be as simple as a single line of code:

```lua
Instance.new("UIListLayout", guiObject).SortOrder = Enum.SortOrder.Layout
```

The above line is a useful shorthand when adding a single object to a parent and setting one property. For multiple properties, use a variable:

```lua
local uiListLayout = Instance.new("UIListLayout")
uiListLayout.SortOrder = Enum.SortOrder.Layout
uiListLayout.FillDirection = Enum.FillDirection.Horizontal
uiListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Right
uiListLayout.Parent = guiObject -- Do this last!
```
