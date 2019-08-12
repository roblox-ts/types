The ambient sound environment preset used by `SoundService`.

The [Enum.ReverbType](https://developer.roblox.com/search#stq=ReverbType) this property simulates a range of different environment's impact on sound. Each different option corresponds with a preset available in the FMOD sound engine. For example, when AmbientReverb is set to Hangar, the sound will reverberate differently to simulate being in a large enclosed space.

Changing the AmbientReverb effects the following properties used by Roblox's sound engine.

 - Reverberation decay time

 - Initial reflection delay time

 - Late reverberation delay time relative to initial reflection

 - Reference high frequency

 - High-frequency to mid-frequency decay time ratio

 - Value that controls the echo density in the late reverberation decay

 - Value that controls the modal density in the late reverberation decay

 - Reference low frequency

 - Relative room effect level at low frequencies

 - Relative room effect level at high frequencies

 - Early reflections level relative to room effect

 - Room effect level at mid frequencies

Those interested in finding more out about ambient reverb presets should see the [FMOD documentation on the topic][1]. For most developers however, the [Enum.ReverbType](https://developer.roblox.com/search#stq=ReverbType) names are descriptive enough to be able to use this setting without advanced knowledge.

[1]: https://www.fmod.com/docs/api/content/generated/FMOD_REVERB_PRESETS.html