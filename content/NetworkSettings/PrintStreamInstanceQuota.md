When set to true, debug information is printed to the output regarding the replication of instances when [Workspace.StreamingEnabled](https://developer.roblox.com/api-reference/property/Workspace/StreamingEnabled) is set to true. There are several debug outputs that are made available when this property is set to true, as listed below.

Note that this property is intended for Roblox engineers who are debugging network replication. This documentation may become outdated in the future, as Roblox’s network code is always changing behind the scenes.

---

Streaming Capacity Update

When the client's streaming capacity is updated, the following debug message will be printed:

`clientInstanceQuota {1}, packet in queue {2}, predictedTotalInstanceProcessTime {3}, avgStreamDataReadTime {4}, avgInstancesPerStreamData {5}`

**The numbers in curly braces are substituted, and can be described as:**

• `{1}` – The id of the client instance quota.

• `{2}` – The current number of incoming packets that have been queued.

• `{3}` – A prediction for how long it will take to update the quota.

• `{4}` – The current average time it takes to read the stream data.

• `{5}` – The average number of instances in the stream data.

---

Instance Quota Update

When the client receives an instance quota update, the following debug message will be printed:

`Received new client instance quota: {1}, max region radius: {2}`

**The numbers in curly braces are substituted, and can be described as:**

• `{1}` – The id of the client instance quota.

• `{2}` – The maximum radius of space around the client's [Player.ReplicationFocus](https://developer.roblox.com/api-reference/property/Player/ReplicationFocus) that can have physical instances streamed in.

---