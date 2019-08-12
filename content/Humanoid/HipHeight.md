HipHeight determines the distance (in studs) off the ground the [Humanoid.RootPart](https://developer.roblox.com/api-reference/property/Humanoid/RootPart) should be when the Humanoid is standing. The [RigType](https://developer.roblox.com/api-reference/property/Humanoid/RigType) influences the way this property behaves:

## HipHeight for R15 Humanoids

With R15 rigs, a suitable HipHeight is preset to ensure the height of the [Humanoid.RootPart](https://developer.roblox.com/api-reference/property/Humanoid/RootPart) is correct. The height of the legs is not used. The overall height of the Humanoid can be described in the following formula:

```lua
RootPart.Size.Y) + HipHeight
```

## HipHeight for R6 Humanoids

For R6 rigs, the [RootPart's](https://developer.roblox.com/api-reference/property/Humanoid/RootPart) height is determined by the height of the character's legs and [Humanoid.RootPart](https://developer.roblox.com/api-reference/property/Humanoid/RootPart). HipHeight instead describes a relative offset. The overall height of the Humanoid can be described in the following formula:

```lua
RootPart.Size.Y) + HipHeight
```
