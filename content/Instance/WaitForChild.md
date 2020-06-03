Returns the child of the `Instance` with the given name. If the child does not exist, it will yield the current thread until it does.

If the *timeOut* parameter is specified, this function will return nil and time out after *timeOut* seconds elapsing without the child being found.

## Where should I use WaitForChild?

WaitForChild is extremely important when working on code ran by the client. Roblox does not guarantee the time or order in which objects are replicated from the server to the client. This can cause scripts to break when indexing objects that do not exist yet.

For example, a `LocalScript` may access a `Model` in the `Workspace` called 'Ship' like so:

```lua
local ship = workspace.Ship
-- Will error if ship hasn't replicated
```

However if the model 'Ship' has not replicated to the client when this code is ran an error will be returned breaking the `LocalScript`.

Another alternative is using [Instance.FindFirstChild](https://developer.roblox.com/api-reference/function/Instance/FindFirstChild). Not only is this good practice when indexing objects in the `DataModel` (as it avoids accidentally accessing properties) but it does not break if the object does not exist. For example:

```lua
local ship = workspace:FindFirstChild("Ship")
-- Won't error, but ship will be nil if the ship hasn't replicated
```

Here, if the model doesn't exist the code will not error. Instead the value ship will be equal to nil. This is better, but still not much good if we want to use the ship model.

Instead WaitForChild should be used:

```lua
local ship = workspace:WaitForChild("Ship")
-- Will wait until the ship has replicated before continuing
```

Here, the thread will be yielded until the ship model has been found. This means the ship model can be used as soon as it is ready.

## Notes

 - If a call to this function exceeds 5 seconds without returning, and no *timeOut* parameter has been specified, a warning will be printed to the output that the thread may yield indefinitely

 - This function will return immediately without yielding if the child exists when the call is made

 - WaitForChild is less efficient than [Instance.FindFirstChild](https://developer.roblox.com/api-reference/function/Instance/FindFirstChild) or the dot operator. Therefore it should only be used when the developer is not sure if the object has replicated to the client. Generally this is only the first time the object is accessed
@param childName The `Instance/Name` to be looked for.
@param timeOut An optional time out parameter.
@returns The `Instance` found.