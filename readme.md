## Typsecript Object Tools

### Partial

```ts
type Partial<T> = {
    [P in keyof T]?: T[P]
}

```

### Partial
Make all properties in T required

```ts
type Partial<T> = {
    [P in keyof T]-?: T[P]
}

```

### Readonly
Make all properties in T readonly

```ts
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}

```


### Pick
Make all properties in T readonly

```ts
type Pick<T, K extends keyof T> = {
      [P in T]: T[P]
}

```

### Exclude
Exclude from T those types that are assignable to U

```ts
type Exclude<T, U> = T extends U ? never: T;

```

### Extract
Select U type from T type.

```ts
type Extract<T, U> = T extends U ? U: never;

```


### NonNullable
Remove null and undefined from the T type

```ts
type Extract<T> = T extends null | undefined ? never: T;

```