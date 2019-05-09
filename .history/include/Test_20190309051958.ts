function f(instance: Instance) {
	if (instance.IsA("Script")) {
		print(instance.ClassName);
	} else if (instance.IsA("ScreenGui")) {
		print(instance.ClassName);
	}
}
