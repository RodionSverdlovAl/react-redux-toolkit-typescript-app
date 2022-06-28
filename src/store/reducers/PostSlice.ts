import { IPost } from "../../models/IPost";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
    posts: IPost[];
    postIsLoading: boolean;
    postError: string;
}

const initialState:PostState = {
    posts: [],
    postIsLoading: false,
    postError: '',
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        postFetching(state){
            state.postIsLoading = true;
        },
        postFetchingSuccess(state, action:PayloadAction<IPost[]>){
            state.posts = action.payload;
            state.postIsLoading = false;
        },
        postFetchingError(state, action:PayloadAction<string>){
            state.postError = action.payload;
        },
    }
})

export default postSlice.reducer;