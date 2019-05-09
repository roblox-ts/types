function f(instance: Instance) {
	if (instance.IsA("Status")) {
		print(instance.ClassName);
	}
}

const Lighting = game.GetService("Lighting");

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
