class User {
    constructor(name: string, age: number) {
        return {
            name,
            age
        };
    }
}
type Usr = InstanceType<typeof User>;
 

let user: Usr= new User('ahmed',1)