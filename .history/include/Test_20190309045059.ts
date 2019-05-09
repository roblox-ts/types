const a = {} as Instance;

if (a.ClassName === "Script") {
	print(a);
}

if (a.IsA("Script")) {
	print(a.ClassName === "Script");
}
