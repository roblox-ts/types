The `Camera` Focus is a [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) that determines the area in 3D space the graphics engine will prioritize.

Certain graphical operations Roblox performs, such as updating lighting, can take a lot of time or computational effort to complete. Focus tells Roblox the area in 3D space to prioritize when performing such operations. For example dynamic lighting from objects such as [PointLights](https://developer.roblox.com/api-reference/class/PointLight) may not render at distances far from the Focus.

The default Roblox [camera scripts][1] automatically set the Focus to follow the [Camera.CameraSubject](https://developer.roblox.com/api-reference/property/Camera/CameraSubject) (usually a `Humanoid`). However, Focus will not be automatically updated in the following cases:

 - When the [Camera.CameraType](https://developer.roblox.com/api-reference/property/Camera/CameraType) is set to *'Scriptable'*

 - When the default [camera scripts][1] are not being used

In these cases, you should update Focus every frame, using [RunService.BindToRenderStep](https://developer.roblox.com/api-reference/function/RunService/BindToRenderStep) function at the *'Camera'* [Enum.RenderPriority](https://developer.roblox.com/search#stq=RenderPriority).

Focus has no bearing on the positioning or orientation of the `Camera` (see [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) for this).

[1]: http://robloxdev.com/articles/Movement-and-camera-controls