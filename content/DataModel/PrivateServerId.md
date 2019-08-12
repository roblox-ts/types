This property describes the private server ID of the server, if the server is a private server.

If the server is not a private server then this property will be an empty string.

## Private servers

Private servers refer to the following:

 - [VIP servers](https://developer.roblox.com/search#stq=Creating%20a%20VIP%20Server%20on%20Roblox), private servers that can be purchased by players from the games page

 -  Reserved servers, private servers created by the developer using [TeleportService.ReserveServer](https://developer.roblox.com/api-reference/function/TeleportService/ReserveServer)

## PrivateServerId vs JobId

The PrivateServerId of a server is different to the [DataModel.JobId](https://developer.roblox.com/api-reference/property/DataModel/JobId). The [JobId](https://developer.roblox.com/api-reference/property/DataModel/JobId) is the unique identifier of the current server instance.

Private servers (VIP or reserved servers) can have multiple server instances associated with them over time. This is because, although only one server instance can be running at once for a private server, new server instances can open and close as players join and leave the game. For example, no server instance is running when nobody is playing in the server. The PrivateServerId will be consistent across all of these server instances, the [DataModel.JobId](https://developer.roblox.com/api-reference/property/DataModel/JobId) will be unique for each once.

## See also

 - [DataModel.PrivateServerOwnerId](https://developer.roblox.com/api-reference/property/DataModel/PrivateServerOwnerId), a property describing the owner of a VIP server

 - [TeleportService.ReserveServer](https://developer.roblox.com/api-reference/function/TeleportService/ReserveServer), a function which creates a reserved server