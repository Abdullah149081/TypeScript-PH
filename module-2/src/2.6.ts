{
    // Mapped types

    type AreaNumber = {
        height: number;
        width: number;
    };

    type Height = AreaNumber['height']; // look up type

    type AreaString = {
        [key in keyof AreaNumber]: string;
    };

    type DynamicType<T> = {
        [key in keyof T]: T[key]; // look up
    };

    type user = {
        height: number;
        name: string;
    };

    const result: DynamicType<user> = {
        name: 'Masud',
        height: 5,
    };

    //
}
