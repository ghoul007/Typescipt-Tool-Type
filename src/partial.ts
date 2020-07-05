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
