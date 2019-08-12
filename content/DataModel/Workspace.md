The Workspace property is a reference to the `Workspace` service.

This property will always point to the `Workspace` and will never be *nil*.

The `Workspace` can also be accessed using the global variable `workspace` and the [ServiceProvider.GetService](https://developer.roblox.com/api-reference/function/ServiceProvider/GetService) function. For example:

```lua
workspace -- a global variable
game.Workspace -- a property of the DataModel (game)
game:GetService("Workspace") -- workspace is a service
```
