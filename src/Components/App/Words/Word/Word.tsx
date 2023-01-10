import React, { ChangeEvent, useState } from 'react'
import './word.scss'
import { useAppDispatch } from '../../../../Redux/ReduxUtils'
import { fetchChangeWord } from '../../../../Redux/WordsReducer'

type WordType = {
  word: string
  translate: string
  description: string
  added: string
  deleteWord: () => void
  id: string
}
export const Word: React.FC<WordType> = ({
  id,
  word,
  description,
  deleteWord,
  added,
  translate,
}) => {
  const dispatch = useAppDispatch()
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [wor, setWor] = useState<string>(word)
  const [tran, setTran] = useState<string>(translate)
  const [descrip, setDescrip] = useState<string>(description)
  const handlerWord = (e: ChangeEvent<HTMLInputElement>) => {
    if (wor.length === 1) return
    else setWor(e.target.value)
  }
  const acceptChange = () => {
    setIsEdit(false)
    if (descrip === description && tran === translate && wor === word) return
    dispatch(fetchChangeWord({ word: wor, id, translate: tran, description: descrip, added }))
  }
  return isEdit ? (
    <div className='container_word' key={word}>
      <input type='text' value={wor} onChange={handlerWord} />
      <input type='text' value={tran} onChange={(e) => setTran(e.target.value)} />
      <input
        type='text'
        value={descrip || 'your description'}
        onChange={(e) => setDescrip(e.target.value)}
      />
      <p className={'container_word_added'}>{added}</p>
      <img
        onClick={acceptChange}
        src='https://cdn-icons-png.flaticon.com/512/2258/2258597.png'
        alt=''
      />
      <button onClick={deleteWord}>X</button>
    </div>
  ) : (
    <div className='container_word' key={word}>
      <p className={'container_word_main'}>{word}</p>
      <p className={'container_word_translate'}>{translate}</p>
      <p className={`container_word_description ${description ? '' : 'description_active'}`}>
        {description || 'empty'}
      </p>
      <p className={'container_word_added'}>{added}</p>
      <img
        src='https://cdn-icons-png.flaticon.com/512/2356/2356811.png'
        alt=''
        onClick={() => setIsEdit(true)}
      />
      <button onClick={deleteWord}>X</button>
    </div>
  )
}
