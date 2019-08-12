The Parent property determines the hierarchical parent of the `Instance`. The following terminology is commonly used when talking about how this property is set:

  - An object is a **child** (**parented to**) another object when its Parent is set to that object.

  - The **descendants** of an `Instance` are the children of that object, plus the descendants of the children as well.

  - The **ancestors** of an `Instance` are all the objects that the Instance is a descendant of.

It is from this property that many other API members get their name, such as [GetChildren](https://developer.roblox.com/api-reference/function/Instance/GetChildren) and [FindFirstChild](https://developer.roblox.com/api-reference/function/Instance/FindFirstChild).

The [Remove](https://developer.roblox.com/api-reference/function/Instance/Remove) function sets this property to nil. Calling [Destroy](https://developer.roblox.com/api-reference/function/Instance/Destroy) will set the Parent of an `Instance` and all of its descendants to `nil`, and also **lock** the Parent property. An error is raised when setting the Parent of a destroyed object.

This property is also used to manage whether an object exists in the game or needs be be removed. As long as an objects parent is in the `DataModel`, is stored in a variable, or is referenced by another objects property, then the object remains in the game. Otherwise, the object will automatically be removed. The top level `DataModel` object (the one referred to as the `game` by scripts) has no parent, but always has a reference held to it by the game engine, and exists for the duration of a session.

Newly created objects using `Instance.new` will not have a parent, and usually will not be visible or function until one is set. The most elementary creation of an object has two steps: creating the object, then setting its parent.

```lua
-- Create a part and parent it to the workspace
local part = Instance.new("Part")
part.Parent = workspace
-- Instance new can also take Parent as a second parameter
Instance.new("NumberValue", workspace)
```

# Object Replication

An object created by server will not replicate to clients until it is parented to some object that is replicated. When creating an object then setting many properties, it's recommended to **set Parent last**. This ensures the object replicates once, instead of replicating many property changes.

```lua
local part = Instance.new("Part") -- Avoid using the second parameter here
part.Anchored = true
part.BrickColor = BrickColor.new("Really red")
-- Potentially many other property changes could go here here...
-- Always set parent last!
part.Parent = workspace
```

However, if you were parenting your parts to a `Model` whose parent hasn't been set yet, then setting the parent first would not matter as the model would not have replicated yet.