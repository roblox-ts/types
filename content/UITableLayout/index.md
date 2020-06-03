A UITableLayout lays out sibling UI elements as rows in a table. Child UI elements (the table cells) of these rows are then arranged in columns (within rows). Each cell within a row has the same height, and each cell within a column has the same width. The hierarchy in the explorer should look like this (`Frame`s are yellow rows, `TextLabel`s are cells)

![Hierarchy of UI elements used with a UITableLayout][1]![UITableLayout result][2]

By changing the [UITableLayout.FillDirection](https://developer.roblox.com/search#stq=FillDirection), sibling UI elements can act as columns instead.

When applied, a UITableLayout will take control of sibling and cell elements' [GuiObject.Size](https://developer.roblox.com/api-reference/property/GuiObject/Size) and [GuiObject.Position](https://developer.roblox.com/api-reference/property/GuiObject/Position). Changing these in the Properties window is still possible will not produce any effect.

Dimensions of the cells in the resulting table are controlled by the parent UI element's dimensions. Unless [UITableLayout.FillEmptySpaceColumns](https://developer.roblox.com/api-reference/property/UITableLayout/FillEmptySpaceColumns) or [UITableLayout.FillEmptySpaceRows](https://developer.roblox.com/api-reference/property/UITableLayout/FillEmptySpaceRows) is enabled, the cell dimensions will be that of the parent UI element (and thus tables with more than one cell extend outside of their parent).

Cells will continue to respect `UISizeConstraint` objects within them. In other words, setting [UISizeConstraint.MinSize](https://developer.roblox.com/api-reference/property/UISizeConstraint/MinSize) on `UISizeConstraint`s within the header cells can determine the size of the rest of the cells. If [UISizeConstraint.MaxSize](https://developer.roblox.com/api-reference/property/UISizeConstraint/MaxSize) restricts a cell's size from filling the allotted space (i.e. another row/column is wider than it), it will align to the top-left.

[1]: https://developer.roblox.com/assets/bltad6d3e2ee82def82/UITableLayout_Hierarchy.png

[2]: https://images.contentstack.io/v3/assets/blt309cc8bfb280dcec/bltff6ce5d154eee764/5af89441d951a7d46014aa05/UITableLayout_Padding.png