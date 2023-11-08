{
    //Abstraction in OOP

    interface Vehicle1 {
        startEngin(): void;
        stopEngin(): void;
        move(): void;
    }

    class Car implements Vehicle1 {
        startEngin(): void {
            console.log('I am starting the car engin');
        }
        stopEngin(): void {
            console.log('I am stooping the car engine');
        }
        move(): void {
            console.log('I am just moving the car');
        }
    }

    const TokyoCar = new Car();
    TokyoCar.startEngin();

    // abstract class
    abstract class Vehicle2 {
        abstract startEngin(): void;
        abstract stopEngin(): void;
        abstract move(): void;
    }

    class ToyotaCar extends Vehicle2 {
        startEngin(): void {
            console.log('I am starting the car engin');
        }
        stopEngin(): void {
            console.log('I am stooping the car engine');
        }
        move(): void {
            console.log('I am just moving the car');
        }
    }

    const hondaCar = new ToyotaCar();

    //
}
