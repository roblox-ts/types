Fires if the [BinaryStringValue.Value](https://developer.roblox.com/search#stq=Value) of the `BinaryStringValue` is changed by the engine.

In practice, this object is stored out of reach from normal scripts, so this event cannot be connected to. If a BinaryStringValue is created by a script, the engine will not do anything with it, so the event will never fire.

Note

----------

Equivalent changed events exist for similar objects, such as `NumberValue` and `StringValue`, depending on what object type best suits the need.