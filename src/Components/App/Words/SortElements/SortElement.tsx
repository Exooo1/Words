import React from 'react'

type SortElementType = {
  name: string
  isActive: boolean
  sort: () => void
}
export const SortElement = ({ name, isActive, sort }: SortElementType) => {
  return (
    <div>
      <button onClick={sort}>{name}</button>
      <span className={`${isActive ? 'container_words_sort_buttons_active' : ''}`}>&#10607;</span>
    </div>
  )
}
