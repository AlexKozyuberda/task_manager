import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask, ITasks } from '../../../types';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: [],
  } as ITasks,
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      const { description, ...data } = action.payload;

      const firstLetterToUpperCase =
        action.payload.description[0].toUpperCase() +
        action.payload.description.slice(1);

      const newTask = {
        ...data,
        description: firstLetterToUpperCase,
      };

      state.data.push(newTask);
    },
    completedTask(state, action: PayloadAction<string>) {
      const taskId = action.payload;

      const task = state.data.find(({ id }) => id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask(state, action: PayloadAction<string>) {
      const taskId = action.payload;
      state.data = state.data.filter(({ id }) => id !== taskId);
    },
  },
});

export const { addTask, completedTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
