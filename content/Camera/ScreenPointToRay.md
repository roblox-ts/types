This function creates a unit [DataType.Ray](https://developer.roblox.com/search#stq=Ray) from a 2D position on the screen (defined in pixels). This position accounts for the GUI inset. The [DataType.Ray](https://developer.roblox.com/search#stq=Ray) originates from the [DataType.Vector3](https://developer.roblox.com/search#stq=Vector3) equivalent of the 2D position in the world at the given depth (in studs) away from the `Camera`.

As this function accounts for the GUI inset, the offset applied to GUI elements (such as from the top bar) is accounted for. This means the screen position specified will start in the top left corner below the top bar. For an otherwise identical function that does not account for the GUI offset, use [Camera.ViewportPointToRay](https://developer.roblox.com/api-reference/function/Camera/ViewportPointToRay).

As the [DataType.Ray](https://developer.roblox.com/search#stq=Ray) created is a unit ray it is only one stud long. To create a longer ray, you can do the following:

```lua
local camera = workspace.CurrentCamera
local length = 500
local unitRay = camera:ScreenPointToRay(100, 100)
length)
```

@param x The position on the X axis, in pixels, of the screen point at which to originate the `DataType/Ray`. This position accounts for the GUI inset
@param y The position on the Y axis, in pixels, of the screen point at which to originate the `DataType/Ray`. This position accounts for the GUI inset
@param depth The depth from the `Camera`, in studs, from which to offset the origin of the `DataType/Ray`
@returns A unit `DataType/Ray`, originating from the equivalent `DataType/Vector3` world position of the given screen coordinates at the given depth away from the `Camera`. This ray is orientated in the direction of the `Camera`