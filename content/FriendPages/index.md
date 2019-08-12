FriendPages is a special version of the `Pages` returned by [Players.GetFriendsAsync](https://developer.roblox.com/api-reference/function/Players/GetFriendsAsync). The items contained within describe information about a player's friends, and have the following structure:

| Name | Type | Description |
| --- | --- | --- |
| `Id` | int64 | The user ID of the friend |
| `Username` | string | The current username of the friend |
| `IsOnline` | boolean | Whether or not the user is presently online. |

See the code samples for an easy way to iterate over a player's friends.