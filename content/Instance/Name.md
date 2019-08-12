A non-unique identifier of the `Instance`.

This property is an identifier that describes an object. Names are not necessarily unique identifiers however; multiple children of an object may share the same name. Names are used to keep the object hierarchy organized, along with allowing scripts to access specific objects.

The name of an object is often used to access the object through the data model hierarchy using the following methods:

```lua
local baseplate = workspace.Baseplate
local baseplate = workspace["Baseplate"]
local baseplate = workspace:FindFirstChild("BasePlate")
```

In order to make an object accessible using the dot operator, an object's Name must follow a certain syntax. The objects name must start with an underscore or letter. The rest of the name can only contain letters, numbers, or underscores (no other special characters). If an objects name does not follow this syntax it will not be accessible using the dot operator and Lua will not interpret its name as an identifier.

If more than one object with the same name are siblings then any attempt to index an object by that name will return the only one of the objects found similar to [Instance.FindFirstChild](https://developer.roblox.com/api-reference/function/Instance/FindFirstChild), but not always the desired object. If a specific object needs to be accessed through code, it is recommended to give it a unique name, or guarantee that none of its siblings share the same name as it.

Note, a full name showing the instance's hierarchy can be obtained using [Instance.GetFullName](https://developer.roblox.com/api-reference/function/Instance/GetFullName).