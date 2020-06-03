A [GUI](https://developer.roblox.com/api-reference/class/GuiObject) that can display children 3D objects inside its viewport. Children objects will not be rendered in the main scene. Background color is transparent.

This is a great way to display 3D objects/models in a 2D&nbsp;GUI space like a `ScreenGui`.

![ViewportFrame Catalog][1]

![ViewportFrame Model][2]

### Caveats

  - Currently 3D objects can only be displayed on [ScreenGuis](https://developer.roblox.com/api-reference/class/ScreenGui) or [PluginGuis](https://developer.roblox.com/api-reference/class/PluginGui)

  - Objects inside ViewportFrames are rendered using a fixed [lighting](https://developer.roblox.com/api-reference/class/Lighting) setting

  - No shadow or post effects are available. Neon and Glass [materials](https://developer.roblox.com/search#stq=Material) will be rendered on lowest quality

### Using ViewportFrames

#### Through Studio UI

 1. Add a ViewportFrame into a [GuiLayerCollector](https://developer.roblox.com/api-reference/class/LayerCollector), such as a ScreenGui or `SurfaceGui`. This will cause a blank UI element to appear in the main window.

![ScreenGui->ViewportFrame in Explorer][3]

![Empty ViewportFrame in Workspace][4]

 2. Add a model that you want to show in the ViewportFrame into `Workspace`. Target your camera towards the [model](https://developer.roblox.com/api-reference/class/Model).

![Model being displayed by ViewportFrame][5]

 3. Set [ViewportFrame.CurrentCamera](https://developer.roblox.com/api-reference/property/ViewportFrame/CurrentCamera) to Workspace.Camera. Drag the model into the ViewportFrame. The model should show up there.

![ScreenGui->ViewportFrame->Model in Explorer][6]

![ViewportFrame Rendering Model][7]

 4. You can change the size, position or other properties of ViewportFrame like other GUIs. Now the CurrentCamera is a reference to the main camera in Workspace, so if you move the camera in the main scene, it will also affect ViewportFrame. When you find a good position, duplicate the camera and make sure it is not the one Workspace is using. Then set it to ViewportFrame.CurrentCamera so the camera won’t be changed by Workspace operations.

![Gif of ViewportFrame Rendering Model][8]

#### Through Scripts

You can also set up a ViewportFrame using scripts. Add the following `LocalScript` into a ScreenGui (or other proper Guis), run the game and you will get a [Part](https://developer.roblox.com/api-reference/class/BasePart) rendered inside a ViewportFrame.

```lua
local vf = Instance.new("ViewportFrame", script.Parent)
vf.Size = UDim2.new(0.5, 0, 0.5, 0)
vf.Position = UDim2.new(0.25, 0, 0.25, 0)
vf.BackgroundColor3 = Color3.new(1, 1, 1)

local part = Instance.new("Part", vf)
part.Position = Vector3.new(0, 0, 0)

local camera = Instance.new("Camera", vf)
vf.CurrentCamera = camera

local cameraPosition = Vector3.new(3, 3, 3)
camera.CFrame = CFrame.new(cameraPosition, part.Position)
```

![ViewportFrame rendering Part from LocalScript][9]

### See also

If you are looking for an in-depth article exploring how the ViewportFrame GUI can render 3D objects inside its bounds, including a strep-by-step walkthrough, take a look at the [ViewportFrame-GUI](https://developer.roblox.com/search#stq=ViewportFrame%20GUI) article.

[1]: https://developer.roblox.com/assets/5c5e4f396d61b3c84129f2a9/ViewportFrame1.gif

[2]: https://developer.roblox.com/assets/5c5e4f481a6434cd416210fd/ViewportFrame2.gif

[3]: https://developer.roblox.com/assets/5c5e4fa022bf52f7439e2708/ViewportFrameThroughStudioUI1.png

[4]: https://developer.roblox.com/assets/5c5e4fa800babade43223631/ViewportFrameThroughStudioUI2.png

[5]: https://developer.roblox.com/assets/5c5e4fb70ab91ed943f43e17/ViewportFrameThroughStudioUI3.png

[6]: https://developer.roblox.com/assets/5c5e4fd5ab181759419c65d6/ViewportFrameThroughStudioUI4.png

[7]: https://developer.roblox.com/assets/5c5e5a5922bf52f7439e271e/ViewportFrameThroughStudioUI5.png

[8]: https://developer.roblox.com/assets/5c5e4ff73f992ead41225138/ViewportFrameThroughStudioUI6.gif

[9]: https://developer.roblox.com/assets/5c5e4f84c7b669b24175ebf0/ViewportFrameThroughScripts1.png