The RenderStepped event fires when a frame is rendered on the client. It fires at around 60 times per second, so the time step is around 0.0166 seconds. If the framerate drops, this event fires less often.

There's no guarantee that functions connected to this event will fire at the exact same time. To be sure that certain functions are called in synchronization with each other, use [RunService.BindToRenderStep](https://developer.roblox.com/api-reference/function/RunService/BindToRenderStep) instead, which allows specification of a "render priority".

Also note that RenderStepped must only be used in `LocalScript`s, as they refer to each frame that is being rendered.