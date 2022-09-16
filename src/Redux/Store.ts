import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import {errorsReducer} from "./ErrorsReducer";
import {authReducer} from "./AuthReducer";

const reducers = combineReducers({
    errorsReducer,
    authReducer
})
export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})