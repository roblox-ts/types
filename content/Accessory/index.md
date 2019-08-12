The Accessory class is an extension to the `Hat` class, and is also the successor to the legacy Hat system.

It's designed to be cross-compatible with both the legacy R6 character system, and the new R15 character system.

If an `Attachment` is inserted into the Accessory's Handle with the same name as an `Attachment` found in one of the character's limbs, they will connect, and the properties inherited from the `Accoutrement` class will be ignored. Otherwise, the Accessory functions identically to a `Hat`.

Note: If two matching `Attachment` are found the resulting `Weld` will be a child of the Handle of the Accessory. This differs from the legacy behavior of Hats where the Weld is always a child of the Head of the character.