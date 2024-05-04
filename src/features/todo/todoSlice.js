// nanoid is used to create unique IDs 
// In redux-toolkit, reducers are called slices 
// Step 0:  import 
import { createSlice, nanoid } from '@reduxjs/toolkit';

// Step 1: initial state of the store, it can be declared as array or object 
// We are declaring it as an object here because multiple things can come here
const initialState = {
    // array of objects 
    todos: [{ id: 1, text: "Hello, World!" }]
}

// Step 2: creating a slice 
export const todoSlice = createSlice({
    // slices have different names 
    name: 'todo',
    // initial state 
    initialState,
    // reducers ; Here we declare and functions and write function definations
    reducers: {
        // in rtk, we get 2 access, state and action
        // State:  gives the initial state 
        // Action: values that we get
        addTodo: (state, action) => {

            const newTodo = {
                // creating a new id using nanoid
                id: nanoid(),
                // action contains payload which is an object. It will contain our data
                text: action.payload
            }
            state.todos.push(newTodo)

        },
        removeTodo: (state, action) => {
            // here we are taking the current todos from state as state contains current state 
            // we are using filter to remove the todo of the particular id
            // action.payload will automatically compare the id 
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },
        updateTodo: (state, action) => {
            // here we need to find the ID matching with the action.payloa
            // after that we change the text of that ID
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.text = text;
                }
            })
        },

    }
})

// step 3 : exporting the functionalities. 
// we need to export the functionalities individually because they are needed individually and not all together 

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

// step 4 : Exporting the reducer as a whole for the store 
export default todoSlice.reducer


