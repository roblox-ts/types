A PointLight is a light source that emits illumination from a single point. Light is emitted spherically based on the [PointLight.Range](https://developer.roblox.com/api-reference/property/PointLight/Range) of the PointLight.

In order for a PointLight to provide illumination, it must be the direct child of a `BasePart` or `Attachment` (the part or attachment itself must be a descendant of the `Workspace`).

If a PointLight is parented to a part, then the light will emanate from the part’s [BasePart.Position](https://developer.roblox.com/api-reference/property/BasePart/Position). If a PointLight is parented to an attachment, then the light will emanate from the attachment’s [Attachment.WorldPosition](https://developer.roblox.com/api-reference/property/Attachment/WorldPosition).

For more light types, see the **see also** section.

See Also

----------

 - `SurfaceLight`

 - `SpotLight`