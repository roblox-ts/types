This function takes a language code as an argument and yields until the cloud localization data for that locale has been loaded, and then returns a `Translator` object which can be used to perform translations for that locale if any are available.

This function can error and thus should be wrapped in a [pcall](https://developer.roblox.com/search#stq=Built-in%20Functions%20&%20Variables%20—%20Lua).

## See also

  - [LocalizationService.GetTranslatorForPlayer](https://developer.roblox.com/api-reference/function/LocalizationService/GetTranslatorForPlayer), same functionality as this function except that it does not yield

  - [LocalizationService.GetTranslatorForPlayerAsync](https://developer.roblox.com/api-reference/function/LocalizationService/GetTranslatorForPlayerAsync), same functionality as this function except that it yields until the translator has been loaded
@param locale A Roblox supported language code. The currently supported language codes are “en” (English), “fr” (French), “de” (German), “ko” (Korean), “pt” (Portuguese), “es” (Spanish)
@returns The `Translator` instance for the specified locale