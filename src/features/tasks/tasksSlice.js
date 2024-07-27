import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        title: action.payload.title,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id);
      if (existingTask) {
        existingTask.title = title;
      }
    },
    toggleTaskStatus: (state, action) => {
      const existingTask = state.tasks.find(task => task.id === action.payload);
      if (existingTask) {
        existingTask.completed = !existingTask.completed;
      }
    },
    deleteAllTasks: (state) => {
      state.tasks = [];
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTaskStatus, deleteAllTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
