Sets whether the translation of the `PrismaticConstraint` is actuated and, if so, what kind of actuation.

If ActuatorType is set to **None**, then the joint can slide freely:

![None][1]

If ActuatorType is set to **Motor**, then the PrismaticConstraint will attempt to move its `Attachment` at a constant velocity specified by [SlidingBallConstraint.Velocity](https://developer.roblox.com/api-reference/property/SlidingBallConstraint/Velocity). The PrismaticConstraint will apply a force up to [SlidingBallConstraint.MotorMaxForce](https://developer.roblox.com/api-reference/property/SlidingBallConstraint/MotorMaxForce) to achieve the desired velocity but will be limited by [SlidingBallConstraint.MotorMaxAcceleration](https://developer.roblox.com/api-reference/property/SlidingBallConstraint/MotorMaxAcceleration).

If ActuatorType is set to **Servo**, then the PrismaticConstraint will attempt to move its Attachments to an offset specified by [SlidingBallConstraint.TargetPosition](https://developer.roblox.com/api-reference/property/SlidingBallConstraint/TargetPosition). The PrismaticConstraint will attempt to translate towards that goal at a target speed set by [SlidingBallConstraint.Speed](https://developer.roblox.com/api-reference/property/SlidingBallConstraint/Speed). The maximum force the PrismaticConstraint is allowed to use to meet these goals is set by [SlidingBallConstraint.ServoMaxForce](https://developer.roblox.com/api-reference/property/SlidingBallConstraint/ServoMaxForce).

[1]: https://developer.roblox.com/assets/5b61fe15b0a0fd683d298842/SlidingBallConstraintNone.gif