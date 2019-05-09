function f(instance: Instance) {
	if (instance.IsA("Script")) {
		print(instance);
	} else if (instance.IsA("ScreenGui")) {
		print(instance.ClassName);
	}
}

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = false;
}
