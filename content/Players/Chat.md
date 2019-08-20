This function makes the local player chat the given message. Since this item is protected, attempting to use it in a `Script` or `LocalScript` will cause an error.

Instead, when creating a custom chat system, or a system that needs access to the chat, you can use the `Chat` service's [Chat.Chat](https://developer.roblox.com/api-reference/function/Chat/Chat) function instead.

## See also

 - [Lua Chat System](https://developer.roblox.com/search#stq=Lua-Chat-System), a tutorial for creating a more advanced chat system
@param message The message chatted.
@returns void