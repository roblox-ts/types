Determines the degree to which the `Beam` is influenced by the environment's lighting.

LightInfluence is clamped between 0 and 1. When LightInfluence is 0, the `Beam` will be unaffected by the environment's lighting. When LightInfluence is 1 however, it will be fully affected by lighting (as a `BasePart` would be).

For an example of this, and a demonstration of how this property interacts with [Beam.LightEmission](https://developer.roblox.com/api-reference/property/Beam/LightEmission), please see the images below.

![enter image description here][1]

![enter image description here][2]

[1]: https://developer.roblox.com/assets/blt58bbd58122916e57/BeamLight1.png

[2]: https://developer.roblox.com/assets/blt1d1d4b30144114c3/BeamLight2.png