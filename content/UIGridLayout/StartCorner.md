StartCorner ([Enum.StartCorner](https://developer.roblox.com/search#stq=StartCorner)) determines from which corner the grid starts laying out UI elements. The grid continues in the [UIGridStyleLayout.FillDirection](https://developer.roblox.com/api-reference/property/UIGridStyleLayout/FillDirection), filling elements one by one until [UIGridLayout.FIllDirectionMaxCells](https://developer.roblox.com/search#stq=FIllDirectionMaxCells) cells have been laid out in that row/column or if all the parent UI element's space has been occupied by previous cells.

![UIGridLayout with a StartCorner of BottomRight][1]

Above, the potion is the first `ImageLabel`, followed by the gem and the sword. The UIGridLayout is using a [Enum.StartCorner](https://developer.roblox.com/search#stq=StartCorner) of BottomRight. The [UIGridStyleLayout.FillDirection](https://developer.roblox.com/api-reference/property/UIGridStyleLayout/FillDirection) is Horizontal.

[1]: https://developer.roblox.com/assets/bltb27258f9e16b81e2/UIGridLayout_StartCorner.png