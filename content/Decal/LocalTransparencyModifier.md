Acts as a multiplier for the `Decal`'s [Decal.Transparency](https://developer.roblox.com/api-reference/property/Decal/Transparency) property. The effects are only visible to the [Players.LocalPlayer](https://developer.roblox.com/api-reference/property/Players/LocalPlayer).

This property should be used in situations where [Decal.Transparency](https://developer.roblox.com/api-reference/property/Decal/Transparency) is being set by a different script. The benefit of LocalTransparencyModifier is that it can be changed without concern for the original [Decal.Transparency](https://developer.roblox.com/api-reference/property/Decal/Transparency) of the `Decal`

When LocalTransparencyModifier is set to 1, the `Decal` will be completely invisible regardless of its original transparency. When it is set to 0, the `Decal`s rendered transparency will match the [Decal.Transparency](https://developer.roblox.com/api-reference/property/Decal/Transparency) value. The formula for this is:

```lua
LocalTransparencyModifier)
```

Note, this property should be used on the client only and will not replicate to the server.

For a variant of this property for `BasePart`s, see [BasePart.LocalTransparencyModifier](https://developer.roblox.com/api-reference/property/BasePart/LocalTransparencyModifier).
	
Acts as a multiplier for the `Decal`'s [Decal.Transparency](https://developer.roblox.com/api-reference/property/Decal/Transparency) property. The effects are only visible to the [Players.LocalPlayer](https://developer.roblox.com/api-reference/property/Players/LocalPlayer).

This property should be used in situations where [Decal.Transparency](https://developer.roblox.com/api-reference/property/Decal/Transparency) is being set by a different script. The benefit of LocalTransparencyModifier is that it can be changed without concern for the original [Decal.Transparency](https://developer.roblox.com/api-reference/property/Decal/Transparency) of the `Decal`

When LocalTransparencyModifier is set to 1, the `Decal` will be completely invisible regardless of its original transparency. When it is set to 0, the `Decal`s rendered transparency will match the [Decal.Transparency](https://developer.roblox.com/api-reference/property/Decal/Transparency) value. The formula for this is:

```lua
LocalTransparencyModifier)
```

Note, this property should be used on the client only and will not replicate to the server.

For a variant of this property for `BasePart`s, see [BasePart.LocalTransparencyModifier](https://developer.roblox.com/api-reference/property/BasePart/LocalTransparencyModifier).

Tags: Hidden, NotReplicated