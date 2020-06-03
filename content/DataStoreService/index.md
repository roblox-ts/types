**DataStoreService** exposes methods for getting `GlobalDataStore` and `OrderedDataStore` objects. Data stores can only be accessed by game servers, so you can only use **DataStoreService** within a `Script` or a `ModuleScript` that is used by a `Script`.

## Using Data Stores in Studio

**DataStoreService** cannot be used in Studio if a game is not configured to allow access to API services. See the [Data Stores](https://developer.roblox.com/search#stq=Data%20store) article for instructions.

## Request Limits

There are limits applied to the data store model. Please see [Data Store Errors and Limits](https://developer.roblox.com/search#stq=Datastore%20Errors) for details.
@rbxts server