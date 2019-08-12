Sets the value of the key. This overwrites any existing data stored in the key.

If the previous value of the key is important, use [UpdateAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/UpdateAsync) instead. Using [GetAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/GetAsync) to retrieve a value and then setting the key with [SetAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/SetAsync) is risky because [GetAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/GetAsync) sometimes returns cached data and other game servers may have modified the key.

Any string being stored in a data store must be valid [UTF-8](https://developer.roblox.com/search#stq=Lua%20Libraries/utf8). In UTF-8, values greater than 127 are used exclusively for encoding multi-byte codepoints, so a single byte greater than 127 will not be valid UTF-8 and the [SetAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/SetAsync) attempt will fail.

If this function throws an error, the [error message](https://developer.roblox.com/search#stq=Datastore%20Errors) will describe the problem. Note that there are also [limits](https://developer.roblox.com/search#stq=Datastore%20Errors) that apply to this function.

See the [Data Stores](https://developer.roblox.com/search#stq=Data%20store) article for an in-depth guide on data structure, management, error handling, etc.
@param key The key identifying the entry being retrieved from the data store
@param value The value of the entry in the data store with the given key
@returns void