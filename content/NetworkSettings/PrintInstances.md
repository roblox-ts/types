PrintInstances is an internal property that prints debug information about instance replication across the server/client boundary.

There are several debug outputs that are made available when this property is set to true, as listed below.

Note that this property is intended for Roblox engineers who are debugging network replication.

This documentation may become outdated in the future, as Roblox's network code is always changing behind the scenes.

---

Instance Creation

**When a new Instance is replicated, the following debug message is printed:**

`Replication NewInstance::write from cache: {1}:{2}:{3} &gt;&gt; {4}, {5} bits`

**The numbers in curly braces are substituted, and can be described as:**

• `{1}` – The [Instance.ClassName](https://developer.roblox.com/api-reference/property/Instance/ClassName) of the new Instance.

• `{2}` – The GUID string of the new Instance (which can be retrieved via [Instance.GetDebugId](https://developer.roblox.com/api-reference/function/Instance/GetDebugId)).

• `{3}` – The [Instance.Name](https://developer.roblox.com/api-reference/property/Instance/Name) of the new Instance.

• `{4}` – The IP address of the peer creating the Instance.

• `{5}` – The number of bits that were written to create the Instance.

---

Instance Removal

---

**When the removal of an Instance is requested, the following debug message is printed:**

`Replication: ~{1}:{2} &lt;&lt; {3}`

**The numbers in curly braces are substituted, and can be described as:**

• `{1}`  – The [Instance.ClassName](https://developer.roblox.com/api-reference/property/Instance/ClassName) of the new Instance.

• `{2}` – The GUID string of the new Instance (which can be retrieved via [Instance.GetDebugId](https://developer.roblox.com/api-reference/function/Instance/GetDebugId)).

• `{3}` – The IP address of the peer requesting the removal of the Instance.

---