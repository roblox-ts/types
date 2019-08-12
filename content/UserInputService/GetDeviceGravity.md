This function returns an `InputObject` describing the device's current gravity vector.

The gravity vector is determined by the device’s orientation relative to the real-world force of gravity. For instance, if a device is perfectly upright and vertical, the gravity vector would be [Vector3.new(0, 1, 0)](https://developer.roblox.com/search#stq=Vector3). Inverting the device so that it is perfectly upside-down and vertical would result in a gravity vector of Vector3.new(0, -1, 0).

This function might be used to enable the user’s device to impact or control gravity within the game or move in-game objects such as a ball.

Gravity is only tracked for players using a device with an enabled accelerometer - such as a mobile device.

To check if a user's device has an enabled accelerometer, check the value of [UserInputService.AccelerometerEnabled](https://developer.roblox.com/api-reference/property/UserInputService/AccelerometerEnabled). If the device has an enabled accelerometer, you can also use the [UserInputService.DeviceGravityChanged](https://developer.roblox.com/api-reference/event/UserInputService/DeviceGravityChanged) event to track when force of gravity on the user's device changes.

As `UserInputService` is client-side only, this function can only be used in a `LocalScript`.
@returns An `InputObject` that describes the device's current gravity vector