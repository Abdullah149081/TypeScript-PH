# Module-3

## Object-Oriented Programming (OOP) in TypeScript

In TypeScript, you can use classes to implement object-oriented programming concepts. Here's an example of defining and using a class in TypeScript:

```typescript
class Animal {
    constructor(
        public name: string,
        public species: string,
        public sound: string,
    ) {}

    makeSound() {
        console.log(`The ${this.name} makes a sound: ${this.sound}`);
    }
}

const bird = new Animal('Parrot', 'Green', 'Oh-oh');
bird.makeSound();
```


### Inheritance in Object-Oriented Programming (OOP) with TypeScript

Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a class to inherit properties and methods from another class. TypeScript provides support for inheritance through class-based programming. Here's an example:

```typescript
class Institute {
    constructor(
        public name: string,
        public age: number,
        public address: string,
    ) {}

    getSleepHours(numberOfHours: number) {
        console.log(`${this.name} sleeps for ${numberOfHours} hours`);
    }
}

class Student extends Institute {
    constructor(
        public name: string,
        public age: number,
        public address: string,
    ) {
        super(name, age, address);
    }
}

const student1 = new Student('Masud', 24, 'Dhaka');
student1.getSleepHours(8); // Student inherits the getSleepHours method

class Teacher extends Institute {
    constructor(
        public name: string,
        public age: number,
        public address: string,
        public designation: string,
    ) {
        super(name, age, address);
    }

    takeClass(classHours: number) {
        console.log(`${this.name}, a ${this.designation}, takes a ${classHours}-hour class.`);
    }
}

const teacher = new Teacher('Masud', 24, 'Dhaka', 'Junior Instructor');
teacher.getSleepHours(6); // Teacher inherits the getSleepHours method
teacher.takeClass(2); // Teacher has its own method
```



### Polymorphism in Object-Oriented Programming (OOP) with TypeScript

Polymorphism is a core concept in Object-Oriented Programming (OOP) that allows different classes to provide their own implementation for a common method or property. In TypeScript, this can be achieved through method overriding. Here's an example:

```typescript
class Person {
    getSleep() {
        console.log('I am sleeping for 8 hours');
    }
}

class Student extends Person {
    getSleep() {
        console.log('I am sleeping for 7 hours');
    }
}

class Developer extends Person {
    getSleep() {
        console.log('I am sleeping for 6 hours');
    }
}

const sleepingTime = (param: Person) => {
    param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

sleepingTime(person1);
sleepingTime(person2);
sleepingTime(person3);

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    getArea(): number {
        return parseFloat((Math.PI * this.radius * this.radius).toFixed(3));
    }
}

const result = (params: Shape) => {
    console.log(`Area: ${params.getArea()}`);
};

const result1 = new Shape();
const result2 = new Circle(2);

result(result1);
result(result2);
```



### Abstraction in Object-Oriented Programming (OOP) with TypeScript

Abstraction is a key OOP principle that allows you to define a blueprint for classes and methods without providing their full implementation. TypeScript supports abstraction through interfaces and abstract classes. Here's an example:

```typescript
// Using an interface for abstraction
interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class Car implements Vehicle1 {
    startEngine(): void {
        console.log('Starting the car engine');
    }
    stopEngine(): void {
        console.log('Stopping the car engine');
    }
    move(): void {
        console.log('Moving the car');
    }
}

const TokyoCar = new Car();
TokyoCar.startEngine();

// Using an abstract class for abstraction
abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
}

class ToyotaCar extends Vehicle2 {
    startEngine(): void {
        console.log('Starting the car engine');
    }
    stopEngine(): void {
        console.log('Stopping the car engine');
    }
    move(): void {
        console.log('Moving the car');
    }
}

const hondaCar = new ToyotaCar();
```