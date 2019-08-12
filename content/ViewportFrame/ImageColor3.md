This property determines how a rendered image will be colorized. It allows you to change the image color without directly modifying the rendered object.The default colorization value is [DataType.Color3|Color3.new(1,1,1) (white). When set to white no colorization occurs.

It functions similarly to ](https://developer.roblox.com/search#stq=Color3|Color3.new(1,1,1)%20(white).%20When%20set%20to%20white%20no%20colorization%20occurs.%20%20It%20functions%20similarly%20to%20)ImageLabel/ImageColor3` and [Decal.Color3](https://developer.roblox.com/api-reference/property/Decal/Color3)except that it is applied to the rendered image.

The image below demonstrates the same ViewportFrame with two different colorizations. The first image has the default (white) colorization and the second image has a `Color3.new(255, 255, 102)` (yellow) colorization.

![ViewportFrame with the default white colorization][1]

![ViewportFrame with a yellow colorization][2]

### See also

  - [ViewportFrame-GUI](https://developer.roblox.com/search#stq=ViewportFrame%20GUI), an article exploring how the ViewportFrame GUI can render 3D objects inside its bounds

  - [ViewportFrame.ImageTransparency](https://developer.roblox.com/api-reference/property/ViewportFrame/ImageTransparency), determines the transparency of the rendered image

  - [ViewportFrame.CurrentCamera](https://developer.roblox.com/api-reference/property/ViewportFrame/CurrentCamera), the `Camera` that is used to render children objects

[1]: https://developer.roblox.com/assets/5c5f7f26e2c86a6c4191b094/Screen_Shot_2019-02-09_at_8.03.48_PM.png

[2]: https://developer.roblox.com/assets/5c5f7f3222bf52f7439e274e/Screen_Shot_2019-02-09_at_8.08.58_PM.png