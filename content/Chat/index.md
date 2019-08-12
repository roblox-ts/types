The Chat service is a special service that houses the Lua code responsible for running the [Lua Chat System](https://developer.roblox.com/articles/Lua-Chat-System). Similar to `StarterPlayerScripts`, default objects (`Script`s, `ModuleScript`s and other objects) are inserted into the Chat service. Individual objects may be overridden by providing objects with the same name as those inserted. The following objects are guaranteed to exist inside of the Chat service, and can be overridden:

![The contents of the Chat service which are loaded when the game runs.][1]

## Text Filtering

In addition to housing the Lua Chat System, the Chat service also exposes functions used to filter text - [FilterStringAsync](https://developer.roblox.com/api-reference/function/Chat/FilterStringAsync) and [FilterStringForBroadcast](https://developer.roblox.com/api-reference/function/Chat/FilterStringForBroadcast). Chat filtering is built into the Lua Chat System already, but **games that implement custom chat systems must use these functions to filter chat properly.** For more information, see [Text and Chat Filtering](https://developer.roblox.com/articles/Text-and-Chat-Filtering).

[1]: https://developer.roblox.com/assets/5b2d98148fbd570b783cb0d2/Chat.png