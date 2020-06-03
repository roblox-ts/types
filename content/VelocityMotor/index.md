The VelocityMotor is a special type of joint that works similarly to a `Motor`, but it uses a `MotorFeature` and a `Hole` to create the connection.

In order for this object to work correctly:

* The VelocityMotor must be parented inside of a `MotorFeature`

* The `MotorFeature` needs to be parented inside of a `BasePart`

* A `Hole` needs to be parented inside of another `BasePart`

* The VelocityMotor's [VelocityMotor.Hole](https://developer.roblox.com/api-reference/property/VelocityMotor/Hole) property should be assigned to the hole you parented inside of the other part.