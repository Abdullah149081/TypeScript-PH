{
    //
    const getData = async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1',
        );
        const data = await response.json();
        console.log(data);
    };

    getData()
    // promise
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = 'something';
            if (data) {
                return data;
            } else {
                reject('Failed Data');
            }
        });
    };

    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        return data;
    };
}
