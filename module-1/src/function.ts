// function

// Normal function
function addSum(num1: number, num2: number) {
    return num1 + num2;
}

// Arrow Function
const addMinus = (num1: number, num2: number) => num1 - num2;

// Object => function => method
const userInfo = {
    name: 'Masud',
    Roll: 149081,
    balanced: 500,
    addResult(balanced: number): string {
        return `Your balanced is ${this.balanced + balanced}`;
    },
};
console.log(userInfo.addResult(30));


const arr: number[] = [2, 4, 6];
const newArray: number[] = arr.map(
    (element: number): number => element * element,
);

console.log(newArray);
