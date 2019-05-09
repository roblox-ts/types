function f(instance: Instance) {
	if (instance.IsA("UIBase")) {
		if (instance.ClassName === "UIScale") {
			if (instance.IsA("SurfaceSelection")) {
				print(instance.ClassName);
			}
		}
	}
}

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
