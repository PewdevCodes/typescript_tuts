// generics -- are way to create reusable components , fns , classes and interfaces ,that work with different data types without sacrificing type safety.

// Generic Function 

function genericIdentity<T>(arg: T): T { 
    return arg;
}

console.log(genericIdentity<number>(10));
console.log(genericIdentity<string>('Hii , my name is Shantanu !! '))

// Interface with Generics :: 
interface keyValuePair<K, V> {
    key: K;
    value: V;
}
let kvp1: keyValuePair<number, string> = { key: 1, value: "One" };
let kvp2: keyValuePair<string, string> = { key: "name", value: "Shantanu" };

console.log(kvp1);
console.log(kvp2);


// Generic Constrains :: restr4icting the types that can be used with generics using "extends" keyword.

function loggingIdentity<T extends { length: number }>(arg: T): T {
    console.log(arg.length);
    return arg;
}
loggingIdentity("Hello, World!");
loggingIdentity([1, 2, 3, 4, 5]);
// loggingIdentity(10); // Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.


// Generic Classes ::
class GenericNumber<T> {
    zeroValue!: T;
    add!: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 5)); 


let stringGenericNumber = new GenericNumber<string>();
stringGenericNumber.zeroValue = "";
stringGenericNumber.add = function(x, y) { return x + y; };
console.log(stringGenericNumber.add(stringGenericNumber.zeroValue, "Hello, " + "World!"));  




