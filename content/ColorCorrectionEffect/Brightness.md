Brightness determines by how much the colors of pixels will be shifted. This value works multiplicatively across many ColorCorrectionEffects' Brightnesses. A value of -1 will cause all pixels to be completely black, and a value of 1 will cause them to be white. By default, this value is 0 (no shift). Only values in the range [-1, 1] will produce a change. Values outside of this range have undefined behavior.

This property should be carefully tuned along with [ColorCorrectionEffect.Contrast](https://developer.roblox.com/api-reference/property/ColorCorrectionEffect/Contrast) to create the desired color adjustment.

## Examples

Brightness of 0 vs -0.5:

Brightness of 0 vs 0.5:

[1]: https://images.contentstack.io/v3/assets/bltc2ad39afa86662c8/bltc3deedcf50c436da/5b2db585fda2af4e7866ab7d/Brightness0.png

[2]: https://images.contentstack.io/v3/assets/bltc2ad39afa86662c8/blt324e99d2306fbe66/5b3fd07bd0af7f6e0ba49a5b/Brightness-0.5.png

[3]: https://images.contentstack.io/v3/assets/bltc2ad39afa86662c8/blt82ebfb4a8ad69539/5b3fd082d873a86d0baed76b/Brightness0.5.png