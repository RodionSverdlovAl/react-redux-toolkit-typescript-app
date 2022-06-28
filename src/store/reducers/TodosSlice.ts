import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../models/ITodo"


interface TodoState {
    todos: ITodo[];
    todoIsLoading: boolean;
    todoError: string;
}

const initialState:TodoState ={
    todos: [],
    todoIsLoading: false,
    todoError: '',
}

export const TodosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        todosFetching(state){
            state.todoIsLoading = true;
        },
        todosFetchingSuccess(state, action: PayloadAction<ITodo[]>){
            state.todoIsLoading = false;
            state.todos = action.payload;
        },
        todosFetchingError(state, action: PayloadAction<string>){
            state.todoIsLoading = false;
            state.todoError = action.payload;
        }
    }
})

export default TodosSlice.reducer