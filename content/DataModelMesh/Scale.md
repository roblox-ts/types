The Scale of a mesh determines the size of the mesh relative to its original dimensions.

## How to use mesh scale

The scale property works slightly differently depending on the type of mesh being used. Note the size of the `BasePart` remains unchanged, meaning the physics collision box of the part will remain the same.

 - `SpecialMesh` objects with [SpecialMesh.FileType](https://developer.roblox.com/search#stq=FileType) set to 'FileMesh' scale relative to the original dimensions of the mesh when it was uploaded to Roblox

 - `BlockMesh` objects or `SpecialMesh` objects with [SpecialMesh.FileType](https://developer.roblox.com/search#stq=FileType) set to 'Brick', 'Wedge' or 'Sphere' scale uniformly relative to the [BasePart.Size](https://developer.roblox.com/api-reference/property/BasePart/Size) of their parent

 - `CylinderMesh` objects or `SpecialMesh` objects with [SpecialMesh.FileType](https://developer.roblox.com/search#stq=FileType) set to 'Cylinder' scale relative to the [BasePart.Size](https://developer.roblox.com/api-reference/property/BasePart/Size) of their parent. Uniformly for the cylinders height axis and maintaining a 1:1 ratio for the length and width of the cylinder, using the lowest value.

 - `SpecialMesh` objects with [SpecialMesh.FileType](https://developer.roblox.com/search#stq=FileType) set to 'Head' currently scale in a non standard manner. Developers should not rely on this as their are plans to change this behavior

 - `SpecialMesh` objects with [SpecialMesh.FileType](https://developer.roblox.com/search#stq=FileType) set to 'Torso' scale in a non standard manner. Developers should not rely on this as their are plans to deprecate this mesh type.

## Mesh scale demonstration

The above behavior can be seen in the following demonstration images.

Linear scaling relative to part size for 'Brick', 'Wedge' and 'Sphere' meshes.

![enter image description here][1]

Linear scaling relative to original uploaded mesh for 'FileMesh' meshes

![enter image description here][2]

Non-uniform constrained scaling for 'Cylinder' meshes

![enter image description here][3]

## Other uses for mesh scale

There are a number of interesting uses for the mesh offset property.

 - [DataModelMesh.Offset](https://developer.roblox.com/api-reference/property/DataModelMesh/Offset) and Scale can be animated using `TweenService` relatively inexpensively as the engine does not need to make any physics/collision calculations as the `BasePart` is not changed.

 - Changing the relationship between the mesh and its collision extents (determined by the `BasePart`)

[1]: https://developer.roblox.com/assets/bltd4a34d2e19dc865c/Scale1.gif

[2]: https://developer.roblox.com/assets/blt3eff78f21fd4de1d/Scale2.gif

[3]: https://developer.roblox.com/assets/blt543d8e7d5ba8c404/Scale3.gif