const  TestFn = (name: string, age: number) => `${name}-${age}`;


type Test = Parameters<typeof TestFn>;
let a: Test = ['ahmed', 32]