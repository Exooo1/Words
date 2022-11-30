import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {AxiosError} from 'axios'
import {FullNameType, profileAPI} from '../API/profileAPI'
import {addHint} from './ErrorsReducer'
import {ProjectTypeReturn} from "../Common/Types/CommonType";

type ProfileInitialState = {
    firstName: string
    lastName: string
}
const initialState: ProfileInitialState = {
    firstName: '',
    lastName: '',
}
type ThunkError = { rejectValue: { errors: string } }
export const fetchGetProfile = createAsyncThunk<FullNameType, undefined, ThunkError>(
    'profile/fetchGetProfile',
    async (arg, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await profileAPI.getFullName()
            return {...data.item}
        } catch (err) {
            const {response, message} = err as AxiosError<ProjectTypeReturn<FullNameType>>
            if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
            return rejectWithValue({errors: response?.data.error || message})
        }
    },
)

export const slice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGetProfile.fulfilled, (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        })
    },
})
export const profileReducer = slice.reducer
