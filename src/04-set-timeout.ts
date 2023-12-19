// Asynchronous
// 1. It will happen sometime in the future
// 2. Fire and forget. You don't wait for response
// 3. This non blocking call

setTimeout(() => {
	console.log("Greeting from setTimeout");
}, 1000);

console.log("Outside setTimeout");

// // In JS

// function mySetTimeout(callbackFn, delay) {
// 	// browser has a clock
//   // browser has a macro task queue
//   // after delay, callbackFn will be added to the macro task queue
//   // browser will check the macro task queue after the call stack is empty
//   // browser will execute the callbackFn
// }
