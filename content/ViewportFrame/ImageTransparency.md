This property determines the transparency of the rendered image. It allows you to change the image transparency without directly modifying the rendered object. A value of 0 is completely opaque, and a value of 1 is completely transparent (invisible). The default transparency is 0.

This property behaves similarly to [GuiObject.BackgroundTransparency](https://developer.roblox.com/api-reference/property/GuiObject/BackgroundTransparency) or [BasePart.Transparency](https://developer.roblox.com/api-reference/property/BasePart/Transparency) except that it is applied to the rendered image.

The image below demonstrates the same ViewportFrame with two different transparency. The first image has a transparency of 0 and the second image has a transparency of 0.5.

![ViewportFrame with default 0 transparency][1]

![ViewportFrame with 0.5 transparencu][2]

### See also

  - [ViewportFrame-GUI](https://developer.roblox.com/search#stq=ViewportFrame%20GUI), an article exploring how the ViewportFrame GUI can render 3D objects inside its bounds

  - [ViewportFrame.ImageColor3](https://developer.roblox.com/api-reference/property/ViewportFrame/ImageColor3), determines how a rendered image will be colorized

  - [ViewportFrame.CurrentCamera](https://developer.roblox.com/api-reference/property/ViewportFrame/CurrentCamera), the `Camera` that is used to render children objects

[1]: https://developer.roblox.com/assets/5c5f7f26e2c86a6c4191b094/Screen_Shot_2019-02-09_at_8.03.48_PM.png

[2]: https://developer.roblox.com/assets/5c5f835fc7b669b24175ec32/Screen_Shot_2019-02-09_at_8.23.38_PM.png