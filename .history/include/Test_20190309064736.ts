function f(instance: Instance) {
	if (instance.IsA("GuiBase3d")) {
		print(instance.ClassName);
	}
}

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
