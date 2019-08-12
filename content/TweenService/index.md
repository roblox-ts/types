Tweens are used to interpolate the properties of instances. These can be used to create animations for various Roblox objects. Almost any numeric property can be tweened using TweenService. Note that only specific types of properties can be used with TweenService. The types of properties that can be tweened are:

 - number

 - bool

 - `CFrame`

 - `Rect`

 - `Color3`

 - `UDim`

 - `UDim2`

 - `Vector2`

 - `Vector2int16`

 - `Vector3`

TweenService has just one function, [TweenService.Create](https://developer.roblox.com/api-reference/function/TweenService/Create), which takes information about the animation and generates the `Tween` object which can be used to play the animation. Note that `Tween`s can animate multiple properties at the same time.

Details on how the interpolation of the tween is to be carried out are given in the tweenInfo parameter of [TweenService.Create](https://developer.roblox.com/api-reference/function/TweenService/Create). The `TweenInfo` data type includes a range of properties that can be used to achieve various styles of animation, including reversing and looping `Tween`s (see examples).

Multiple tweens can be played on the same object at the same time, but they must not be animating the same property. If two tweens attempt to modify the same property, the initial tween will be cancelled and overwritten by the most recent tween (see examples).

Although other methods exist for tweening objects, such as [GuiObject.TweenSizeAndPosition](https://developer.roblox.com/api-reference/function/GuiObject/TweenSizeAndPosition), TweenService allows multiple properties to be modified and for the animation to be paused and cancelled at any point.