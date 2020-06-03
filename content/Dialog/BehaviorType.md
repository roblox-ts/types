The BehaviorType of a Dialog determines whether multiple players can interact with a dialog at once. The default value for this property is SinglePlayer.

## SinglePlayer

When a Dialog is configured to SinglePlayer, only one player can interact with it at a time. As soon as a player engages with a dialog, other players will not be able to initiate the dialog until the first player is finished.

While a player is engaged with a dialog, the other players will see the dialog choices of the player who started the dialog, along with the responses.

## MultiplePlayers

When a Dialog is setto MultiplePlayers, any player can initiate a dialog at any time, even if another player has already initiated the dialog. Unlike SinglePlayer however, Dialogs set to MultiplePlayers will not show the dialog choices and responses to anyone but the player in the conversation.Sets whether the Dialog can be used by multiple players at once.

## Example

```lua
local singlePlayerDialog = Instance.new("Dialog")
local singlePlayerPart = game.Workspace.SinglePlayerPart
singlePlayerDialog.BehaviorType = Enum.DialogBehaviorType.SinglePlayer
singlePlayerDialog.InitialPrompt = "Only one person can interact with me at once."
singlePlayerDialog.Parent = singlePlayerPart

local multiplePlayersDialog = Instance.new("Dialog")
local multiplePlayersPart = game.Workspace.MultiplePlayersPart
multiplePlayersDialog.BehaviorType = Enum.DialogBehaviorType.MultiplePlayers
multiplePlayersDialog.InitialPrompt = "Any number of players can interact with me at once."
multiplePlayersDialog.Parent = multiplePlayersPart
```
