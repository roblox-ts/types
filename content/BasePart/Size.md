The Size property determines the dimensions of a part. The individual dimensions can go as low as 0.05 and as high as 2048 (or 2^11). The size of the part is used in determining its mass, which is given by [BasePart.GetMass](https://developer.roblox.com/api-reference/function/BasePart/GetMass). The [BasePart.Shape](https://developer.roblox.com/search#stq=Shape) of a part can apply some restrictions on Size - namely, a Ball must have the same 3 dimensions. A part's Size is used by a variety of other objects:

  - `/ParticleEmitter` uses Size to determine the area from which particles are spawned.

  - `/BlockMesh` uses Size to partially determine the rendered rectangular prism.

  - `/SpecialMesh` uses Size for some certain [SpecialMesh.MeshType](https://developer.roblox.com/api-reference/property/SpecialMesh/MeshType)s to determine the size of the rendered mesh.

  - `/SurfaceLight` uses Size to determine the space to illuminate.