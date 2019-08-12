Sets whether the `SlidingBallConstraint` will limit the range of translation. If enabled, the [SlidingBallConstraint.CurrentPosition](https://developer.roblox.com/api-reference/property/SlidingBallConstraint/CurrentPosition) of the SlidingBallConstraint will only be able to be between the values of [SlidingBallConstraint.LowerLimit](https://developer.roblox.com/api-reference/property/SlidingBallConstraint/LowerLimit) and [SlidingBallConstraint.UpperLimit](https://developer.roblox.com/api-reference/property/SlidingBallConstraint/UpperLimit).

Here is a case where the UpperLimit is 2 and the LowerLimit is 1:

![Constraint Limits 1][1]

Here is a case where the UpperLimit is 4 and the LowerLimit is 2. Note that in this case the attachments will never be allowed to overlap; they will always be offset:

![Constraint Limits 2][2]

[1]: https://developer.roblox.com/assets/5b61fe15ba048a343db86452/SlidingBallConstraintLimits0.png

[2]: https://developer.roblox.com/assets/5b61fe15cf5f5e183db66841/SlidingBallConstraintLimits1.png