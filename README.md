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