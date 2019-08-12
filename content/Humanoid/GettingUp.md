This event fires when the `Humanoid` enters or leaves the *GettingUp* [Enum.HumanoidStateType](https://developer.roblox.com/search#stq=HumanoidStateType).

When a `Humanoid` attempts to get back up, this event will first fire with an *active* parameter of *true* before shortly after firing again with an *active* parameter of *false*.

## See also

 - To force a `Humanoid` to fall over, use the [Humanoid.ChangeState](https://developer.roblox.com/api-reference/function/Humanoid/ChangeState) function to change the [Humanoid's](https://developer.roblox.com/api-reference/class/Humanoid) state to *FallingDown*