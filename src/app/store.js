// Process to make store 
// 1) Get configureStore 
import { configureStore } from "@reduxjs/toolkit";
// 2) importing todoReducers 
import todoReducer from '../features/todo/todoSlice'

// 3) export it in a variable. configureStore takes an object as an argument
export const store = configureStore({
    reducer: todoReducer
})