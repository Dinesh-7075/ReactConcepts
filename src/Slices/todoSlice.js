import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.jobs.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.jobs = state.jobs.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;