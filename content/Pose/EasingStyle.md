The EasingStyle determines the 'style' of the interpolation. Along with [Pose.EasingDirection](https://developer.roblox.com/api-reference/property/Pose/EasingDirection), it determines how the joint will interpolate from this `Pose` to the subsequent `Pose` during animation playback.

##Pose EasingStyle Values

 - **Linear** - Linear interpolation

 - **Constant** - Does not interpolate but snaps to the next pose. The point at which this occurs is determined by [Pose.EasingDirection](https://developer.roblox.com/api-reference/property/Pose/EasingDirection).

	 - **In** - Happens immediately

	 - **Out** - Happens at the time of the next pose

	 - **InOut** - Happens at the midpoint between poses

 - **Elastic** - Springs back and overshoots the target in an elastic manner

 - **Cubic** - Cubic interpolation, speed changes as target nears

 - **Bounce** - Bounces several times before reaching the target

![enter image description here][1]

Note, this property is a [Enum.PoseEasingStyle](https://developer.roblox.com/search#stq=PoseEasingStyle), which is different to the [Enum.EasingStyle](https://developer.roblox.com/search#stq=EasingStyle) used by other objects. Attempting to set this property to an [Enum.EasingStyle](https://developer.roblox.com/search#stq=EasingStyle) value will produce an error.

##Pose Interpolation

The [Pose.CFrame](https://developer.roblox.com/api-reference/property/Pose/CFrame) of each `Pose` determines the [Motor6D.Transform](https://developer.roblox.com/api-reference/property/Motor6D/Transform) of the joint associated with the pose at the time of its parent `Keyframe`. It does not reach this value instantly, but interpolates from the previous pose applied to that joint (which may not necessarily be in the previous keyframe).

The way in which a joint will interpolate between two `Pose`s during animation playback is determined by the [Pose.EasingStyle](https://developer.roblox.com/api-reference/property/Pose/EasingStyle) and EasingDirection of the first pose.

[1]: https://developer.roblox.com/assets/blt5b5cb41b1d832713/Easing_-_Copy.gif