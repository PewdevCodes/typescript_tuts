"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1; // can work without type annotation, but it is good practice to specify the type -- Type inference can be used to infer the type of a variable based on its initial value
console.log(x);
let str = 'Hello World';
console.log(str);
function add(a, b) {
    return a + b;
}
let res = add(5, 10);
console.log(res);
function ageChecker(age) {
    if (age >= 18) {
        return `The user with the age ${age} , is eligible to vote !! `;
    }
    else if (age > 120 || age < 0) {
        return `The age ${age} is not valid !! `;
    }
    else {
        return `The user with the age ${age} , is not eligible to vote !! `;
    }
}
ageChecker(25);
ageChecker(15);
ageChecker(-5);
ageChecker(150);
function delayedCall(fn) {
    setTimeout(() => {
        fn();
    }, 1000);
}
delayedCall(() => {
    console.log('This is a delayed call !!');
});
function delayedCallWithArgs(fn, ...args) {
    setTimeout(() => {
        fn(...args);
    }, 1000);
}
delayedCallWithArgs((name) => {
    console.log(`Hello ${name} !! This is a delayed call with arguments !!`);
}, 'Shantanu');
// function greet(user: { 
//     name: string, 
//     age: number }): void { 
//     return console.log(`Hello ${user.name} !! You are ${user.age} years old !!`);
// }
function greet(user) {
    return console.log(`Hello ${user.name} !! You are ${user.age} years old !!`);
}
let user1 = {
    name: 'Shantanu',
    age: 25,
    isAdmin: true
};
function isLegal(user) {
    if (user.age >= 18) {
        console.log(`The user ${user.name} ${user.lastname} is legal !!`);
    }
    else if (user.age < 0 || user.age > 120) {
        console.log(`The age ${user.age} is not valid !!`);
    }
    else {
        console.log(` The user ${user.name + user.lastname} is not legal !! `);
    }
}
let teamLead1 = {
    name: 'Shantanu',
    age: 25,
    department: 'Engineering',
    salary: 50000
};
//# sourceMappingURL=index.js.map