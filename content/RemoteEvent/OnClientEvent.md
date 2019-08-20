The OnClientEvent event fires listening functions in `LocalScript` when either [RemoteEvent.FireClient](https://developer.roblox.com/api-reference/function/RemoteEvent/FireClient) or [RemoteEvent.FireAllClients](https://developer.roblox.com/api-reference/function/RemoteEvent/FireAllClients) is fired by the server from a `Script`.

This is used to retrieve remote events fired by the server and intended for the client. This event is in place to provide a method for communicating between the server and client, which is well documented in [this][1] article. This event retrieves remote events fired by the server to the client.

To fire from the client to the server, you should use [RemoteEvent.FireServer](https://developer.roblox.com/api-reference/function/RemoteEvent/FireServer) and [RemoteEvent.OnServerEvent](https://developer.roblox.com/api-reference/event/RemoteEvent/OnServerEvent).

[1]: https://developer.roblox.com/articles/Remote-Functions-and-Events