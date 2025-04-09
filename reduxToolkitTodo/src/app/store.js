import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; // Import the todo reducer from the todo slice

export const store = configureStore({
    reducer: todoReducer, // Set the todo reducer as the main reducer for the store
}); // Create the Redux store using configureStore