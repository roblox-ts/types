The distance, in studs, the `Beam`s display is offset by relative to the [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera).

When ZOffset is 0, the `Beam` will be displayed in its standard position between [Beam.Attachment0](https://developer.roblox.com/api-reference/property/Beam/Attachment0) and [Beam.Attachment1](https://developer.roblox.com/api-reference/property/Beam/Attachment1). ZOffset can be both positive and negative.

This property can be particularly useful when using multiple [Beams](https://developer.roblox.com/api-reference/class/Beam) between the same `Attachment`s. Here, ZOffset can be used to layer the `Beam`s and avoid [Z-fighting][1]. For example:

See the image below for a visual demonstration of ZOffset:

![ZOffset][2]

[1]: https://en.wikipedia.org/wiki/Z-fighting

[2]: https://developer.roblox.com/assets/blta08e9828cbe14d33/ZOffset.gif