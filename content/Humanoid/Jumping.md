This event fires when the `Humanoid` enters and leaves the *Jumping* [Enum.HumanoidStateType](https://developer.roblox.com/search#stq=HumanoidStateType).

When a `Humanoid` jumps this will fire with a *active* parameter of *true* before shortly afterwards firing again with an active parameter of *false*. This does not correspond with when a `Humanoid` has landed. For that, developers should listen for the *Landed* [Enum.HumanoidStateType](https://developer.roblox.com/search#stq=HumanoidStateType) using [Humanoid.StateChanged](https://developer.roblox.com/api-reference/event/Humanoid/StateChanged).

The *active* parameter of this event also corresponds with the [Humanoid's](https://developer.roblox.com/api-reference/class/Humanoid) [Humanoid.Jump](https://developer.roblox.com/api-reference/property/Humanoid/Jump) property.

You can disable jumping using the [Humanoid.SetStateEnabled](https://developer.roblox.com/api-reference/function/Humanoid/SetStateEnabled) function.