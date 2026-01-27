/*                  :: Decorators :: 

--Decorators are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter. They are used to modify or enhance the behavior of the target they are applied to.

-- Decorators are widely used in frameworks like Angular for adding metadata and functionality to classes and their members.
-- To enable decorators in TypeScript, you need to set the "experimentalDecorators" option to true in your tsconfig.json file.
*/

 // Class Decorator

 function logger(taget: Function) {
    console.log("Class decorator called on:", taget.name);
 }
@logger
 class People { 
    constructor (public name: string) {}
 }

 const p = new People("Alice");
    console.log(p.name); // Output: Alice
    console.log(p);



// Method Decorator

function LoggerAdd(target: Object , propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Method ${propertyKey} called with args: ${args.join(", ")}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}  


class CalcOp { 
    add(x: number, y: number): number {
        return x + y;
    }
}

const calcOp = new CalcOp();
console.log(calcOp.add(5, 3)); 



// accessor and property decorators - are used to modify or enhance the behavior of class accessors (getters/setters) and properties.