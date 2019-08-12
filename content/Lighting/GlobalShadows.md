Toggles voxel-based dynamic lighting in the game

## What does GlobalShadows do?

When set to true, shadows are rendered in sheltered areas depending on the position of the sun and moon. The lighting hue applied to these areas is determined by the [Lighting.Ambient](https://developer.roblox.com/api-reference/property/Lighting/Ambient) property. The lighting hue in all other areas is determined by the [Lighting.OutdoorAmbient](https://developer.roblox.com/api-reference/property/Lighting/OutdoorAmbient) property.

When disabled, shadows are not drawn and no distinction is made between indoor and outdoor areas. As a result, the [Lighting.Ambient](https://developer.roblox.com/api-reference/property/Lighting/Ambient) property determines the lighting hue and [Lighting.OutdoorAmbient](https://developer.roblox.com/api-reference/property/Lighting/OutdoorAmbient) will do nothing.

Shadows are calculated using a voxel system, and each lighting voxel is 4x4x4 studs. This means objects need to be larger than 4x4x4 studs to display a realistic shadow. Shadows are also recalculated when `BasePart`s are moving.

Note, this property is unrelated to shadows from characters which are displayed regardless of what GlobalShadows is set to.

For more information about Roblox's dynamic lighting, please see this [blog post][1].

## Toggling GlobalShadows

Developers toggling the GlobalShadows setting will notice that disabling it makes the place considerably darker. This is because when GlobalShadows is disabled [Lighting.Ambient](https://developer.roblox.com/api-reference/property/Lighting/Ambient) is used to calculate the lighting hue in both indoor and ourdoor spaces. This darkness can be resolved by setting [Lighting.Ambient](https://developer.roblox.com/api-reference/property/Lighting/Ambient) to a higher value such as [Lighting.OutdoorAmbient](https://developer.roblox.com/api-reference/property/Lighting/OutdoorAmbient)'s default value of 127, 127, 127.

In most cases developers are recommended to leave GlobalShadows enabled due to the superior visual appearance. See the image below for a comparison.

![enter image description here][2]

[1]: https://blog.roblox.com/2013/02/dynamic-lighting-and-shadows-the-voxel-solution/

[2]: https://developer.roblox.com/assets/blt23745970e2437872/GlobalShadows.png