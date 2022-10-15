import axios, {AxiosPromise} from 'axios'
import {AuthTypeReturn} from "./authAPI";

export type AddWordType = {
    word: string
    translate: string
    description: string
    added: string
}
export type ProfileType = {
    firstName: string,
    lastName: string,
    words: any,
    totalWords: number
}
const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
})

export const wordApi = {
    getWords(): AxiosPromise<AuthTypeReturn<ProfileType>> {
        return instance.get<AuthTypeReturn<ProfileType>>('words')
    },
    addWord(values: AddWordType):AxiosPromise<AuthTypeReturn<string>> {
        return instance.post<AuthTypeReturn<string>>('add-word', values)
    },
    deleteWord(value: { idWord: string, word: string }):AxiosPromise<AuthTypeReturn<null>> {
        return instance.delete<AuthTypeReturn<null>>(`delete-word?id=${value.idWord}&letter=${value.word[0].toLowerCase()}`)
    }
}