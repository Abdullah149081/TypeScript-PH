{let userData: {
    readonly student: 'Daffodil'; // type ==> literal types // can't changed property value because readonly use.
    firstName: string;
    MiddleName?: string; //optional  type
    lastName?: string;
    isActive?: boolean;
} = {
    student: 'Daffodil',
    firstName: 'Abdullah',
    MiddleName: 'Al',
    lastName: 'Masud',
    isActive: true,
};

console.log(userData);
}