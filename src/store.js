import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import taskReducer from "./reducers/taskReducer";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slices/todoSlice"
// const store = createStore(
//   taskReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;