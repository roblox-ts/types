This property is the [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) of the `Camera` and definies its position and orientation in the 3D world.

Some transformations, such as the rotation of the head when using VR devices are not reflected in this property. For this reason, developers should use [Camera.GetRenderCFrame](https://developer.roblox.com/api-reference/function/Camera/GetRenderCFrame) to obtain the ‘true’ [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) of the `Camera`.

## How to set the Camera's CFrame

You can move the  `Camera` by setting the CFrame property. However, the default [camera scripts][1] also set the CFrame property. When manually setting the CFrame property, it may be overwritten by the [camera scripts][1] which update every frame. There are two options to address this:

 1. Set the `Camera` [Camera.CameraType](https://developer.roblox.com/api-reference/property/Camera/CameraType) to *'Scriptable'*. When the `Camera` is *'Scriptable'* the default scripts will not update the CFrame. This method is simplest and recommended in most cases

 2. Replace the default [camera scripts][1] with an alternative that doesn't interfere with the developer's desired implementation. This is only recommended when developers do not need any default `Camera` functionality

## How the Camera CFrame works

Like all [CFrame](https://developer.roblox.com/search#stq=CFrame) data, the `Camera` CFrame represents a position and an orientation.

The most intuitive way to position and orientate the `Camera` is by using the *new* [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) constructor with the *pos* and *lookAt* parameters, for example:

```lua
local pos = Vector3.new(0, 10, 0)
local lookAt = Vector3.new(10, 0, 0)
local cameraCFrame = CFrame.new(pos, lookAt)
workspace.CurrentCamera.CFrame = cameraCFrame
```

In the above example the `Camera` is positioned at *0, 10, 0* and oriented to be looking towards *10, 0, 0*.

## Animating the Camera CFrame

Although the `Camera` can be placed in the manner demonstrated above, you may want to animate the Camera to smoothly move from one [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) to another. For this, there are a number of options:

 1. Creating a `Tween` using `TweenService` that animates the CFrame property of the `Camera`. See the code sample below for an example of this

2. Setting the `Camera` CFrame every frame with [RunService.BindToRenderStep](https://developer.roblox.com/api-reference/function/RunService/BindToRenderStep) and the *lerp* [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) method

[1]: http://robloxdev.com/articles/Movement-and-camera-controls