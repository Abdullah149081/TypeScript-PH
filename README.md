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

## Array

An array is a commonly used non-primitive data type in TypeScript. It represents a list or collection of items. Here are some examples:

```typescript
// Array of strings
let friends: Array<string> = ['masud', 'shamim'];
let countries: string[] = ['USA', 'Canada', 'UK'];

// Adding elements to an array
friends.push('Asad');
countries.push('Australia');
```

## Tuple

A tuple is a non-primitive data type in TypeScript that represents an array with a fixed number of elements, and each element can have its own data type. Tuples are useful when you need to work with data that has a specific structure. Here are some examples:

### Declaring Tuples

You can declare a tuple by specifying the data types for each element in square brackets. For example:

```typescript
let person: [number, string] = [23, 'Masud'];
let result: [number, string, boolean] = [42, 'Success', true];
```

## Object

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

## Functions

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
const arr: number[] = [2, 4, 6];
const newArray: number[] = arr.map(
    (element: number): number => element * element,
);
console.log(newArray);
```

### Array Map with Arrow Function

```typescript
const arr: number[] = [2, 4, 6];
const newArray: number[] = arr.map(
    (element: number): number => element * element,
);
console.log(newArray);
```
