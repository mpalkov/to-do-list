import { TaskData } from "../types/tasks";
import { FilterType } from "../types";

export const applyFilter = (tasks: TaskData[], filter: FilterType): TaskData[] => {
  switch (filter) {
    case 'completed':
      return tasks.filter(task => task.completed);
    case 'pending':
      return tasks.filter(task => !task.completed);
    default:
      return tasks;
  }
};