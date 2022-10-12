import axios, {AxiosPromise} from 'axios'
import {InputType} from "../Hooks/Form";

const instance = axios.create({
    baseURL: 'http://localhost:8080/auth/',
    headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
})
type LoginType = {
    email: string
    password: string
}
type EmailType = {
    email: string
    name: string
    verify: string
}
export type ApiReturnType = {
    resultCode: number
    error: string
    message?: string
}
type ApiReturnLoginType = {
    token: string
    auth: number
}
export const apiAuth = {
    registration(values: InputType): AxiosPromise<ApiReturnType> {
        const result = {
            firstName: values.name,
            lastName: values.surname,
            email: values.email,
            password: values.password
        }
        return instance.post<ApiReturnType>('registration', result)
    },
    sendEmail(values: EmailType): AxiosPromise<ApiReturnType> {
        return instance.post('email', values)
    },
    login({email, password}: LoginType): AxiosPromise<ApiReturnLoginType> {
        return instance.post<ApiReturnLoginType>('login', {email, password})
    },
    confirm(id: string) {
        return instance.post<ApiReturnType>('confirm', {id})
    },
    getAuth() {
        return instance.post<ApiReturnType>('me', {}, {headers: {Authorization: `Bearer ${window.localStorage.getItem('token')}`}})
    },
    logout() {
        return instance.put<ApiReturnType>('logout', {}, {headers: {Authorization: `Bearer ${window.localStorage.getItem('token')}`}})
    }
}