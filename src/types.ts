// Interface for a task.
export interface Task {
    id: string;
    name: string;
    columnName: string;
}

// Interface for a column.
export interface Column {
    columnName: string;
}

// Interface for a Kanban.
export interface KanbanState {
    tasks: Task[];
}