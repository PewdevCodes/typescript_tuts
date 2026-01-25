class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const newPerson = new Person1('Shantanu', 21);
console.log(newPerson.greet());
console.log(newPerson.name);
console.log(newPerson.age);

/*
    access modifiers { public, private, protected } in TS ::

    1. public : accessible from anywhere ( default behavior )
    2. private : accessible only within the class
    3. protected : accessible within the class and its subclasses

*/

class Car1 {
  public make: string;
  public model: string;
  public year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  public getModel(): string {
    return this.model;
  }

  public getMake(): string {
    return this.make;
  }
}

const myCar1 = new Car1('Toyota', 'Camry', 2020);
console.log('Car Make: ' + myCar1.getMake());
console.log('Car Model: ' + myCar1.getModel());

// Inheritance in TS ::

class Animal {
  // Parent Class

  constructor(
    public name: string,
    public species: string,
  ) {}
  makeSound(): void {
    console.log(' Some generic sounds... ');
  }
}

class Dog extends Animal {
  // Child Class
  constructor(name: string) {
    super(name, 'Dog');
  }

  makeSound(): string {
    return 'Woof Woof!';
  }
}

const myDog = new Dog('Buddy');
console.log(`${myDog.name} is a ${myDog.species}`);
console.log(myDog.makeSound());

// Abstract Classes in TS ::

abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;

  printArea(): void {
    console.log(`Area: ${this.area()}`);
  }
}

class Rectange extends Shape {
  constructor(
    public width: number,
    public height: number,
  ) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const myRectangle = new Rectange(5, 10);
myRectangle.printArea();
console.log(`Perimeter: ${myRectangle.perimeter()}`);
