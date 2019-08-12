![A humanoid sitting on a Seat.][1]

The Sit property is a boolean that indicates whether the `Humanoid` is currently sitting. [Humanoids](https://developer.roblox.com/api-reference/class/Humanoid) can be forced into a sitting state by setting this property's value to true. If the `Humanoid` isn't attached to a seat while in its sitting state, it will trip over with no collision in its legs. A `Humanoid` can escape from the sitting state by jumping.

## Notes

 - The `Seat` or `VehicleSeat` the `Humanoid` is sitting on can be obtained using the [Humanoid.SeatPart](https://developer.roblox.com/api-reference/property/Humanoid/SeatPart) property

 - It is possible to detect when a Humanoid sits by connecting to the [Humanoid.Seated](https://developer.roblox.com/api-reference/event/Humanoid/Seated) event.

[1]:

/assets/blt8e6f26110beea0c1/SeatPart.png