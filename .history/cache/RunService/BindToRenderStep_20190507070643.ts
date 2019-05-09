/** The `BindToRenderStep` function binds a custom function to be called at a specific time during the render step. There are three main arguments for BindToRenderStep: `name`, `priority`, and `what function to call`.

As it is linked to the client's rendering process, BindToRenderStep can only be called on the client.

Name
----------

The `name` parameter is a label for the binding, and can be used with `RunService/UnbindFromRenderStep` if the binding is no longer needed.
```lua
 local RunService = game:GetService("RunService")

 local function functionToBind() end

 -- Bind the function above to the binding named "tempBinding"
 RunService:BindToRenderStep("tempBinding", 1, functionToBind)
 -- Unbind the function bound to "tempBinding"
 RunService:UnbindFromRenderStep("tempBinding")
```
Priority
----------

The `priority` of the binding is an integer, and determines when during the render step to call the custom function. The lower this number, the sooner the custom function will be called. If two bindings have the same priority the Roblox engine will randomly pick one to run first. The default Roblox control scripts run with these specific priorities:
 - Player Input: 100
 - Camera Controls: 200
For convenience, the `Enum/RenderPriority` enum can be used to determine the integer value to set a binding. For example, to make a binding right before the default camera update, simply subtract 1 from the camera priority level.

> **Note:** When using Enum.RenderPriority, remember to use ***InlineCode.Value*** at the end of the desired enum. BindToRenderStep will not work if just the enum on its own is used.

 local RunService = game:GetService("RunService")

 local function beforeCamera(delta)
 -- Code in here will run before the default Roblox camera script
 end

 RunService:BindToRenderStep("Before camera", Enum.RenderPriority.Camera.Value - 1, beforeCamera)

Custom Function and Delta Time
----------

The last argument of BindToRenderStep is the `custom function` to call. This function will be passed one parameter called deltaTime. ***DeltaTime*** shows how much time passed between the beginning of the previous render step and the beginning of the current render step.

> **Note:** All rendering updates will wait until the code in the render step finishes. Make sure that any code called by BindToRenderStep runs quickly and efficiently. If code in BindToRenderStep takes too long, then the game visuals will be choppy.
*/
function doo() {}
