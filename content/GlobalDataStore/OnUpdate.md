This function sets **callback** as the function to be executed any time the value associated with the [data store's](https://developer.roblox.com/api-reference/class/GlobalDataStore) key changes. For instance, the connected function will execute when functions like [IncrementAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/IncrementAsync), [SetAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/SetAsync), and [UpdateAsync()](https://developer.roblox.com/api-reference/function/GlobalDataStore/UpdateAsync) change the key's value in the data store.

See the [Data Stores](https://developer.roblox.com/search#stq=Data%20store) article for an in-depth guide on data structure, management, error handling, etc.

It's recommended that you **disconnect** the connection when the subscription to the key is no longer needed.
@param key The key identifying the entry being retrieved from the data store
@param callback The function to be executed any time the value associated with **key** is changed
@returns The connection to the key being tracked for updates