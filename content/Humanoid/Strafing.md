This event is fired when the `Humanoid` enters or leaves the *StrafingNoPhysics* [Enum.HumanoidStateType](https://developer.roblox.com/search#stq=HumanoidStateType).

When the `Humanoid` enters the *StrafingNoPhysics* state this event will fire with an *active* parameter of *true*. The event will fire again with *active* equal to *false* when the `Humanoid` leaves the *StrafingNoPhysics* state.

This event is associated with the *StrafingNoPhysics* `Humanoid` state and does **not** fire when the `Humanoid` is moving perpendicular to the direction it is facing. This state is currently unused, if it is set using [Humanoid.ChangeState](https://developer.roblox.com/api-reference/function/Humanoid/ChangeState) the state will revert to *RunningNoPhysics*.