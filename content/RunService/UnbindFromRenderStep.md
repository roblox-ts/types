Given a name of a function sent to [BindToRenderStep](https://developer.roblox.com/api-reference/function/RunService/BindToRenderStep), this method will unbind the function from being called during RenderStepped. This is used to unbind bound functions once they are no longer needed, or when they no longer need to fire every *step*.

If there is no bound function by the given name, this method raises an error. You can prevent such an error from being raised by using `pcall`. For example, if you bind a function named `drawImage` using [BindToRenderStep](https://developer.roblox.com/api-reference/function/RunService/BindToRenderStep), the following code would unbind the function, suppressing errors if there wasn't already a function with the name `drawImage` bound.

    local RunService = game:GetService("RunService")

    local success, message = pcall(function() RunService:UnbindFromRenderStep("drawImage") end)

    if success then

        print("Success: Function unbound!")

    else

        print("An error occurred: "..message)

    end
@param name The name of the function being unbound.
@returns None.