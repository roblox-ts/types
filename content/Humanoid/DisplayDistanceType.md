The DisplayDistanceType property controls how the humanoid display's visibility behaves, based on the distance between the `Humanoid` and the player's view.

When a Humanoid's parent `BaseModel` has a part named *Head*, a visual display of the `Player`'s name and health is drawn 1.5 studs above the character's head. This visual display is known as the **Humanoid Display**.

This property is set using the [Enum.HumanoidDisplayDistanceType](https://developer.roblox.com/search#stq=HumanoidDisplayDistanceType) enum. There are three available values for this property, each with their own set of rules:

None

---

When the DisplayDistanceType is set to **None**, the humanoid display will not be shown under any circumstances.

Viewer

---

When the DisplayDistanceType is set to **Viewer**, the humanoid display's visibility is locally controlled by the NameDisplayDistance and HealthDisplayDistance of each Player in the game. For instance, if a player has their display distance properties set to 50, and everyone else has their display distance properties set to 100,  then that player will not be able to see the name and health of the humanoid at a distance greater than 50 studs, while everyone else can still see the name and health of the humanoid up to a distance of 100 studs.

![Viewer example][1]

In this example all of the NPC characters have their DisplayDistanceType set to Viewer. This means the distance the information will be displayed will be taken from the humanoid that is viewing them. In this case, the player character (who is in the foreground) has its HealthDisplayDistance set to 10 and NameDisplayDistance set to 20. The health bar is only visible on the closest NPC because it is within 10 studs, and the names of only the two closer NPCs are visible because they are within 20 studs.

----------

Subject

---

When the DisplayDistanceType is set to **Subject** the Humanoid's name and healthbar will be displayed based on the viewed humanoid's settings. This is useful when there are specific characters who you want to behave differently from other ones.

![Subject example][2]

In this example all of the NPC characters have their DisplayDistanceType set to Subject. This means the view distance of their information will depend on their individual HealthDisplayDistance and NameDisplayDistance properties.

* The NPC on the left has its HealthDisplayDistance and NameDisplayDistance set to 10. Since the NPC is 15 studs away, neither of the displays are visible.

* The NPC in the middle has its HealthDisplayDistance set to 10 and NameDisplayDistance set to 20. Since the NPC is 15 studs away, only the name is visible.

* The NPC on the right has its HealthDisplayDistance and NameDisplayDistance set to 20. Both name and health are visible, as the NPC is only 15 studs away.

[1]: https://developer.roblox.com/assets/blta3653f27a817f4f1/HumanoidViewerDistance.png

[2]: https://developer.roblox.com/assets/blt0484c3c0f5a98d64/HumanoidSubjectDistance.png