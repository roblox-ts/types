This function removes the given key from the provided `GlobalDataStore` and returns the value that was associated with that key. If the key is not found in the data store, this function returns `nil`.

If this function throws an error, the [error message](https://developer.roblox.com/search#stq=Datastore%20Errors) will describe the problem. Note that there are also [limits](https://developer.roblox.com/search#stq=Datastore%20Errors) that apply to this function.

See the [Data Stores](https://developer.roblox.com/search#stq=Data%20store) article for an in-depth guide on data structure, management, error handling, etc.
@param key The key identifying the entry being retrieved from the data store
@returns The value that was associated with the data store key, or `nil` if the key was not found