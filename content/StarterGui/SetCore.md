SetCore (not to be confused with [SetCoreGuiEnabled](https://developer.roblox.com/api-reference/function/StarterGui/SetCoreGuiEnabled)) exposes a variety of functionality defined by Roblox's [CoreScripts](https://developer.roblox.com/api-reference/class/CoreScript), such as sending notifications, toggling notifications for badges/points, defining a callback for the reset button or toggling the topbar. The first parameter to SetCore is a string that selects the functionality with which the call will interact: a CoreScript must have registered such a string already (if one hasn't, an error is raised). It may be necessary to make multiple calls to SetCore using `pcall` in case the respective CoreScript has yet to load (or if it has been disabled entirely).

The following table describes the strings that may be accepted as the first parameter in a call to SetCore. The parameters that should follow are dependent on the functionality that will be used and are described in sub-tables.

## ChatActive

Controls whether the chat is active

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | bool | Required | Determines whether the chat should be made active |

## PointsNotificationsActive

Controls whether notifications for earned player points will appear

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | bool | Required | Determines whether notifications for earned player points will appear |

## BadgeNotificationsActive

Controls whether notifications for earned badges will appear

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | bool | Required | Determines whether notifications for earned badges

will appear |

## ResetButtonCallback

Determines the behavior, if any, of the reset button given a bool or a `BindableEvent` to be [fired](https://developer.roblox.com/api-reference/function/BindableEvent/Fire) when a player requests to reset.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `enabled` | bool | Required | Determines whether the reset button retains its default behavior |
| OR |
| --- |
| `callback` | BindableEvent | Required | A BindableEvent to be fired when the player confirms they want to reset |

## ChatMakeSystemMessage

Display a formatted message in the chat.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `configTable` | dictionary | Required | A dictionary of information describing the message (see below) |
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Text` | string | Required | The message to display |
| `Color` | Color3 | `Color3.fromRGB(255, 255, 243)` | The TextColor3 of the message |
| `Font` | `Enum.Font` |
| --- | --- |
| `FontSize` | `Enum.FontSize` | `Size24` | The FontSize of the message |

## ChatWindowSize

Determines the [size](https://developer.roblox.com/api-reference/property/GuiObject/Size) of the chat window.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `windowSize` | UDim2 | Required | Determines the size of the chat window |

## ChatWindowPosition

Determines the [position](https://developer.roblox.com/api-reference/property/GuiObject/Position) of the chat window.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `windowPosition` | UDim2 | Required | Determines the position of the chat window |

## ChatBarDisabled

Determines whether the player is able to type a message into the chat.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | bool | Required | Determines whether the chat's TextBox input is visible. |

## SendNotification

Causes a non-intrusive notification to appear at the bottom right of the screen. The notification may have up to two buttons.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `configTable` | dictionary | Required | A dictionary of information describing the notification (see below) |
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `Title` | string | Required | The title of the notification |
| `Text` | string | Required | The main text of the notification |
| `Icon` | string | Optional | The image to display with the notification |
| `Duration` | number | 5 | Duration (in seconds) the notification should stay visible |
| `Callback` | BindableFunction | Optional | A BindableFunction that should be invoked with the text of the button pressed by the player. |
| `Button1` | string | Optional | The text to display on the first button |
| `Button2` | string | Optional | The text to display on the second button |

## TopbarEnabled

Determines whether the topbar is displayed. Disabling the topbar will also disable all CoreGuis, such as the chat, inventory and player list (i.e. those set with [SetCoreGuiEnabled](https://developer.roblox.com/api-reference/function/StarterGui/SetCoreGuiEnabled)).

When disabled, the region the topbar once occupied will still capture mouse events; however, [buttons](https://developer.roblox.com/api-reference/class/TextButton) placed there will not respond to [clicks](https://developer.roblox.com/api-reference/event/GuiButton/MouseButton1Click). The origin of GUI space will still be offset 36 pixels from the top of the screen.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `enabled` | bool | Required | Determines whether the topbar should be visible |

## DeveloperConsoleVisible

Determines whether the Developer Console is visible.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `visibility` | bool | Required | Determines whether the developer console is visible |

## PromptSendFriendRequest

Prompts the current player to send a friend request to the given `Player`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `player` | Player | Required | The player to which the friend request should be sent |

## PromptUnfriend

Prompts the current player to remove a given `Player` from their friends list.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `player` | Player | Required | The player who should be unfriended |

## PromptBlockPlayer

Prompts the current player to block the given `Player`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `player` | Player | Required | The player who should be blocked |

## PromptUnblockPlayer

Prompts the current player to unblock the given `Player`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `player` | Player | Required | The player who should be unblocked |

## AvatarContextMenuEnabled

Determines whether the [Avatar Context Menu](https://developer.roblox.com/search#stq=Avatar%20Context%20Menu#visual-customization) is enabled.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `enabled` | bool | Required | Determines whether the Avatar Context Menu is enabled |

## AddAvatarContextMenuOption

Adds an option to the [Avatar Context Menu](https://developer.roblox.com/search#stq=Avatar%20Context%20Menu#visual-customization).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `option` | `Enum.AvatarContextMenuOption` | Required | `Friend` (send friend request), `Chat` (start private chat), or `Emote` (wave) |
| OR |
| --- |
| `option` | table | Required | A two-element table, where the first is the name of the custom action, and the second is a BindableEvent which will be fired with a player was selected when the option was activated. |

## RemoveAvatarContextMenuOption

Removes an option to the [Avatar Context Menu](https://developer.roblox.com/search#stq=Avatar%20Context%20Menu#visual-customization). The `option` argument must be the same as what was used with **AddAvatarContextMenuOption** (see above).

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `option` | Variant | Required | The same value provided to **AddAvatarContextMenuOption** |

## AvatarContextMenuTheme

Configures the customizable Avatar Context Menu (ACM) which is an opt-in feature that allows easy player-to-player social interaction via custom actions, such as initiating trades, battles, and more.

For more info on the ACM including how to customize its theme and use it in your game, see the [Avatar Context Menu](https://developer.roblox.com/search#stq=Avatar%20Context%20Menu#visual-customization) article.

## CoreGuiChatConnections

Sets up a bindable gateway connection between the CoreGui topbar's chat button and the Lua Chat System. The second parameter must be a table of [BindableEvents](https://developer.roblox.com/api-reference/class/BindableEvent) and [BindableFunctions](https://developer.roblox.com/api-reference/class/BindableFunction). See the example below for more clarification.

```lua
-- Create the Bindable objects
local ChatConnections = {}
 
local function AddObjects(bindableClass,targetName,...)
	local target = ChatConnections[targetName]
	if not target then
		target = {}
		ChatConnections[targetName] = target
	end
	local names = {...}
	for _,name in pairs(names) do
		local signal = Instance.new(bindableClass)
		signal.Name = targetName .. "_" .. name
		signal.Parent = script
		target[name] = signal
	end
end
 
AddObjects("BindableEvent","ChatWindow",
	---------------------------
	-- Fired from the CoreGui
	---------------------------
	"ToggleVisibility", -- Fired when the CoreGui chat button is pressed.
	"SetVisible", -- Fired when the CoreGui wants to directly change the visiblity state of the chat window.
	"FocusChatBar", -- Fired when the CoreGui wants to capture the Chatbar's Focus.
	"TopbarEnabledChanged", -- Fired when the visibility of the Topbar is changed.
	"SpecialKeyPressed", -- Fired when the reserved ChatHotkey is pressed.
	"CoreGuiEnabled", -- Fired when a user changes the SetCoreGuiEnabled state of the Chat Gui.
 
	---------------------------
	-- Fired to the CoreGui
	---------------------------
	"ChatBarFocusChanged",
		-- ^ Fire this with 'true' when you want to assure the CoreGui that the ChatBar is being focused on.
 
	"VisibilityStateChanged", 
		-- ^ Fire this with 'true' when the user shows or hides the chat.
 
	"MessagesChanged",
		-- ^ Fire this with a number to change the number of messages that have been recorded by the chat window.
		--   If the CoreGui thinks the chat window isn't visible, it will display the recorded difference between
		--   the number of messages that was displayed when it was visible, and the number you supply.
 
	"MessagePosted" 
		-- ^ Fire this to make the player directly chat under Roblox's C++ API. 
		--	 This will fire the LocalPlayer's Chatted event.
		--   Please only fire this on the player's behalf. If you attempt to spoof a player's chat
		--   to get them in trouble, you could face serious moderation action.
)
 
AddObjects("BindableFunction","ChatWindow",
	"IsFocused" -- This will be invoked by the CoreGui when it wants to check if the chat window is active.
)
 
-- The following events are fired if the user calls StarterGui:SetCore(string name, Variant data)
-- Note that you can only hook onto these ones specifically.
AddObjects("BindableEvent","SetCore",
	"ChatMakeSystemMessage",
	"ChatWindowPosition",
	"ChatWindowSize",
	"ChatBarDisabled"
)
 
-- The following functions are invoked if the user calls StarterGui:GetCore(string name)
-- Note that you can only hook onto these ones specifically.
AddObjects("BindableFunction","GetCore",
	"ChatWindowPosition", -- Should return a UDim2 representing the position of the chat window.
	"ChatWindowSize", -- Should return a UDim2 representing the size of the chat window.
	"ChatBarDisabled" -- Should return true if the chat bar is currently disabled.
)
 
-- Connect ChatConnections to the CoreGui.
local StarterGui = game:GetService("StarterGui")
local tries = 0
local maxAttempts = 10
 
while (tries < maxAttempts) do
 local success,result = pcall(function ()
 StarterGui:SetCore("CoreGuiChatConnections",ChatConnections)
 end)
 if success then
 break
 else
 tries = tries + 1
 if tries == maxAttempts then
 error("Error calling SetCore CoreGuiChatConnections: " .. result)
 else
 wait()
 end
 end
end

while wait(0.2) do
 local isVisible = (math.random() > 0.5)
	ChatConnections.ChatWindow.VisibilityStateChanged:Fire(isVisible)
	if not isVisible then
		local messageCount = math.random(1,120)
		ChatConnections.ChatWindow.MessagesChanged:Fire(messageCount)
	end
end
```

@param parameterName Selects the functionality with which the call will interact: a CoreScript must have registered such a string already (if one hasn't, an error is raised)
@param value A table of `BindableEvent|BindableEvents` and `BindableFunction|BindableFunctions`
@returns void