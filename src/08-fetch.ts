let response = null;

fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then((response) => response.json())
	.then((todo) => {
		response = todo;
		console.log(todo);
	});

console.log(response);
