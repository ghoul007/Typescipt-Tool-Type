interface User{
    name: string,
    age:number,
}


const updateUser = (user: User, part: Partial<User>)=> ({...user, ...part})

const user = {
    name: "ahmed",
    age: 20
}
const newUser= updateUser(user, {age:32});

console.log(newUser);

// nested Object
// only support the first layer (attributes)
interface Person {
    name: string;
    age: number;
    child: {
        name: string;
        age: number;
    }
}
type NewPerson = Partial<Person>;

const person3: NewPerson = {
    name:"ahmed",
    child: {
        name: "ahmed",
        age: 25 
    }
}


// Customize a Partial Method 
type PowerPartial<T> = {
    [U in keyof T]?: T[U] extends object ?PowerPartial<T[U]>: T[U]
}

type NewPersonParial = PowerPartial<NewPerson>;

const person4: NewPersonParial = {
    name:"ghoul",
    age:25
}