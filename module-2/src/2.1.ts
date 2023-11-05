{
    // Type assertion / type narrowing
    const sum = (value: number | string): number | string | undefined => {
        if (typeof value === 'number') {
            return value + 100;
        }
        if (typeof value === 'string') {
            const numberConvert = parseFloat(value) + 100;
            return numberConvert.toString();
        }
    };

    const result = sum(100) as number;
    const result1 = sum('100') as string;
    console.log({ result, result1 });
}
