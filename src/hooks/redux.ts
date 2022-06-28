import {useDispatch} from 'react-redux'
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import { AppDispatch, RootState } from '../store/store'

// кастомный хук для диспатча
export const useAppDispatch = () =>{
    return useDispatch<AppDispatch>()
}

// кастомый хук useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector