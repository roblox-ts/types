SetTopbarTransparency sets the transparency of the Topbar CoreGui. A value of 0 is completely opaque, and a value of 1 is completely transparent. Values outside of the range [0, 1] are clamped. The default transparency of the topbar is 0.5. The current transparency can be retrieved using the similarly-named [GetTopbarTransparency](https://developer.roblox.com/api-reference/function/PlayerGui/GetTopbarTransparency) function.

## Comparison of Values

The screenshots below show the topbar at 1.0, 0.5 and 0.0 transparency.

![The TopBar with a transparency of 1.0 (completely hidden)]](https://developer.roblox.com/assets/5c2a51f2ad2d87331bc45024/Topbar_Transparency_1.0.png)&nbsp;![The TopBar with a transparency of 0.5 (50% transparency)]](https://developer.roblox.com/assets/5c2a5257ac4084cd1b196622/Topbar_Transparency_0.5.png)&nbsp;![The TopBar with a transparency of 0.0 (completely opaque)](https://developer.roblox.com/assets/5c2a5230be5779ad1a89484d/Topbar_Transparency_0.png)

## Usage

This method is often used when re-styling the topbar to match the visual aesthetic of a game. By hiding the topbar, you can create your own custom topbar. See the code samples for an example.

## Alternative

Using the [StarterGui.SetCore](https://developer.roblox.com/api-reference/function/StarterGui/SetCore) method with the `TopbarEnabled` option allows you to enable/disable the entire topbar and all of its features (player list, health, etc). By contrast, this method only affects how the topbar is displayed.