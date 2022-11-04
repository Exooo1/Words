import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AxiosError} from 'axios'
import {AddWordType, DeleteWordType, wordApi, WordChangeType} from '../API/wordAPI'
import {addHint} from './ErrorsReducer'

export type WordType = {
    word: string
    translate: string
    description: string
    added: string
    _id: string
}

type WordsInitialType = {
    words: Array<WordType>
    totalWords: number
    isAdded: boolean
    isDescription: boolean
}
type GetWordsType = {
    words: Array<WordType>
    totalWords: number
}
const initialState: WordsInitialType = {
    words: [],
    totalWords: 0,
    isAdded: false,
    isDescription: false,
}
type ThunkError = { rejectValue: { errors: string } }
export const fetchGetWords = createAsyncThunk<GetWordsType, number, ThunkError>(
    'words/fetchGetWords',
    async (value, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await wordApi.getWords(value)
            return {words: data.item.words, totalWords: data.item.totalWords}
        } catch (err) {
            const {response, message} = err as AxiosError<any>
            if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
            else dispatch(addHint({article: response.data.error, status: 'error'}))
            return rejectWithValue({errors: response?.data.error || message})
        }
    },
)
export const fetchAddWord = createAsyncThunk<any, AddWordType, ThunkError>(
    'words/fetchAddWord',
    async ({word, translate, description, added}, {dispatch, rejectWithValue}) => {
        try {
            const upperWord = word[0].toUpperCase() + word.slice(1)
            const {data} = await wordApi.addWord({word: upperWord, translate, description, added})
            dispatch(addHint({article: data.message || 'Added', status: 'done'}))
            return data.item
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
export const fetchChangeWord = createAsyncThunk<WordChangeType, WordChangeType, ThunkError>(
    'words/fetchChangeWord',
    async ({id, added, word, translate, description}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await wordApi.changeWord({word, translate, description, id, added})
            dispatch(addHint({article: data.message || 'Added', status: 'done'}))
            return {word, translate, description, id, added}
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
    reducers: {
        sort(state, action) {
            switch (action.payload) {
                case 'Added':
                    state.isAdded
                        ? state.words.sort((a, b) => new Date(a.added).valueOf() - new Date(b.added).valueOf())
                        : state.words.sort((a, b) => new Date(b.added).valueOf() - new Date(a.added).valueOf())
                    state.isAdded = !state.isAdded
                    break
                case 'Description':
                    state.isDescription
                        ? state.words.sort((a, b) => a.description.length - b.description.length)
                        : state.words.sort((a, b) => b.description.length - a.description.length)
                    state.isDescription = !state.isDescription
                    break
                default:
                    break
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGetWords.fulfilled, (state, action) => {
            state.words = action.payload.words
            state.totalWords = action.payload.totalWords
        })
        builder.addCase(fetchAddWord.fulfilled, (state, action) => {
            state.words.unshift({...action.payload})
            state.totalWords += 1
        })
        builder.addCase(fetchDeleteWord.fulfilled, (state, action: PayloadAction<DeleteWordType>) => {
            const id = state.words.findIndex((item) => item._id === action.payload.id)
            state.words.splice(id, 1)
            state.totalWords -= 1
        })
        builder.addCase(fetchChangeWord.fulfilled, (state, action) => {
            const id = state.words.findIndex((item) => item._id === action.payload.id)
            state.words[id] = {...action.payload, _id: action.payload.id}
        })
    },
})
export const {sort} = slice.actions

export const wordsSlice = slice.reducer
