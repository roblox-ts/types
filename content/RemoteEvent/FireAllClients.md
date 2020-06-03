The FireAllClients function fires the [RemoteEvent.OnClientEvent](https://developer.roblox.com/api-reference/event/RemoteEvent/OnClientEvent) event for each client.

Unlike [RemoteEvent.FireClient](https://developer.roblox.com/api-reference/function/RemoteEvent/FireClient), this event does not take a target player as an argument. Instead it will fire to all clients who have the same remote event connected to an OnClientEvent event.

Since this function is used to communicate from the server to the client, it will only work when used in a `Script`.

The functionality of this function, as well as other `RemoteEvent` and `RemoteFunction` events and functions, is well documented in [this][1] article.

Note

----------

 - Data can be passed from server to client through remote events in the same way data is passed from client to server. Any extra information can be passed in as arguments to the [RemoteEvent.FireClient](https://developer.roblox.com/api-reference/function/RemoteEvent/FireClient) and FireAllClients functions. Note that the FireClient function still needs to pass the player to send the message to as the first argument.

[1]: https://developer.roblox.com/articles/Remote-Functions-and-Events
@param arguments The arguments that will be passed to all `RemoteEvent/OnClientEvent` methods.
@returns void