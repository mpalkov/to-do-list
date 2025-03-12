import { TaskData } from "./tasks";
import { FilterType } from ".";

export interface ContentState {
  tasks: TaskData[];
  filteredTasks: TaskData[];
  filter: FilterType;
  loading: boolean;
  error: string | null;
  initialLoadComplete: boolean;
}

export interface ContentContextType {
  state: ContentState;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  setFilter: (filter: FilterType) => void;
  refreshTasks: () => void;
}
