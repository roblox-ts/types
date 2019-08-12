A [DataType.Color3](https://developer.roblox.com/search#stq=Color3) value giving the hue of `Lighting`'s fog.

## How does fog work?

Fog in Roblox is displayed in a plane perpendicular to the [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera)s direction. It fades between the [Lighting.FogStart](https://developer.roblox.com/api-reference/property/Lighting/FogStart) property where it is not visible, to the [Lighting.FogEnd](https://developer.roblox.com/api-reference/property/Lighting/FogEnd) property where it is fully opaque. The effect of fog is it blends color with the FogColor.

At distances greater than [Lighting.FogEnd](https://developer.roblox.com/api-reference/property/Lighting/FogEnd), color will be determined entirely by the FogColor. However at distances between [Lighting.FogStart](https://developer.roblox.com/api-reference/property/Lighting/FogStart) and [Lighting.FogEnd](https://developer.roblox.com/api-reference/property/Lighting/FogEnd) the degree to which the color is blended depends on the position.

Roblox's fog uses linear interpolation between [Lighting.FogStart](https://developer.roblox.com/api-reference/property/Lighting/FogStart) and [Lighting.FogEnd](https://developer.roblox.com/api-reference/property/Lighting/FogEnd). This means if [Lighting.FogStart](https://developer.roblox.com/api-reference/property/Lighting/FogStart) is 10 and [Lighting.FogEnd](https://developer.roblox.com/api-reference/property/Lighting/FogEnd) is 20, at a distance of 15 studs the fog will be at 50%. That means the color of a pixel at 15 studs will be 50% its normal color blended with 50% of the fog color.

```lua
local Lighting = game:GetService("Lighting")
-- fog will fade between 25 and 200 studs
Lighting.FogStart = 25
Lighting.FogEnd = 200
```

Note, fog does not obscure the skybox.

For more information about fog please see this [blog post][1].

[1]: https://blog.roblox.com/2011/12/roblox-secrets-revealed-fog-blog/