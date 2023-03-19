import { createSelector } from '@reduxjs/toolkit'

import { AppRootState } from './ReduxUtils'

export const authReselect = (state: AppRootState) => state.authReducer.auth
export const profileReselect = (state: AppRootState) => state.wordsSlice

// export const reselectCount=(state: AppRootState)=>{
//     console.log('s')
//     const a: Array<any> = []
//     for (let i = 0; i < 19000000; i++) {
//         a.push(i)
//     }
//     return a.length + state.wordsSlice.totalWords
// }
export const reselectCount = createSelector([profileReselect], state => {
  console.log('s')
  const a: Array<any> = []
  for (let i = 0; i < 19000000; i++) {
    a.push(i)
  }
  return a.length + state.totalWords
})
