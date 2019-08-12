![A side by side visualization of how HealthDisplayType impacts the behavior of the health bar's display][1]

HealthDisplayType controls when a humanoid's health bar is allowed to be displayed.

By default, this property is set to **DisplayWhenDamaged**, which makes the health bar only display when a humanoid's Health is less than its MaxHealth. It can also be set to **AlwaysOn**, which makes the health bar always display, or **AlwaysOff**, which prevents it from ever displaying.

This property functions independently of the humanoid's HealthDisplayDistance property, which is responsible for making the health bar fade out at certain distances. If the HealthDisplayType is set to AlwaysOn, it will still fade out depending the how the DisplayDistanceType is configured.

[1]: https://developer.roblox.com/assets/blt25d44cecfd3e9e09/HealthDisplayType.gif