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

// Tuple in TS ::

let arr: