import axios, { AxiosPromise } from 'axios'
import { InputType } from '../Hooks/Form'

const instance = axios.create({
  baseURL: 'http://localhost:8080/auth/',
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('token')}`,
  },
})
export type AuthLoginType = {
  token: string
  auth: number
}
export type LoginType = {
  email: string
  password: string
}
type EmailType = {
  email: string
  name: string
  verify: string
}
export type AuthTypeReturn<T> = {
  item: T
  resultCode: number
  error: string
  message?: string
}
export const apiAuth = {
  registration(values: InputType): AxiosPromise<AuthTypeReturn<string>> {
    const result = {
      firstName: values.name,
      lastName: values.surname,
      email: values.email,
      password: values.password,
    }
    return instance.post<AuthTypeReturn<string>>('registration', result)
  },
  sendEmail(values: EmailType): AxiosPromise<AuthTypeReturn<null>> {
    return instance.post('email', values)
  },
  login({ email, password }: LoginType): AxiosPromise<AuthTypeReturn<AuthLoginType>> {
    return instance.post<AuthTypeReturn<AuthLoginType>>('login', { email, password })
  },
  confirm(id: string): AxiosPromise<AuthTypeReturn<null>> {
    return instance.post<AuthTypeReturn<null>>('confirm', { id })
  },
  getAuth(): AxiosPromise<AuthTypeReturn<number>> {
    return instance.post<AuthTypeReturn<number>>('me')
  },
  logout(): AxiosPromise<AuthTypeReturn<number>> {
    const config = {
      headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return instance.put<AuthTypeReturn<number>>('logout',{},config)
  },
}
