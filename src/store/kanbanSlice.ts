import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { Task, KanbanState } from '../types';

const initialState: KanbanState = {
    tasks: []
}

// from redux documentation: All you have to do is define a name for this slice, 
// write an object that has some reducer functions in it, and it generates the 
// corresponding action code automatically.
export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{name: string; columnName: string;}>) => {
            // define a new task...
            const newTask: Task = {
                id: crypto.randomUUID(),
                name: action.payload.name,
                columnName: action.payload.columnName
            };
            // push this new task to the list
            state.tasks.push(newTask);
        },
        deleteTask: (state, action: PayloadAction<{id: string}>) => {
            // get every single task other than that one task
            state.tasks = state.tasks.filter(task => task.id != action.payload.id);
        },
        moveTask: (state, action: PayloadAction<{id: string; columnName: string;}>) => {
            // just changing the columnName..?
            const specificTask = state.tasks.find(task => task.id === action.payload.id);
            if (specificTask) {
                specificTask.columnName = action.payload.columnName
            }
        }
    }
})

// generate the action creators
export const { addTask, deleteTask, moveTask } = kanbanSlice.actions
export default kanbanSlice.reducer