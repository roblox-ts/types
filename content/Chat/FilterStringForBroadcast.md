Filters a string sent from *playerFrom* for broadcast to no particular target. The filtered message has more restrictions than [Chat.FilterStringAsync](https://developer.roblox.com/api-reference/function/Chat/FilterStringAsync).

Some examples of where this method could be used:

 - -Message walls

 - -Cross-server shouts

 - -User-created signs

Calling FilterString from `LocalScript`s is deprecated and will be disabled in the future. Text filtering should be done from server-side `Script`s using FilterStringAsync.

*Note:* A game not using this filter function for custom chat or other user generated text may be subjected to moderation action.
@param stringToFilter Message string being filtered
@param playerFrom Instance of the player sending the message
@returns Filtered message string