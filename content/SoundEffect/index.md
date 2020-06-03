SoundEffect is the base class that all other sound effects derive from. A SoundEffect can be applied to either a `Sound` or `SoundGroup` by being parented to either.

Multiple effects can be applied to the same Sound or SoundGroup. The order the effects will be applied in is determined by that effect’s Priority.