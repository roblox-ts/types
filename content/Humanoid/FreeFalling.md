This event fires when the `Humanoid` enters or leaves the *Freefall* [Enum.HumanoidStateType](https://developer.roblox.com/search#stq=HumanoidStateType).

The *active* parameter represents whether the `Humanoid` is entering or leaving the *Freefall* state.

Although the *Freefall* state generally ends when the `Humanoid` reaches the ground, this event may fire with *active* equal to *false* if the state is changed whilst the `Humanoid` is falling. For this reason, developers should use [Humanoid.StateChanged](https://developer.roblox.com/api-reference/event/Humanoid/StateChanged) and listen for the *Landed* state to work out when a `Humanoid` has landed.