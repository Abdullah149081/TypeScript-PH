{
    // Interface,
    interface Person {
        name: string;
        age: number;
    }
    const person: Person = {
        name: 'Masud',
        age: 24,
    };

    interface Employee extends Person {
        employeeId: string;
    }

    const employee: Employee = {
        name: 'Masud',
        age: 24,
        employeeId: '134',
    };
}
