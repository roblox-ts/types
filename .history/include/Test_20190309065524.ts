function f(instance: Instance) {
	if (instance.IsA("UIBase")) {
		if (instance.ClassName === "UIScale") {
			print(instance.ClassName);
		}
	}
}

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
