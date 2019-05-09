function f(instance: Instance) {
	if (instance.IsA("Part")) {
		print(instance.ClassName);
	}
}

const Debris = game.GetService("Debris");

Debris.AddItem(Debris, 10);

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
