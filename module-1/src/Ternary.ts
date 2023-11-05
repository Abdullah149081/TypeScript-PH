{
    // Ternary, optional chaining & nullish coalescing operator

    // Ternary
    const age: number = 18;
    const isAdult = age >= 18 ? 'adult' : 'no adult';
    console.log(isAdult);

    // nullish coalescing operator
    // use null and undefined
    const isAuthentication = null;
    const check = isAuthentication ?? 'Guest';
    console.log(check);
}
