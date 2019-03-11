// common JS module import
// const person = require('./mymodule1');

// ES2015 module import
// import { person, sayHello } from './mymodule2';

// grabbing everything in a module
// import * as mod from './mymodule2';

import greeting from './mymodule2'
console.log(greeting);

// now we can access the object in the mymodule file
// console.log(mod.person.name);
// console.log(mod.sayHello());

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };
//
// getData('https://jsonplaceholder.typicode.com/posts');
