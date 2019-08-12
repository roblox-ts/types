Filters a [string](https://developer.roblox.com/articles/String) being sent to _playerTo_ from _playerFrom_ with filtering that is appropriate to the given player's account settings. This function should be used any time a user can enter custom text in any context. Some examples of text that should be filtered:

* Custom chat messages

* Entering a custom character name

* Entering a name for a shop in a tycoon

If the filtered string is being used for a persistent message (such as the name of a shop, writing on a plaque, etc) then the function should be called with the writing player as both the sender and receiver.

Calling FilterString from LocalScripts is deprecated and will be disabled in the future. Text filtering should be done from server-side Scripts using [TextService.FilterStringAsync](https://developer.roblox.com/api-reference/function/TextService/FilterStringAsync).

A game not using this filter function for custom chat or other user generated text may be subjected to moderation action.