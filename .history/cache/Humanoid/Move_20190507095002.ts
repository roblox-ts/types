/** SetTopbarTransparency sets the transparency of the Topbar CoreGui. A value of 0 is completely opaque, and a value of 1 is completely transparent. Values outside of the range [0, 1] are clamped. The default transparency of the topbar is 0.5. The current transparency can be retrieved using the similarly-named `GetTopbarTransparency` function.

## Comparison of Values
The screenshots below show the topbar at 1.0, 0.5 and 0.0 transparency.
![The TopBar with a transparency of 1.0 (completely hidden)]](https://developer.roblox.com/assets/5c2a51f2ad2d87331bc45024/Topbar_Transparency_1.0.png)
&nbsp;![The TopBar with a transparency of 0.5 (50% transparency)]](https://developer.roblox.com/assets/5c2a5257ac4084cd1b196622/Topbar_Transparency_0.5.png)
&nbsp;![The TopBar with a transparency of 0.0 (completely opaque)](https://developer.roblox.com/assets/5c2a5230be5779ad1a89484d/Topbar_Transparency_0.png)

## Usage
This method is often used when re-styling the topbar to match the visual aesthetic of a game. By hiding the topbar, you can create your own custom topbar. See the code samples for an example.

## Alternative
Using the `SetCore` method with the `TopbarEnabled` option allows you to enable/disable the entire topbar and all of its features (player list, health, etc). By contrast, this method only affects how the topbar is displayed.

### Code Samples

#### Custom Topbar Style

This code sample demonstrates how you can create a custom-styled topbar. Paste it into a `LocalScript` placed within `StarterPlayerScripts`. First, hide the default topbar by setting its transparency to 1 (using `SetTopbarTransparency`). Then, recreate the topbar `Frame` and parent it to a `ScreenGui`. Set the styles on the Frame to your liking, such as `BackgroundColor3` or `BackgroundTransparency`.  Below is a screenshot of what the topbar will look like after this code sample is run.

![The Topbar customized to appear dark blue](https://developer.roblox.com/assets/5c2a584cf1cdabd21bb517ed/Topbar_Custom.png)
```lua
-- Custom topbar style
local TOPBAR_COLOR = Color3.fromRGB(0, 0, 127)
local TOPBAR_TRANSPARENCY = 0

local playerGui = game:GetService("Players").LocalPlayer:WaitForChild("PlayerGui")

-- Hide the topbar
playerGui:SetTopbarTransparency(1)

-- Create a "Fake" replacement topbar with a ScreenGui and Frame
local screenGui = Instance.new("ScreenGui")
local frame = Instance.new("Frame")

-- Move (0, 0) to the actual top left corner of the screen, instead of under the topbar
screenGui.IgnoreGuiInset = true
-- The topbar is 36 pixels tall, and spans the entire width of the screen
frame.Size = UDim2.new(1, 0, 0, 36)
-- Style the topbar
frame.BackgroundColor3 = TOPBAR_COLOR
frame.BackgroundTransparency = TOPBAR_TRANSPARENCY
frame.BorderSizePixel = 0

frame.Parent = screenGui
screenGui.Parent = playerGui
```
#### PlayerGui:SetTopbarTransparency

The following line of code makes the Topbar appear fully opaque.
```lua
game:GetService('Players').LocalPlayer:WaitForChild('PlayerGui'):SetTopbarTransparency(0)
```
*/
function zoom() {}
