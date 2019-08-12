SunRaysEffect is a post-processing effect which renders a halo of light around sun. The halo is shaped/blocked by world objects between the [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera) and the sun. It is helpful in simulating dust or fog in the air. Remember: subtlety is key. sun rays can become annoying to the eye if they are even slightly too strong. Like all `PostEffect` objects, objects of this kind should be parented to either the `Lighting` or the [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera) to work.

This object does not work on mobile devices for performance reasons. In Studio, the [EditQualityLevel](https://developer.roblox.com/api-reference/property/RenderSettings/EditQualityLevel) must be Level16 or higher in order for SunRaysEffect to render.

## Example

Pictured below is a SunRaysEffect in Crossroads. Notice how the tower blocks portions of the halo around the sun.

![SunRaysEffect in the Crossroads place](https://developer.roblox.com/assets/5b2db36179099e4b58a77443/Sunrays.jpg)