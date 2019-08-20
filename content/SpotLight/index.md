A SpotLight is a light source that emits illumination of a specified [Light.Color](https://developer.roblox.com/api-reference/property/Light/Color) and [Light.Brightness](https://developer.roblox.com/api-reference/property/Light/Brightness). It is emitted from a [SpotLight.Face](https://developer.roblox.com/api-reference/property/SpotLight/Face) in the shape of a spherical cone with an apex [SpotLight.Angle](https://developer.roblox.com/api-reference/property/SpotLight/Angle), and a radius [SpotLight.Range](https://developer.roblox.com/api-reference/property/SpotLight/Range).

In order for a spotlight to provide illumination, it must be the direct child of a `BasePart` or `Attachment` (the part or attachment itself must be a descendant of the Workspace). If a spotlight is parented to a part, then the light will emanate from the part’s [BasePart.Position](https://developer.roblox.com/api-reference/property/BasePart/Position).

The face of the spotlight will cause the light to emanate from the corresponding face on the part. If a spotlight is parented to an attachment, then the light will emanate from the attachment’s [Attachment.WorldPosition](https://developer.roblox.com/api-reference/property/Attachment/WorldPosition). Even though attachments don’t have faces, the face property of the spotlight will cause light to emanate along the x corresponding axis of the attachment (`-z` is front, `+x` is right, `+y` is top, etc).

This shows the dimensions of the ice cream cone-shaped spotlight:

For more light types, see the **see also** section.

See Also

----------

 - `SurfaceLight`

 - `PointLight`