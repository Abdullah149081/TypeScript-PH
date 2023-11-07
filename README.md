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

### Mapped Types and Lookup Types

Mapped types and lookup types are powerful features in TypeScript that allow you to create new types based on existing types or dynamically lookup property types. Here's an example:

```typescript
type AreaNumber = {
    height: number;
    width: number;
};

// Lookup Type
type Height = AreaNumber['height']; // Results in the type number

// Mapped Type
type AreaString = {
    [key in keyof AreaNumber]: string;
};

// Dynamic Lookup Type
type DynamicType<T> = {
    [key in keyof T]: T[key]; // Dynamic lookup
};

type User = {
    height: number;
    name: string;
};

const result: DynamicType<User> = {
    name: 'Masud',
    height: 5,
};
```


### Utility Types

Utility types in TypeScript provide convenient tools for manipulating and working with types. Here's an example:

```typescript
type Person = {
    name: string;
    number: number;
    email: string;
    contact: string;
};

// Pick
type Name = Pick<Person, 'name' | 'number'>; // Results in { name: string; number: number; }

// Omit
type Info = Omit<Person, 'name' | 'number'>; // Results in { email: string; contact: string; }

// Required
type PersonRequired = Required<Person>; // Results in { name: string; number: number; email: string; contact: string; }

// Partial
type PersonPartial = Partial<Person>; // Results in { name?: string; number?: number; email?: string; contact?: string; }

// Readonly
type PersonReadOnly = Readonly<Person>;
const user: PersonReadOnly = {
    name: 'Masud',
    number: 24,
    email: '@.com',
    contact: '013',
};

// Record
type MyObj = Record<string, string>; // <key,value>
const obj: MyObj = {
    a: 'a',
    b: '2',
};
const EmptyObj: Record<string, unknown> = {};

