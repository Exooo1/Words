import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Axios, AxiosError} from "axios";
import {FullNameType, profileAPI} from "../API/profileAPI";
import {AuthTypeReturn} from "../API/authAPI";
import {addHint} from "./ErrorsReducer";

type ProfileInitialState = {
    firstName: string
    lastName: string
}
const initialState: ProfileInitialState = {
    firstName: '',
    lastName: ''
}
type ThunkError = { rejectValue: { errors: string } }
export const fetchGetProfile = createAsyncThunk<FullNameType, undefined, ThunkError>('profile/fetchGetProfile', async (arg, {
    dispatch,
    rejectWithValue
}) => {
    try {
        const {data} = await profileAPI.getFullName()
        return {...data.item}
    } catch (err) {
        const {response, message} = err as AxiosError<AuthTypeReturn<FullNameType>>
        if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
        return rejectWithValue({errors: response?.data.error || message})
    }
})

const slice = createSlice({
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