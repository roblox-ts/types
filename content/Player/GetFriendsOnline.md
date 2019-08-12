The GetFriendsOnline `Player` function returns a [Articles.Table#dictionaries](https://developer.roblox.com/search#stq=Table#dictionaries) of online friends, specified by *maxFriends*.

## The Array's Content

Some fields are only present for certain location types. For example, *PlaceId* won't be present when the location type is *(mobile) website*.

| Name         | Type    | Description                                                                                                                            |
|--------------|---------|----------------------------------------------------------------------------------------------------------------------------------------|
| VisitorId    | number  | The [Player.UserId](https://developer.roblox.com/api-reference/property/Player/UserId) of the friend.                                                                                                              |
| UserName     | string  | The user name of the friend.                                                                                                           |
| LastOnline   | string  | When the user was last online.                                                                                                         |
| IsOnline     | boolean | If the friend is currently online.                                                                                                     |
| LastLocation | string  | The name of the friends current location.                                                                                              |
| PlaceId      | number  | The placeId of the friends last location.                                                                                              |
| GameId       | string  | The [DataModel.JobId](https://developer.roblox.com/api-reference/property/DataModel/JobId) of the friends last location.                                                                                               |
| LocationType | number  | The location type of the friends last location. 0 for mobile website. 1 for mobile in game. 2 for website. 3 for studio. 4 for ingame. |

[1]: http://robloxdev.com/articles/Table#dictionaries
@param maxFriends The maximum number of online friends to return. The default is 200.
@returns An dictionary of online friends (see the table in the description to see what each the format of an entry).
### TS Usage
One should check the LocationType of each member of this array in order to verify which members are present. Should be compared to the LocationType const enum.