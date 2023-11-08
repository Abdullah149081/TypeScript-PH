{
    // Polymorphism -> oop

    class Person {
        getSleep() {
            console.log('i am seeping  8 hours');
        }
    }
    class Student extends Person {
        getSleep() {
            console.log('i am seeping  7 hours');
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log('i am seeping  6 hours');
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
        console.log(params.getArea());
    };

    const result1 = new Shape();
    const result2 = new Circle(2);

    result(result1);
    result(result2);
    //
}
