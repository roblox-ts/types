This function takes a player an argument and yields until the cloud localization data for that player's locale has been loaded, and then returns a `Translator` object which can be used to perform translations for that locale if any are available.

This function can error and thus should be wrapped in a pcall.

## See also

  - [LocalizationService.GetTranslatorForPlayer](https://developer.roblox.com/api-reference/function/LocalizationService/GetTranslatorForPlayer), same functionality as this function except that it does not yield

  - [LocalizationService.GetTranslatorForLocaleAsync](https://developer.roblox.com/api-reference/function/LocalizationService/GetTranslatorForLocaleAsync), returns a Translator to be used for translations using the locale data loaded
@param player The `Player` that you are getting the `Translator` for
@returns The `Translator` instance for the specified locale