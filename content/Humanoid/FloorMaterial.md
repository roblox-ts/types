![A visualization of the FloorMaterial property in action][1]

**FloorMaterial** is a read-only property that describes what type of Material the Humanoid is currently standing on.

It works with both regular parts and terrain voxels.

## Caveats ##

* When the Humanoid is not standing on a floor, the value of this property will be set to *Air*.

  * This occurs because Enum properties cannot have an empty value.

  * This can cause some confusion if a part has its material is set to Air, though in practice, parts are not supposed to use that material in the first place.

* The Humanoid's character model must be able to collide with the floor, or else it will not be detected.

  * You cannot test if the Humanoid is swimming with this property. You should instead use the Humanoid's GetState function.

[1]: https://developer.roblox.com/assets/blt911c31b19922748b/FloorMaterial.gif