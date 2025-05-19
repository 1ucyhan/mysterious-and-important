// putting all the curried functions here!
import { Dispatch } from 'redux';
import { addTask, moveTask, deleteTask } from './store/kanbanSlice';
import { UnknownAction } from 'redux';

/**
 * A curried function for adding a task! 
 * 
 * Accepts the Redux's dispatch function, the columnName where the task will be added, and the name of the 
 * task being added.
 * 
 * @param dispatch - the Redux dispatch function
 * @returns - a function that accepts the columnName and returns a function that accepts the name of the task
 */
export const curryAddTask = (dispatch: Dispatch<UnknownAction>) => (columnName: string) => (name: string) => {
    if (name && columnName) {
        dispatch(addTask({ name, columnName }));
    }
}

/**
 * A curried function for adding a task! 
 * 
 * Accepts the Redux's dispatch function and the id of the task being deleted.
 * 
 * @param dispatch - the Redux dispatch function
 * @returns - a function that accepts the id of the task being deleted
 */
export const curryDeleteTask = (dispatch: Dispatch<UnknownAction>) => (id: string) => {
    dispatch(deleteTask({id}))
}

/**
 * A curried function for moving a task!
 * 
 * Accepts the Redux's dispatch function, the id of the task being moved, and the columnName where the task will be moved to.
 * @param dispatch - the Redux dispatch function
 * @returns - a function that accepts the id of the task and returns a function that accepts the column name
 */
export const curryMoveTask = (dispatch: Dispatch<UnknownAction>) => (id: string) => (columnName: string) => {
    dispatch(moveTask({id, columnName}))
}

