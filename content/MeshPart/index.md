MeshParts are a form of `BasePart` that includes a physically simulated custom mesh. Unlike with other mesh classes, such as `SpecialMesh` and `BlockMesh`, they are not parented to a `BasePart` but rather behave as a `BasePart` in their own right.

## How do I use MeshParts

The mesh and texture of a MeshPart are determined by the [MeshPart.MeshId](https://developer.roblox.com/api-reference/property/MeshPart/MeshId) and [MeshPart.TextureID](https://developer.roblox.com/api-reference/property/MeshPart/TextureID) properties. For more information on how to use MeshParts please see [here](https://developer.roblox.com/search#stq=Mesh%20Parts).

## SpecialMesh or MeshPart?

There are currently two ways of using a developer created mesh. They are using a `SpecialMesh` with the [SpecialMesh.FileType](https://developer.roblox.com/search#stq=FileType) set to 'FileMesh', or by using a MeshPart. Although, on the whole, the MeshPart object has superseded the SpecialMesh there are some differences developers should be aware of.

 - [BasePart.Material](https://developer.roblox.com/api-reference/property/BasePart/Material) displays correctly on the mesh when using a MeshPart and not when using a `SpecialMesh`

 - MeshParts include the [MeshPart.CollisionFidelity](https://developer.roblox.com/search#stq=CollisionFidelity) property, meaning the collision model of a MeshPart can be set to resemble the geometry of the mesh. The `SpecialMesh` object by contrast, uses the parent `BasePart`s collision model

 - The mesh of a MeshPart scales on all axis depending on the [BasePart.Size](https://developer.roblox.com/api-reference/property/BasePart/Size) property of the MeshPart, the mesh of a `SpecialMesh` does not

 - The `SpecialMesh` object includes the [DataModelMesh.Offset](https://developer.roblox.com/api-reference/property/DataModelMesh/Offset) and [DataModelMesh.Scale](https://developer.roblox.com/api-reference/property/DataModelMesh/Scale) properties whereas MeshParts do not

 - The [DataModelMesh.MeshId](https://developer.roblox.com/search#stq=MeshId) property of a `SpecialMesh` can be changed by a `Script` or `LocalScript` during runtime. The [MeshPart.MeshId](https://developer.roblox.com/api-reference/property/MeshPart/MeshId) property of a MeshPart can not

In most, but not all cases, using a MeshPart is more suitable. As MeshParts are a relatively new feature however, developers should expect some of the above behaviour to change.

[1]: https://developer.roblox.com/articles/Mesh-Parts