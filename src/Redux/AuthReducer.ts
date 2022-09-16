import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {InputType} from "../Hooks/Form";
import {addHint} from "./ErrorsReducer";
import {apiAuth, RegistrationReturnType} from "../API/API";

type InitialStateAuth = {
    auth: number
    resultCode: number
}
const initialState: InitialStateAuth = {
    auth: 0,
    resultCode: 0
}
type ThunkError = { rejectValue: { errors: string } }

export const fetchRegistration = createAsyncThunk<any, InputType, ThunkError>('auth/fetchRegistration',
    async ({name, password, email, surname}, {dispatch, rejectWithValue}) => {
        const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        if (name.length < 1) return dispatch(addHint('Where is your name?'))
        if (surname.length < 1) return dispatch(addHint('Where is your surname?'))
        if (password.length! < 6) return dispatch(addHint('Password incorrect'))
        if (!reg.test(email)) return dispatch(addHint('Invalid Email?'))
        if (reg.test(email)) {
            const person = {email, password, name, surname}
            try {
                const result = await apiAuth.registration(person)
                return result.data.resultCode
            } catch (err) {
                const error = err as AxiosError<RegistrationReturnType>
                if (error.response?.data === undefined) dispatch(addHint(error.message))
                else dispatch(addHint(error.response.data.error))
                return rejectWithValue({errors: error.message})
            }
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
    }
})

export const authReducer = slice.reducer