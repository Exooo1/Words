import React from 'react'
import { useActions, useAppSelector } from '../../Redux/ReduxUtils'
import { slice } from '../../Redux/ErrorsReducer'
import './hintmodal.scss'

export const HintModal = () => {
  const { deleteHint } = useActions(slice.actions)
  const hints = useAppSelector((state) => state.errorsReducer.errors)
  const removeHint = (id: string) => deleteHint(id)
  const resultHits = hints.map((item, index) => {
    switch (item.status) {
      case 'error':
        return (
          <div
            style={{ top: `${800 - index * 115}px` }}
            className={'hint error'}
            onClick={() => removeHint(item.id)}
            key={item.id}
          >
            <img src='https://cdn-icons-png.flaticon.com/512/7915/7915146.png' alt={item.article} />
            <h3>{item.article}</h3>
          </div>
        )
      case 'done':
        return (
          <div
            className='hint done'
            style={{ top: `${800 - index * 115}px` }}
            onClick={() => removeHint(item.id)}
            key={item.id}
          >
            <img src='https://cdn-icons-png.flaticon.com/512/7915/7915256.png' alt={item.article} />
            <h3>{item.article}</h3>
          </div>
        )
      case 'warn':
        return (
          <div
            className='hint warn'
            style={{ top: `${800 - index * 115}px` }}
            onClick={() => removeHint(item.id)}
            key={item.id}
          >
            <h3>{item.article}</h3>
          </div>
        )
      default:
        return null
    }
  })

  return <div>{resultHits}</div>
}
