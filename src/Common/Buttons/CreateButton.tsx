import React, {memo} from 'react'
import './button.scss'

type ButtonType = {
    name: string
    create?: () => void
}
export const CreateButton: React.FC<ButtonType> = memo(({name, create}) => {
    return <div>
        <button onClick={create} style={{width: '80%'}}>{name}</button>
    </div>
})

