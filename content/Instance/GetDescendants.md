The **GetDescendants** function of an object returns an array that contains all of the descendants of that object. Unlike [Instance.GetChildren](https://developer.roblox.com/api-reference/function/Instance/GetChildren), which only returns the immediate children of an object, GetDescendants will find every child of the object, every child of those children, and so on and so forth.

The arrays returned by GetDescendants are arranged so that parents come earlier than their children. For example, let’s look at the following setup:

![Workspace Descendants][1]

Here we have a `Model` in the `Workspace`. Inside this model is three parts (C, D, and E) and another model (InnerModel). Inside the inner model are two more parts (A and B). If we use GetDescendants on the first model and print out the contents of the returned array, we can see that the first level of children, InnerModel, C, D, and E, are printed out before A and B.

```lua
local descendants = game.Workspace.Model:GetDescendants()
 
-- Loop through all of the descendants of the model and
-- print out their name
for index, descendant in pairs(descendants) do
	print(descendant.Name)
end
 
-- Prints:
-- C
-- D
-- E
-- InnerModel
-- A
-- B
```

[1]: https://developer.roblox.com/assets/5c5622a2005d89b20bb84fee/GetDescendantsExample.png
@returns An array containing the `Instance`'s descendants.