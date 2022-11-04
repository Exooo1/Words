import axios, {Axios, AxiosPromise} from "axios";
import {AuthTypeReturn} from "./authAPI";


const instance = axios.create({
    baseURL: 'http://localhost:8080/profile',
})
const {CancelToken} = axios;
const source = CancelToken.source();
export const cancelFetch=()=>{
    source.cancel('i canceled this request!')
}

instance.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`
    return config
})

export type FullNameType = {
    firstName: string
    lastName: string
}

export const profileAPI = {
    getFullName(): AxiosPromise<AuthTypeReturn<FullNameType>> {
        return instance.get<AuthTypeReturn<FullNameType>>('/fullname', {cancelToken: source.token})
    }
}