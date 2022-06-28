import {useDispatch} from 'react-redux'
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import { AppDispatch, RootState } from '../store/store'


export const useAppDispatch = () =>{
    return useDispatch<AppDispatch>()
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector