import { AppDispatch } from "../store";
import  axios  from "axios";
import { IUser } from "../../models/IUser";
import { ITodo } from "../../models/ITodo";
import { userSlise } from "./UserSlice";
import { TodosSlice } from "./TodosSlice";


export const fetchUsers = () => async (dispatch: AppDispatch) =>{
    try{
        dispatch(userSlise.actions.usersFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        dispatch(userSlise.actions.usersFetchingSuccess(response.data));
    }catch(e){
        dispatch(userSlise.actions.usersFetchingError(String(e)));
    }
}

export const fetchTodos = () =>{
    return async function(dispatch:AppDispatch){
        try{
            dispatch(TodosSlice.actions.todosFetching())
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            dispatch(TodosSlice.actions.todosFetchingSuccess(response.data));
        }catch(e){
            dispatch(TodosSlice.actions.todosFetchingError(String(e)));
        }
    }
}