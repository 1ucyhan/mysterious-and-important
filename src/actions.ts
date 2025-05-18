// putting all the curried functions here!
import { Dispatch } from 'redux';
import { addTask, moveTask, deleteTask } from './store/kanbanSlice';
import { UnknownAction } from 'redux';


export const curryAddTask = (dispatch: Dispatch<UnknownAction>) => (columnName: string) => (name: string) => {
    if (name && columnName) {
        dispatch(addTask({ name, columnName }));
    }
}

export const curryDeleteTask = (dispatch: Dispatch<UnknownAction>) => (id: string) => {
    dispatch(deleteTask({id}))
}

export const curryMoveTask = (dispatch: Dispatch<UnknownAction>) => (id: string) => (columnName: string) => {
    dispatch(moveTask({id, columnName}))
}

