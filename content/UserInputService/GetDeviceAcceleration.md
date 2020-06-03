The GetDeviceAcceleration function determines the current acceleration of the user's device. It returns an `InputObject` that describes the device's current acceleration.

In order for this to work, the user's device must have an enabled accelerometer. To check if a user's device has an enabled accelerometer, you can check the [UserInputService.AccelerometerEnabled](https://developer.roblox.com/api-reference/property/UserInputService/AccelerometerEnabled) property.

If you want to track when the user's device's acceleration changes instead, you can use the [UserInputService.DeviceAccelerationChanged](https://developer.roblox.com/api-reference/event/UserInputService/DeviceAccelerationChanged) event.

Since it only fires locally, it can only be used in a `LocalScript`.
@returns An InputObject that describes the device's current acceleration.