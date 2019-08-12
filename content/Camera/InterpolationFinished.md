This event fires when the `Camera` has finished interpolating using the [Camera.Interpolate](https://developer.roblox.com/api-reference/function/Camera/Interpolate) function.

This event will not fire if a tween is interrupted due to [Camera.Interpolate](https://developer.roblox.com/api-reference/function/Camera/Interpolate) being called again.

You are advised to use `TweenService` to animate the `Camera` instead, as it is more reliable and provides more options for easing styles.