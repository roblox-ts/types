The RunService contains methods and events for time-management as well as for managing the context in which a game or script is running. Methods like `IsClient`, `IsServer`, `IsStudio`, can help you determine where Lua code is running. These methods are useful for ModuleScripts that could be required by both the client and server. In addition, you can use `IsStudio` to add special behavior for in-studio testing.

`RunService` also provides events that help you manage time. `Stepped` and `Heartbeat` can be used for game logic while `RenderStepped` can be used for visual effects. These events fire with "delta time" values. `Stepped` also includes the total amount of time passed in a game. Correctly using the change in time values for game logic is important for changing values over time. As a general rule, multiply your change in time by the rate of change to get the amount a value should change in one frame. For example:

    -- Note: delta just means "change in/of"

    speed = deltaPosition / deltaTime

    deltaPosition = speed * deltaTime