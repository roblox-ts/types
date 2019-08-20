The Selection service controls the `Instance`s that are selected in Roblox Studio.

This service is particularly useful when developing `Plugin`s, as it allows the developer to access and manipulate the current selection.

Currently selected `Instance`s can be obtained and set using the [Selection.Get](https://developer.roblox.com/api-reference/function/Selection/Get) and [Selection.Set](https://developer.roblox.com/api-reference/function/Selection/Set) functions. The [Selection.SelectionChanged](https://developer.roblox.com/api-reference/event/Selection/SelectionChanged) event fires whenever the current selection changes.

For more information on using Selection and `Plugin`s please see [this tutorial](https://developer.roblox.com/search#stq=Intro%20to%20Plugins).

Selection is also often used in the command bar, to set hidden properties or run functions for selected `Instance`s. For example:

```lua
game.Selection:Get()[1]:SetPrimaryPartCFrame(CFrame.new()) -- move the selected model to the origin
```

Note this class only applies to Roblox Studio and has no applicability to games.

[1]: https://developer.roblox.com/articles/Intro-to-Plugins