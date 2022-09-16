import axios, {AxiosPromise} from 'axios'
import {InputType} from "../Hooks/Form";

const instance = axios.create({
    baseURL: 'http://localhost:8080/auth/',
})
type LoginType = {
    email: string
    password: string
}
export type RegistrationReturnType = {
    resultCode: number
    error: string
}
// const config = {
//     headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIxZDNmOTJkODIzNDFkOTM2MDFjN2QiLCJpYXQiOjE2NjMxNjIzMzQsImV4cCI6MTY2MzI0ODczNH0.ctIlR6xrGx43rcJJbBkEJgRNEzF0ZH4ZinZwbLtfaiA`}
// }

export const apiAuth = {
    registration(values: InputType): AxiosPromise<RegistrationReturnType> {
        const result = {
            firstName: values.name,
            lastName: values.surname,
            email: values.email,
            password: values.password
        }
        return instance.post<RegistrationReturnType>('registration', result)
    },
    login(values: LoginType) {
        const result = {email: values.email, password: values.password}
        return instance.post('login', result)
    },
}