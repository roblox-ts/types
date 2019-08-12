This function returns the [Enum.Limb](https://developer.roblox.com/search#stq=Limb) enum that is associated with the given `Part`

This function works for both R15 and R6 rigs, for example:

```lua
-- For R15
print(humanoid:GetLimb(character.LeftUpperLeg)) -- Enum.Limb.LeftLeg
print(humanoid:GetLimb(character.LeftLowerLeg)) -- Enum.Limb.LeftLeg
print(humanoid:GetLimb(character.LeftFoot)) -- Enum.Limb.LeftLeg

-- For R6
print(humanoid:GetLimb(character:FindFirstChild("Left Leg"))) -- Enum.Limb.LeftLeg
```

GetLimb will throw an error if the [Part's](https://developer.roblox.com/api-reference/class/Part) parent is not set to the [Humanoid's](https://developer.roblox.com/api-reference/class/Humanoid) parent.
@param part The `Part` for which the `Enum/Limb` enum is to be retrieved.
@returns The `Enum/Limb` the part corresponds with.