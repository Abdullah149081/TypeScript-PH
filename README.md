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