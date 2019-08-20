The DeviceGravityChanged event fires when the device’s gravity [DataType.Vector3/vector](https://developer.roblox.com/search#stq=Vector3/vector) changes on a device that has an accelerometer.

A device’s gravity vector represent the force of gravity on each of the device’s X, Y, and Z axes. While gravity never changes, the force it exerts on each axis changes when the device rotates and changes orientation. The force value exerted on each axis is a unit vector ranging from -1 to 1.

An accelerometer is a component found in most mobile devices that measures acceleration (change in speed).

This event can be used to determine the real-world direction of the force of gravity on a user's device. This even can then be used to simulate the force of gravity on a user's device within the game, such as on in-game objects (see example below).

To check if a user's device has an enabled accelerometer, see [UserInputService.AccelerometerEnabled](https://developer.roblox.com/api-reference/property/UserInputService/AccelerometerEnabled). If the device has an enabled accelerometer, you can use the [UserInputService.GetDeviceGravity](https://developer.roblox.com/api-reference/function/UserInputService/GetDeviceGravity) function to get the current force of gravity on the user's device.