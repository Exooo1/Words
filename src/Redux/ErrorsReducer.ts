import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import uuid from 'uuid'

type HintsType = {
    id: string
    article: string
    status: string
}
type InitialStateType = {
    errors: Array<HintsType>
}
const initialState: InitialStateType = {
    errors: []
}

export const slice = createSlice({
    name: 'Errors',
    initialState,
    reducers: {
        addHint(state, action: PayloadAction<string>) {
            console.log('addHint')
            state.errors.push({id: uuid.v4(), article: action.payload, status: 'error'})
        },
        deleteHint(state, action: PayloadAction<string>) {
            const result = state.errors.findIndex(item => item.id === action.payload)
            state.errors.splice(result, 1)
        }
    }
})

export const errorsReducer = slice.reducer
export  const {addHint} =slice.actions