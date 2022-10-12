import React, { useEffect, useState } from 'react'
import { Word } from './Word/Word'
import './words.scss'
import { useAppDispatch, useAppSelector } from '../../../Redux/ReduxUtils'
import {fetchDeleteWord, fetchGetWords} from '../../../Redux/WordsReducer'
import { WordModal } from '../../../Common/Modal/WordModal/WordModal'

export const Words = () => {
  const dispatch = useAppDispatch()
  const words = useAppSelector((state) => state.wordsSlice.words)
  useEffect(() => {
    dispatch(fetchGetWords())
  }, [])
  let array: any = []
  const result = Object.values(words)
  result.map((item) => {
    array = [...array, ...item]
  })
  console.log(array)
  const [isModal, setIsModal] = useState<boolean>(false)
  return (
    <div className='container_words'>
      {isModal && <WordModal handlerIsModal={() => setIsModal(false)} />}
      <div className='container_words_description'>
        <div className='container_words_description_one'>
          <h1>Orders Management</h1>
          <p>Here, you can add and delete your words,also update and add new rules</p>
        </div>
        <div className='container_words_description_two'>
          <button onClick={() => setIsModal(true)}>+ Add new order</button>
          <div>
            <img src='https://cdn-icons-png.flaticon.com/512/7884/7884209.png' alt='' />
            <input type='text' placeholder='Search by any words' />
          </div>
        </div>
      </div>
      <div className='container_words_sort'>
        <div className='container_words_sort_buttons'>
          <div>
            <button>Alphabet</button>
            <span>&#10607;</span>
          </div>
          <div>
            <button>Description</button>
            <span>&#10607;</span>
          </div>
          <div>
            <button>Added</button>
            <span>&#10607;</span>
          </div>
        </div>
      </div>
      <div className={'container_words_word'}>
        <div className={'container_words_word_item'}>
          {array.map((item: any) => (
            <Word {...item} deleteWord={()=>dispatch(fetchDeleteWord({idWord:item._id,word:item.word}))} />
          ))}
        </div>
      </div>
    </div>
  )
}
