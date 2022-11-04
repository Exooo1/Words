import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const wordApi = createApi({
    reducerPath: 'wordApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080'}),
    endpoints: (build) => ({
        getPost: build.query({
            query: () => ({
                url: ``,
                method: 'GET',
                headers: {Authorization: `Bearer ${window.localStorage.getItem('token')}`},
            }),
        }),
        findWord: build.mutation({
            query: (word: string) => ({
                url: `/word-find?word=${word}`,
                method: 'POST',
                headers: {Authorization: `Bearer ${window.localStorage.getItem('token')}`},
            })
        })
    }),
})

export const {useFindWordMutation} = wordApi
