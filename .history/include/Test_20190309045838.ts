const a = {} as Instance;

if (a.ClassName === "Script") {
	print(a);
}

if (a.IsA("LuaSourceContainer")) {
	print(a.ClassName);
}
