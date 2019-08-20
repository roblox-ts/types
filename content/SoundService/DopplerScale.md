This property determines the degree to with a 3D `Sound`s pitch varies due to the Doppler effect.

The Doppler effect describes a phenomenon whereby the pitch of a sound changes as the source and observer of the sound move further away, or closer together. The Doppler effect can often be seen in real life, such as when a car with a siren drives past.

Increasing this value exaggerates the impact of the Doppler effect, whereas decreasing it minimizes it. By default, the value of this property is 1.

```lua
local SoundService = game:GetService("SoundService")
SoundService.DopplerScale = 1 -- default 
SoundService.DopplerScale = 2 -- exaggerated Doppler effect
SoundService.DopplerEffect = 0.5 -- subdued Doppler effect
```

Note the Doppler effect has no impact on 2D `Sound`s, (`Sound`s not parented to a `BasePart` or `Attachment`).

Developers wishing to learn more about the different settings Roblox's sound engine uses should consult the [FMOD documentation][1].

[1]: https://www.fmod.com/docs/api/content/generated/overview/3dsound.html