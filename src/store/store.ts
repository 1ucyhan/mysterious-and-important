// from redux documentation:
// creates a Redux store, and also automatically configure the Redux DevTools extension 
import { configureStore } from '@reduxjs/toolkit'
import kanbanReducer from './kanbanSlice';

export const store = configureStore({
  reducer: {
    kanban: kanbanReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;