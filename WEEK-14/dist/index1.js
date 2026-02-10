"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum2(a, b) {
    return a + b;
}
function sum3(a, b) {
    return a + b;
}
// ?: means that the function parameter is optional
function sum4(a, b) {
    if (b) {
        return a + b;
    }
    return a;
}
;
;
;
let user1 = {
    name: "Shantanu",
    age: 22,
    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        pincode: 411001,
        houseNumber: 123
    }
};
function isLegal(user1) {
    if (user1.age >= 18) {
        return true;
    }
    return false;
}
console.log(isLegal(user1));
;
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
let person1 = new Person("Shantanu", 22);
console.log(person1.greet());
class Shape {
    area() {
        console.log("Hii , how are you !! ");
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
const rect = new Rectangle(10, 20);
rect.area();
class Manager {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    salut() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. You can contact me at ${this.email}`;
    }
}
const manager1 = new Manager("Shantanu", 22, "shantanu@example.com");
console.log(manager1.salut());
//# sourceMappingURL=index1.js.map