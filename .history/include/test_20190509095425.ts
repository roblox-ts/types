for (const friendData of ({} as Player).GetFriendsOnline()) {
	if (friendData.LocationType === LocationType.Studio) {
		const fellow = friendData.GameId;
	}
}

"".split("");

function f(x: BrickColor) {
	const fooe = BrickColor.palette(100).Name;
	print(new BrickColor("Tr. Flu. Reddish orange"));
}

game.GetService("NetworkSettings").DataSendPriority;
declare const instance: InputObject;

const className = instance.ClassName;

for (const bar of new Map<{}, boolean>()) {
	print(bar[0]);
}

Enum.PacketPriority.IMMEDIATE_PRIORITY.Name;

new Vector3().add(new Vector3()).Dot(new Vector3());

game.GetService("MarketplaceService").ProcessReceipt = receipt => {
	print(receipt.CurrencyType.Name);
	return Enum.ProductPurchaseDecision.PurchaseGranted;
};

game.GetService("UserInputService").TouchRotate.Connect(d => {});

new Instance("RemoteFunction").OnServerInvoke = fee => print(fee);

new Instance("TextButton").FindFirstChild("");

game.GetService("MessagingService").PublishAsync("Go", "");

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
