A LocalizationTable is a database of translations. It contains source strings and translations for various languages. It is used with `Translator` and the `LocalizationService` auto-translator system to control text translations in the game.

LocalizationTables are designed to be treated as resources, like a texture or a script. They are not optimized to be modified at runtime. Changing a the contents of a table will cause the entire contents of the table to be replicated to all players.

## LocalizationTable Entries

Each LocalizationTable contains a set of entries. Each entry contains the translations of the text, along with some special fields:

* **Key** is an optional unique key for fast hash lookups in code. If it is non-empty it must be unique in the table.

* **Source** is the orignal text in the source language that will be used by the `LocalizationService` automatic text replacement system to match GUI text and render a translation instead. The Source field can be filled by the text capture tools, or can be set manually. For key-based lookups the Source value can be used as a translation for [LocalizationTable.SourceLocaleId](https://developer.roblox.com/api-reference/property/LocalizationTable/SourceLocaleId) if the entry doesn't have a translation for that locale. If Source is empty then the entry will not be used by the automatic replacement system.

* **Context** is the full Instance name for the object that the text appeared on. Context is used for disambiguation by the automatic text replacement system. When multiple matches for the Source are found, the system will pick the best match by matching backwards from the end of the Context string. There are other more robust ways to handle disambiguation available as well, like using multiple tables with [GuiBase2d.RootLocalizationTable](https://developer.roblox.com/api-reference/property/GuiBase2d/RootLocalizationTable).

* **Example** is whatever you want it to be. If the text capture tool guessed some parameters for a string the Example field will contain an example of them used in context.

All of these fields are optional, but at least either Key or Source must be non-empty. No two entries can have the same Key, Source, and Context.

The **Source** field and all translation strings must be valid [LocalizationService format strings](https://developer.roblox.com/articles/Format-Strings).