import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { errorsReducer } from './ErrorsReducer'
import { authReducer } from './AuthReducer'
import { wordsSlice } from './WordsReducer'

const reducers = combineReducers({
  errorsReducer,
  authReducer,
  wordsSlice,
})
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
})
