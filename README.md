# ts-open-class

## Array#first

### type definition

```typescript
first: () => T | undefined;
```

### usage

<!-- prettier-ignore-start -->
```typescript
[1, 2, 3].first();  // 1
["a", "b"].first(); // "a"
[].first();         // undefined
```
<!-- prettier-ignore-end -->

## Array#last

### type definition

```typescript
last: () => T | undefined;
```

### usage

<!-- prettier-ignore-start -->
```typescript
[1, 2, 3].last();  // 1
["a", "b"].last(); // "a"
[].last();         // undefined
```
<!-- prettier-ignore-end -->

## Array#permutation

### type definition

```typescript
permutation: (n?: number) => Array<T>;
```

### usage

<!-- prettier-ignore-start -->
```typescript
[1, 2, 3].permutation();  // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
[1, 2, 3].permutation(1); // [[1], [2], [3]]
[1, 2, 3].permutation(2); // [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
[1, 2, 3].permutation(3); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
[1, 2, 3].permutation(0); // [[]]
[1, 2, 3].permutation(4); // []
```
<!-- prettier-ignore-end -->

## Array#combination

### type definition

```typescript
combination: (n: number) => Array<T>;
```

### usage

<!-- prettier-ignore-start -->
```typescript
[1, 2, 3, 4].combination(1); // [[1], [2], [3], [4]]
[1, 2, 3, 4].combination(2); // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
[1, 2, 3, 4].combination(3); // [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]
[1, 2, 3, 4].combination(4); // [[1, 2, 3, 4]]
[1, 2, 3, 4].combination(0); // [[]]
[1, 2, 3, 4].combination(5); // []
```
<!-- prettier-ignore-end -->
