The Transparency property controls the visibility of a part on a scale of 0 to 1, where 0 is completely visible (opaque), and a value of 1 is completely invisible (not rendered at all).

[BasePart.Reflectance](https://developer.roblox.com/api-reference/property/BasePart/Reflectance) can reduce the overall transparency of a brick if set to a value close to 1.

While fully transparent parts are not rendered at all, partially transparent objects have some significant rendering costs. Having many translucent parts may slow down the game’s performance.

When transparent parts overlap, render order can act unpredictable - try to keep semi-transparent parts from overlapping to avoid this.

The [BasePart.LocalTransparencyModifier](https://developer.roblox.com/api-reference/property/BasePart/LocalTransparencyModifier) is a multiplier to Transparency that is only visible to the local client.