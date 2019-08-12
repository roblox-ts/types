The BodyAngularVelocity object applies a [torque][1] (or **rotational force**) on a `BasePart` such that it maintains a constant [angular velocity][3] as determined by its [AngularVelocity](https://developer.roblox.com/api-reference/property/BodyAngularVelocity/AngularVelocity) property. This allows for the creation of parts that continually rotate. It is the rotational counterpart to a `BodyVelocity`. If you would like to maintain a constant [angular displacement][2], use a `BodyGyro` instead.

![An animation of a Part with a BodyAngularVelocity applied; there is a superimposed green line visualizing the AngularVelocity property](https://developer.roblox.com/assets/5b42688e811ef5800bf7c42f/BodyAngularVelocity.gif)

The [AngularVelocity](https://developer.roblox.com/api-reference/property/BodyAngularVelocity/AngularVelocity) property (visualized above as a green line) controls the goal angular velocity of the applied torque: the direction of the [DataType.Vector3](https://developer.roblox.com/search#stq=Vector3) is the axis which the part rotates around, and the magnitude is the speed in **radians/s**. The [MaxTorque](https://developer.roblox.com/api-reference/property/BodyAngularVelocity/MaxTorque) property controls the maximum amount of torque that can be applied to the object, while the [P](https://developer.roblox.com/api-reference/property/BodyAngularVelocity/P) property controls the amount of [power][4] used in applying the torque.

**Tip:** Regarding the [AngularVelocity](https://developer.roblox.com/api-reference/property/BodyAngularVelocity/AngularVelocity) property, you can multiply a [DataType.Vector3](https://developer.roblox.com/search#stq=Vector3) by `math.rad(360)`, or **2π**, in order to convert [angular frequency][5] (rotations per second) into the desired [angular velocity][3] (radians per second). For example: Setting [AngularVelocity](https://developer.roblox.com/api-reference/property/BodyAngularVelocity/AngularVelocity) to `Vector3.new(0, 1, 0) * math.rad(360)` ≈ `Vector3.new(0, 6.283, 0)` will cause a part to spin around the Y axis once per second.

![Diagram of each axes and the torque applied](https://developer.roblox.com/assets/5b2db3612d96e4e55d6238e0/AngularvelocitydiagramV2.png)

[1]: https://en.wikipedia.org/wiki/Torque

[2]: https://en.wikipedia.org/wiki/Angular_displacement

[3]: https://en.wikipedia.org/wiki/Angular_velocity

[4]: https://en.wikipedia.org/wiki/Power_(physics)

[5]: https://en.wikipedia.org/wiki/Angular_frequency