The DeviceAccelerationChanged event fires when a user moves a device that has an accelerometer.

An accelerometer is a component found in most mobile devices that measures acceleration (change in speed).

To determine whether a user's device has an accelerometer enabled, see[UserInputService.AccelerometerEnabled](https://developer.roblox.com/api-reference/property/UserInputService/AccelerometerEnabled).

This event can be used to track the movement of a device that has an accelerometer. A sample usage includes moving the player character when a mobile device accelerates.

Additionally, this event can be used along with [UserInputService.GetDeviceAcceleration](https://developer.roblox.com/api-reference/function/UserInputService/GetDeviceAcceleration) to determine the current movement of a user's device if the device has an accelerometer.

This event only fires locally - which means that only the player whose device moves can use the event and it will only work in a `LocalScript`.