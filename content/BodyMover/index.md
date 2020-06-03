BodyMover is the abstract base class for the set of legacy objects that exert forces to `BasePart`s in different ways. In general, the subclasses of BodyMover can be placed into one of two categories based on the type of force(s) they exert:

## Translational Force

 -  `BodyForce`: Exert a force relative to world coordinates

 -  `BodyPosition`: Exert force to maintain a certain world position

 -  `BodyVelocity`: Exert force to maintain a certain velocity

## Rotational Force (Torque)

 -  `BodyThrust`: Exert a force relative to object coordinates, which applies torque if positioned in a certain way

 -  `BodyGyro`: Exert torque to maintain a certain orientation

 -  `BodyAngularVelocity`: Exert torque to maintain a certain angular velocity

An exception is the `RocketPropulsion` class, which exerts **both** translational and rotational forces to cause a part to track down another part.