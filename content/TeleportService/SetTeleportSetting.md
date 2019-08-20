This function stores a value under a given key that persists across all teleportations in the same game.

This method is intended for use on the client only and should not be used on the server.

The stored value can later be retrieved using [TeleportService.GetTeleportSetting](https://developer.roblox.com/api-reference/function/TeleportService/GetTeleportSetting). This will work in the current place and any subsequent places the [Players.LocalPlayer](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) teleports to, provided they are in the same game.

For example, in a game that allowed crouching you could save whether the user is currently crouching prior to teleporting as a teleport setting:

```lua
local TeleportService = game:GetService("TeleportService")

local isCrouching = false
TeleportService:SetTeleportSetting("isCrouching", isCrouching)
```

The stored value can take one of the following forms:

 - A table without mixed keys (all strings or all integers)

 - A string

 - A number

 - A bool

If data is already stored under the given key, the previous value will be overwritten by the new value.

## Differences from GlobalDataStores

Although they share some similarities, there are some key differences between teleport settings and datastores:

 - [GlobalDataStore.SetAsync](https://developer.roblox.com/api-reference/function/GlobalDataStore/SetAsync) stores the data on Roblox servers whereas SetTeleportSetting stores the data locally

 - Data stored in a `GlobalDataStore` is preserved after the user leaves the game universe whereas teleport settings are not

 - [GlobalDataStores](https://developer.roblox.com/api-reference/class/GlobalDataStore) can only be accessed on the server, whereas teleport settings can only be accessed on the client

 - [GlobalDataStores](https://developer.roblox.com/api-reference/class/GlobalDataStore) have usage limits, whereas teleport settings do not

In general teleport settings should be used to preserve client side information within a single play session across different places in a game. [GlobalDataStores](https://developer.roblox.com/api-reference/class/GlobalDataStore) should be used to save important player data that needs to be accessed across player sessions.

## Teleport settings and security

As teleport settings are stored locally, it is possible they can be manipulated by malicious users. This risk can be mitigated by employing server side validation, for more information on this please see the article on [Articles.Game Security](https://developer.roblox.com/search#stq=Game%20Security).
@param setting The key to store the *value* under. This key can be used to retrieve the value using `TeleportService/GetTeleportSetting`

@param value The value to store
@rbxts client