Sets the currently selected objects in Roblox Studio to `Instance`s in the given array.

Calling this function will cause the [Selection.SelectionChanged](https://developer.roblox.com/api-reference/event/Selection/SelectionChanged) event to fire, unless the new selection set is identical to the previous selection.

Note this function overwrites the existing selection. However, using [Selection.Get](https://developer.roblox.com/api-reference/function/Selection/Get) an `Instance` can be added to the existing selection like so:

```lua
local selected = Selection:Get()
table.insert(selected, object)
Selection:Set(selected)
```

@param selection An array of `Instance`s to set the current selection to.