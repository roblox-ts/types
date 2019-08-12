The Create function of `TweenService` creates a new Tween. The function takes three arguments: the object to tween, the `TweenInfo` to use, and a table containing the properties to tween and the values to tween to.

Tweens are used to interpolate the properties of instances. These can be used to create animations for various Roblox objects. Almost any numeric property can be tweened using `TweenService`.

The propertyTable parameter that is passed in needs to be a dictionary where the keys are the string names of the property (e.g. “Position”, “Transparency”, “Color”, etc), and the value is the value the property needs to be at the end of the tween. Note that only specific types of properties can be used with `TweenService`, but multiple properties can be animated in the same tween. The types of properties that can be tweened are:

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

The `Tween` created using this function is unique to the object given as the instance parameter. If a developer wishes to apply the same tween effect to another instance, another `Tween` will need to be created.

Details on how the interpolation of the tween is to be carried out are given in the tweenInfo parameter. The `TweenInfo` data type includes a range of properties that can be used to achieve various styles of animation, including reversing and looping `Tween`s (see examples).
@param instance The `Instance` whose properties are to be tweened.
@param tweenInfo The `DataType/TweenInfo` to be used.
@param propertyTable A dictionary of properties, and their target values, to be tweened.
@returns The `Tween` created.