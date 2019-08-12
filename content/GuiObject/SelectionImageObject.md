This property overrides the default selection adornment (used for gamepads). For best results, this should point to a [GUI](https://developer.roblox.com/api-reference/class/GuiObject).

Note that the SelectionImageObject overlays the selected GUI with the [GuiObject.Size](https://developer.roblox.com/api-reference/property/GuiObject/Size) of the image. For best results when using a non-default SelectionImageObject, you should size the SelectionImageObject via the scale [DataType.UDim2](https://developer.roblox.com/search#stq=UDim2) values. This helps ensure that the object scales properly over the selected element.

The default SelectionImageObject is a blue and white square outline around the selected GUI element. In the image below, the selected GUI is a white `Frame`.

![Default SelectionImageObject][1]

For instance, changing the SelectionImageObject to a `ImageLabel` with red and white square outline [image][2], [GuiObject.BackgroundTransparency](https://developer.roblox.com/api-reference/property/GuiObject/BackgroundTransparency) of 1,  [GuiObject.Size](https://developer.roblox.com/api-reference/property/GuiObject/Size) of *UDim2(1.1, 0, 1.1, 0)*, and [GuiObject.Position](https://developer.roblox.com/api-reference/property/GuiObject/Position) of *UDim2(-0.05, 0, -0.05, 0)* results in the image below:

![Custom SelectionImageObject][3]

Changing the SelectionImageObject for a GUI element only affects that element. To change the SelectionImageObject for all of a user's GUI elements, you can set the [PlayerGui.SelectionImageObject](https://developer.roblox.com/api-reference/property/PlayerGui/SelectionImageObject) property.

To determine or set which GUI element is selected by the user, you can use the [GuiService.SelectedObject](https://developer.roblox.com/api-reference/property/GuiService/SelectedObject) property. The user uses the gamepad to select different GUI elements, invoking the [GuiObject.NextSelectionUp](https://developer.roblox.com/api-reference/property/GuiObject/NextSelectionUp), [GuiObject.NextSelectionDown](https://developer.roblox.com/api-reference/property/GuiObject/NextSelectionDown), [GuiObject.NextSelectionLeft](https://developer.roblox.com/api-reference/property/GuiObject/NextSelectionLeft), and [GuiObject.NextSelectionRight](https://developer.roblox.com/api-reference/property/GuiObject/NextSelectionRight) events.

[1]: https://developer.roblox.com/assets/5b9b1d450b3d1789514ebdd7/Screen_Shot_2018-09-13_at_9.57.14_PM.png

[2]: https://www.roblox.com/library/2347505468/SelectionImage-Red

[3]: https://developer.roblox.com/assets/5b9b17dd1a346e537cf02152/Screen_Shot_2018-09-13_at_9.53.54_PM.png