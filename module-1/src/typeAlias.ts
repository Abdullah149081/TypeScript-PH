{
    // Type alias
    type Student = {
        name: string;
        roll: number;
        contactNO?: number;
    };

    const masud: Student = {
        name: 'masud',
        contactNO: 134,
        roll: 34,
    };

    type Add = (num1: number, num2: number) => number;
    const sum: Add = (num1, num2) => num1 + num2;
}
