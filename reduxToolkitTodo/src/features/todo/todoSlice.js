import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos:[{id:1,text:'Helloworld'}],
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,//text is the payload from the action
            }
            state.todos.push(todo)//push the todo to the todos array
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)//filter the todos array to remove the todo with the id from the action payload
        },

    }
})

export const {addTodo,removeTodo}=todoSlice.actions//export the actions to be used in the component
export default todoSlice.reducer//export the reducer to be used in the store