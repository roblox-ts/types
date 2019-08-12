The default Roblox [camera scripts][1] have several built in behaviors. Setting the CameraType of a player's `Camera` will toggle between these behaviors. Note some CameraType's require a valid [Camera.CameraSubject](https://developer.roblox.com/api-reference/property/Camera/CameraSubject) to work correctly.

 - Fixed: `Camera` is stationary

 - Follow: `Camera` moves with the [Camera.CameraSubject](https://developer.roblox.com/api-reference/property/Camera/CameraSubject) and rotates to keep the subject in the center of view

 - Attach: `Camera` moves with the [Camera.CameraSubject](https://developer.roblox.com/api-reference/property/Camera/CameraSubject) at a fixed offset and will rotate as the subject rotates

 - Track: `Camera` moves with the [Camera.CameraSubject](https://developer.roblox.com/api-reference/property/Camera/CameraSubject) but does not rotate automatically

 - Watch: `Camera` is stationary but will rotate to keep the [Camera.CameraSubject](https://developer.roblox.com/api-reference/property/Camera/CameraSubject) in the center of view

 - Custom: Default

 - Scriptable: No default behavior. Used by developers to script custom behavior

The above only applies when you use the default Roblox [camera scripts][1]. If you write your own camera scripts, you can choose to listen to CameraType and implement your own behaviors or ignore the property entirely.

## Manually controlling the Camera

In some cases you may wish to manually control the `Camera` (for example during a cut-scene). The best way to do this is by setting the CameraType to *'Scriptable'*. The default [camera scripts][1] will not move or update the `Camera` on its own if CameraType is set to *’Scriptable’*. This means you can freely modify the `Camera` using its properties and functions. For more information on positioning and orientating the `Camera` manually see the [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) page.

If you want complete control over the camera at all times, you may replace the default [camera scripts][1] with your own.

[1]: http://robloxdev.com/articles/Movement-and-camera-controls