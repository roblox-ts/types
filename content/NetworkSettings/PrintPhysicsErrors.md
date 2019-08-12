When set to true, debug messages will be printed into the output, pertaining to physics replication errors. There are several debug outputs that are made available when this property is set to true, as listed below.

Note that this property is intended for Roblox engineers who are debugging network replication. This documentation may become outdated in the future, as Roblox’s network code is always changing behind the scenes.

---

Outdated Physics Packet

This following debug message is printed if the PhysicsReceiver receives a mechanism update packet for a part that has been updated ahead of the packet's submission time:

`Physics-in old packet`

This happens if the packet is received late, and a newer packet has already been processed.

---

Unknown Part

This following debug message is printed if the PhysicsReceiver cannot find the part that is trying to be updated, because the provided Instance identifier was invalid:

`Physics-in of unidentified {GUID}`

(Where `{GUID}` is the unknown [Instance.GetDebugId](https://developer.roblox.com/api-reference/function/Instance/GetDebugId) identifier that is supposed to be targeting the part)

This typically happens if a part is removed before the physics update packet is received.

---

Invalid Part

This following debug message is printed if the PhysicsReceiver receives a request to update the physics of a part that is not a descendant of the Workspace:

`Physics-in of part not in workspace {GUID}`

(Where `{GUID}` is the [Instance.GetDebugId](https://developer.roblox.com/api-reference/function/Instance/GetDebugId) identifier of the target part)

This usually happens if the part was just moved out of the Workspace, and was previously being simulated.

---