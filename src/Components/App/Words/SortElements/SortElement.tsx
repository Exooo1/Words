import React from 'react'

type SortElementType = {
  name: string
  isActive: boolean
  sortElem: () => void
}
export const SortElement = ({ name, isActive, sortElem }: SortElementType) => {
  return (
    <div>
      <button onClick={sortElem}>{name}</button>
      <span className={`${isActive ? 'container_words_sort_buttons_active' : ''}`}>&#10607;</span>
    </div>
  )
}
