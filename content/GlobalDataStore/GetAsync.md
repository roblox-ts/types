This function returns the value of the entry in the `GlobalDataStore` with the given key. If the key does not exist, returns `nil`. This function caches for about 4 seconds, so you cannot be sure that it returns the current value saved on the Roblox servers.

If this function throws an error, the [error message](https://developer.roblox.com/search#stq=Datastore%20Errors) will describe the problem. Note that there are also [limits](https://developer.roblox.com/search#stq=Datastore%20Errors) that apply to this function.

To save a data store entry, you can use one of several possible functions, including [SetAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/SetAsync), [UpdateAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/UpdateAsync), and [IncrementAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/IncrementAsync).
@param key The key identifying the entry being retrieved from the data store
@returns The value of the entry in the data store with the given key