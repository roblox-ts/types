The ClearCharacterAppearance function removes all `Hat`, `Shirt`, `Pants`, `CharacterMesh`, and `BodyColors` from the given player's [Player.Character](https://developer.roblox.com/api-reference/property/Player/Character). In addition, it also removes the T-Shirt `Decal` on the player's torso. The character's body part colors and face will remain unchanged. This method does nothing if the player does not have a Character.

##Note

It does not remove [t-shirts](https://developer.roblox.com/api-reference/class/ShirtGraphic), head meshes, or [Faces][1].

[1]: https://developer.roblox.com/api-reference/datatype/Faces
@returns void