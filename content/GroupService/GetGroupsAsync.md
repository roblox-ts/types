Returns a list of tables containing information on all of the groups a given player is a member of.

The list returned will include an entry for every group the player is a member of. These entries are tables with the following fields.

 - **Name:** The group's name

 - **Id:** The group ID

 - **EmblemUrl:** An asset url linking to the group's thumbnail (for example: http://www.roblox.com/asset/?id=276165514)

 - **EmblemId:** The assetId of the emblem, the same which is used in the EmblemUrl

 - **Rank:** The rankId the player has (for example: 255 for the owner)

 - **Role:** The name of the player's grouprank (for example: Group Owner)

 - **IsPrimary:** A boolean indicating if this is the player's primary group

 - **IsInClan:** A boolean indicating if the player is in this group's clan

Note unlike [GroupService.GetAlliesAsync](https://developer.roblox.com/api-reference/function/GroupService/GetAlliesAsync) and [GroupService.GetEnemiesAsync](https://developer.roblox.com/api-reference/function/GroupService/GetEnemiesAsync), GetGroupsAsync returns a table rather than a `StandardPages` object.
@param userId The `Player/UserId` of the user.
@returns An array of dictionaries containing information on the group's the player is a member of.