Returns a table containing information about the given group.

The table returned is the same format as that returned in [GroupService.GetAlliesAsync](https://developer.roblox.com/api-reference/function/GroupService/GetAlliesAsync) and [GroupService.GetEnemiesAsync](https://developer.roblox.com/api-reference/function/GroupService/GetEnemiesAsync). This format can be seen below.

```lua
group = {
	Name = "Knights of the Seventh Sanctum",
	Id = 377251,
	Owner = {
		Name = "Vilicus",
		Id = 23415609
	},
	EmblemUrl = "http://www.roblox.com/asset/?id=60428602",
	Description = "We fight alongside the balance to make sure no one becomes to powerful",
	Roles = {
		[1] = {
			Name = "Apprentice",
			Rank = 1
		},
		[2] = {
			Name = "Warrior",
			Rank = 2
		},
		[3] = {
			Name = "Earth Walker",
			Rank = 255
		}
	}
}
```

Note, if a group has no owner the Owner field will be set to nil.

This function has a number of useful applications, including loading the latest description and logo of a group for display in a group base.
@param groupId The group ID of the group.
@returns A dictionary of information about the group.