function f(instance: Instance) {
	if (instance.IsA("UIAspectRatioConstraint")) {
		print(instance.ClassName);
	}
}

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
