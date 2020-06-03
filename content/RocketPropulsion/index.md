The RocketPropulsion object applies a force on a part so that it both **follows** and **faces** a target part. It acts like a hybrid of `BodyPosition` and `BodyGyro`. Unlike other `BodyMover`s, a RocketPropulsion must be instructed to begin applying a force: call [Fire](https://developer.roblox.com/api-reference/function/RocketPropulsion/Fire) to start, or call [Abort](https://developer.roblox.com/api-reference/function/RocketPropulsion/Abort) to stop.

Below is an animation of a blue `Part` with a RocketPropulsion. The [Target](https://developer.roblox.com/api-reference/property/RocketPropulsion/Target) is set to a tall red `Part` that is being dragged around in a circle in Studio. Notice how the blue part homes in to the target:

![A blue Part with a RocketPropulsion following a tall red Part that is being dragged around in Studio][1]

You can detect when the part reaches its target using the [ReachedTarget](https://developer.roblox.com/api-reference/event/RocketPropulsion/ReachedTarget) event, which fires once the part is within the [TargetRadius](https://developer.roblox.com/api-reference/property/RocketPropulsion/TargetRadius) of the [Target](https://developer.roblox.com/api-reference/property/RocketPropulsion/Target).

RocketPropulsion has the most physics-related properties out of all the BodyMovers. It is helpful to separate the properties out into categories based on what they control:

 -  **Goal:** [Target](https://developer.roblox.com/api-reference/property/RocketPropulsion/Target), [TargetOffset](https://developer.roblox.com/api-reference/property/RocketPropulsion/TargetOffset) and [TargetRadius](https://developer.roblox.com/api-reference/property/RocketPropulsion/TargetRadius)

 -  **Position (Thrust):** [MaxSpeed](https://developer.roblox.com/api-reference/property/RocketPropulsion/MaxSpeed), [MaxThrust](https://developer.roblox.com/api-reference/property/RocketPropulsion/MaxThrust), [ThrustD](https://developer.roblox.com/api-reference/property/RocketPropulsion/ThrustD) and [ThrustP](https://developer.roblox.com/api-reference/property/RocketPropulsion/ThrustP)

 -  **Rotation (Turn):**  -  [CartoonFactor](https://developer.roblox.com/api-reference/property/RocketPropulsion/CartoonFactor), [MaxTorque](https://developer.roblox.com/api-reference/property/RocketPropulsion/MaxTorque), [TurnD](https://developer.roblox.com/api-reference/property/RocketPropulsion/TurnD) and [TurnP](https://developer.roblox.com/api-reference/property/RocketPropulsion/TurnP)

Remember, you don't need to use both the translational and rotational force features of a RocketPropulsion: by setting [MaxThrust](https://developer.roblox.com/api-reference/property/RocketPropulsion/MaxThrust) to 0, you can make a part just face the target **without** having it follow the target around (consider also using a `BodyPosition` in addition). Similarly, by setting [MaxTorque](https://developer.roblox.com/api-reference/property/RocketPropulsion/MaxTorque) to `(0, 0, 0)`, you can have a part simply follow another object without facing it (use a `BodyGyro` if you want the object to maintain a specific orientation).

[1]: https://developer.roblox.com/assets/5b426347b496a3810b47f2d4/RocketPropulsion.gif