import { PriorityType } from "./priority.enum";

export interface Todo{
    id: string;
    title: string;
    createDate: Date;
    isCompleted: boolean;
    detail?: string;
    priority: PriorityType
    userId: string;
}