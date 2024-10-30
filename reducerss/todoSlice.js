
import { createSlice } 
from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTodos: (state) => {
      state.loading = true;
    },
    fetchTodosSuccess: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    fetchTodosFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchTodos, fetchTodosSuccess, fetchTodosFailure } = todoSlice.actions;
export default todoSlice.reducer;
