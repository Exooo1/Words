import React from 'react'
import { Link } from 'react-router-dom'

type MemoLinkType = {
  name: string
  path: string
}
export const LinkMemo: React.FC<MemoLinkType> = React.memo(({ name, path }) => {
  return (
    <Link style={{ color: '#553d83' }} to={path}>
      {name}
    </Link>
  )
})
