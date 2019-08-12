This event fires if a request to teleport (from a function such as [TeleportService.Teleport](https://developer.roblox.com/api-reference/function/TeleportService/Teleport)) fails and the player does not leave the current place server.

This event is fired on both the client and the server.

TeleportInitFailed includes a *teleportResult* argument (a [Enum.TeleportResult](https://developer.roblox.com/search#stq=TeleportResult) enum) describing the reason the teleport failed along with the error message that is displayed to the user.

It is possible for teleportation to fail after the `Player` has left the place due to Roblox server issues. This event will not fire in this case and the user will be disconnected and required to rejoin.