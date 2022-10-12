import React, { ChangeEvent, useState } from 'react'
import './wordModal.scss'
import { useAppDispatch } from '../../../Redux/ReduxUtils'
import { fetchAddWord } from '../../../Redux/WordsReducer'

type WordModalType = {
  handlerIsModal: () => void
}

export const WordModal: React.FC<WordModalType> = ({ handlerIsModal }) => {
  const dispatch = useAppDispatch()
  const [word, setWord] = useState<string>('')
  const [translate, setTranslate] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const handlerWord = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }
  const handlerTranslate = (e: ChangeEvent<HTMLInputElement>) => {
    setTranslate(e.target.value)
  }
  const handlerDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }
  const handlerAddNewWord = () => {
    const date = new Date()
    const added = `${date.toDateString()} ${date.toTimeString().split(' ')[0]}`
    dispatch(fetchAddWord({ word, translate, description, added }))
    handlerIsModal()
  }
  return (
    <div className='container_modalWord' onClick={handlerIsModal}>
      <div onClick={(e) => e.stopPropagation()}>
        <h2>Add new Word</h2>
        <div>
          {word && <label>Word</label>}
          <input type='text' placeholder={'Word'} value={word} onChange={handlerWord} />
        </div>
        <div>
          {translate && <label>Translate</label>}
          <input
            type='text'
            placeholder={'Translate'}
            value={translate}
            onChange={handlerTranslate}
          />
        </div>
        <div>
          {description && <label>Description</label>}
          <input
            type='text'
            placeholder={'Description'}
            value={description}
            onChange={handlerDescription}
          />
        </div>
        <div className='container_modalWord_buttons'>
          <button onClick={handlerAddNewWord}>Add</button>
          <button onClick={handlerIsModal}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
