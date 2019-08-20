This function makes the [Players.LocalPlayer](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) chat the given message, which will only be viewable by users on the same team. Since this item is protected, attempting to use it in a `Script` or `LocalScript` will cause an error.

This function is used internally when the [Players.LocalPlayer](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) sends a message to their team.

If you would like to create a custom chat system where you can define custom functions such as these, take a look at the tutorial [here][1].

[1]: https://developer.roblox.com/articles/Lua-Chat-System
@param message The message being chatted.
@returns void