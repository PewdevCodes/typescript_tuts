/* 
         ALL ABOUT TS & HOW TS WORKS !! 

   -- ts codes gets compiled to js codes ( transpilation )
    ( because browsers do not understand ts code
   they only understand js code ) 
   -- TS is a superset of JS
   -- { all js code is valid ts code
   but all ts code is not valid js code } 
    -- TS adds static typing to JS
    -- TS compiler ( tsc ) transpiles ts code to js code

   compilation -- high level language to low-level language
   transpilation -- high level language to high level language


   --> Javascript Compatability :
        -- TS can target different versions of JS
        -- ES3, ES5, ES6(ES2015) , ES7(ES2016) , ES8(ES2017) , ES9(ES2018) , ES10(ES2019) , ES11(ES2020) , ES12(ES2021) , ES13(ES2022) , ES14(ES3 2023) 
        -- By default TS targets ES3 version of JS
        -- You can change the target version in tsconfig.json file

   --> Cross Platform :
        -- TS can run on any platform that supports JS
        -- Node.js , Deno , Browsers

   --> Leveraging JS Libraries :
        -- TS can use any JS library
        -- DefinitelyTyped repository provides type definitions for popular JS libraries

   --> Backward Compatibility :
        -- TS is backward compatible with older versions of JS
        -- You can use TS features in older JS codebases

   --> Type Checking :
        -- TS provides static type checking at compile time
        -- Helps catch errors early in the development process
    

*/

// let a1: string ="11";

// function add2(a: number , b: number) : number { 
//     return a + b ; // NO type checking
// }
// const result:number = add2(1, 4);
// console.log(result);

// Basic Types in TS :

let num:number = 1234_3456_7889;
let num1: bigint = 1234567890123456789012345678901234567890n;
console.log(num1);
console.log(num);

let char: string = "Hello TS";
console.log(char);

let isTrue: boolean = true;
console.log(isTrue);



let val: undefined = undefined;
let nll: null = null;
console.log(val);
console.log(nll);

let obj: object = { 
     name: "Shantanu",
     age: 21,
     isStudent: true
};

let obj1 = { ...obj , phone: 1234567890 };
console.log(obj);
console.log(obj1);

let obj2: { name: string; age: number; isStudent: boolean; } = { 
    name: "Shantanu",
    age: 21,
    isStudent: true
};
console.log(obj2);


let valArray: any[] = [1, "Hello", true, { name: "Shantanu" },
      [1,2,3]];
console.log(valArray);
console.log(typeof(valArray));


// Any type in TS :
let numVal;
numVal = "Hello";
numVal = 10;
console.log(numVal)

function testAnyType(val: any) { 
     console.log(val);
}

// Arrays in TS :: 

let numArray: number[] = [1,2,3,4,5,6,7,8,9,10];
let charArray: string[] = ["a", "b", "c", "d", "e"];
let boolArray: boolean[] = [true, false, true, false];
charArray.forEach(val => val.length);

// Tuple in TS ::Array with fixed size and fixed types for each index , mostly used for strict positional data of data types    

let arr : [ number , string , boolean ] = [ 1, "Hello", true ];

let coordinate: [ number , number , number ] = [ 10, 20, 30 ]; // x y z axis

/* If we are sending some data in some params : 
   localhost:4200?id=1&name=shantanu&phone=1234567890

   then we can use tuple to represent the data 
   in the function params as :     
*/

let userData: [ number , string , number ] = [ 1, "shantanu", 1234567890 ];

let response: [ number , string ] = [ 200 , "OK" ]  // status code , status message
response.push(0);
console.log(response)

// Enums in TS :: set of named constant can be defined using enum

enum Color { 
    Red = 1,
    Green = 2,
    Blue = 3
}
console.log(Color.Green)

enum Direction { 
     Up = "UP",
     Down = "DOWN",
     Left = "LEFT",
     Right = "RIGHT"
}
console.log(Direction.Left + " DIRECTION")

let dir: Direction = Direction.Up;
console.log("DIRECTION IS : " + dir)


// Unknown Type in TS :: Not sure 

let notSure: unknown = 4;


// Never Type in TS :: Function that never returns a value OR They always throw error 

function infiniteLoop(): never { 
    while(true) { 
        console.log("Infinite Loop")
    }
}

// infiniteLoop();

function throwError(message: string) : never { 
     throw new Error(message);
}

// throwError("This is a custom error message");


// Void Type in TS :: Function that does not return any value

function logMessage(message: string) : void { 
     console.log(message);
}  // action performed but no value returned


// Type Inference in TS :: 

let username = 1; // inferred as number 
// username = "shantanu" // Error : Type 'string' is not assignable to type 'number'


// Type Assertion in TS ::

let some : any = " This is a string ";
let len : number = ( some as string ).length; 
console.log( len );


// Union Types in TS ::

let id: number | string | boolean;
id = 123;
id = "ABC123";
id = true;     
console.log("ID is : " + id);
  
// TYPE NARROW in TS ::

function printIdfn(id: number | string) { 
    if ( typeof id === "string" ) { 
        console.log("ID in uppercase is : " + id.toUpperCase());
    } else { 
        console.log("ID is : " + id);
    }
}

printIdfn(123);
printIdfn("abc");


// Interface s in TS :: structuring the shape of an obj to determine whether what all kinds of properties those objects can actually have . . . enforces typsafety on objects

interface Person {
     name: string;
     age: number;
     greet(): void;
}

let person: Person = { 
     name: "Shantanu",
     age: 21,
     greet() { 
         console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
     }
}

person.greet();




// Interface with Function Type in TS ::

interface MathOperation {
     (a: number, b: number): number;
}

const add : MathOperation = (a: number, b: number): number => { 
     return a + b;
}

const multiply : MathOperation = (a: number, b: number): number => { 
     return a * b;
}
console.log("Addition : " + add(5, 10));
console.log("Multiplication : " + multiply(5, 10));


// An interface can extend another interface in TS ::

interface Employee extends Person {
     employeeId: number;
     department: string;
}

// type alias in TS :: giving a meaninful name indeed to a particular type or a union of types

type ID = number | string;

let userId: ID; // userId can be number or string
userId = 101;
console.log("User ID is : " + userId);
userId = "USER101";
console.log("User ID is : " + userId);

