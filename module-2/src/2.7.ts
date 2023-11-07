{
    // Utility types

    type Person = {
        name: string;
        number: number;
        email: string;
        contact: string;
    };

    type Name = Pick<Person, 'name' | 'number'>; // Pick
    type Info = Omit<Person, 'name' | 'number'>; // Omit
    type PersonRequired = Required<Person>; // Required
    type PersonPartial = Partial<Person>; // Partial
    type PersonReadOnly = Readonly<Person>; // Readonly
    const user: PersonReadOnly = {
        name: 'Masud',
        number: 24,
        email: '@.com',
        contact: '013',
    };

    type MyObj = Record<string, string>; // <key, value>
    const obj: MyObj = {
        a: 'a',
        b: '2',
    };
    const EmptyObj: Record<string, unknown> = {};

    //
}
