// ES2015 style modules
export const person = {
	name: 'Akuma',
	age: 621
}

export function sayHello() {
	return `Hello ${person.name}`;
}

const greeting = "Hello World";

//default means we don't have to use the curly braces when importing
export default greeting;
