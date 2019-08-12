Fired whenever the [CFrameValue.Value](https://developer.roblox.com/api-reference/property/CFrameValue/Value) of the `CFrameValue` is changed. It will run with the new value being stored in the argument object, instead of a string representing the property being changed.

This event, like other changed events, can be used to track when an CFrameValue changes and to track the different values that it may change to.

For instance, this even may be useful in games that rely on CFrameValues to track game object [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) positions and movements.

Note

----------

Equivalent changed events exist for similar objects, such as `NumberValue` and `StringValue`, depending on what object type best suits the need.