The GetStateEnabled function returns whether a [Enum.HumanoidStateType](https://developer.roblox.com/search#stq=HumanoidStateType) is enabled for the `Humanoid`.

The humanoid state describes the activity the humanoid is currently doing.

When a particular [Enum.HumanoidStateType](https://developer.roblox.com/search#stq=HumanoidStateType) is disabled, the humanoid can never enter that state. This is true regardless if the attempt to change state is made using [Humanoid.ChangeState](https://developer.roblox.com/api-reference/function/Humanoid/ChangeState) or Roblox internal humanoid code.

## See also

 - For an event that fires when a humanoid state is enabled or disabled see [Humanoid.StateEnabledChanged](https://developer.roblox.com/api-reference/event/Humanoid/StateEnabledChanged)

 - To enable or disable a `Humanoid` state use [Humanoid.SetStateEnabled](https://developer.roblox.com/api-reference/function/Humanoid/SetStateEnabled)
@param state The given `Enum/HumanoidStateType`
@returns Whether the given `Enum/HumanoidStateType` is enabled