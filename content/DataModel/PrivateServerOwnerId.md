This property describes the [UserId](https://developer.roblox.com/api-reference/property/Player/UserId) of the `Player` that owns the [VIP server](https://developer.roblox.com/search#stq=Creating%20a%20VIP%20Server%20on%20Roblox) if the server is a VIP server.

If the server is a standard or reserved server then this property will be set to *0*.

This property could be used to identify if a `Player` is the owner of the VIP server, for example:

```lua
local Players = game:GetService("Players")

-- is this a VIP server?
if game.PrivateServerId ~= "" and game.PrivateServerOwnerId ~= 0 then
```

lua

-- listen for new players being added

Players.PlayerAdded:Connect(function(player)

```lua

```

lua

    -- check if the player is the server owner

    if player.UserId == game.PrivateServerOwnerId then

        print("The private server owned has joined the game")

    end

end)

```lua
End
```

## See also

 - [DataModel.PrivateServerId](https://developer.roblox.com/api-reference/property/DataModel/PrivateServerId), a property describing the unique ID of VIP and [reserved servers](https://developer.roblox.com/api-reference/function/TeleportService/ReserveServer)