function f(instance: Instance) {
	if (instance.IsA("Part")) {
		print(instance.ClassName);
	}
}

const GuiService = game.GetService("GuiService");

GuiService.MenuOpened.Connect(() => 1);

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
