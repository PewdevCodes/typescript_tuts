"use strict";
// Crare two types called User and Admin and also create a fucntion that can take the type of User or Admin and return a string that says "Hello, [name]!" where name is the name property of the User or Admin.
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person) {
    return `Hello, ${person.name}!`;
}
console.log(greet({ name: "Shantanu Mani Mishra", age: 22 })); // Output: "Hello, Shantanu Mani Mishra!"
//# sourceMappingURL=index3.js.map