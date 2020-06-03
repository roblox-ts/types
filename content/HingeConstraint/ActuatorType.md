Sets whether the rotation of the HingeConstraint is actuated and, if so, what kind of actuation.

When ActuatorType is set to `None` then the hinge can swing freely:

![None][1]

When ActuatorType is set to `Motor` then the HingeConstraint will attempt to rotate at a constant velocity specified by [HingeConstraint.AngularVelocity](https://developer.roblox.com/api-reference/property/HingeConstraint/AngularVelocity). The HingeConstraint will apply a torque up to [HingeConstraint.MotorMaxTorque](https://developer.roblox.com/api-reference/property/HingeConstraint/MotorMaxTorque) to achieve the desired velocity but will be limited by [HingeConstraint.MotorMaxAcceleration](https://developer.roblox.com/api-reference/property/HingeConstraint/MotorMaxAcceleration).

![Motor][2]

When ActuatorType is set to `Servo` then the HingeConstraint will attempt to rotate to an angle specified by [HingeConstraint.TargetAngle](https://developer.roblox.com/api-reference/property/HingeConstraint/TargetAngle). The HingeConstraint will attempt to rotate towards that goal at a target speed set by [HingeConstraint.AngularSpeed](https://developer.roblox.com/api-reference/property/HingeConstraint/AngularSpeed). The maximum torque the HingeConstraint is allowed to use to meet these goals is set by [HingeConstraint.ServoMaxTorque](https://developer.roblox.com/api-reference/property/HingeConstraint/ServoMaxTorque).

![Servo][3]

[1]: https://developer.roblox.com/assets/5b61fa9274c0756340c86538/HingeConstraintNone.gif

[2]: https://developer.roblox.com/assets/5b61faca74c0756340c8653e/HingeConstraintMotor.gif

[3]: https://developer.roblox.com/assets/5b61fafccf5f5e183db66827/HingeConstraintServo.gif