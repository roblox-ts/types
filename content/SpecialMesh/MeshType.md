The mesh that the  `SpecialMesh`object applies to the `BasePart` depends on the MeshType property. A number of options are available.

 - **Brick** - A block shape, equivalent to a `BlockMesh`

 - **Cylinder** - A cylinder, identical to a `Part` with a [Part.Shape](https://developer.roblox.com/api-reference/property/Part/Shape) of 'Cylinder'

 - **FileMesh** - A user uploaded Mesh, equivalent to `FileMesh` that a texture can be applied to using the [FileMesh.TextureId](https://developer.roblox.com/api-reference/property/FileMesh/TextureId) property

 - **Head** - A character head shape

 - **Sphere** - A sphere shape, similar to a `Part` with a [Part.Shape](https://developer.roblox.com/api-reference/property/Part/Shape) of 'Ball' but can be freely resized on all axis

 - **Wedge** - A wedge shape, identical to a `WedgePart`

 - **Torso** - A block with sloped sides, due to be deprecated

Note, each MeshType will scale differently when using [DataModelMesh.Scale](https://developer.roblox.com/api-reference/property/DataModelMesh/Scale), for more information on this please see the page on [DataModelMesh.Scale](https://developer.roblox.com/api-reference/property/DataModelMesh/Scale).