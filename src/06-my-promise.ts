class MyPromise {
	value: any = null;
	error: any = null;
	status: string = "pending";

	constructor(callbackFn: any) {
		callbackFn(this.resolve.bind(this), this.reject.bind(this));
	}

	private resolve(value: any) {
		this.value = value;
		this.status = "resolved";
	}

	private reject(error: any) {
		this.error = error;
		this.status = "rejected";
	}

	static resolve(value: any) {
		return new MyPromise((resolve, reject) => {
			resolve(value);
		});
	}

	static reject(error: any) {
		return new MyPromise((resolve, reject) => {
			reject(error);
		});
	}
}

const promise = new MyPromise((resolve, reject) => {
	reject("500 Server Error");
});
// { status: "pending" }

console.log(promise);
