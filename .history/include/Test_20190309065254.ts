function f(instance: Instance) {
	if (instance.IsA("TweenBase")) {
		print(instance.ClassName);
	}
}

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
