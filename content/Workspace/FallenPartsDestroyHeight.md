This property determines the height at which falling [BaseParts](https://developer.roblox.com/api-reference/class/BasePart) (and their ancestor [Models](https://developer.roblox.com/api-reference/class/Model)) are destroyed.

![Parts being destroyed at the FallenPartsDestroyHeight][1]

## What happens to falling parts?

For performance reasons, Roblox automatically destroys (using [Instance.Destroy](https://developer.roblox.com/api-reference/function/Instance/Destroy)) parts that fall below this value. This is to prevent parts that have fallen off the map from continuing to fall forever.

If a part destroyed due to this behavior is the last part in a model, then that `model will also be destroyed. This applies to all model ancestors of the part.

This property can be read by scripts, but can only be set by plugins, the command bar or the properties window in Roblox Studio.

## Notes

 - Developers should also use the `Debris` service to clean up parts that are no longer needed, but have not fallen off the map

 - This property is clamped between -50,000 and 50,000. This is because `BasePart`s do not simulate or render properly at a great distance from the origin due to floating point inaccuracies

[1]: https://developer.roblox.com/assets/5b65c33eba048a343db86bf8/FallenPartsDestroyHeight.gif