This function returns the screen location and depth of a [DataType.Vector3](https://developer.roblox.com/search#stq=Vector3) *worldPoint* and whether this point is visible on the screen or not.

This function takes in account the current GUI inset (such as the space occupied by the top bar). This means the 2D position returned is in the same term as GUI positions and can be used to place GUI elements. For an otherwise identical function that ignores the GUI inset, see [Camera.WorldToViewportPoint](https://developer.roblox.com/api-reference/function/Camera/WorldToViewportPoint).

For example:

```lua
local camera = workspace.CurrentCamera
Local worldPoint = Vector3.new(0, 10, 0)
local vector, onScreen = camera:WorldToScreenPoint(worldPoint)

local screenPoint = Vector2.new(vector.X, vector.Y)
local depth = vector.Z
```

Note this function does not perform any raycasting, meaning the visible bool will be true regardless if the *worldPoint* is obscured by [BaseParts](https://developer.roblox.com/api-reference/class/BasePart) or `Terrain`.
@param worldPoint The `DataType/Vector3` world position
@returns A tuple containing, in order:

worldPoint* from the top left corner of the screen, in pixels. The `DataType/Vector3|Vector3’s` Z component represents the depth of the *worldPoint* from the screen (in studs).

worldPoint* is within the bounds of the screen
