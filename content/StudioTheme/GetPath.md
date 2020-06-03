The GetPath function returns the path of an asset (or image) for the `Id` and `Modifier`. We can have different icons to be loaded depending on the theme.

The `StyleGuideModifer` argument's default value is `Enum\StyleGuideModifier`, which applies no modifier.

This is intended for use within [Plugins](https://developer.roblox.com/api-reference/class/Plugin), but will also execute in the Command Line.

For instance, if you would like to get the path of the "MoreButton" image, you would use the following code:

```lua

settings().Studio.Theme:GetPath("MoreButton")
@param assetid The asset id you want the path for
@param modifier The modifier you want to apply to the specified asset
@returns The path of the id with the modifier