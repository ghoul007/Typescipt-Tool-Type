function TestFn1(name: string, age: number) {
    return name + '--' + age;
}

type Result1 = ReturnType<typeof TestFn1>;
let a1: Result1 = '789'