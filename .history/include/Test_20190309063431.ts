function f(instance: Instance) {
	if (instance.IsA("Part")) {
		print(instance.ClassName);
	}
}

const Workspace = game.GetService("Debris");

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
