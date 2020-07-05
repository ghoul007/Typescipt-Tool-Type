interface Task{
    name: string,
    description: string,
    date: Date,
    duration: string,
}


type SubTask  = Pick<Task,"name" | "description">;

const sub1: SubTask = {
    name: "test",
    description: "test",
}