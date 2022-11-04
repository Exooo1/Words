import React from 'react'
import './pagination.scss'

type PaginationType = {
  id: number
  click: () => void
  isActive: boolean
}
export const Pagination = ({ id, click, isActive }: PaginationType) => {
  return (
    <div onClick={click} className={isActive ? 'active_pagination' : 'pagination'}>
      {id}
    </div>
  )
}
