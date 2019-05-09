for (const enumItem of Enum.ActionType.GetEnumItems()) {
	print(enumItem.Name);
}

function f(i: CastsToEnum<Enum.ActionType, true>) {
	if (i === "Nothing") {
	} else {
		print(i);
	}
}
f(10);
f(1);

// interface Stuff {
// 	Screen: Screen;
// }

// declare abstract class Instancey {
// 	public abstract readonly ClassName: keyof Stuff;
// }

// declare class Screen extends Instancey {
// 	public readonly ClassName: "Screen";
// 	public readonly Mine: 1;
// }

// type MyInstancey = Screen;

// declare function classIs<T extends keyof Instances>(value: Instance, className: T): value is Instances[T];

// function foo(x: Part | FlagStand | Platform | Seat | SkateboardPlatform | SpawnLocation) {
// 	print(x.ClassName);
// }

// const human = new Instance("Humanoid");
// human.HealthDisplayType = Enum.HumanoidHealthDisplayType.AlwaysOff.Value;
// print(human.HealthDisplayType);

// class Bop {
// 	private healthDisplayType: Enum.HumanoidHealthDisplayType;

// 	constructor() {
// 		this.healthDisplayType = Enum.HumanoidHealthDisplayType.DisplayWhenDamaged;
// 	}

// 	get HealthDisplayType() {
// 		return this.healthDisplayType;
// 	}

// 	set HealthDisplayType(param: CastsToEnum<Enum.HumanoidHealthDisplayType, true>) {
// 		if (param === "DisplayWhenDamaged" || param === 0) {
// 			this.healthDisplayType = Enum.HumanoidHealthDisplayType.DisplayWhenDamaged;
// 		} else if (param === "AlwaysOn" || param === 1) {
// 			this.healthDisplayType = Enum.HumanoidHealthDisplayType.AlwaysOn;
// 		} else if (param === "AlwaysOff" || param === 2) {
// 			this.healthDisplayType = Enum.HumanoidHealthDisplayType.AlwaysOff;
// 		} else {
// 			this.healthDisplayType = param;
// 		}
// 	}
// }
