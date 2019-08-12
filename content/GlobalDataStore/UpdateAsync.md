This function retrieves the value of a key from a data store and updates it with a new value. Since this function validates the data, it should be used in favor of [SetAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/SetAsync) when there's a chance that more than one server can edit the same data at the same time.

The second parameter is a function which you need to provide. The function takes the key's old value as input and returns the new value, with these exceptions:

 * If the key does not exist, the old value passed to the function will be `nil`.

 * If the function returns `nil`, the update is cancelled.

The value returned by this function is the new value, returned once the altered data is properly saved.

In cases where another game server updated the key in the short timespan between retrieving the key's current value and setting the key's value, [UpdateAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/UpdateAsync) will call the function again to ensure that no data is overwritten. The function will be called as many times as needed until the data is saved.

The function you define as the second parameter of [UpdateAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/UpdateAsync) cannot yield, so do **not** include calls like `wait()`.

Any string being stored in a data store must be valid [UTF-8](https://developer.roblox.com/search#stq=Lua%20Libraries/utf8). In UTF-8, values greater than 127 are used exclusively for encoding multi-byte codepoints, so a single byte greater than 127 will not be valid UTF-8 and the [UpdateAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/UpdateAsync) attempt will fail.

If this function throws an error, the [error message](https://developer.roblox.com/search#stq=Datastore%20Errors) will describe the problem. Note that there are also [limits](https://developer.roblox.com/search#stq=Datastore%20Errors) that apply to this function.

See the [Data Stores](https://developer.roblox.com/search#stq=Data%20store) article for an in-depth guide on data structure, management, error handling, etc.
@param key The key identifying the entry being retrieved from the data store.
@param transformFunction A function which you need to provide. The function takes the key's old value as input and returns the new value.
@returns The value of the entry in the data store with the given key.