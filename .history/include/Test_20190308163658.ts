const a = {} as Instance;

if (a.ClassName === "DataModel") {
	print(a.Name);
}

type Index<T extends InternalRbxInstance> = T & Indexable<T>;

const Workspace = game.GetService("Workspace") as Workspace;
