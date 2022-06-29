import {combineReducers} from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/UserSlice'
import  todoReducer  from './reducers/TodosSlice'
// import postReducer from './reducers/PostSlice'
import photoReducer from './reducers/PhotoSlice'
import { postAPI } from '../services/PostService'

const rootReducer = combineReducers({
    userReducer,
    todoReducer,
    // postReducer,
    photoReducer,
    [postAPI.reducerPath]: postAPI.reducer
})


export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer,
        middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']