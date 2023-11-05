{
    // Introduction to generics
    interface Developer<T, L = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseDate: string;
        };
        mobile: T;
    }

    type Mobile = {
        brand: string;
        ram: number;
        releaseDate: string;
    };

    const webDeveloper: Developer<Mobile> = {
        name: 'Masud',
        computer: {
            brand: 'Dell',
            model: 'XPS',
            releaseDate: '2022-01-01',
        },
        mobile: {
            brand: 'iPhone',
            ram: 8,
            releaseDate: '2022-02-15',
        },
    };
}
