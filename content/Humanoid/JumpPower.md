![enter image description here][1]

Determines how much upwards force is applied to the `Humanoid` when jumping. The value of this property defaults to 50, and is constrained between 0 and 1000.

## Notes

 - Jumps are also influenced by the [Workspace's](https://developer.roblox.com/api-reference/class/Workspace) [Workspace.Gravity](https://developer.roblox.com/api-reference/property/Workspace/Gravity) property which determines the acceleration due to gravity.

 - Although setting this property to 0 will prevent the `Humanoid` from jumping, developers are advised to disable the *Jumping* state using the [Humanoid.SetStateEnabled](https://developer.roblox.com/api-reference/function/Humanoid/SetStateEnabled) function

[1]: https://developer.roblox.com/assets/5b64730f4bf5bf624023ecae/jumpgif_-_Copy.gif