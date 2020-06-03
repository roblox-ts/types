A `Trail`'s TextureMode property determines how the effect's [Trail.Texture](https://developer.roblox.com/api-reference/property/Trail/Texture) (if any) is drawn. The behavior of the texture in each mode is also very much dependent on the effect's [Trail.TextureLength](https://developer.roblox.com/api-reference/property/Trail/TextureLength) property. Note that changing an effect's TextureMode after some of the trail has been drawn will affect all of the previously drawn segments.

TextureMode defaults to *Stretch*

##Stretch

Stretch is the default TextureMode for Trails. In this mode the texture will be tiled a number of times equal to the number defined by TextureLength. It will stretch these tiles evenly to fit the entire length of the drawn trail. For example, if TextureLength is set to 4 then the texture will always repeat 4 times in the trail, no matter how long or short the trail is.

![Demonstrating a trail texture using the stretch mode.][1]

##Wrap

In the Wrap mode, the texture will start at the attachment points and will move as the attachments move. As soon as the attachments have moved a number of studs equal to the TextureLength, then the texture will repeat. The longer the trail is, the more times the texture will repeat.

![Demonstrating a trail texture using the wrap mode.][2]

##Static

In the Static mode, the texture will start at the initial position of the trail and will be drawn as the attachments move. Once the attachments move a number of studs equal to the TextureLength, then the texture will repeat.

![Demonstrating a trail texture using the static mode.][3]

[1]: https://developer.roblox.com/assets/5b3fe640cbdac88b0b7f2df2/TrailStretch.gif

[2]: https://developer.roblox.com/assets/5b3fe686b496a3810b47f28e/TrailWrap.gif

[3]: https://developer.roblox.com/assets/5b3fe6ad277066700b7c3b05/TrailStatic.gif