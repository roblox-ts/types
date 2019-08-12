This event fires when the state of the `Humanoid` is changed.

The humanoid state describes the activity the `Humanoid` is currently doing. It takes the form of a [Enum.HumanoidStateType](https://developer.roblox.com/search#stq=HumanoidStateType) value.

## See also:

 - To get and set the state use [Humanoid.GetState](https://developer.roblox.com/api-reference/function/Humanoid/GetState) and [Humanoid.ChangeState](https://developer.roblox.com/api-reference/function/Humanoid/ChangeState)

 - Individual states can be disabled using [Humanoid.SetStateEnabled](https://developer.roblox.com/api-reference/function/Humanoid/SetStateEnabled)

 - As there is no idle humanoid state, you should instead use the [Humanoid.Running](https://developer.roblox.com/api-reference/event/Humanoid/Running) event or listen to the [RootPart's](https://developer.roblox.com/api-reference/property/Humanoid/RootPart) [BasePart.Velocity](https://developer.roblox.com/api-reference/property/BasePart/Velocity) to work out when the `Humanoid` is standing still