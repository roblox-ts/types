The Changed event fires whenever the [IntValue.Value](https://developer.roblox.com/api-reference/property/IntValue/Value) of the `IntValue` is changed. It will run with the new value being stored in the argument object, instead of a string representing the property being changed.

This event, like other changed events, can be used to track when an IntValue changes and to track the different values that it may change to.

For instance, this may be useful in games that rely on IntValues to track game states and values, such as item IDs.

Note

----------

Equivalent changed events exist for similar objects, such as `NumberValue` and `StringValue`, depending on what object type best suits the need.