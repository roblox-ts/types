This function creates a unit [DataType.Ray](https://developer.roblox.com/search#stq=Ray) from a 2D position on the viewport (defined in pixels). This position does not account for the GUI inset. The [DataType.Ray](https://developer.roblox.com/search#stq=Ray) originates from the [DataType.Vector3](https://developer.roblox.com/search#stq=Vector3) equivalent of the 2D position in the world at the given depth (in studs) away from the `Camera`.

As this function does not account for the GUI inset, the viewport position given is not equivalent to the screen position used by GUI elements. If you are not using [ScreenGui.IgnoreGuiInset](https://developer.roblox.com/api-reference/property/ScreenGui/IgnoreGuiInset) and need an otherwise identical function that accounts for the GUI offset, use [Camera.ScreenPointToRay](https://developer.roblox.com/api-reference/function/Camera/ScreenPointToRay).

This function can be used in conjunction with the [Camera.ViewportSize](https://developer.roblox.com/api-reference/property/Camera/ViewportSize) property to create a ray from the centre of the screen, for example:

```lua
local camera = workspace.CurrentCamera
local viewportPoint = camera.ViewportSize / 2
local unitRay = camera:ViewportPointToRay(viewportPoint.X, viewportPoint.Y, 0)
```

As the [DataType.Ray](https://developer.roblox.com/search#stq=Ray) created is a unit ray it is only one stud long. To create a longer ray, you can do the following:

```lua
local camera = workspace.CurrentCamera
local length = 500
local unitRay = camera:ScreenPointToRay(100, 100)
length)
```

@param x The position on the X axis, in pixels, of the viewport point at which to originate the `DataType/Ray`. This position does not account for the GUI inset
@param y The position on the Y axis, in pixels, of the viewport point at which to originate the `DataType/Ray`. This position does not account for the GUI inset
@param depth The depth from the `Camera`, in studs, from which to offset the origin of the `DataType/Ray`
@returns A unit `DataType/Ray`, originating from the equivalent `DataType/Vector3` world position of the given viewport coordinates at the given depth away from the `Camera`. This ray is orientated in the direction of the `Camera`