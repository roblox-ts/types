Returns the first child of the `Instance` found with the given name. If no child exists with the given name, this function returns nil. If the optional recursive argument is true, this function searches all descendants rather than only the immediate children of the `Instance`. Use this function if your code cannot guarantee the existence of an object with a given name.

## Checking the Existence of An Object

FindFirstChild is necessary if you need to verify an object something exists before continuing. Attempting to index a child by name using the dot operator throws an error if the child doesn't exist.

```lua
 -- The following line errors if Part doesn't exist in the Workspace:
workspace.Part.Transparency = .5
```

Use FindFirstChild to first check for Part, then use an if-statement to run code that needs it.

```lua
local part = workspace:FindFirstChild("Part")
if part then
	part.Transparency = .5
end
```

## Finding a Child Whose Name Matches a Property

Sometimes the [Name](https://developer.roblox.com/api-reference/property/Instance/Name) of an object is the same as that of a property of its [Parent](https://developer.roblox.com/api-reference/property/Instance/Parent). When using the dot operator, properties take precedence over children if they share a name.

In the following example, a `Folder` called "Color" is added to a `Part`, which also has the [Part.Color](https://developer.roblox.com/search#stq=Color) property. `Part.Color` refers to the [datatype.Color3](https://developer.roblox.com/search#stq=Color3), not the Folder.

```lua
local part = Instance.new("Part")
local folder = Instance.new("Folder")
folder.Name = "Color"
folder.Parent = part
local c = part.Color --> A Color3
local c2 = part:FindFirstChild("Color") --> The Folder
```

A benefit of using FindFirstChild in this way is that the introduction of new properties does not impose a risk on your code.

**Tip:** If you only need to use the result of a FindFirstChild call once, such as getting the property of a child if it exists, you can use the following syntax with the `and` operator:

```lua
local myColor = workspace:FindFirstChild("SomePart") and workspace.SomePart.Color
```

If SomePart exists, `myColor` will contain the Color of SomePart. Otherwise, it'll be nil without throwing an error. This works due to short-circuiting: Lua ignores the right side if the left is nil/false

## Performance Note

FindFirstChild takes about 20% longer than using dot operator, and almost 8 times longer than simply storing a reference to an object. Therefore, you should avoid calling FindFirstChild in performance dependent code, such as in tight loops or functions connected to [RunService.Heartbeat](https://developer.roblox.com/api-reference/event/RunService/Heartbeat)/[RunService.RenderStepped](https://developer.roblox.com/api-reference/event/RunService/RenderStepped). **Store the result in a variable,** or consider using [ChildAdded](https://developer.roblox.com/api-reference/event/Instance/ChildAdded) or [WaitForChild](https://developer.roblox.com/api-reference/function/Instance/WaitForChild) to detect when a child of a given name becomes available.
@param name The `Instance/Name` to be searched for.
@param recursive Whether or not the search should be conducted recursively.
@returns The `Instance` found.