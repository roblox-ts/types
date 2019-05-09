/** This function causes the `Humanoid` to walk in the given direction.

When used on a NPC (Non Player Character) this function will cause the `Humanoid` to move until it is called again.
This function can be called on the client and the server, but the *relativeToCamera* paramater will not work correctly on the server as it has no `Camera`.

For `Player` `Character|Characters` however this function needs calling every frame as the default control scripts overwrite it. This should be run from a `LocalScript` on the client. See below for an example:

```
RunService:BindToRenderStep("move",
```lua
-- run after the character
Enum.RenderPriority.Character.Value + 1,
function()
 if localPlayer.Character then
 -- can save the below by using localPlayer:Move() instead
 local humanoid = localPlayer.Character:FindFirstChild("Humanoid")
 if humanoid then
 humanoid:Move(Vector3.new(0, 0, -1), true)
 end
 end
end
```)
```

## See also

 - To make a`Humanoid` walk to a point, use the `MoveTo` function
 - For `Players` the `Move|Player:Move` function exists that calls this function

### Code Samples

*/
function zoom(){}
