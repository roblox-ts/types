function f(instance: Instance) {
	if (instance.IsA("LocalStorageService")) {
		print(instance.ClassName);
	}
}

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
