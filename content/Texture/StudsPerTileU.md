Sets the horizontal size, in studs, of the tiled image applied by the `Texture`.

Larger values for this property will lead to the `Texture` appearing larger, and repeating less frequently. Unlike with `Decal`s, the size of the repeated image is unaffected by the dimensions of the `BasePart`. Instead, resizing the `BasePart` only increases the number of times the texture repeats.

See the code snippet below for an example of how this property can be used.

```lua
local texture = Instance.new("Texture")
texture.Texture = "http://www.roblox.com/asset/?id=732339893" -- roblox logo
-- 1x1 studs repeating texture
texture.StudsPerTileU = 1
texture.StudsPerTileV = 1
```

## Notes

 - This property can be set to very low values, but not zero

 - The horisontal / vertical distinction is relative to the `BasePart`s axis. Therefore, the `Texture` will rotate along with the `BasePart`.