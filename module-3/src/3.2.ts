{
    //Inheritance in OOP.

    class Institute {
        constructor(
            public name: string,
            public age: number,
            public address: string,
        ) {}
        getSleepHours(numberOfHours: number) {
            console.log(` ${this.name} is sleep ${numberOfHours} Hours`);
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
    student1.getSleepHours(2);

    class Teacher extends Institute {
        constructor(
            public name: string,
            public age: number,
            public address: string,
            public designation: string,
        ) {
            super(name, age, address);
        }

        takeClass(classTake: number) {
            console.log(
                `This Teacher  ${this.name} take class ${classTake} Hours`,
            );
        }
    }
    const teacher = new Teacher('Masud', 24, 'Dhaka', 'Junior Instructor ');
    teacher.getSleepHours(2);
    teacher.takeClass(2);

    //
}
