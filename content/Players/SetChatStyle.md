This function sets whether BubbleChat and ClassicChat are being used, and tells TeamChat and Chat what to do using the `ChatStyle` enum. Since this item is protected, attempting to use it in a `Script` or `LocalScript` will cause an error.

This function is used internally when the chat mode is set by the game.

If you would like to create a custom chat system where you can define custom functions such as these, take a look at the tutorial [here][1].

[1]: https://developer.roblox.com/articles/Lua-Chat-System
@param style The specified chat style being set
@returns void