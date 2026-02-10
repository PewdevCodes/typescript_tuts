// Crare two types called User and Admin and also create a fucntion that can take the type of User or Admin and return a string that says "Hello, [name]!" where name is the name property of the User or Admin.

type User = { 
    name: string;
    age: number;
};

type Admin = { 
    name: string;
    role: string;
};

type userOrAdmin = User | Admin;

function greet ( person : userOrAdmin ) : string { 
    return `Hello, ${person.name}!`;
}


console.log(greet({ name: "Shantanu Mani Mishra", age: 22 })); // Output: "Hello, Shantanu Mani Mishra!"