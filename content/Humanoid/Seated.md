This event fires when a `Humanoid` either sits in a `Seat` or `VehicleSeat` or gets up.

When a [Player.Character](https://developer.roblox.com/api-reference/property/Player/Character) comes into contact with a seat they are attached to the seat and a sitting animation plays. For more information on this, please see the `Seat` page.

The *active* parameter will be true if a player has sat down, and false if they have gotten up. The *currentSeatPart* parameter will be the seat part the humanoid is sitting in if they are sat down, or *nil* if they have gotten up.

## See also

 - You can check if a humanoid is currently sitting using the [Humanoid.Sit](https://developer.roblox.com/api-reference/property/Humanoid/Sit) property

 - You can also check the current humanoid seat part using the [Humanoid.SeatPart](https://developer.roblox.com/api-reference/property/Humanoid/SeatPart) property