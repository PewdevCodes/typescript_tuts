type k = string | number;

function sum2(a: k , b: k): k { 
    return (a as any) + (b as any);
}


function sum3( a : number , b : number ) : number { 
    return a + b;
}

// ?: means that the function parameter is optional
function sum4( a : number , b? : number ) : number { 
    if (b) { 
        return a + b;
    }
    return a;
}



interface Address { 
    city: string;
    state: string;
    country: string;    
    pincode: number;
    houseNumber : number;
};

interface Office { 
    name: string;
    address: Address;
};

interface User { 
    name: string;   
    age: number;
    address: Address;
};

let user1 : User = { 
    name: "Shantanu",
    age: 22,
    address: { 
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        pincode: 411001,
        houseNumber: 123
    }
}

function isLegal ( user1 : User) : boolean {
    if(user1.age >= 18) {
        return true;
    } 
    return false;
}

console.log(isLegal(user1));


interface People { 
    name: string;
    age: number;
    greet: () => string;
};

class Person implements People { 
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() { 
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

let person1 = new Person ("Shantanu" , 22);

console.log(person1.greet());

class Shape { 
    area() { 
        console.log("Hii , how are you !! ")
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number , height: number) { 
        super();
        this.width = width;
        this.height = height;
    }
}

const rect = new Rectangle(10, 20);
rect.area();




interface User1 { 
    name: string;
    age: number;
    email: string;

    salut(): string;    
}

class Manager implements User1 {
    name: string; 
    age: number;
    email: string;

    constructor( name: string, age: number, email: string) { 
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









