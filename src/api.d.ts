interface ApiParameter {
	Name: string;
	Type: ApiValueType;
	Default?: string;
}

type SecurityType =
	| "None"
	| "LocalUserSecurity"
	| "PluginSecurity"
	| "RobloxScriptSecurity"
	| "RobloxSecurity"
	| "NotAccessibleSecurity";

type MemberCategoryType =
	| "instance/object"
	| "animation/instance"
	| "instance/mesh"
	| "render/decal"
	| "instance/gui"
	| "physics/joint"
	| "lua/script"
	| "instance/part"
	| "sound/default";

type CategoryType =
	| "Appearance"
	| "Attachments"
	| "Behavior"
	| "Camera"
	| "Compliance"
	| "Data"
	| "Derived Data"
	| "Goals"
	| "Image"
	| "Shape"
	| "Thrust"
	| "Turn";

interface ApiMemberBase {
	MemberType: string;
	Name: string;
	Security:
		| SecurityType
		| {
				Read: SecurityType;
				Write: SecurityType;
		  };
	Tags?: Array<string>;
}

interface ApiValueType {
	Category: "Primitive" | "Class" | "DataType" | "Enum" | "Group";
	Name: string;
}

interface ApiProperty extends ApiMemberBase {
	MemberType: "Property";
	Category: CategoryType;
	Serialization: {
		CanLoad: boolean;
		CanSave: boolean;
	};
	ValueType: ApiValueType;
}

interface ApiFunction extends ApiMemberBase {
	MemberType: "Function";
	Parameters: Array<ApiParameter>;
	ReturnType: ApiValueType;
}

interface ApiEvent extends ApiMemberBase {
	MemberType: "Event";
	Parameters: Array<ApiParameter>;
}

interface ApiCallback extends ApiMemberBase {
	MemberType: "Callback";
	Parameters: Array<ApiParameter>;
}

type ApiMember = ApiProperty | ApiFunction | ApiEvent | ApiCallback;

interface ApiClass {
	Members: Array<ApiMember>;
	MemoryCategory: MemberCategoryType;
	Tags?: Array<string>;
	Name: string;
	Superclass: string;
}

interface ApiEnumItem {
	Name: string;
	Value: number;
}

interface ApiEnum {
	Items: Array<ApiEnumItem>;
	Name: string;
}

interface ApiDump {
	Classes: Array<ApiClass>;
	Enums: Array<ApiEnum>;
	Version: number;
}
