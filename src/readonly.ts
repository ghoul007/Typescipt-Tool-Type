
// example 1 
let list: Readonly<number[]> ;

list = [1, 2, 3, 4, 5]

// list.push(6); // <-- error here Property 'push' does not exist on type 'readonly number[]'


//example 2

interface Person {
    name: string
}

const user1 : Readonly<Person> = {
    name: "ahmed"
}

// user1.name = "ghoul" // <-- same error (because readonly)


// =============
interface Todo_1 {
    title: string;
    thing: {
        level: number;
        type: string;
    }
}

const todo_1: Readonly<Todo_1> = {
    title: 'Delete inactive users',
    thing: {
        level: 3,
        type: 'eat'
    }
};

todo_1.thing.type =  "apple"  // 😕  works



