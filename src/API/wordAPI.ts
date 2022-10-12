import axios from 'axios'

export type AddWordType = {
    word: string
    translate: string
    description: string
    added: string
}
const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
    }
})

export const wordApi = {
    getWords() {
        return instance.get('words')
    },
    addWord(values: AddWordType) {
        return instance.post('add-word', values)
    },
    deleteWord(value: { idWord: string, word: string }) {
        console.log(value.word[0].toLowerCase())
        return instance.delete(`delete-word?id=${value.idWord}&letter=${value.word[0].toLowerCase()}`)
    }
}