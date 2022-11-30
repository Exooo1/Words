import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AxiosError} from 'axios'
import {DeleteWordType, ProfileType, SortType, wordApi, WordChangeType, WordType} from '../API/wordAPI'
import {addHint, deleteHint} from './ErrorsReducer'
import {ProjectTypeReturn, ThunkError} from "../Common/Types/CommonType";

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
    isAdded: true,
    isDescription: false,
}

export const fetchGetWords = createAsyncThunk<GetWordsType, number, ThunkError>(
    'words/fetchGetWords',
    async (value, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await wordApi.getWords(value)
            return {words: data.item.words, totalWords: data.item.totalWords}
        } catch (err) {
            const {response, message} = err as AxiosError<ProjectTypeReturn<ProfileType>>
            if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
            else dispatch(addHint({article: response.data.error, status: 'error'}))
            return rejectWithValue({errors: response?.data.error || message})
        }
    },
)
export const fetchAddWord = createAsyncThunk<WordType, WordType, ThunkError>(
    'words/fetchAddWord',
    async ({word, translate, description, added}, {dispatch, rejectWithValue}) => {
        try {
            const upperWord = word[0].toUpperCase() + word.slice(1)
            const {data} = await wordApi.addWord({word: upperWord, translate, description, added})
            const v4id = (Math.random() * 10).toString(36).slice(2)
            dispatch(addHint({v4id, article: data.message || 'Added', status: 'done'}))
            setTimeout(() => {
                dispatch(deleteHint(v4id))
            }, 5000)
            return data.item
        } catch (err) {
            const {response, message} = err as AxiosError<ProjectTypeReturn<WordType>>
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
            const {response, message} = err as AxiosError<ProjectTypeReturn<null>>
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
            const {response, message} = err as AxiosError<ProjectTypeReturn<null>>
            if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
            else dispatch(addHint({article: response.data.error, status: 'error'}))
            return rejectWithValue({errors: response?.data.error || message})
        }
    },
)
export const fetchWordFind = createAsyncThunk<Array<WordType>, string>(
    'words/fetchWordFind',
    async (word, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await wordApi.findWords(word)
            return data.item
        } catch (err) {
            const {response, message} = err as AxiosError<ProjectTypeReturn<WordType>>
            if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
            else dispatch(addHint({article: response?.data.error, status: 'error'}))
            return rejectWithValue({errors: response?.data.error || message})
        }
    },
)

export const fetchAddedWords = createAsyncThunk<Array<WordType>, SortType>(
    'words/fetchAddedWords',
    async (sortType, {dispatch, rejectWithValue, getState}) => {
        const isSort = getState()
        try {
            // @ts-ignore
            const {data} = await wordApi.addedWords({sort: isSort.wordsSlice.isAdded, sortType})
            return data.item
        } catch (err) {
            const {response, message} = err as AxiosError<ProjectTypeReturn<string>>
            if (response?.data === undefined) dispatch(addHint({article: message, status: 'error'}))
            else dispatch(addHint({article: response?.data.error, status: 'error'}))
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
        builder.addCase(fetchWordFind.fulfilled, (state, action) => {
            state.words = action.payload
        })
        builder.addCase(fetchAddedWords.fulfilled, (state, action) => {
            state.isAdded = !state.isAdded
            state.words = action.payload
        })
    },
})

export const wordsSlice = slice.reducer
