ClickDetector allows both [Scripts](https://developer.roblox.com/api-reference/class/Script) and [LocalScripts](https://developer.roblox.com/api-reference/class/LocalScript) to receive user input. They are placed inside [Models](https://developer.roblox.com/api-reference/class/Model), [Folders](https://developer.roblox.com/api-reference/class/Folder), and [BaseParts](https://developer.roblox.com/api-reference/class/BasePart). They mirror user input to the server through FilteringEnabled. They can detect basic mouse events: enter, leave, left click and right click.

If an action bound with `/ContextActionService` uses the same input as a ClickDetector, the bound action will take priority and the ClickDetector events will not fire.

With gamepad input, the right trigger button will fire the MouseClick event and center dot will trigger MouseHoverEnter/MouseHoverLeave.

LocalScripts can connect to ClickDetector events and they will fire on the client. Since LocalScripts only run if they are descendants of a `/Player` or Player's Character, it's not a good idea to put LocalScripts inside ClickDetectors. If you need a LocalScript to detect ClickDetector events, `/StarterPlayerScripts` may be a better place instead.

If multiple ClickDetectors would detect a user input, only the deepest ClickDetector will fire events. If two ClickDetectors are siblings, the first ClickDetector takes priority. Due to the nature of user input, you ought not depend on all MouseHoverEnter events to fire a matching MouseHoverLeave event.