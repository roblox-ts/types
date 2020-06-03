The OnServerInvoke event fires the bound functions in `Script`s when [RemoteFunction.InvokeServer](https://developer.roblox.com/api-reference/function/RemoteFunction/InvokeServer) is called by the server from a `LocalScript`. When the bound function returns, the returned values are sent back to the client.

This is used to retrieve remote events fired by the client and intended for the server. This event is in place to provide a method for communicating between the client and server, which is well documented in [this][1] article.

To fire from the server to the client, you should use [RemoteFunction.InvokeClient](https://developer.roblox.com/api-reference/function/RemoteFunction/InvokeClient) and [RemoteFunction.OnClientInvoke](https://developer.roblox.com/api-reference/callback/RemoteFunction/OnClientInvoke).

Note

----------

 - Binding a function to OnServerInvoke is done with the assignment operator `=`, and not with an event. That is because OnServerInvoke is a callback and expects a function to be assigned to it. When the RemoteFunction is invoked, it will execute the function that was assigned to the onInvoke function.

 - Only one function can be assigned to OnServerInvoke at a time. If multiple functions are assigned, only the last function to be assigned will be used.