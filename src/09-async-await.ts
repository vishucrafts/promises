async function main() {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const json = await response.json();

	return json;
}

function main2() {
	return Promise.resolve().then(() =>
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((json) => {
				return json;
			})
	);
}

main();

export const foo = "bar";
