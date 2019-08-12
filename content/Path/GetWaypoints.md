This function returns an array of all the [PathWaypoints](https://developer.roblox.com/search#stq=PathWaypoint) in a `Path`, as computed by [Path.ComputeAsync](https://developer.roblox.com/api-reference/function/Path/ComputeAsync).

Each waypoint in the array specifies a [DataType.Vector3](https://developer.roblox.com/search#stq=Vector3) position and [action](https://developer.roblox.com/search#stq=PathWaypointAction) to take when this PathWaypoint is reached. The array is arranged in the order of waypoints from the path start to path end.

If a path could not be computed, this function will return an empty array.
@returns An array of `DataType/PathWaypoint|PathWaypoints` ordered from path start to path end