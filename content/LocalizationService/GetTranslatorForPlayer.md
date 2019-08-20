This function takes a player an argument and yields until the cloud localization data for that [player's](https://developer.roblox.com/api-reference/class/Player) locale has been loaded, and then returns a `Translator` object which can be used to perform translations for that locale if any are available.

## See also

  - [LocalizationService.GetTranslatorForPlayerAsync](https://developer.roblox.com/api-reference/function/LocalizationService/GetTranslatorForPlayerAsync), same functionality as this function except that it yields until the translator has been loaded

  - [LocalizationService.GetTranslatorForLocaleAsync](https://developer.roblox.com/api-reference/function/LocalizationService/GetTranslatorForLocaleAsync), returns a Translator to be used for translations using the locale data loaded
@param player The `Player` that you are getting the `Translator` for
@returns The `Translator` instance for the specified locale