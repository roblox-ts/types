This function sets whether a given [Enum.HumanoidStateType](https://developer.roblox.com/search#stq=HumanoidStateType) is enabled for the `Humanoid`.

The humanoid state describes the activity the `Humanoid` is currently doing.

When a particular [Enum.HumanoidStateType](https://developer.roblox.com/search#stq=HumanoidStateType) is disabled, the `Humanoid` can never enter that state. This is true regardless if the attempt to change state is made using [Humanoid.ChangeState](https://developer.roblox.com/api-reference/function/Humanoid/ChangeState) or Roblox internal `Humanoid` code.
@param state The `Enum/HumanoidStateType` to be enabled or disabled
@param enabled *True* if this state is to be enabled, *false* if it is to be disabled