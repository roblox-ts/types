The GetFriends `Players` function returns a `FriendPages` object which contains information for all of the given [Player's](https://developer.roblox.com/api-reference/class/Player) friends. The items within the FriendPages object are tables with the following fields:

| Name | Type | Description |
| --- | --- | --- |
| Id | int64 | The friend's UserId |
| Username | string | The friend's username |
| IsOnline | bool | If the friend is currently online |

See the code samples for an easy way to iterate over all a player's friends.
@param userId The **userId** of the player being specified.
@returns A `FriendPages` object which contains information for all of the given player's friends.