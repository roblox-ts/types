When set to true, a debug message will be printed to the output, when a physics `Touched` event is replicated. This includes the [BasePart.Touched](https://developer.roblox.com/api-reference/event/BasePart/Touched) event, and the [BasePart.TouchEnded](https://developer.roblox.com/api-reference/event/BasePart/TouchEnded) event.

Note that this property is intended for Roblox engineers who are debugging network replication. This documentation may become outdated in the future, as Roblox’s network code is always changing behind the scenes.

---

Sending 'Contact Start'

When the replicator is sending that contact between two parts has started, the following debug message will be printed:

`Replication: Touch:{1}-&gt;{2} &gt;&gt; {3}, bytes: {4}`

**The numbers in curly braces are substituted, and can be described as:**

• `{1}` – The name of the 1st part.

• `{2}` – The name of the 2nd part.

• `{3}` – The IP of the peer sending the change.

• `{4}` – The number of bytes that were sent to send the change.

---

Sending 'Contact End'

When the replicator is sending that contact between two parts has ended, the following debug message will be printed:

`Replication: Untouch:{1}-&gt;{2} &gt;&gt; {3}, bytes: {4}`

**The numbers in curly braces are substituted, and can be described as:**

• `{1}` – The name of the 1st part.

• `{2}` – The name of the 2nd part.

• `{3}` – The IP of the peer sending the change.

• `{4}` – The number of bytes that were sent to send the change.

---

Receiving 'Contact Start'

When the replicator is receiving that contact between two parts has started, the following debug message will be printed:

`Replication: Touch:{1}-&gt;{2} &lt;&lt; {3}`

**The numbers in curly braces are substituted, and can be described as:**

• `{1}` – The name of the 1st part.

• `{2}` – The name of the 2nd part.

• `{3}` – The IP of the peer receiving the change.

---

Receiving 'Contact End'

When the replicator is receiving that contact between two parts has ended, the following debug message will be printed:

`Replication: Untouch:{1}-&gt;{2} &lt;&lt; {3}`

**The numbers in curly braces are substituted, and can be described as:**

• `{1}` – The name of the 1st part.

• `{2}` – The name of the 2nd part.

• `{3}` – The IP of the peer receiving the change.

---