function f(instance: Instance) {
	if (instance.IsA("Part")) {
		print(instance.ClassName);
	}
}

const GuiService = game.GetService("GuiService");

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
