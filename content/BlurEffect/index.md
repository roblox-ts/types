BlurEffect will apply a [Gaussian blur](https://en.wikipedia.org/wiki/Gaussian_blur) to the image of the world rendered by Roblox. The strength of the blur is controlled by the [BlurEffect.Size](https://developer.roblox.com/api-reference/property/BlurEffect/Size). Only one BlurEffect can be applied at once — the BlurEffect with the greatest Size takes priority. Like other [post-processing effects](https://developer.roblox.com/api-reference/class/PostEffect), objects of this kind will only work when [Enabled](https://developer.roblox.com/api-reference/property/PostEffect/Enabled) and parented to the `Lighting` or [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera).

Note: on some low-end devices, BlurEffect may not render for performance. Keep this in mind when using this effect for mobile games.

## Example

[Size](https://developer.roblox.com/api-reference/property/BlurEffect/Size) = 0 (or no BlurEffect at all):

![No change](https://developer.roblox.com/assets/5b2db585fda2af4e7866ab7d/Brightness0.png)

[Size](https://developer.roblox.com/api-reference/property/BlurEffect/Size) = 10:

![BlurEffect with Size = 10](https://developer.roblox.com/assets/5b2db58568a9cd0a78be426b/Blur10.png)

[Size](https://developer.roblox.com/api-reference/property/BlurEffect/Size) = 50:

![BlurEffect applie with Size = 50](https://developer.roblox.com/assets/5b2db5855928634658e3ce06/Blur50.png)