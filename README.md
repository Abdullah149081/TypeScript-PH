# Module-1

## Data Types in TypeScript

### Primitive Data Types

| Data Type   | Description                                                                   |
| ----------- | ----------------------------------------------------------------------------- |
| `number`    | Represents numbers                                                            |
| `string`    | Represents text                                                               |
| `boolean`   | Represents true or false                                                      |
| `null`      | Represents an intentional absence of any object value                         |
| `undefined` | Represents a variable that has been declared but hasn't been assigned a value |
| `symbol`    | Represents a unique and immutable value used as object property keys          |

### Non-Primitive Data Types

| Data Type | Description                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| `Array`   | Represents a list or collection of items                                         |
| `tuple`   | Represents an array with a fixed number of elements, each with its own data type |
| `object`  | Represents a collection of key-value pairs                                       |

### Basic Data Type Examples

```typescript
// number
let userId: number = 101;

// string
let userName: string = 'Abdulah Al Masud';

// boolean
let isAdmin: boolean = true;

// undefined
let unknown: undefined = undefined;

// null
let nullType: null = null;
```

### Array

An array is a commonly used non-primitive data type in TypeScript. It represents a list or collection of items. Here are some examples:

```typescript
// Array of strings
let friends: Array<string> = ['masud', 'shamim'];
let countries: string[] = ['USA', 'Canada', 'UK'];

// Adding elements to an array
friends.push('Asad');
countries.push('Australia');
```

### Tuple

A tuple is a non-primitive data type in TypeScript that represents an array with a fixed number of elements, and each element can have its own data type. Tuples are useful when you need to work with data that has a specific structure. Here are some examples:

### Declaring Tuples

You can declare a tuple by specifying the data types for each element in square brackets. For example:

```typescript
let person: [number, string] = [23, 'Masud'];
let result: [number, string, boolean] = [42, 'Success', true];
```

### Object

An object is a non-primitive data type in TypeScript that represents a collection of key-value pairs. Objects are used to structure data and store related information. Here's an example of an object with various properties:

```typescript
let userData: {
    readonly student: 'Daffodil'; // Type: Literal Types
    firstName: string;
    MiddleName?: string; // Optional Type
    lastName?: string;
    isActive?: boolean;
} = {
    student: 'Daffodil',
    firstName: 'Abdullah',
    MiddleName: 'Al',
    lastName: 'Masud',
    isActive: true,
};
```

### Functions

Functions are an essential part of TypeScript for defining and using reusable code. Here are some examples of different types of functions in TypeScript:

### Normal Function

```typescript
function addSum(num1: number, num2: number) {
    return num1 + num2;
}
```

### Arrow Function

```typescript
const addMinus = (num1: number, num2: number) => num1 - num2;
```

### Object Method

```typescript
const userInfo = {
    name: 'Masud',
    Roll: 149081,
    balanced: 500,
    addResult(balanced: number): string {
        return `Your balanced is ${this.balanced + balanced}`;
    },
};
console.log(userInfo.addResult(30));
```

### Array Map with Arrow Function

```typescript
const arr: number[] = [2, 4, 6];
const newArray: number[] = arr.map(
    (element: number): number => element * element,
);
console.log(newArray);
```

### Spread Operator

The spread operator is a powerful feature in TypeScript that allows you to expand elements from an iterable (e.g., an array) into another iterable. Here's an example:

```typescript
const friends1: string[] = ['Riajul', 'Mes', 'Mijan'];
const friends2: string[] = ['Asad', 'Shamim', 'Rafi'];

friends1.push(...friends2);
console.log(friends1, friends2);
```

### Rest Operator

The rest operator allows you to gather individual elements into an array when working with function parameters. It is useful when you need to handle an arbitrary number of arguments as an array. Here's an example:

```typescript
const greetingFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
};
greetingFriends('Asad');
```

### Destructuring

Destructuring is a powerful feature in TypeScript that allows you to extract values from objects and arrays. Here's an example:

```typescript
object;
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

console.log(`First Name: ${firstName}`);
console.log(`Contact: ${contact}`);

Array;
const [, , tertiaryColor] = colors;

console.log(`tertiaryColor  Color: ${tertiaryColor}`);
```

### Type Alias

Type aliases allow you to create custom named types in TypeScript for convenience and clarity. Here are some examples:

### Type Alias for an Object & function

```typescript
type Student = {
    name: string;
    roll: number;
    contactNO?: number;
};

const masud: Student = {
    name: 'masud',
    contactNO: 134,
    roll: 34,
};

type Add = (num1: number, num2: number) => number;
const sum: Add = (num1, num2) => num1 + num2;
```
