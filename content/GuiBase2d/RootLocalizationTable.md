A reference to a `LocalizationTable` to be used to apply automated localization to this GuiBase2d and its descendants.

The [GuiBase2d.AutoLocalize](https://developer.roblox.com/api-reference/property/GuiBase2d/AutoLocalize) property must be set to true on this object and its ancestors for automated localization to be applied.

You can set this to reference a LocalizationTable anywhere in the DataModel. It is not required to be a child of LocalizationService.

When RootLocalizationTable is set on a GUI object then that object and all of its children will use that specific LocalizationTable and its parents for automatic text replacement, instead of using the tables under LocalizationService in an undefined order.

If there is no translation available in the referenced table it will look for a translation in the parent of that table, if it is also a LocalizationTable, and so on.