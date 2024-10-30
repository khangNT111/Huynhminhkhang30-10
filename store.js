// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { text: 'Learn React' },
    { text: 'Learn Redux' },
    { text: 'Build a Todo App' }
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload });
    }
  }
});

export const { addTodo } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
});

export default store;
