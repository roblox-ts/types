function f(instance: Model) {
	print(instance.ClassName);
}

const Lighting = game.GetService("Lighting");

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
