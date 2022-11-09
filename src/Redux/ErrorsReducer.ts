import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uuid from 'uuid'

type HintsType = {
  id: string
  article: string
  status: string
}
type InitialStateType = {
  errors: Array<HintsType>
}
type PayloadHintType = {
  article: string
  status: string
  v4id?: string
}
const initialState: InitialStateType = {
  errors: [],
}

export const slice = createSlice({
  name: 'Errors',
  initialState,
  reducers: {
    deleteHint(state, action: PayloadAction<string>) {
      const result = state.errors.findIndex((item) => item.id === action.payload)
      state.errors.splice(result, 1)
    },
    addHint(state, action: PayloadAction<PayloadHintType>) {
      state.errors.push({
        id: action.payload.v4id || uuid.v4(),
        article: action.payload.article,
        status: action.payload.status,
      })
    },
  },
})

export const errorsReducer = slice.reducer
export const { addHint, deleteHint } = slice.actions
