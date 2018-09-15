// LUA API

declare const _G: any;

declare function assert<T>(condition: T, message?: string): T;
declare function collectgarbage(option: "count"): number;
declare function error(message?: string, level?: number): void;
declare function getmetatable(object: any): any;
declare function newproxy(): any;
/** !TupleReturn */
declare function next(t: any): [any, any];
/** !TupleReturn */
declare function pcall(func: Function, ...args: Array<any>): Array<any>;
declare function print(...params: Array<any>): void;
declare function rawequal(v1: any, v2: any): boolean;
declare function rawget(t: any, index: any): any;
declare function rawset(t: any, index: any, value: any): void;
/** !TupleReturn */
declare function select(index: number, ...args: Array<any>): Array<any>;
declare function select(cmd: "#", ...args: Array<any>): number;
declare function tostring(value: any): string;

interface DateTable {
	year: number;
	month: number;
	day: number;
	hour?: number;
	min?: number;
	sec?: number;
	isdst?: boolean;
}

declare namespace os {
	function time(): number;
	function time(dateTable: DateTable): number;
	function date(formatString: string, time: number): DateTable;
	function difftime(t2: number, t1: number): number;
}

declare namespace debug {
	function traceback(): string;
	function profilebegin(profileName: string): void;
	function profileend(): void;
}

declare namespace string {
	/** !TupleReturn */
	function byte(s: string, i?: number, j?: number): Array<number>;
	function char(...args: Array<number>): string;
	/** !TupleReturn */
	function find(s: string, pattern: string, init?: number, plain?: boolean): number;
	function find(s: string, pattern: string, init?: number, plain?: boolean): Array<number | string>;
	function format(pattern: string, ...args: Array<number | string>): string;
	function len(s: string): number;
	function lower(s: string): string;
	function match(s: string, pattern: string, init?: number): string | undefined;
	function rep(s: string, n: number): string;
	function reverse(s: string): string;
	function sub(s: string, i: number, j?: number): string;
	function upper(s: string): string;
	function gsub(s: string, pattern: string, repl: any, n?: number): string;
}

declare namespace math {
	const pi: number;
	const huge: number;

	function abs(n: number): number;
	function acos(n: number): number;
	function asin(n: number): number;
	function atan(n: number): number;
	function atan2(y: number, x: number): number;
	function ceil(n: number): number;
	function cos(n: number): number;
	function cosh(n: number): number;
	function deg(n: number): number;
	function floor(n: number): number;
	function fmod(x: number, y: number): number;
	function frexp(n: number): number;
	function ldexp(m: number, e: number): number;
	function log(n: number): number;
	function log10(n: number): number;
	function max(...n: Array<number>): number;
	function min(...n: Array<number>): number;
	/** !TupleReturn */
	function modf(n: number): [number, number];
	function pow(x: number, y: number): number;
	function rad(n: number): number;
	function random(): number;
	function random(max: number): number;
	function random(min: number, max: number): number;
	function randomseed(seed: number): number;
	function sin(n: number): number;
	function sinh(n: number): number;
	function sqrt(n: number): number;
	function tan(n: number): number;
	function tanh(n: number): number;
}

// representation of coroutine
declare interface thread { }

declare namespace coroutine {
	function create(f: Function): thread;
	/** !TupleReturn */
	function resume(co: thread, ...params: Array<any>): Array<any>;
	function running(): thread | undefined;
	function status(co: thread): string;
	function wrap<T>(f: T): T;
	/** !TupleReturn */
	function yield(...params: Array<any>): Array<any>;
}
