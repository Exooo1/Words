import React from 'react'
import { PaginationElements } from './PaginationElements'

type PaginationType = {
  current: number
  handlerCurrent: () => void
  resultPagination: number
  handlerPagination: (value: number) => void
  array: Array<number>
  handlerNext: () => void
  handlerPrevious: () => void
}

export const Pagination: React.FC<PaginationType> = React.memo(
  ({
    handlerNext,
    handlerPrevious,
    array,
    current,
    handlerCurrent,
    handlerPagination,
    resultPagination,
  }) => {
    const paginationElements = () => {
      return array.map((item: any) => (
        <PaginationElements
          key={item}
          click={() => handlerPagination(item)}
          isActive={item === current}
          id={item}
        />
      ))
    }
    return (
      <div>
        <button onClick={handlerPrevious}>&#171;</button>
        <div>
          {current > 3 && <p onClick={handlerCurrent}>1...</p>}
          {array.length >= 1 && paginationElements()}
          <p onClick={() => handlerPagination(resultPagination)}>
            ... {array.length > 1 && resultPagination}
          </p>
        </div>
        <button onClick={handlerNext}>&#187;</button>
      </div>
    )
  },
)
