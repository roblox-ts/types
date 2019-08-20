The Trail object is used to create a trail like an effect between two points. As the points move through space a texture is drawn on the plane the points define. This is commonly used to create effects to help visualize movements like tracer trails behind projectiles, footprints, tire tracks, and many other similar effects.

![A diagram explaining the Trail object.][1]

![An example usage of the Trail object.][2]

When a Trail is active it will record the position of it's [Trail.Attachment0](https://developer.roblox.com/api-reference/property/Trail/Attachment0) every frame. It then connects these positions to where the attachments were in the previous frame, creating a polygon. That polygon is then filled in with the Trail's [Trail.Color](https://developer.roblox.com/api-reference/property/Trail/Color) and [Trail.Texture](https://developer.roblox.com/api-reference/property/Trail/Texture) (if that Texture exists). Each segment drawn in this way will eventually fade based on the TrailEffect's [Trail.Lifetime](https://developer.roblox.com/api-reference/property/Trail/Lifetime).

# Creating Trails

In order for a Trail to work properly, it must be a descendant of the `Workspace` and its attachment properties ([Trail.Attachment0](https://developer.roblox.com/api-reference/property/Trail/Attachment0) and [Trail.Attachment1](https://developer.roblox.com/api-reference/property/Trail/Attachment1)) must be set to two unique Attachments. Once this has been done the effect will create a trail as soon as either of its attachments moves.

![Basic Trail][3]

It is common practice to either store the Trail in the `BasePart` containing the effect's attachments, or as a child of a `Folder` in the Workspace with other effects objects.

[1]: https://developer.roblox.com/assets/5b3c158168a9cd0a78be548e/TrailSegments2.png

[2]: https://developer.roblox.com/assets/5b3bf11cca8406e05d8a0c3d/Trail.gif

[3]: https://developer.roblox.com/assets/5b3bf0d568a9cd0a78be5462/BasicTrail.gif