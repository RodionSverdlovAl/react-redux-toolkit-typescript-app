import {combineReducers} from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/UserSlice'
import  todoReducer  from './reducers/TodosSlice'
import postReducer from './reducers/PostSlice'

const rootReducer = combineReducers({
    userReducer,
    todoReducer,
    postReducer
})


export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']