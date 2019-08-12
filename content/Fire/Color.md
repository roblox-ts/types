The Color property determines the color of the larger particles emit by a `Fire` object. It is essentially the color of the outer portion of the flame. Below, you can see the Color of the flame is set to blue to differentiate with the smaller, inner particles which have [Fire.SecondaryColor](https://developer.roblox.com/api-reference/property/Fire/SecondaryColor) set to white.

![A Fire with Color set to blue][1]

In general, the cooler flames are on the outside of a fire. Therefore, fire looks more realistic if the outer portions are red or orange-yellow. A fire that is bright all throughout doesn't look very realistic, so avoid setting this property to yellow. Try adding a `PointLight` with the [PointLight.Color](https://developer.roblox.com/search#stq=Color) as a sibling to the `Fire`. This will provide light to the surrounding environment and make it feel more cohesive with the flame particles.

[1]: https://developer.roblox.com/assets/blt925890091ac70b39/Fire_Colors.png