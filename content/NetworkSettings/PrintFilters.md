PrintFilters is a diagnostics property that allows developers to see what changes are being filtered while [Workspace.FilteringEnabled](https://developer.roblox.com/api-reference/property/Workspace/FilteringEnabled) is set to true. It's important to note that this property will only work while in a local server.

When set to true, there are several conditions where warnings will be printed into the output, as listed below:

----------

Instance Replication

If the client creates an instance and parents it into another instance that is visible to the server, the following warning is printed:

"**Filtering is enabled. New Instance `{1}` will not be replicated.**"

•  `{1}` — The hierarchical location of the hew instance in the `DataModel`.

----------

Property Replication

If the client changes the property of an instance that is visible to the server, the following warning is printed:

"**Filtering is enabled. Property `{1}` change for instance `{2}` will not be replicated.**"

• `{1}` — The name of the property.

• `{2}` — The hierarchical location of the instance in the `DataModel`.

----------

Event Replication

If an instance's event is fired by the client and it's normally able to replicate to the server, the following warning is printed:

"**Filtering is enabled. Event `{1}` for instance `{2}` will not be replicated.**"

• `{1}` — The name of the event.

• `{2}` — The hierarchical location of the instance in the `DataModel`.

----------

Terrain Voxel Replication

If the client changes a `Terrain` cell, the following warning is printed:

"**Filtering is enabled, terrain cell change will not be replicated.**"

----------