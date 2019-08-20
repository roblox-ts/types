The BodyGyro object applies a [torque][1] (or **rotational force**) on a `BasePart` such that it maintains a constant [angular displacement][2], or orientation. This allows for the creation of parts that point in a certain direction, as if a [real gyroscope][6] were acting upon it. It is the rotational counterpart to a `BodyPosition`. If you would like to maintain a constant [angular velocity][3], use a `BodyAngularVelocity` instead.

The [CFrame](https://developer.roblox.com/api-reference/property/BodyGyro/CFrame) property controls the goal orientation. Only the angular components of the [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) are used - position will make no difference. [MaxTorque](https://developer.roblox.com/api-reference/property/BodyGyro/MaxTorque) limits the amount of angular force that may be applied. [P](https://developer.roblox.com/api-reference/property/BodyGyro/P) controls the power used in achieving the goal orientation. Finally, [D](https://developer.roblox.com/api-reference/property/BodyGyro/D) controls dampening behavior.

## Setting the Orientation (CFrame)

Like all `CFrame`-type properties, the [BodyGyro.CFrame](https://developer.roblox.com/api-reference/property/BodyGyro/CFrame) property isn't editable in the Properties window in Studio. Since there's no physical component to a BodyGyro, you should use the Command bar or another scripting method to set the CFrame. A common technique used to set the goal orientation is to use a part's present orientation: simply set the [BodyGyro.CFrame](https://developer.roblox.com/api-reference/property/BodyGyro/CFrame) to the Part's [CFrame](https://developer.roblox.com/api-reference/property/BasePart/CFrame). For example:

`workspace.Part.BodyGyro.CFrame = workspace.Part.CFrame`

You can also use a CFrame constructor which initializes rotation, such as: `CFrame.fromAxisAngle`, `CFrame.fromEulerAnglesXYZ` or `CFrame.fromEulerAnglesYXZ`. Beware of [gimbal lock][7] as you decide on the method and angles (in radians). Additionally, you could use `CFrame.new(gyro.Parent.Position, targetPosition)` in order to have the BodyGyro "look at" a `targetPosition`.

## Troubleshooting

* If your part isn't moving at all, the assembly most likely has mass larger than what the BodyGyro can move. Try raising the [MaxTorque](https://developer.roblox.com/api-reference/property/BodyGyro/MaxTorque) and/or [P](https://developer.roblox.com/api-reference/property/BodyGyro/P) (power) properties. You should also check that no [Anchored](https://developer.roblox.com/api-reference/property/BasePart/Anchored) parts are within the assembly or in the way of the assembly.

* If your part isn't moving on all axes, double check the axis in question has sufficient [BodyGyro.MaxTorque](https://developer.roblox.com/api-reference/property/BodyGyro/MaxTorque). Alternatively, if the part allows movement on an axis and shouldn't, be sure the MaxTorque is nonzero on that axis and refine the manner in which you are setting the BodyGyro's [CFrame](https://developer.roblox.com/api-reference/property/BodyGyro/CFrame).

* If your part is moving too quickly, consider raising the [D](https://developer.roblox.com/api-reference/property/BodyGyro/D) (dampening) property.

* If your part is moving too slowly, consider lowering the [D](https://developer.roblox.com/api-reference/property/BodyGyro/D) (dampening) property. Also consider raising the [MaxTorque](https://developer.roblox.com/api-reference/property/BodyGyro/MaxTorque) and/or [P](https://developer.roblox.com/api-reference/property/BodyGyro/P) (power) properties.

[1]: https://en.wikipedia.org/wiki/Torque

[2]: https://en.wikipedia.org/wiki/Angular_displacement

[3]: https://en.wikipedia.org/wiki/Angular_velocity

[4]: https://en.wikipedia.org/wiki/Power_(physics)

[5]: https://en.wikipedia.org/wiki/Angular_frequency

[6]: https://www.youtube.com/watch?v=zbdrqpXb-fY

[7]: https://en.wikipedia.org/wiki/Gimbal_lock