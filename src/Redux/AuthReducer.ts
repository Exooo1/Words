import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {InputType} from "../Hooks/Form";
import {addHint} from "./ErrorsReducer";
import {apiAuth, ApiReturnType} from "../API/API";

type InitialStateAuth = {
    auth: number
    resultCode: number
}
const initialState: InitialStateAuth = {
    auth: 0,
    resultCode: 0
}
type ThunkError = { rejectValue: { errors: string } }
type FetchLoginType = {
    email: string
    password: string
}
export const fetchRegistration = createAsyncThunk<number, InputType, ThunkError>('auth/fetchRegistration',
    async ({name, password, email, surname}, {dispatch, rejectWithValue}) => {
        const person = {email, password, name, surname}
        try {
            const auth = await apiAuth.registration(person)
            const verify = auth.data.message || ''
            if (auth.data.resultCode === 1) await apiAuth.sendEmail({email, name, verify})
            return auth.data.resultCode
        } catch (err) {
            const error = err as AxiosError<ApiReturnType>
            if (error.response?.data === undefined) dispatch(addHint(error.message))
            else dispatch(addHint(error.response.data.error))
            return rejectWithValue({errors: error.message})
        }
    })
export const fetchLogin = createAsyncThunk<number, FetchLoginType, ThunkError>('auth/fetchLogin',
    async ({email, password}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await apiAuth.login({email, password})
            window.localStorage.setItem('token', data.token)
            console.log(data)
            return data.auth
        } catch (err) {
            const {response, message} = err as AxiosError<ApiReturnType>
            if (response?.data === undefined) dispatch(addHint(message))
            else dispatch(addHint(response.data.error))
            return rejectWithValue({errors: response?.data.error || message})
        }
    })
export const fetchGetAuth = createAsyncThunk<number, any>('auth/fetchGetAuth',
    async (payload, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await apiAuth.getAuth()
            return data.resultCode
        } catch (err) {
            const {response, message} = err as AxiosError<ApiReturnType>
            return rejectWithValue({errors: response?.data.error || message})
        }
    })
export const authActions = {fetchRegistration}
export const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRegistration.fulfilled, (state, action) => {
            state.resultCode = action.payload
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.auth = action.payload
        })
        builder.addCase(fetchGetAuth.fulfilled, (state, action) => {
            state.auth = action.payload
        })
    }
})

export const authReducer = slice.reducer


