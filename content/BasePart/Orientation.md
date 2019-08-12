The Orientation property describes the part's rotation in degrees around the X, Y and Z axes using a Vector3. The rotations are applied in Y → X → Z order. This differs from proper [Euler angles][1], and is instead [Tait–Bryan angles][2] which describe **yaw, pitch and roll**. It is also worth noting how this property differs from the `CFrame.Angles()` constructor, which applies rotations in a different order (Z → Y → X). For better control over the rotation of a part, it is recommended that [BasePart.CFrame](https://developer.roblox.com/api-reference/property/BasePart/CFrame) is set instead.

[1]: https://en.wikipedia.org/wiki/Euler_angles

[2]: https://en.wikipedia.org/wiki/Euler_angles#Tait-Bryan_angles