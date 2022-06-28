import {IUser} from '../../models/IUser'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState:UserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlise = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state){
            state.isLoading = true;
        },
        usersFetchingSuccess(state){
            state.isLoading = false
        },
        usersFetchingError(state){
            state.isLoading = false
        }
    }
})

export default userSlise.reducer;