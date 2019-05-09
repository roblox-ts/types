const a = {} as Player;

for (const friendData of a.GetFriendsOnline()) {
	if (friendData.LocationType === FriendLocationType.InGame) {
		const fellow = friendData.GameId;
	}
}

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
