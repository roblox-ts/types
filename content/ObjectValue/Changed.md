This event fires whenever the [ObjectValue.Value](https://developer.roblox.com/api-reference/property/ObjectValue/Value) property is changed. It will run with the new value being stored in the argument object, instead of a string representing the property being changed.

This event, like other changed events, can be used to track when an ObjectValue changes and to track the different values that it may change to.

For instance, this even may be useful in games that rely on ObjectValues to track game states and values, such as RPG  targeting systems.

## See also

Equivalent changed events exist for similar objects, such as `NumberValue` and `StringValue`, depending on what object type best suits the need.