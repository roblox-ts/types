function f(instance: Instance) {
	if (instance.IsA("SelectionLasso")) {
		print(instance.ClassName);
	}
}

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
