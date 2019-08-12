The SpecialMesh is an object that allows developers to provide a standard template or user uploaded mesh to a `BasePart`.

## What does a SpecialMesh do?

The SpecialMesh object applies a mesh to a `BasePart` depending on the the [SpecialMesh.MeshType](https://developer.roblox.com/api-reference/property/SpecialMesh/MeshType) property. A number of options are available.

 - **Brick** - A block shape, equivalent to a `BlockMesh`

 - **Cylinder** - A cylinder, identical to a `Part` with a [Part.Shape](https://developer.roblox.com/api-reference/property/Part/Shape) of 'Cylinder'

 - **FileMesh** - A user uploaded Mesh, equivalent to `FileMesh` that a texture can be applied to using the [FileMesh.TextureId](https://developer.roblox.com/api-reference/property/FileMesh/TextureId) property

 - **Head** - A character head shape

 - **Sphere** - A sphere shape, similar to a `Part` with a [Part.Shape](https://developer.roblox.com/api-reference/property/Part/Shape) of 'Ball' but can be freely resized on all axis

 - **Wedge** - A wedge shape, identical to a `WedgePart`

 - **Torso** - A block with sloped sides, due to be deprecated

Note, each [SpecialMesh.MeshType](https://developer.roblox.com/api-reference/property/SpecialMesh/MeshType) will scale differently when using [DataModelMesh.Scale](https://developer.roblox.com/api-reference/property/DataModelMesh/Scale), for more information on this please see the page on [DataModelMesh.Scale](https://developer.roblox.com/api-reference/property/DataModelMesh/Scale). The SpecialMesh object also exposes the [DataModelMesh.Offset](https://developer.roblox.com/api-reference/property/DataModelMesh/Offset) property.

It is important to remember that when using a SpecialMesh, only the appearance of a part changes. The collision model of the part remains the same. For example, a character will not be able to walk correctly over a mesh as the mesh geometry is not taken into account.

## SpecialMesh or MeshPart?

There are currently two ways of using a developer created mesh. They are using a SpecialMesh with the [SpecialMesh.FileType](https://developer.roblox.com/search#stq=FileType) set to 'FileMesh', or by using a `MeshPart`. Although, on the whole, the `MeshPart` object has superseded the SpecialMesh there are some differences developers should be aware of.

 - [BasePart.Material](https://developer.roblox.com/api-reference/property/BasePart/Material) displays correctly on the mesh when using a `MeshPart` and not when using a SpecialMesh

 - `MeshPart`s include the [MeshPart.CollisionFidelity](https://developer.roblox.com/search#stq=CollisionFidelity) property, meaning the collision model of a `MeshPart` can be set to resemble the geometry of the mesh. The SpecialMesh object by contrast, uses the parent `BasePart`s collision model

 - The mesh of a `MeshPart` scales on all axis depending on the [Size](https://developer.roblox.com/api-reference/property/BasePart/Size) property of the `MeshPart`, the mesh of a SpecialMesh does not

 - The SpecialMesh object includes the [Offset](https://developer.roblox.com/api-reference/property/DataModelMesh/Offset) and [Scale](https://developer.roblox.com/api-reference/property/DataModelMesh/Scale) properties whereas `MeshPart`s do not

 - The [MeshId](https://developer.roblox.com/api-reference/property/FileMesh/MeshId) property of a `SpecialMesh` can be changed by a `Script` or `LocalScript` during runtime. The [MeshId](https://developer.roblox.com/api-reference/property/MeshPart/MeshId) property of a `MeshPart` can not.

In most, but not all cases, using a `MeshPart` is more suitable. As `MeshPart`s are a relatively new feature however, developers should expect some of the above behaviour to change.

## Uploading a custom mesh

Although a developer uploaded mesh can be used on a `SpecialMesh`, meshes can currently only be be uploaded using `MeshPart`s or the game explorer. For more information on how to do this please see [this tutorial](https://developer.roblox.com/search#stq=Mesh%20Parts).

[1]: https://developer.roblox.com/articles/Mesh-Parts