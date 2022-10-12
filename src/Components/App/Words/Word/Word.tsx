import React from 'react'
import './word.scss'

type WordType = {
  word: string
  translate: string
  description?: string
  added: string
  _id: string
    deleteWord:()=>void
}
export const Word: React.FC<WordType> = ({ word, description, deleteWord,added, translate }) => {
  return (
    <div className='container_word'>
      <p className={'container_word_main'}>{word}</p>
      <p className={'container_word_translate'}>{translate}</p>
      <p className={`container_word_description ${description ? '' : 'description_active'}`}>
        {description || 'empty'}
      </p>
      <p className={'container_word_added'}>{added}</p>
      <button onClick={deleteWord}>X</button>
    </div>
  )
}
