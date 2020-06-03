Fired whenever the [Vector3Value.Value](https://developer.roblox.com/api-reference/property/Vector3Value/Value) of the `Vector3Value` is changed. It will run with the new value being stored in the argument object, instead of a string representing the property being changed.

This event, like other changed events, can be used to track when an Vector3Value changes and to track the different values that it may change to.

For instance, this may be useful in games that rely on Vector3Values to track positions in the game world.

Note

----------

Equivalent changed events exist for similar objects, such as `NumberValue` and `StringValue`, depending on what object type best suits the need.