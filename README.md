# Module-2

## Advanced TypeScript Features

### Type Assertion

**Type assertion** is valuable when dealing with situations where you, as a developer, possess more knowledge about the type of a value than the compiler's default type inference. However, it should be used with caution to prevent potential runtime errors.Here's an example:

```typescript
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
```

### Interfaces

In TypeScript, an **interface** defines the structure of an object, specifying the properties and methods that the object must have. Interfaces play a crucial role in enforcing type safety and improving code readability. Here's an example:

```typescript
// Interface
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: 'Masud',
    age: 24,
};

// Extending Interfaces
interface Employee extends Person {
    employeeId: string;
}

const employee: Employee = {
    name: 'Masud',
    age: 24,
    employeeId: '134',
};
```

# Module-2

## Advanced TypeScript Features

### Generics

Generics in TypeScript allow you to create components (functions, classes, interfaces) that can work with a variety of data types while still maintaining type safety. They enable you to write reusable code by specifying placeholders for types.

In a generic definition, you typically use a type parameter (often denoted as T but can be any identifier) to represent an unspecified data type. This type parameter can then be used as the data type for function parameters, return values, class properties, or interface members. Here's an example:

```typescript
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
```
