The BlockMesh object applies a 'brick' mesh to the `BasePart` it is parented to. It behaves identically to a `SpecialMesh` with [SpecialMesh.MeshType](https://developer.roblox.com/api-reference/property/SpecialMesh/MeshType) set to 'brick'.

## What does a BlockMesh do?

A BlockMesh gives the `BasePart` it was applied to a brick shaped mesh. It is identical in appearance to a standard Roblox `Part`.

The dimensions of the mesh will scale linearly in all directions with [BasePart.Size](https://developer.roblox.com/api-reference/property/BasePart/Size), this means a part containing a BlockMesh can be resized the same way as any other part.

The additional functionality a BlockMesh brings however, is the ability to set the [DataModelMesh.Scale](https://developer.roblox.com/api-reference/property/DataModelMesh/Scale) and [DataModelMesh.Offset](https://developer.roblox.com/api-reference/property/DataModelMesh/Offset) properties. These allow the position and dimensions of the mesh that is displayed to be changed without changing the [BasePart.Position](https://developer.roblox.com/api-reference/property/BasePart/Position) or [BasePart.Size](https://developer.roblox.com/api-reference/property/BasePart/Size) of the `BasePart` the mesh is parented to.

Note as the `BlockMesh` object does not include a texture the [DataModelMesh.VertexColor](https://developer.roblox.com/api-reference/property/DataModelMesh/VertexColor) property does not do anything.