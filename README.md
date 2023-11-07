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