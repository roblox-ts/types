export interface ApiParameter {
	Name: string;
	Type: ApiValueType;
	Default?: string;
}

export type SecurityType =
	| "None"
	| "LocalUserSecurity"
	| "PluginSecurity"
	| "RobloxScriptSecurity"
	| "RobloxSecurity"
	| "NotAccessibleSecurity";

export type ThreadSafety = "Unsafe" | "Safe" | "Unknown";
export type PropertyThreadSafety = ThreadSafety | "ReadSafe";

export type MemberCategoryType =
	| "instance/object"
	| "animation/instance"
	| "instance/mesh"
	| "render/decal"
	| "instance/gui"
	| "physics/joint"
	| "lua/script"
	| "instance/part"
	| "sound/default";

export type CategoryType =
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

export type DeprecatedMetadata = { PreferredDescriptorName: string; ThreadSafety: string };

export type ClassTag =
	| "Deprecated"
	| DeprecatedMetadata // why??
	| "NotBrowsable"
	| "NotCreatable"
	| "NotReplicated"
	| "PlayerReplicated"
	| "Service"
	| "Settings";

export type MemberTag =
	| "CanYield"
	| "CustomLuaState"
	| "Deprecated"
	| "Hidden"
	| "NotBrowsable"
	| "NotReplicated"
	| "NotScriptable"
	| "ReadOnly"
	| "Yields"
	// Sometimes appears after a deprecated tag to indicate the preferred alternative
	// Currently lists "Unknown" safety if referring to a Property that is ReadSafe
	| { PreferredDescriptorName: string; ThreadSafety: ThreadSafety };

interface ApiMemberBase {
	MemberType: string;
	Name: string;
	Tags?: Array<MemberTag>;

	// Not from API dump, but gets added during loading phase
	Description?: string;
}

export interface ApiValueType {
	Category: "Primitive" | "Class" | "DataType" | "Enum" | "Group";
	Name: string;
}

export interface ApiProperty extends ApiMemberBase {
	MemberType: "Property";
	Category: CategoryType;
	Serialization: {
		CanLoad: boolean;
		CanSave: boolean;
	};
	Security: {
		Read: SecurityType;
		Write: SecurityType;
	};
	ThreadSafety: PropertyThreadSafety;
	ValueType: ApiValueType;
}

export interface ApiFunction extends ApiMemberBase {
	MemberType: "Function";
	Parameters: Array<ApiParameter>;
	ReturnType: ApiValueType | Array<ApiValueType>;
	Security: SecurityType;
	ThreadSafety: ThreadSafety;
}

export interface ApiEvent extends ApiMemberBase {
	MemberType: "Event";
	Parameters: Array<ApiParameter>;
	Security: SecurityType;
	ThreadSafety: ThreadSafety;
}

export interface ApiCallback extends ApiMemberBase {
	MemberType: "Callback";
	Parameters: Array<ApiParameter>;
	ReturnType: ApiValueType;
	Security: SecurityType;
	ThreadSafety: ThreadSafety;
}

export type ApiMember = ApiProperty | ApiFunction | ApiEvent | ApiCallback;

export interface ApiClass {
	Members: Array<ApiMember>;
	MemoryCategory: MemberCategoryType;
	Tags?: Array<ClassTag>;
	Name: string;
	Superclass: string;
	Subclasses: Array<string>;
	Description?: string;
}

export interface ApiEnumItem {
	LegacyNames?: Array<string>;
	Name: string;
	Value: number;
}

export interface ApiEnum {
	Items: Array<ApiEnumItem>;
	Name: string;
}

export interface ApiDump {
	Classes: Array<ApiClass>;
	Enums: Array<ApiEnum>;
	Version: number;
}
