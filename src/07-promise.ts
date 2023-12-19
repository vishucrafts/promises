// 1. The callback function passed to the Promise constructor is called immediately.
// const promise1 = new Promise((resolve, reject) => {
// 	resolve("Hello, World");
// });

// console.log(promise1);

// 2. Same as above but with reject.
// const promise2 = new Promise((resolve, reject) => {
// 	reject("500 Server Error");
// });

// console.error(promise2);

// 3. The callback function passed to the Promise constructor is called asynchronously.
// const promise3 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Hello, World");
// 	}, 1000);
// });

// console.log(promise3); // Pending because 1 second hasn't passed yet.

// setTimeout(() => {
// 	console.log(promise3); // Resolved because 1 second has passed.
// }, 1000);

// 4. But we don't know generally how long it will take to resolve or reject.

// const promise4 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Hello, World");
// 	}, 1000);
// });

// promise4.then((value) => {
// 	console.log(value);
// });

// console.log("Promise then is not blocking");

// 5. Rejecting a promise.
// const promise5 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject("500 Server Error");
// 	}, 1000);
// });

// promise5
// 	.then((value) => {
// 		console.log("From then:", value);
// 	})
// 	.catch((error) => {
// 		console.error("From catch", error);
// 	});

// 6. Random promise example.
// const promise6 = new Promise((resolve, reject) => {
// 	const random = Math.floor(Math.random() * 10);

// 	if (random % 2 === 0) {
// 		resolve("Even");
// 	} else {
// 		reject("Odd");
// 	}
// });

// promise6
// 	.then((value) => {
// 		console.log("From then:", value);
// 	})
// 	.catch((error) => {
// 		console.error("From catch:", error);
// 	});

// 7. Promises can be chained.
// I want to find friends of a user.
// First you need to fetch the user
// Then you need to fetch the friends of the user
// First fetch userID 1234
// Then fetch friends of userID 1234
// const promise7 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(1234);
// 	}, 1000);
// });

// promise7
// 	.then((userId) => {
// 		return new Promise((resolve, reject) => {
// 			const friends = ["Alice", "Bob", "Carol"];
// 			setTimeout(() => {
// 				resolve({
// 					userId: userId,
// 					friends,
// 				});
// 			}, 3000);
// 		});
// 	})
// 	.then(({ userId, friends }) => {
// 		console.log(`Friends of ${userId}: ${friends.join(", ")}`);
// 	})
// 	.catch((error) => {
// 		console.error("From catch:", error);
// 	});

// 8. Promise.all
// const promise8 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Hello");
// 	}, 1000);
// });

// const promise9 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("World");
// 	}, 2000);
// });

// Promise.all([promise8, promise9]).then((values) => {
// 	console.log(values);
// });

// 9. Doing everything in constructor is slow
// const promise10 = new Promise((resolve, reject) => {
// 	for (let i = 0; i < 1000000000000; i++) {
// 		if (i === 999999999) {
// 			resolve("Done");
// 		}
// 	}
// });

// console.log("This is blocked");

// 10. Promise.resolve

const promise11 = Promise.resolve().then(() => {
	for (let i = 0; i < 1000000000000; i++) {}
});

console.log("This is not blocked");

// 11. Promise.reject
// const promise12 = Promise.reject().catch(() => {
// 	for (let i = 0; i < 1000000000000; i++) {}
// });

// console.log("This is not blocked");
