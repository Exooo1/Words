import React, { memo } from 'react'
import './button.scss'

type ButtonType = {
  name: string
  create?: () => void
}
export const CreateButton: React.FC<ButtonType> = memo(({ name, create }) => (
  <button onClick={create}>{name}</button>
))
