Returns a `DataStorePages` object. The sort order is determined by **isAscending**, the length of each page by **pageSize**, and **minValue***maxValue** are optional parameters which filter the results.

If this function throws an error, the [error message](https://developer.roblox.com/search#stq=Datastore%20Errors) will describe the problem.
@param ascending A boolean indicating whether the returned data pages are in ascending order.
@param pagesize The length of each page.
@param minValue Optional parameter. If set, data pages with a value less than than **minValue** will be excluded.
@param maxValue Optional parameter. If set, data pages with a value greater than **maxValue** will be excluded.
@returns A sorted `DataStorePages` object based on the provided arguments.