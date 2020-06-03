LocalizationService is the service responsible for handling automated translation.

It is used as a storage for `LocalizationTable` objects used by automatic text replacement.

LocalizationService will only use its child LocalizationTables for automatic text replacement unless [GuiBase2d.RootLocalizationTable](https://developer.roblox.com/api-reference/property/GuiBase2d/RootLocalizationTable) is specified on a GUI object or its ancestors.