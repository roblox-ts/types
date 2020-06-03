This function causes the `Humanoid` to enter the given [Enum.HumanoidStateType](https://developer.roblox.com/search#stq=HumanoidStateType).

The humanoid state describes the activity the `Humanoid` is currently doing.

You should check the page for [Enum.HumanoidStateType](https://developer.roblox.com/search#stq=HumanoidStateType) for more information on what particular states do as some may have misleading names. For example, running describes a state where the [Humanoid's](https://developer.roblox.com/api-reference/class/Humanoid) legs are on the ground, including when stationary

Due to the default behavior of the `Humanoid` some states will automatically be changed when set to. Below are some examples of this:

 - Setting the state to *'Swimming*' when the `Humanoid` is not in the water will lead to it being automatically set to *'GettingUp'*

 - As it is unused, setting the state to *'PlatformStanding'* will lead to it being automatically set to *'Running'*

## See also

 - To enable or disable a paticular state use [Humanoid.SetStateEnabled](https://developer.roblox.com/api-reference/function/Humanoid/SetStateEnabled)

 - To get the current state use [Humanoid.GetState](https://developer.roblox.com/api-reference/function/Humanoid/GetState)
@param state The `Enum/HumanoidStateType` that the `Humanoid` is to perform