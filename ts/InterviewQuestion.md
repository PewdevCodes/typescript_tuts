    /* Interview Questions for Typescripts ::  

    Level 1: The Fundamentals (Must Know)
These questions test your basic understanding of why TypeScript exists and how it improves upon JavaScript.

1. What is TypeScript and how is it different from JavaScript?

Key points: It is a superset of JavaScript, adds static typing, compiles down to JavaScript (transpilation), and runs anywhere JS runs.

2. What are the primitive types in TypeScript?

Key points: string, number, boolean, null, undefined, symbol, and bigint.

3. Explain the any type. When should you use it (and when should you avoid it)?

Key points: It disables type checking. Use it only for migration or when working with dynamic 3rd party libraries without types. Avoid it generally to maintain type safety.

4. What is Type Inference?

Key points: TypeScript's ability to automatically deduce the type of a variable based on the value assigned to it (e.g., let x = 10 is inferred as number).

5. What is the void type?

Key points: Represents the absence of a value, commonly used as the return type of functions that do not return anything.

    Level 2: The Type System (Intermediate) :: This is the most common area for interview questions. Expect to write code here.

6. Interface vs. Type Alias: What is the difference?

Key points: Both describe shapes of objects.

Difference: Interfaces are extendable (via declaration merging) and are better for defining object shapes. Types are more flexible (can represent unions, primitives, tuples) but cannot be merged.

7. What is the difference between any and unknown?

Key points: Both accept any value. However, any turns off type checking. unknown is type-safe; you cannot perform operations on an unknown variable without first narrowing its type (checking what it is).

8. What are Union and Intersection types?

Union (|): A value can be one of several types (e.g., string | number).

Intersection (&): Combines multiple types into one (e.g., Person & Employee).

9. What are Enums?

Key points: A way to define a set of named constants. TypeScript supports numeric and string-based enums.

10. What is a Tuple?

Key points: An array with a fixed number of elements whose types are known (e.g., [string, number]).

    Level 3: Advanced Concepts :: These questions distinguish senior developers from mid-level developers.

11. What are Generics?

Key points: A way to create reusable components/functions that work with a variety of types rather than a single one, while maintaining type safety (e.g., function identity<T>(arg: T): T).

12. What are Type Guards?

Key points: Expressions that perform a runtime check that guarantees the type in a specific scope.

Examples: typeof, instanceof, and custom user-defined type guards (parameter is Type).

13. What are Mapped Types?

Key points: Creating new types by transforming properties of an existing type (e.g., making all properties optional or readonly).

14. What are Utility Types?

Key points: Built-in types like Partial<T>, Readonly<T>, Pick<T, K>, Omit<T, K>, and Record<K, T>. You may be asked to implement one of these from scratch.

15. What is the never type?

Key points: Represents values that never occur (e.g., a function that throws an error or has an infinite loop). It is often used in exhaustive checks in switch statements.

Level 4: Configuration & Ecosystem

16. What is a .d.ts file?

Key points: A declaration file that provides type information for JavaScript code/libraries so TypeScript can understand them. It contains no implementation code.

17. What does strict: true do in tsconfig.json?

Key points: It enables a wide range of type checking rules, including noImplicitAny, strictNullChecks, strictFunctionTypes, etc. It is the recommended setting for modern TS projects.

18. What are Decorators?

Key points: A special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Commonly used in Angular and NestJS.

19. How do you handle modules in TypeScript?

Key points: Using import and export. Understanding the difference between default exports and named exports.
    
*/


