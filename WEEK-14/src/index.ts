let x: number = 1; // can work without type annotation, but it is good practice to specify the type -- Type inference can be used to infer the type of a variable based on its initial value

console.log(x);

let str: string = 'Hello World';
console.log(str);

function add(a: number, b:number): number { 
    return a + b;
}

let res = add(5 , 10);
console.log(res)


function ageChecker(age: number): string  { 
    if ( age >= 18) { 
        return `The user with the age ${age} , is eligible to vote !! `
    } else if (age > 120 || age < 0) {
        return `The age ${age} is not valid !! `
    } else { 
        return `The user with the age ${age} , is not eligible to vote !! `
    }
}

ageChecker(25);
ageChecker(15);
ageChecker(-5);
ageChecker(150);


function delayedCall(fn: any): void { 
    setTimeout(() => {
        fn();
    }, 1000);
}

delayedCall(() => {
    console.log('This is a delayed call !!');
});


function delayedCallWithArgs(fn: any, ...args: any[]): void { 
    setTimeout(() => {
        fn(...args);
    }, 1000);

}

delayedCallWithArgs((name: string) => {
    console.log(`Hello ${name} !! This is a delayed call with arguments !!`);
}, 'Shantanu');


// function greet(user: { 
//     name: string, 
//     age: number }): void { 
//     return console.log(`Hello ${user.name} !! You are ${user.age} years old !!`);
// }

function greet(user: UserType2 ): void { 
    return console.log(`Hello ${user.name} !! You are ${user.age} years old !!`);
}

let user1: UserType = { 
    name: 'Shantanu',
    age: 25,
    isAdmin: true
}

// for defining the type of an object, we can use an interface or a type alias -- here we will use an interface

interface UserType { 
    name: string;
    age: number;
    isAdmin: boolean;
}


// Create a func isLegal that returns true or false if a user is above 18 and takes a user as an input.. 


interface User { 
    name: string;
    lastname: string;
    age: number;
    email: string;
}

function isLegal( user : User ): void { 
    if ( user.age >= 18) { 
        console.log(`The user ${user.name} ${user.lastname} is legal !!`);
    } else if ( user.age < 0 || user.age > 120) {
        console.log(`The age ${user.age} is not valid !!`);
    } else { 
        console.log(` The user ${user.name + user.lastname} is not legal !! `);
    }
}


// Types can be used to define the type of a variable, function, or an object -- they are similar to interfaces but they can also be used to define primitive types, union types, intersection types, etc.


interface User { 
    name: string;
    lastname: string;
    age: number;
    email: string;
}

type UserType2 = { 
    name: string;
    lastname: string;
    age: number;
    email: string;
}      

type SumInput = number | string; // union type -- can be either a number or a string

/* function sum(a : SumInput, b: SumInput): SumInput { 
    return (a + b); 
    The union can not be of different types -- both a and b should be of the same type -- either both should be numbers or both should be strings -- if we want to allow different types, we can use function overloading
} */

interface Manager { 
    name: string;
    age: number;
    department: string;
}

interface Employee { 
    name: string;
    age: number;
    salary: number;
}

type TeamLead = Manager & Employee; // intersection type -- should have all the properties of both Manager and Employee

let teamLead1: TeamLead = { 
    name: 'Shantanu',
    age: 25,
    department: 'Engineering',
    salary: 50000
}
