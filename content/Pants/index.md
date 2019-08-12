The Pants object displays shirts on a character model. Pants are items of clothing that cover the legs and torso of the character based on a predefined texture uploaded to Roblox.

## How do Pants work?

Pants only have one property, [Pants.PantsTemplate](https://developer.roblox.com/api-reference/property/Pants/PantsTemplate). This is a content ID pointing to the pant's texture on the Roblox website.

A Pants object parented to a model will display the pants on the model provided a `Humanoid` is present and the limbs required for the pants corresponding with the humanoid's [Humanoid.RigType](https://developer.roblox.com/api-reference/property/Humanoid/RigType) exist.

Note if multiple Pants objects are present in a model only one will be shown. However both a `Shirt` and Pants object will be shown together with the shirt drawn on top (as pants also cover the torso).

Pants automatically load onto new characters spawning based on the [Player.CharacterAppearance](https://developer.roblox.com/api-reference/property/Player/CharacterAppearance) property.

## How do I make Pants?

In order to make a pants a texture (image) determining what will be displayed on what limbs needs to be uploaded to the Roblox website. For more information, please see [this tutorial][1].

[1]: https://developer.roblox.com/articles/How-to-Make-Shirts-and-Pants-for-Roblox-Characters