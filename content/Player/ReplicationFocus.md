The ReplicationFocus `Player` property sets the part to focus replication around a Player. Different Roblox systems that communicate over the network (such as physics, streaming, etc) replicate at different rates depending on how close objects are to the replication focus.

When this property is nil, it reverts to its default behavior which is to treat the local player's character's head as the replication focus.

This property should only be set on the server with a `Script`, not a `LocalScript`. Note that this property does not change or update network ownership of parts.