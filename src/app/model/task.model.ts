import { Priority } from "./priority.enum";

export interface Task {
    id: number,
    name: string,
    timeSpent: number,
    priority: Priority
}