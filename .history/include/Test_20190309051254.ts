const a = {} as Instance;

if (a.IsA("StarterPlayerScripts")) {
	const x = a.ClassName;
}

if (a.ClassName === "StarterPlayerScripts") {
}

if (a.IsA("BackpackItem")) {
	print(a.ClassName);
}

function A(b: Instance) {
	const fe = new Instance("Part");
	print(fe.ClassName);

	if (b.IsA("Part")) {
		print(b.ClassName);
	}
}
