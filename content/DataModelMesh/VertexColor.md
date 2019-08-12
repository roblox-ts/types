Changes the hue of the mesh's texture.

Note this property is only functional when a texture has been applied to the mesh. For this reason it only works with the `SpecialMesh` object as it includes the [SpecialMesh.TextureId](https://developer.roblox.com/search#stq=TextureId) property.

## How to use VertexColor

See below for a visual example of the impact of VertexColor on a mesh's texture.

![enter image description here][1]

Note this property uses the `Vector3` rather than the `Color3` data type. Therefore developers will generally need to convert the `Color3` rgb components to the `Vector3 xyz components. See below for a brief example.

```lua
local yellow = BrickColor.new("Bright yellow")
local yColor = yellow.Color
local yVector = Vector3.new(yColor.r,yColor.g,yColor.b)
workspace.Baseplate.Mesh.VertexColor = yVector
```

## Alternative to VertexColor

Although VertexColor can be used to make changes to the appearance of a Mesh's texture much more flexibility is offered by uploading a new texture for the mesh. For more information on textures, see the page for `MeshPart`s.

[1]: https://developer.roblox.com/assets/blt554914f560c80848/VertexColor_-_Copy.gif