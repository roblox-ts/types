The FireServer event fires the [RemoteEvent.OnServerEvent](https://developer.roblox.com/api-reference/event/RemoteEvent/OnServerEvent) event on the server using the arguments specified with an additional player argument at the beginning.

Since this function is used to communicate from the client to the server, it will only work when used in a `LocalScript`.

When firing from the client note that nothing has to be passed in by default (unlike firing to the client from the server - where the player is passed in).

The functionality of this function, as well as other `RemoteEvent` and `RemoteFunction` events and functions, is well documented in [this][1] article.

[1]: https://developer.roblox.com/articles/Remote-Functions-and-Events
@param arguments The arguments passed to the `RemoteEvent/OnServerEvent` method.
@returns void