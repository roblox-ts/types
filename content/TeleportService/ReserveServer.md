This function returns an access code that can be used to teleport players to a reserved server, along with the [DataModel.PrivateServerId](https://developer.roblox.com/api-reference/property/DataModel/PrivateServerId) for it.

ReserveServer can only be called on the server.

## Reserved Servers

The following are characteristics of reserved servers:

 - They can only be accessed using [TeleportService.TeleportToPrivateServer](https://developer.roblox.com/api-reference/function/TeleportService/TeleportToPrivateServer), with the access code ReserveServer returns

 - A game server is started when the access code is first used

 - No more than one game server instance can exist at any time for each access code

 - Access codes remain valid indefinitely, meaning reserved servers can still be joined if no game server is running (in this case a new game server will be started)

You can see if the current server is a reserved server by using the following code:

```lua
local isReserved = game.PrivateServerId ~= "" and game.PrivateServerOwnerId == 0
```

The [DataModel.PrivateServerId](https://developer.roblox.com/api-reference/property/DataModel/PrivateServerId) is constant across all server instances associated with the server access code, the [DataModel.JobId](https://developer.roblox.com/api-reference/property/DataModel/JobId) is not.
@param placeId The `DataModel/PlaceId` of the place the reserved server is being created for
@returns The server access code required by `TeleportService/TeleportToPrivateServer` and the `DataModel/PrivateServerId` for the reserved server
@rbxts server