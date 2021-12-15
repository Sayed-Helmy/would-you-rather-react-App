import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./questionsSlice";
import usersReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    questions: questionsReducer,
  },
});

export default store;
