{
    //

    type Books = {
        English: string;
        Math: string;
        Phy: string;
    };

    type readBooks<T> = T extends keyof Books ? true : false;
    type checkBook = readBooks<'English'>;

    //
}
