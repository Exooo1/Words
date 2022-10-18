import axios, {AxiosPromise} from 'axios'
import {AuthTypeReturn} from './authAPI'

export type AddWordType = {
    word: string
    translate: string
    description: string
    added: string
}
export type ProfileType = {
    firstName: string
    lastName: string
    words: any
    totalWords: number
}
export type DeleteWordType = {
    word: string
    id: string
}
const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
    },
})

export const wordApi = {
    getWords(count: number): AxiosPromise<AuthTypeReturn<ProfileType>> {
        const config = {
            headers: {Authorization: `Bearer ${window.localStorage.getItem('token')}`}
        };
        return instance.get<AuthTypeReturn<ProfileType>>(`words/?count=${count}`, config)
    },
    addWord(values: AddWordType): AxiosPromise<AuthTypeReturn<string>> {
        return instance.post<AuthTypeReturn<string>>('add-word', values)
    },
    deleteWord(value: DeleteWordType): AxiosPromise<AuthTypeReturn<null>> {
        return instance.delete<AuthTypeReturn<null>>(
            `delete-word?id=${value.id}&letter=${value.word[0].toLowerCase()}`,
        )
    },
}
