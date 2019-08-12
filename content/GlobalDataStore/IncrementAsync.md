Increments the value for a particular key and returns the incremented value. Only works on values that are integers. Note that you can use [OnUpdate()](https://developer.roblox.com/api-reference/function/GlobalDataStore/OnUpdate) to execute a function every time the database updates the key's value, such as after calling this function.

If this function throws an error, the [error message](https://developer.roblox.com/search#stq=Datastore%20Errors) will describe the problem. Note that there are also [limits](https://developer.roblox.com/search#stq=Datastore%20Errors) that apply to this function.

See the [Data Stores](https://developer.roblox.com/search#stq=Data%20store) article for an in-depth guide on data structure, management, error handling, etc.
@param key The key identifying the entry being retrieved from the data store
@param delta The increment amount
@returns The value of the entry in the data store with the given key