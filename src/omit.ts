interface Task1{
    name: string,
    description: string,
    date: Date,
    duration: string,
}


type SubTask1  = Omit<Task1,"date" | "duration">;

const sub11: SubTask1 = {
    name: "test",
    description: "test",
}