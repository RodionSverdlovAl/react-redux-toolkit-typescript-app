import { AppDispatch } from "../store";
import  axios  from "axios";
import { IUser } from "../../models/IUser";
import { ITodo } from "../../models/ITodo";
import { TodosSlice } from "./TodosSlice";
// import {postSlice} from "./PostSlice";
import { IPost } from "../../models/IPost";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPhoto } from "../../models/IPhoto";



export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async(_, thunkAPI) =>{
        try{
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data
        }catch(e){
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
        }
    }
)

export const fetchPhotos = createAsyncThunk(
    'photo/fetchAll',
    async(_,thunkAPI) =>{
        try{
            const response = await axios.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos?_limit=10')
            return response.data
        }catch(e){
            return thunkAPI.rejectWithValue('Не удалось загрузить фотографии')
        }
    }
)


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

// export const fetchPosts = () =>{
//     return async function(dispatch: AppDispatch){
//         try{
//             dispatch(postSlice.actions.postFetching())
//             const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
//             dispatch(postSlice.actions.postFetchingSuccess(response.data))
//         }catch(e){
//             dispatch(postSlice.actions.postFetchingError(String(e)))
//         }
//     }
// }


