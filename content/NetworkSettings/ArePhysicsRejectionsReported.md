When set to true, a debug message will be printed to the output in cases where the physics receiver rejects a request that it received.

Note that this property is intended for Roblox engineers who are debugging network replication. This documentation may become outdated in the future, as Roblox's network code is always changing behind the scenes.

---

Incorrect Root Primitive

If a part receiving physics changes is not the root primitive of the assembly it belongs to, the following debug message is printed:

`!isAssemblyRootPrimitive {PartName}`

(Where `{PartName}` is the name of the part.)

---

Grounded Part

If the part receiving physics changes is grounded (see: [BasePart.IsGrounded](https://developer.roblox.com/api-reference/function/BasePart/IsGrounded)), then the following debug message is printed:

`computeIsGrounded {PartName}`

(Where `{PartName}` is the name of the part.)