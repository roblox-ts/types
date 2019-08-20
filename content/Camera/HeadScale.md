HeadScale is the scale of the user’s head when using VR.

The unit scale of Roblox, from the user's perspective in VR, is defined as follows:

*unitScale = HeadScale (in studs) / Feet ^ 2*

This means the larger the HeadScale value, the smaller the world will look from the user's perspective when using VR devices.

When not using VR, this property has no effect.

This property should not be confused with `Humanoid` HeadScale, which is a `NumberValue` parented to a `Humanoid` to control its scaling.

## See also

The following are also useful when developing for VR:

 - [Camera.HeadLocked](https://developer.roblox.com/api-reference/property/Camera/HeadLocked)

 - [Camera.GetRenderCFrame](https://developer.roblox.com/api-reference/function/Camera/GetRenderCFrame)