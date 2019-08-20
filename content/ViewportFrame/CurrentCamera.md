This property is a `Camera` instance that is used to render children objects. Defaults to *nil*.

The `Camera` object will not replicate so the [ViewportFrame.CurrentCamera](https://developer.roblox.com/api-reference/property/ViewportFrame/CurrentCamera) won’t replicate either. If you save a Camera in the server, it will not appear in the client. When you set this property, [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) and [Camera.FieldOfView](https://developer.roblox.com/api-reference/property/Camera/FieldOfView) will be saved and replicate with `ViewportFrame` internally so the client can render ViewportFrame without a Camera object. If you want to change the client’s Camera, you have to create a new Camera using a `LocalScript` at runtime.

### See also

  - [ViewportFrame-GUI](https://developer.roblox.com/search#stq=ViewportFrame%20GUI), an article exploring how the ViewportFrame GUI can render 3D objects inside its bounds
	
This property is a `Camera` instance that is used to render children objects. Defaults to *nil*.

The `Camera` object will not replicate so the [ViewportFrame.CurrentCamera](https://developer.roblox.com/api-reference/property/ViewportFrame/CurrentCamera) won’t replicate either. If you save a Camera in the server, it will not appear in the client. When you set this property, [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) and [Camera.FieldOfView](https://developer.roblox.com/api-reference/property/Camera/FieldOfView) will be saved and replicate with `ViewportFrame` internally so the client can render ViewportFrame without a Camera object. If you want to change the client’s Camera, you have to create a new Camera using a `LocalScript` at runtime.

### See also

  - [ViewportFrame-GUI](https://developer.roblox.com/search#stq=ViewportFrame%20GUI), an article exploring how the ViewportFrame GUI can render 3D objects inside its bounds

Tags: NotReplicated