# Lecture 2

### :house: Home task

0. Cover home tasks from lecture 1 with TS (if it isn't been covered)
1. Write a function that accepts any kind of array and an asynchronous callback, that is invoked on each array element sequentially. The result of invocation must be an array of callback results. All types must apply automatically (Template function).
   Invocation example:

```ts
const array: Array<string> = ["one", "two", "three"];

const results = await runSequentially(array, (item, index) =>
  Promise.resolve({
    item,
    index,
  })
);
```

IDE must consider variables from example as next:

item type = string
index type = number
results type = Array<{item: string, index: number}>

2. Write a function that accepts any kind of array and a predicate for array elements removing. Passed array must be mutated. All removed elements must be returned as array
   types must apply automatically (Template function).

Invocation example:

```ts
const array = [1, 2, 3, 6, 7, 9];

const removedElements = arrayMutateRemove(array, (item) => item % 2 === 0);
```

IDE must consider variables from example as next:

item: number
removedElements: Array<number>

result of invocation:

array = [1, 3, 7, 9]
removedElements = [2, 6]

### Useful links:

[TypeScript docs](https://www.typescriptlang.org/docs/)

[TS generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

[TS functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

[TS narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

[TSConfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

[TS complier options](https://www.typescriptlang.org/tsconfig)

[tsc CLI options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
