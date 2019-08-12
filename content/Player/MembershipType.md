The MembershipType `Player` property can be used to determine the membership type of the player. It holds an Enum of the account's membership type (NBC, BC, TBC and OBC). The enum held is [Enum.MembershipType](https://developer.roblox.com/search#stq=MembershipType).

##Note

This property can only be read from to determine membership. It cannot be set to another membership type. The property can only be changed via `CoreScript`s using [Player.SetMembershipType](https://developer.roblox.com/api-reference/function/Player/SetMembershipType) - which are not accessible.