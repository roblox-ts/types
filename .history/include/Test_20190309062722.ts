function f(instance: Instance) {
	if (instance.IsA("GuiMain")) {
		print(instance.ClassName);
	}
}

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
