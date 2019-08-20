The **MeshId** is the content ID of the mesh that is to be displayed on the `MeshPart`.

Note that this property currently cannot be changed by scripts as the collision model of the mesh cannot be recomputed during runtime. Developers should not rely on this behavior as it may change in the future. Those looking for a custom mesh object that can be updated during runtime should use `SpecialMesh`.