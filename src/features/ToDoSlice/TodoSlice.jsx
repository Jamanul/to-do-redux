import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    toDoList : [],
    sortCriteria: 'all'
}

const ToDoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setTodoList : (state,action)=>{
            state.toDoList = action.payload 
        },
        addTodo : (state,action)=>{
            state.toDoList.push({
                task : action.payload.task,
                id: action.payload.id,
                completed : false
            })
        }
    }
})