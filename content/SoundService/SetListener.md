Sets the listener used by the client.

The first parameter is the [Enum.ListenerType](https://developer.roblox.com/search#stq=ListenerType) of the listener, the second paramater is dependent on the listener type.

 - Camera ListenerType - Does not return a listener object as [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera) is always used

 - CFrame ListenerType - The [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) to be used

 - ObjectPosition ListenerType - The `BasePart` to be used

 - ObjectCFrame ListenerType - The `BasePart` to be used

The listener can be retrieved using [SoundService.GetListener](https://developer.roblox.com/api-reference/function/SoundService/GetListener).

```lua
local SoundService = game:GetService("SoundService")
SoundService:SetListener(Enum.ListenerType.CFrame, CFrame.new(0, 0, 0))
local listenerType, listener = SoundService:GetListener()
print(listenerType, listener)
```

## What is a listener?

The `SoundService`'s listener determines the point from which audio in the game is being 'heard' by the player. For 3D `Sound`s (`Sound`s parented to a `BasePart` or `Attachment`) the listener influences the volume and left/right balance of a playing sound. Listeners have no influence on the playback of 2D `Sound`s as they have no position of emission.

By default, the listener is set to the [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera). However, a range of different types of listeners can be used.
@param listenerType The `Enum/ListenerType` of the listener.
@param listener Dependent on the `Enum/ListenerType`. `BasePart` for 'ObjectPosition' or 'ObjectCFrame', `DataType/CFrame` for 'CFrame', nil for 'Camera'.