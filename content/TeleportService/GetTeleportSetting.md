This function retrieves a teleport setting saved using [TeleportService.SetTeleportSetting](https://developer.roblox.com/api-reference/function/TeleportService/SetTeleportSetting) using the given key.

This method is intended for use on the client only and should not be used on the server.

Teleport settings are preserved across teleportations within the same game. This means data can be saved using [TeleportService.SetTeleportSetting](https://developer.roblox.com/api-reference/function/TeleportService/SetTeleportSetting) in one place and retrieved using GetTeleportSetting in another place the user has been teleported to.

For example, in a game that allowed crouching you could save whether the user is currently crouching prior to teleporting as a teleport setting. This could then be retrieved in the destination place after the teleportation:

```lua
local TeleportService = game:GetService("TeleportService")

local isCrouching =  TeleportService:GetTeleportSetting("isCrouching")
```

If no teleport setting exists under the given key, this function will return *nil*.

## Differences from GlobalDataStores

Although they share some similarities, there are some key differences between teleport settings and datastores:

 - [GlobalDataStore.SetAsync](https://developer.roblox.com/api-reference/function/GlobalDataStore/SetAsync) stores the data on Roblox servers whereas SetTeleportSetting stores the data locally

 - Data stored in a `GlobalDataStore` is preserved after the user leaves the game universe whereas teleport settings are not

 - [GlobalDataStores](https://developer.roblox.com/api-reference/class/GlobalDataStore) can only be accessed on the server, whereas teleport settings can only be accessed on the client

 - [GlobalDataStores](https://developer.roblox.com/api-reference/class/GlobalDataStore) have usage limits, whereas teleport settings do not

In general teleport settings should be used to preserve client side information within a single play session across different places in a game. [GlobalDataStores](https://developer.roblox.com/api-reference/class/GlobalDataStore) should be used to save important player data that needs to be accessed across player sessions.

## Teleport settings and security

As teleport settings are stored locally, it is possible they can be manipulated by malicious users. This risk can be mitigated by employing server side validation, for more information on this please see the article on [Articles.Game Security](https://developer.roblox.com/search#stq=Game%20Security).
@param setting The key the value was stored under using `TeleportService/SetTeleportSetting`
@returns The value stored under the given key
@rbxts client