When set to true, debug information is printed regarding messages that have been split up into multiple packets.

Note that this property is intended for Roblox engineers who are debugging network replication. This documentation may become outdated in the future, as Roblox’s network code is always changing behind the scenes.

---

Debug Output Format

The debug outputs are formatted as such:

`split message, id {1}, size {2}, split count {3}`

**The numbers in curly braces are substituted, and can be described as:**

• `{1}` – The id of the split packet.

• `{2}` – The number of bits being transmitted in each payload.

• `{3}` – The total number of split packets that should be received.

---