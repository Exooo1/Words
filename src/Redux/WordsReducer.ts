import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {AddWordType, wordApi} from "../API/wordAPI";
import {addHint} from "./ErrorsReducer";

type WordType = {
    word: string
    translate: string
    description: string
    added: string
}
type WordsInitialType = {
    words: {
        [a: string]: Array<WordType>,
        b: Array<WordType>,
        c: Array<WordType>,
        d: Array<WordType>,
        e: Array<WordType>,
        f: Array<WordType>,
        g: Array<WordType>,
        i: Array<WordType>,
        j: Array<WordType>,
        k: Array<WordType>,
        l: Array<WordType>,
        m: Array<WordType>,
        n: Array<WordType>,
        o: Array<WordType>,
        p: Array<WordType>,
        q: Array<WordType>,
        r: Array<WordType>,
        s: Array<WordType>,
        t: Array<WordType>,
        u: Array<WordType>,
        v: Array<WordType>,
        w: Array<WordType>,
        x: Array<WordType>,
        y: Array<WordType>,
        z: Array<WordType>,
    },
    totalWords:number
}
const initialState: WordsInitialType = {
    words: {
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        g: [],
        i: [],
        j: [],
        k: [],
        l: [],
        m: [],
        n: [],
        o: [],
        p: [],
        q: [],
        r: [],
        s: [],
        t: [],
        u: [],
        v: [],
        w: [],
        x: [],
        y: [],
        z: [],
    },
    totalWords:0
}

export const fetchGetWords = createAsyncThunk('words/fetchGetWords', async (arg, {rejectWithValue, dispatch}) => {
    try {
        const {data} = await wordApi.getWords()
        console.log(data)
        return {words:data.resultCode.words, totalWords:data.resultCode.totalWords}
    } catch (err) {
        const {response, message} = err as AxiosError<any>
        if (response?.data === undefined) dispatch(addHint(message))
        else dispatch(addHint(response.data.error))
        return rejectWithValue({errors: response?.data.error || message})
    }
})
export const fetchAddWord = createAsyncThunk<AddWordType, AddWordType>('words/fetchAddWord', async ({
                                                                                                        word,
                                                                                                        translate,
                                                                                                        description,
                                                                                                        added
                                                                                                    }, thunkAPI) => {
    try {
        const upperWord = word[0].toUpperCase() + word.slice(1)
        const {data}=await wordApi.addWord({word:upperWord, translate, description, added})
        console.log(data)
        return data.resultCode
    } catch (err) {
        console.log(err)
        return {word, translate, description, added}
    }
})

type DeleteWordType = {
    idWord: string
    word:string
}

export const fetchDeleteWord = createAsyncThunk<DeleteWordType, DeleteWordType>('words/fetchDeleteWord', async ({idWord,word}) => {
    await wordApi.deleteWord({idWord,word})
    return {idWord,word}
})

const slice = createSlice({
    name: 'words',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGetWords.fulfilled, (state, action) => {
            console.log(action)
            state.words = action.payload.words
            state.totalWords=action.payload.totalWords
        })
        builder.addCase(fetchAddWord.fulfilled, (state, action) => {
            const letter = action.payload.word[0].toLowerCase()
            state.words[letter].unshift({...action.payload})
        })
        builder.addCase(fetchDeleteWord.fulfilled, (state, action:PayloadAction<DeleteWordType>) => {
            console.log(action.payload)
            // @ts-ignore
            const idWord = state.words[action.payload.word[0].toLowerCase()].findIndex(item=>item._id===action.payload.idWord)
            state.words[action.payload.word[0].toLowerCase()].splice(idWord,1)
        })
    },
})

export const wordsSlice = slice.reducer