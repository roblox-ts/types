The Chat function fires the [Chat.Chatted](https://developer.roblox.com/api-reference/event/Chat/Chatted) event with the parameters specified in this method.

By default, there is a `LocalScript` inside of each player's `PlayerScripts` object named *BubbleChat*, which causes a dialog-like billboard to appear above the *partOrCharacter* when the chatted event is fired.

*Note:* Since dialogs are controlled by a LocalScript, you will not be able to see any dialogs created from this method unless you are running in *Play Solo* mode.
@param partOrCharacter An instance that is the part or character which the *BubbleChat* dialog should appear above.
@param message The message string being chatted.
@param color An `Enum/ChatColor` specifying the color of the chatted message.
@returns void