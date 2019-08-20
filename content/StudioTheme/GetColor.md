The **GetColor()** function returns the [DataType.Color3](https://developer.roblox.com/search#stq=Color3) corresponding to the arguments provided. For instance, if you would like to get the [DataType.Color3](https://developer.roblox.com/search#stq=Color3) of the Studio "MainButton" when it's **disabled**, you can use the following code:

```lua
settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.MainButton, Enum.StudioStyleGuideModifier.Disabled)
```

See the [StudioStyleGuideColor](https://developer.roblox.com/search#stq=StudioStyleGuideColor) reference for a list of Studio elements and [StudioStyleGuideModifier](https://developer.roblox.com/search#stq=StudioStyleGuideModifier) for a list of modifiers.
@param styleguideitem The element you want to get the theme color for
@param modifier The modifier you want to place on the `StyleGuideColor` element
@returns The corresponding Color3 theme value