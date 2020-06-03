Returns the localized text string in a `LocalizationTable` based on its `Translator` locale, by key. The optional **args** table is used for filling format parameters in the matching text entry.

Note that this method will throw an error in the following cases:

* If none of the [LocalizationTables](https://developer.roblox.com/api-reference/class/LocalizationTable) available to this `Translator` include a value for the given key.

* If the [format string](https://developer.roblox.com/search#stq=localization%20format%20strings) for the key uses numbered parameters and **args** is not an array.

* If the [format string](https://developer.roblox.com/search#stq=localization%20format%20strings) uses named parameters and **args** is not a table of key-value pairs.

* If **args** is missing values for parameters that are used in the matching [format string](https://developer.roblox.com/search#stq=localization%20format%20strings).

See [Utilizing Localization APIs](https://developer.roblox.com/search#stq=utilizing%20localization%20apis) for more details and usage examples of this function.
@param key The **Key** value to look up and translate.
@param args If the **Source** text and translations contain `articles/localization format strings|format strings`, a Lua table of values **or** <span class="text-nowrap">key-value</span> pairs, depending on whether the format strings are numbered or named.