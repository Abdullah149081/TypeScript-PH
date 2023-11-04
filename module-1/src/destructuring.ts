{
    // Destructuring
    const myInfo = {
        name: {
            firstName: 'Abdulah',
            middleName: 'Al',
            lastName: 'Masud',
        },
        contact: 1630474,
        address: 'Dhaka',
    };

    const {
        name: { firstName },
        contact,
    } = myInfo;
}
