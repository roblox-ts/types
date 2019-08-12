When using the default [camera scripts][1], the CameraSubject property has two roles:

 - Defining the object the `Camera` is to follow, in the case of the *'Follow'*, *'Attach'*, *'Track'*, *'Watch'* and *'Custom'* [CameraTypes](https://developer.roblox.com/api-reference/property/Camera/CameraType)

 - For all [CameraTypes](https://developer.roblox.com/api-reference/property/Camera/CameraType) but *'Scriptable'*, the object whose position the [Camera's](https://developer.roblox.com/api-reference/class/Camera) [Camera.Focus](https://developer.roblox.com/api-reference/property/Camera/Focus) will be set to

CameraSubject accepts a variety of [Instances](https://developer.roblox.com/api-reference/class/Instance). The default [camera scripts][1] respond differently to different CameraSubject types:

 - `Humanoid`: By default the CameraSubject is set to the [LocalPlayer's](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) `Humanoid`. The camera scripts will follow the `Humanoid` factoring in the [Humanoid's](https://developer.roblox.com/api-reference/class/Humanoid) current state and [Humanoid.CameraOffset](https://developer.roblox.com/api-reference/property/Humanoid/CameraOffset)

 - `BasePart`: The camera scripts will follow the position of any `BasePart`, with a vertical offset in the case of [VehicleSeats](https://developer.roblox.com/api-reference/class/VehicleSeat)

You can configure the `Camera` to follow a `Model` by setting the CameraSubject to the model’s [Model.PrimaryPart](https://developer.roblox.com/api-reference/property/Model/PrimaryPart).

The CameraSubject cannot be set to *nil*. If it is, it will revert to its previous value.

To restore the CameraSubject to its default value, set it to the [LocalPlayer's](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) `Humanoid` like so:

```lua
local Players = game:GetService("Players")

local localPlayer = Players.LocalPlayer

local function resetCameraSubject()
	if workspace.CurrentCamera and localPlayer.Character then
		local humanoid = localPlayer.Character:FindFirstChildOfClass("Humanoid")
		if humanoid then
			workspace.CurrentCamera.CameraSubject = humanoid
		end
	end
end
```

[1]: http://robloxdev.com/articles/Movement-and-camera-controls