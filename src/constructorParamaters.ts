class User {
    constructor(name: string, age: number) {
        return {
            name,
            age
        };
    }
}
type Result = ConstructorParameters<typeof User>;

let result: Result;
result = [ "ahmed",12 ] //  [string, number]