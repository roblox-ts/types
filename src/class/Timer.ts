export class Timer {
	private start = Date.now();
	get() {
		return Date.now() - this.start;
	}
}
