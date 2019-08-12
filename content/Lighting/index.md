The Lighting service controls the environmental lighting in a game. It includes a range of adjustable properties that can be used to change how lighting appears and interacts with other objects.

Developers can change the color and appearance of lighting in their place using properties such as [Lighting.Ambient](https://developer.roblox.com/api-reference/property/Lighting/Ambient) and [Lighting.OutdoorAmbient](https://developer.roblox.com/api-reference/property/Lighting/OutdoorAmbient).

In addition to controlling environmental lighting, the Lighting service also configures any fog in the game using the [Lighting.FogColor](https://developer.roblox.com/api-reference/property/Lighting/FogColor), [Lighting.FogStart](https://developer.roblox.com/api-reference/property/Lighting/FogStart) and [Lighting.FogEnd](https://developer.roblox.com/api-reference/property/Lighting/FogEnd) properties.

Lighting, along with [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera), is one of the two places where `PostEffect`s such as the `SunRaysEffect` and `BlurEffect` are displayed once parented to.

## Notes

 - Lighting only controls environmental lighting and not dynamic light objects such as the `PointLight`

 - Prior to the introduction of `ServerStorage` and `ReplicatedStorage` lighting was used for storage. This behavior is not supported and should not be used in new work