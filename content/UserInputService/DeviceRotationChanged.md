The DeviceRotationChanged event fires when a user rotates a device that has a gyroscope.

A gyroscope is an component found in most mobile devices that detects orientation and rotational speed.

The event is useful when tracking the orientation of the device and how changes as the user rotates their device. To determine the current device rotation, you can use the [UserInputService.GetDeviceRotation](https://developer.roblox.com/api-reference/function/UserInputService/GetDeviceRotation) function.

To check if a user's device has an enabled gyroscope, and that this event will fire, see [UserInputService.GyroscopeEnabled](https://developer.roblox.com/api-reference/property/UserInputService/GyroscopeEnabled).

This event only fires when the Roblox client window is in focus. For example, inputs will not be captured when the window is minimized.