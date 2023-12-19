export class Animal {
	public name: string;

	constructor(name: string) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name} makes a noise.`);
	}
}

const animal = new Animal("Tommy");
// {}
// After the constructor is called, the object is created and the properties are set.
// {
//  name: "Tommy",
//  speak() {
//    console.log(`${this.name} makes a noise.`);
//  }
// }
// Encapsulation: The name property is private, so it can't be accessed from outside the class.

console.log(animal.name); // Tommy
animal.speak(); // Tommy makes a noise.

const animal2 = new Animal("Jerry");
console.log(animal2.name); // Jerry
animal2.speak(); // Jerry makes a noise.
