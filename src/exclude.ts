interface Task2{
    name: string,
    description: string,
    date: Date,
    duration: string,
}


type SubTask2  = Exclude<Partial<Task2>,"date" | "duration">;

const sub2 :SubTask2 = {
    name: "test",
    description: "test",
}