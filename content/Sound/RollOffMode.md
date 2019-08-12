This property sets how 3D `Sound`s attenuate (fade out) as the distance between the listener and the `Sound`'s parent increase. The following code will set RollOffMode to Linear.

```lua
sound.RollOffMode = Enum.RollOffMode.Linear
```

Thee following options are available.

 - **Inverse:** Volume attenuates from [Sound.EmitterSize](https://developer.roblox.com/api-reference/property/Sound/EmitterSize) in an inverse manner

 - **InverseTapered:** A hybrid model. Follows the Inverse model when close to [Sound.EmitterSize](https://developer.roblox.com/api-reference/property/Sound/EmitterSize) and the Linear Square model when close to [Sound.MaxDistance](https://developer.roblox.com/api-reference/property/Sound/MaxDistance).

 - **Linear**: Volume attenuates between [Sound.EmitterSize](https://developer.roblox.com/api-reference/property/Sound/EmitterSize) and [Sound.MaxDistance](https://developer.roblox.com/api-reference/property/Sound/MaxDistance) with a linear relationship.

 - **LinearSquare:** Volume attenuates between [Sound.EmitterSize](https://developer.roblox.com/api-reference/property/Sound/EmitterSize) and [Sound.MaxDistance](https://developer.roblox.com/api-reference/property/Sound/MaxDistance) with a linear squared relationship

**Inverse vs Linear Distance Attenuation**

By default sounds are set to use inverse distance attenuation (Enum.RollOffMode.Inverse) which mirrors how sounds attenuate in the real world. Under inverse distance attenuation, sounds will begin to attenuate once the distance between the listener and the Sound's parent exceeds [Sound.EmitterSize](https://developer.roblox.com/api-reference/property/Sound/EmitterSize). The rate of attenuation depends on the emitter size, as sounds with larger EmitterSize's will attenuate at a slower rate. Inverse rate of inverse distance attenuation is further influenced by [SoundService.RolloffScale](https://developer.roblox.com/api-reference/property/SoundService/RolloffScale).

Note, [Sound.MaxDistance](https://developer.roblox.com/api-reference/property/Sound/MaxDistance) will not effect attenuation under the inverse model but will cause the sound to cut off completely once this distance is reached. This can be particularly abrupt when using low values for max distance.

Linear distance attenuation works differently. Under linear distance attenuation the sound will attenuate between [Sound.EmitterSize](https://developer.roblox.com/api-reference/property/Sound/EmitterSize) and [Sound.MaxDistance](https://developer.roblox.com/api-reference/property/Sound/MaxDistance), falling silent once MaxDistance is reached. [Sound.EmitterSize](https://developer.roblox.com/api-reference/property/Sound/EmitterSize) still denotes the point at which the sound will begin attenuating. However, the audible volume at any point now depends on the point the listener is at between EmitterSize and MaxDistance. This means, in contrast to the inverse distance attenuation model, the audible volume of the sound will approach silence at MaxDistance point. This is less realistic, but may be more desirable in some cases.