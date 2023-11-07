{
    //
    // oop => class

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        // parameter properties

        constructor(
            public name: string,
            public species: string,
            public sound: string,
        ) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} sound says ${this.sound}`);
        }
    }

    const bird = new Animal('Parrot', 'Green', 'Oh-oh');
    bird.makeSound();

    //
}
