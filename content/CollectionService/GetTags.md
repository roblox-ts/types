GetTags is given an object and returns a table of strings, which are the tags applied to the given object.

```lua
local CollectionService = game:GetService("CollectionService")
local object = workspace.Model
local tags = CollectionService:GetTags(object)
print("The object " .. object:GetFullName() .. " has tags: " .. table.concat(tags, ", "))
```

This method is useful when you want to do something with multiple tags at once on an object. However, it would be inefficient to use this method to check for the existence of a single tag. For this, use [CollectionService.HasTag](https://developer.roblox.com/api-reference/function/CollectionService/HasTag) to check for a single tag.
@param instance The object whose tags should be returned
@returns A table of strings which are the tags applied to the given object