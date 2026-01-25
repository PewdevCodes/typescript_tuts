// Regular function with type annotations for parameters and return type

import { get } from "node:http";

function addNums(a: number, b: number): number { 
    return a + b;
}

const result: number = addNums(5, 10);
console.log(result);


// Function expression with type annotations

const division = function ( a: number, b: number): number { 
    return a / b;
};
const divResult: number = division(20, 4);
console.log(divResult);


// Arrow function with type annotations 
const multiplyNum = (a: number, b: number): number => { 
    return a * b;
};
const mulResult: number = multiplyNum(5, 6);
console.log(mulResult);


// Optional and default parameters

function greet( username: string , greeting: string = "Hello"): string { 
    return `${greeting ? greeting : "Hello"}, ${username}!`;
}
const greetMessage: string = greet("Alice");
console.log(greetMessage);

// function overloading 

function getLength(value: string): number;
function getLength(value: any[]): number;
function getLength(value: any): number { 
    return value.length;
}

console.log(getLength("Hello TS"));
console.log(getLength([1,2,3,4,5]));

// Rest parameters -- for gathering multiple arguments into a single variable or array 

function sumAll( ...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr , 0);
}

console.log(sumAll(1 ,2, 3,4 ,5,6,7 ,8, 9 , 10));


