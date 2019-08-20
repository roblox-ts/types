Fires listening functions in `Script` when [RemoteEvent.FireServer](https://developer.roblox.com/api-reference/function/RemoteEvent/FireServer) is called from a `LocalScript`.

This is used to retrieve remote events fired by the client and intended for the server. This event is in place to provide a method for communicating between the client and server, which is well documented in [this][1] article. This event retrieves remote events fired by the client to the server.

To fire from the server to the client, you should use [RemoteEvent.FireClient](https://developer.roblox.com/api-reference/function/RemoteEvent/FireClient) and [RemoteEvent.OnClientEvent](https://developer.roblox.com/api-reference/event/RemoteEvent/OnClientEvent).

[1]: https://developer.roblox.com/articles/Remote-Functions-and-Events