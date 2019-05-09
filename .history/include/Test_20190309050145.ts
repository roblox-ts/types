const a = {} as Instance;

if (a.IsA("StarterPlayerScripts")) {
	const x = a.ClassName;
}

if (a.ClassName === "StarterPlayerScripts") {
}

if (a.IsA("Player")) {
	print(a.ClassName);
}
