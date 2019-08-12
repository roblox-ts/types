This function is used to find a `Path` between two provided points. This path uses the navigation grid created by `PathfindingService` and makes sure that the path can be followed by a regular-sized Roblox character.

This function returns a `Path` object which contains the coordinates of the path. If no path is found between the two points, this function will still return a `Path` object, but that object's [Path.Status](https://developer.roblox.com/api-reference/property/Path/Status) will be `Enum.PathStatus.NoPath`.

To get the waypoints of a `Path` object, you can use the [Path.GetWaypoints](https://developer.roblox.com/api-reference/function/Path/GetWaypoints) function.
@param start Path start coordinates.
@param finish Path finish coordinates.
@returns A `Path` object