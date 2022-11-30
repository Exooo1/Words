import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {AxiosError} from 'axios'
import {InputType} from '../Hooks/Form'
import {addHint} from './ErrorsReducer'
import {apiAuth, AuthLoginType, LoginType} from '../API/authAPI'
import {ProjectTypeReturn} from "../Common/Types/CommonType";

export type InitialStateAuth = {
    auth: number
    resultCode: number
}
const initialState: InitialStateAuth = {
    auth: 0,
    resultCode: 0,
}
type ThunkError = { rejectValue: { errors: string } }
export const fetchRegistration = createAsyncThunk<number, InputType, ThunkError>(
    'auth/fetchRegistration',
    async ({name, password, email, surname}, {dispatch, rejectWithValue}) => {
        const person = {email, password, name, surname}
        try {
            const auth = await apiAuth.registration(person)
            const verify = auth.data.item || ''
            if (auth.data.resultCode === 1) await apiAuth.sendEmail({email, name, verify})
            return auth.data.resultCode
        } catch (err) {
            const {message, response} = err as AxiosError<ProjectTypeReturn<string>>
            if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
            else dispatch(addHint({article: response.data.error, status: 'error'}))
            return rejectWithValue({errors: message})
        }
    },
)
export const fetchLogin = createAsyncThunk<number, LoginType, ThunkError>(
    'auth/fetchLogin',
    async ({email, password}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await apiAuth.login({email, password})
            window.localStorage.setItem('token', data.item.token)
            return data.item.auth
        } catch (err) {
            const {response, message} = err as AxiosError<ProjectTypeReturn<AuthLoginType>>
            if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
            else dispatch(addHint({article: response.data.error, status: 'error'}))
            return rejectWithValue({errors: response?.data.error || message})
        }
    },
)
export const fetchGetAuth = createAsyncThunk<number, undefined>(
    'auth/fetchGetAuth',
    async (payload, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await apiAuth.getAuth()
            return data.item
        } catch (err) {
            const {response, message} = err as AxiosError<ProjectTypeReturn<number>>
            if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
            return rejectWithValue({errors: response?.data.error || message})
        }
    },
)
export const fetchLogOut = createAsyncThunk<number, undefined, ThunkError>(
    'auth/fetchLogOut',
    async (arg, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await apiAuth.logout()
            window.localStorage.removeItem('token')
            return data.item
        } catch (err) {
            const {response, message} = err as AxiosError<ProjectTypeReturn<number>>
            if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
            else dispatch(addHint({article: response.data.error, status: 'error'}))
            return rejectWithValue({errors: response?.data.error || message})
        }
    },
)
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
        builder.addCase(fetchLogOut.fulfilled, (state, action) => {
            state.auth = action.payload
        })
    },
})

export const authReducer = slice.reducer
