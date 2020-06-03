This function returns information about a player's avatar (ignoring gear) on the Roblox website in the form of a dictionary. It is not to be confused with [GetCharacterAppearanceAsync](https://developer.roblox.com/api-reference/function/Players/GetCharacterAppearanceAsync), which actually loads the assets described by this method. You can use [InsertService.LoadAsset](https://developer.roblox.com/api-reference/function/InsertService/LoadAsset) to load the assets that are used in the player's avatar. The structure of the returned dictionary is as follows:

| Name | Type | Description |
| --- | --- | --- |
| `bodyColors` | table (see below) | Describes the BrickColor values for each limb |
| `assets` | table (see below) | Describes the equipped assets (hats, body parts, etc) |
| `defaultPantsApplied` | bool | Describes whether default pants are applied |
| `defaultShirtApplied` | bool | Describes whether default shirt is applied |
| `playerAvatarType` | string | Either "R15" or "R6" |
| `scales` | table (see below) | Describes various body scaling factors |

### Assets sub-table

The assets table is an array of tables containing the following keys that describe the assets currently equipped by the player:

| Name | Type | Description |
| --- | --- | --- |
| `id` | number | The asset ID of the equipped asset |
| `assetType` | table | A table with `name` and `id` fields, each describing the kind of asset equipped ("Hat", "Face", etc.) |
| `name` | string | The name of the equipped asset |

### Scales sub-table

The scales table has the following keys, each a number corresponding to one `Humanoid` scaling property:

`bodyType`, `head`, `height`, `proportion`, `depth`, `width`

### Body Colors sub-table

The body colors table has the following keys, each a number corresponding to a [DataType.BrickColor](https://developer.roblox.com/search#stq=BrickColor) ID number which can be used with `BrickColor.new(id)`: `leftArmColorId`, `torsoColorId`, `rightArmColorId`, `headColorId`, `leftLegColorId`, `rightLegColorId`
@param userId The **userId* of the specified player.
@returns A dictionary containing information about the character appearance of a given user.