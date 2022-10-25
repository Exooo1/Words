import axios, { AxiosPromise } from 'axios'
import { AuthTypeReturn } from './authAPI'

export type AddWordType = {
  word: string
  translate: string
  description: string
  added: string
  _id?: string
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
export type WordChangeType = {
  word: string
  translate: string
  description: string
  added: string
  id: string
}
const instance = axios.create({
  baseURL: 'http://localhost:8080/',
})
instance.interceptors.request.use((config) => {
  // @ts-ignore
  config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`
  return config
})

export const wordApi = {
  getWords(count: number): AxiosPromise<AuthTypeReturn<ProfileType>> {
    return instance.get<AuthTypeReturn<ProfileType>>(`words/?count=${count}`)
  },
  addWord(values: AddWordType): AxiosPromise<AuthTypeReturn<string>> {
    return instance.post<AuthTypeReturn<string>>('add-word', values)
  },
  deleteWord(value: DeleteWordType): AxiosPromise<AuthTypeReturn<null>> {
    return instance.delete<AuthTypeReturn<null>>(
      `delete-word?id=${value.id}&letter=${value.word[0].toLowerCase()}`,
    )
  },
  changeWord(values: WordChangeType): AxiosPromise<AuthTypeReturn<null>> {
    return instance.post<AuthTypeReturn<null>>('word-change', values)
  },
}
