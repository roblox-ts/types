ColorCorrectionEffect is a post-processing effect that can be used to adjust several color-related properties at once: [Saturation](https://developer.roblox.com/api-reference/property/ColorCorrectionEffect/Saturation), [TintColor](https://developer.roblox.com/api-reference/property/ColorCorrectionEffect/TintColor), [Brightness](https://developer.roblox.com/api-reference/property/ColorCorrectionEffect/Brightness) and [Contrast](https://developer.roblox.com/api-reference/property/ColorCorrectionEffect/Contrast).  It is useful for fine-tuning the visual aesthetic of a world, or communicating status effects to the player such as flashing the world red upon taking damage, or going grayscale on character death. Like all `PostEffect` objects, objects of this kind should be parented to either the `Lighting` or the [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera) to work.

Multiple ColorCorrectionEffects can be applied at once, and they will compose their effects together. For example, if you use one with a yellow [TintColor](https://developer.roblox.com/api-reference/property/ColorCorrectionEffect/TintColor) and another with a blue tint, you will see green. Using more than one object can further strengthen the effects.

# Example

No ColorCorrectionEffect (original):

![No change](https://developer.roblox.com/assets/5b2db585fda2af4e7866ab7d/Brightness0.png)

Increased Saturation ([Saturation](https://developer.roblox.com/api-reference/property/ColorCorrectionEffect/Saturation) = 1):

![Increased saturation](https://developer.roblox.com/assets/5b2db361ca8406e05d89fa2e/ColorSaturated.png)

No Saturation ([Saturation](https://developer.roblox.com/api-reference/property/ColorCorrectionEffect/Saturation) = -1):

![No saturation](https://developer.roblox.com/assets/5b2db361cfc846f95726a8fc/Saturation-1.png)

Sepia (No saturation plus [TintColor](https://developer.roblox.com/api-reference/property/ColorCorrectionEffect/TintColor)):

![Sepia effect](https://developer.roblox.com/assets/5b2db3615928634658e3ce00/ColorSepia.png)