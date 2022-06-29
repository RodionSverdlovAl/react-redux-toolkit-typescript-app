import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../../models/IPhoto";
import { fetchPhotos } from "./ActionCreators";

interface PhotoState {
    photos: IPhoto[];
    photoIsLoadind: boolean;
    photoError: string;
}

const initialState:PhotoState = {
    photos: [],
    photoIsLoadind: false,
    photoError: '',
}

export const PhotoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers:{
    },
    extraReducers:{
        [fetchPhotos.fulfilled.type]: (state, action:PayloadAction<IPhoto[]>) =>{
            state.photoIsLoadind = false;
            state.photoError ='';
            state.photos = action.payload;
        },
        [fetchPhotos.pending.type]:(state)=>{
            state.photoIsLoadind=true;
        },
        [fetchPhotos.rejected.type]:(state, action:PayloadAction<string>)=>{
            state.photoIsLoadind = false;
            state.photoError = action.payload;
        }
    }
})

export default PhotoSlice.reducer