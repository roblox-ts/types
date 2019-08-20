This function fires when the [Players.LocalPlayer](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) enters the place following a teleport. The *teleportData* and *customLoadingScreen* are provided as arguments.

When fetching *teleportData* and the *customLoadingScreen* you are advised to use [TeleportService.GetLocalPlayerTeleportData](https://developer.roblox.com/api-reference/function/TeleportService/GetLocalPlayerTeleportData) and [TeleportService.GetArrivingTeleportGui](https://developer.roblox.com/api-reference/function/TeleportService/GetArrivingTeleportGui) instead. This is because these functions can be called immediately without having to wait for this event to fire.

This event should be connected immediately in a `LocalScript` parented to `ReplicatedFirst`. Otherwise, when the connection is made the event may have already fired.

## Loading screen

During a teleport, whilst the destination place is loading, the *customLoadingScreen* is parented to the `CoreGui`. Once the place has loaded the [loading screen](https://developer.roblox.com/api-reference/class/ScreenGui) is [parented](https://developer.roblox.com/api-reference/property/Instance/Parent) to *nil*.

If you wish to preserve the *customLoadingScreen* and perform your own transitions, you will need to parent it to the [LocalPlayer’s](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) `PlayerGui`. For example, using the following code inside a `LocalScript` in `ReplicatedFirst`:

```lua
local TeleportService = game:GetService("TeleportService")
local Players = game:GetService("Players")
local ReplicatedFirst = game:GetService("ReplicatedFirst")

TeleportService.LocalPlayerArrivedFromTeleport:Connect(function(customLoadingScreen, teleportData)
```

lua

local playerGui = Players.LocalPlayer:WaitForChild("PlayerGui")

ReplicatedFirst:RemoveDefaultLoadingScreen()

```lua

```

lua

customLoadingScreen.Parent = playerGui

-- animate screen here

wait(5)

-- destroy screen

customLoadingScreen:Destroy()

```lua
end)
```

Note, the *customLoadingScreen* will not be used if the destination place is in a different game.