Determines whether the [Beam.Segments](https://developer.roblox.com/api-reference/property/Beam/Segments) of the `Beam` will always face the [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera) regardless of its orientation.

A `Beam` has no depth, and is hence a two dimensional projection existing in three dimensional space. This means that, by default, a `Beam` is not visible from every angle.

When FaceCamera is set to true, the `Beam` will always be orientated towards the [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera).