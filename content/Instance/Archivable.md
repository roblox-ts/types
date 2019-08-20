Determines if an `Instance` can be cloned using [Instance.Clone](https://developer.roblox.com/api-reference/function/Instance/Clone) or saved to file.

This property determines whether an object should be included when the game is published or saved, or when [Instance.Clone](https://developer.roblox.com/api-reference/function/Instance/Clone) is called on one of the objects ancestors. Calling Clone directly on an object will return nil if the cloned object is not archivable. Copying an object in Studio (using the 'Duplicate' or 'Copy' options) will ignore the Archivable property and set Archivable to true for the copy.

```lua
local part = Instance.new("Part")
print(part:Clone()) --&gt; Part
part.Archivable = false
print(part:Clone()) --&gt; nil
```
