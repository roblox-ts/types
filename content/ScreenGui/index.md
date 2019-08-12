The main storage object for 2D `GuiObject` displayed on the player's screen. ScreenGuis will only be shown if parented to a player's `PlayerGui`.

To make sure a ScreenGui is displayed to your player, it should be parented into the `StarterGui`, as that service will clone it's contents into each player's `PlayerGui` when they join the game.