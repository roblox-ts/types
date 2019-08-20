![A Humanoid with half of its health left.][1]

**Health** is a property that represents the current health of the Humanoid.

Its value is constrained between 0, and the value of the Humanoid's MaxHealth.

----------

## Display Behavior ##

![The behavior of the HealthDIsplayType property][2]

By default, the Humanoid displays a health bar under its name label when the Humanoid has taken damage. The display behavior of the health bar is dependent on the Humanoid's HealthDisplayDistance and HealthDisplayType properties.

![The default health bar displayed in Roblox's top bar][3]

From the perspective of a Player, their character will never display the standard humanoid name &amp; health label. Instead, it is displayed in the top right corner of the screen. The health bar will only be shown when the character's health isn't full.

The player's character also has a default script inserted into it called **Health**, that regenerates their health by 1% continuously every second, until it is restored to full health.

----------

## Damaging Humanoids ##

![ForceFields make you immune to explosions!][4]

When making Humanoids take damage, you are advised to utilize the Humanoid's TakeDamage function. The TakeDamage function properly ignores damage when the Humanoid's character model has a ForceField parented inside of it.

The ForceField object makes the character immune to explosions and is expected to make them immune to damage as well. You are allowed to just subtract from the Humanoid's health, but it ultimately depends on whether or not you incorporate ForceFields into your game.

----------

## Out of Health! ##

![The same Humanoid from the beginning, after being bloxxed by an explosion.][5]

When the value of the character's health reaches 0, the Humanoid will automatically change into its *Dead* state, which makes the character break its joints and fall into pieces.

If there is a joint connecting the Head part to the character, the Head **must** remain connected to the character, such that `Head:GetRootPart() == Humanoid.RootPart`. You can think of the joint connection as the character's neck. If you don't have a neck between your head and torso, you are very dead.

[1]: https://developer.roblox.com/assets/blt1c35a737d3dcdb25/Half-Health.png

[2]: https://developer.roblox.com/assets/blt25d44cecfd3e9e09/HealthDisplayType.gif

[3]: https://developer.roblox.com/assets/blt081a90d0f606c745/CoreGuiHealth.png

[4]: https://developer.roblox.com/assets/bltfa7dc6cd34b05fae/ExplosionImmunity.png

[5]: https://developer.roblox.com/assets/blt9978f529dfcc80e6/Ooof.png