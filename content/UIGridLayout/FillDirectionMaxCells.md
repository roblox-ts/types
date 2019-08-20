FillDirectionMaxCells determines the number of cells in the grid that can be used before continuing on the next row/column (whether this is a row or column is dependent on [UIGridStyleLayout.FillDirection](https://developer.roblox.com/api-reference/property/UIGridStyleLayout/FillDirection)). This value must be non-negative.

  - If set to zero, there is no maximum number of cells that may appear in one row/column except for how many can fit within the parent UI element.

  - If set to one, this creates a list similar to those created by `UIListLayout`.