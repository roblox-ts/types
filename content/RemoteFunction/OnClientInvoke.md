The OnClientInvoke event fires the bound functions in `LocalScript`s when [RemoteFunction.InvokeClient](https://developer.roblox.com/api-reference/function/RemoteFunction/InvokeClient) is called by the server from a `Script`. When the bound function returns, the returned values are sent back to the server.

This is used to listen to remote functions invoked by the server and intended for the client. This callback is in place to provide a method for communicating between the server and client.

To fire from the client to the server, you should use [RemoteFunction.InvokeServer](https://developer.roblox.com/api-reference/function/RemoteFunction/InvokeServer) and [RemoteFunction.OnServerInvoke](https://developer.roblox.com/api-reference/callback/RemoteFunction/OnServerInvoke).