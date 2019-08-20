A HumanoidController is an internal object responsible for translating PlayerAciton movements to the user's character (specifically, their `Humanoid`).

This object can be found inside of the `ControllerService`, via:

```lua
local ControllerService = game:GetService("ControllerService")
local HumanoidController = ControllerService:FindFirstChildOfClass("HumanoidController")
```
