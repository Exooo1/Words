import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AxiosError} from 'axios'
import {AddWordType, DeleteWordType, wordApi} from '../API/wordAPI'
import {addHint} from './ErrorsReducer'

export type WordType = {
    word: string
    translate: string
    description: string
    added: string
    _id?: string
}
type WordsInitialType = {
    // words: {
    //     [a: string]: Array<WordType>
    //     b: Array<WordType>
    //     c: Array<WordType>
    //     d: Array<WordType>
    //     e: Array<WordType>
    //     f: Array<WordType>
    //     g: Array<WordType>
    //     i: Array<WordType>
    //     j: Array<WordType>
    //     k: Array<WordType>
    //     l: Array<WordType>
    //     m: Array<WordType>
    //     n: Array<WordType>
    //     o: Array<WordType>
    //     p: Array<WordType>
    //     q: Array<WordType>
    //     r: Array<WordType>
    //     s: Array<WordType>
    //     t: Array<WordType>
    //     u: Array<WordType>
    //     v: Array<WordType>
    //     w: Array<WordType>
    //     x: Array<WordType>
    //     y: Array<WordType>
    //     z: Array<WordType>
    // },
    words: Array<WordType>
    totalWords: number
}
const initialState: WordsInitialType = {
    // words: {
    //     a: [],
    //     b: [],
    //     c: [],
    //     d: [],
    //     e: [],
    //     f: [],
    //     g: [],
    //     i: [],
    //     j: [],
    //     k: [],
    //     l: [],
    //     m: [],
    //     n: [],
    //     o: [],
    //     p: [],
    //     q: [],
    //     r: [],
    //     s: [],
    //     t: [],
    //     u: [],
    //     v: [],
    //     w: [],
    //     x: [],
    //     y: [],
    //     z: [],
    // },
    words: [],
    totalWords: 0,
}
type ThunkError = { rejectValue: { errors: string } }
export const fetchGetWords = createAsyncThunk<WordsInitialType, number, ThunkError>(
    'words/fetchGetWords',
    async (value, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await wordApi.getWords(value)
            console.log(data)
            return {words: data.item.words, totalWords: data.item.totalWords}
        } catch (err) {
            const {response, message} = err as AxiosError<any>
            if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
            else dispatch(addHint({article: response.data.error, status: 'error'}))
            return rejectWithValue({errors: response?.data.error || message})
        }
    },
)
export const fetchAddWord = createAsyncThunk<AddWordType, AddWordType, ThunkError>(
    'words/fetchAddWord',
    async ({word, translate, description, added}, {dispatch, rejectWithValue}) => {
        try {
            const upperWord = word[0].toUpperCase() + word.slice(1)
            await wordApi.addWord({word: upperWord, translate, description, added})
            dispatch(addHint({article: 'You added ' + word, status: 'done'}))
            return {word: upperWord, translate, description, added}
        } catch (err) {
            const {response, message} = err as AxiosError<any>
            if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
            else dispatch(addHint({article: response.data.error, status: 'error'}))
            return rejectWithValue({errors: response?.data.error || message})
        }
    },
)

export const fetchDeleteWord = createAsyncThunk<DeleteWordType, DeleteWordType, ThunkError>(
    'words/fetchDeleteWord',
    async ({id, word}, {dispatch, rejectWithValue}) => {
        try {
            await wordApi.deleteWord({id, word})
            return {id, word}
        } catch (err) {
            const {response, message} = err as AxiosError<any>
            if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
            else dispatch(addHint({article: response.data.error, status: 'error'}))
            return rejectWithValue({errors: response?.data.error || message})
        }
    },
)

const slice = createSlice({
    name: 'words',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGetWords.fulfilled, (state, action) => {
            state.words = action.payload.words
            state.totalWords = action.payload.totalWords
        })
        builder.addCase(fetchAddWord.fulfilled, (state, action) => {
            const letter = action.payload.word[0].toLowerCase()
            console.log(action.payload)
            // state.words[letter].unshift({...action.payload})
            state.words.unshift({...action.payload})
        })
        builder.addCase(fetchDeleteWord.fulfilled, (state, action: PayloadAction<DeleteWordType>) => {
            // const id = state.words[action.payload.word[0].toLowerCase()].findIndex(
            //     (item) => item._id === action.payload.id,
            // )
            const id = state.words.findIndex(
                (item) => item._id === action.payload.id,
            )
            state.words.splice(id, 1)
            // state.words[action.payload.word[0].toLowerCase()].splice(id, 1)
        })
    },
})

export const wordsSlice = slice.reducer
