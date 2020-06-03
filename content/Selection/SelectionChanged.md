Fires when the `Instance`s selected in Roblox Studio changes.

Note this event does not give the new selection. Developers will need to use `Selection`'s [Selection.Get](https://developer.roblox.com/api-reference/function/Selection/Get) function to obtain the current selection.

Although this event can be used outside of plugins and the command bar, it only applies to the selection in Roblox Studio and therefore has no functionality outside of Studio.

To change the selection use the [Selection.Set](https://developer.roblox.com/api-reference/function/Selection/Set) function.