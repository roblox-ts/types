This function returns the screen location and depth of a [DataType.Vector3](https://developer.roblox.com/search#stq=Vector3) *worldPoint* and whether this point is visible on the screen or not.

This function does not take in account the current GUI inset (such as the space occupied by the top bar). This means the 2D position returned is taken from the top left corner of the viewport. This means, unless you are using [ScreenGui.IgnoreGuiInset](https://developer.roblox.com/api-reference/property/ScreenGui/IgnoreGuiInset) this position is not appropriate for placing GUI elements. For an otherwise identical function that accounts for the GUI inset, see [Camera.WorldToScreenPoint](https://developer.roblox.com/api-reference/function/Camera/WorldToScreenPoint).

For example:

```lua
local camera = workspace.CurrentCamera
local worldPoint = Vector3.new(0, 10, 0)
local vector, inViewport = camera:WorldToViewportPoint(worldPoint)

local viewportPoint = Vector2.new(vector.X, vector.Y)
local depth = vector.Z
```

Note this function does not perform any raycasting, meaning the visible bool will be true regardless if the *worldPoint* is obscured by [BaseParts](https://developer.roblox.com/api-reference/class/BasePart) or `Terrain`.
@param worldPoint The `DataType/Vector3` world position
@returns A tuple containing, in order:

worldPoint* from the top left corner of the viewport, in pixels. The `DataType/Vector3|Vector3’s` Z component represents the depth of the *worldPoint* from the screen (in studs).

worldPoint* is within the bounds of the viewport.
