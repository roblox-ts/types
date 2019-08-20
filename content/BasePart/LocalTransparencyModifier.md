The LocalTransparencyModifier property is a multiplier to [BasePart.Transparency](https://developer.roblox.com/api-reference/property/BasePart/Transparency) that is only visible to the local client. It does not replicate from client to server. It is useful for when a part should not render for a specific client, such as how the player does not see their character’s body parts when they zoom into first person mode.

The property modifies the local part’s transparency increases a part’s transparency on a scale from 0 to 1 using the following formula:

```lua
	-- Calculate the part’s client-side transparency. Values greater than 1 round down to 1.
part.localTransparencyModifier)
```

Take a look at the table below for an example of how this property affect’s a part’s client-side transparency:

| Transparency | LocalTransparencyModifier | Server-Side Transparency | Client-Side Transparency | Description                                                                                                                                                                              |
|--------------|---------------------------|--------------------------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0.5          | 0                         | 0.5                      | 0.5                      | A modifier value of 0.5 means that the part's client-side transparency is affected as follows: 0.5 + 1*0 = 0.5. The part's client-side transparency equals its server-side transparency. |
| 0.5          | 0.5                       | 0.5                      | 0.75                     | A modifier value of 0.5 means that the part's client-side transparency is affected as follows: 0.5 + 1*0.5 = 0.75                                                                        |
| 0.5          | 1                         | 0.5                      | 1                        | A modifier value of 1 means that the part's client-side transparency is affected as follows: 0.5 + 1*1 = >1. The client does not render the part.                                        |