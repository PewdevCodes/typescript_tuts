// 1. Write a function to calculate the factorial of a number with proper type annotations.

function factorial( n : number) : number { 
    if ( n == 0 || n == 1) { 
        return 1;
    } else { 
        return n * factorial(n - 1);
    }
};
console.log(factorial(5));


// 2. Create an interface for a "Book" object with properties like title, author, and pages. Then, write a function that takes a Book object and returns a formatted string with its details.

interface Book { 
    title: string;
    author: string;
    pages: number;
}

function getBookDetails( book : Book ) : string { 
    return `Title of the book is : ${book.title} and the author is : ${book.author} and the number of pages in the book are : ${book.pages}`;
}
const myBook: Book = { 
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
};

console.log(getBookDetails(myBook));



// 3. Calcualte the total price: Write a TS func that calculates the total price of an array of product objects , each product having a price and quantity property.

interface Products { 
    price: number;
    quantity: number;
}
function calculateTotalPrice( products: Products[]) : number { 
    let totalPrice: number = 0;
    for ( let product of products) { 
        totalPrice += product.price * product.quantity;
    }
    return totalPrice;
}

const productsList: Products[] = [ 
    { price: 100, quantity: 2 },
    { price: 50, quantity: 5 },
    { price: 200, quantity: 1 }
];
console.log(calculateTotalPrice(productsList));


// 4. Define a Union Type of a Vehicle that can be either a Car or a Bike with different properties . Write a function that takes a Vehicle and returns the log details about the vehicle.

type Car = { 
    type: "Car";
    make: string;
    model: string;
    doors: number;
}
type Bike = { 
    type: "Bike";
    make: string;
    model: string;
    hasCarrier: boolean;
}

type Vehicle = Car | Bike;

function getVehicleDetails( vehicle : Vehicle) : string { 
    if ( vehicle.type === "Car") { 
       return ` Vehicle is a Car of model ${vehicle.model} made by ${vehicle.make} having ${vehicle.doors} doors.`;
    } 
    else 
        { 
         return ` Vehicle is a Bike of model ${vehicle.model} made by ${vehicle.make} and it ${ vehicle.hasCarrier ? "has" : "does not have" } a carrier.`;
    }
}

const myCar: Vehicle = { 
    type: "Car",
    make: "Toyota",
    model: "Camry",
    doors: 4
};

console.log(getVehicleDetails(myCar));

const myBike: Vehicle = {   
    type: "Bike",
    make: "Yamaha",
    model: "FZ",
    hasCarrier: true
}; 

console.log(getVehicleDetails(myBike));




