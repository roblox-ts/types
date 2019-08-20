The content ID of the image used as the `Mouse`'s icon.

The size of the mouse's icon is dependent on the dimensions of the image used, and the center of the image should be the mouse's tip. The default mouse image is 64x64 pixels, with the mouse taking up 17x24 pixels of space. Developers can consult the default images which are stored in the following directory:

*AppData/Local/Roblox/Versions/[version]/content/textures*

Although the icon can be set to a transparent image to hide the mouse, the preferred method of doing this is using [UserInputService.MouseIconEnabled](https://developer.roblox.com/api-reference/property/UserInputService/MouseIconEnabled).

Note, this property is overridden when the mouse is hovering over a `GuiButton`.

For more information on how to change the mouse's icon, please see [this tutorial](https://developer.roblox.com/search#stq=Mouse%20Icon%20Appearance).