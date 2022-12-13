import React from 'react'
import {Link} from 'react-router-dom'

type LinkAppType = {
    path: string
    name: string
    img: string
    click: () => void
    style: boolean
}

export const NavLinkApp: React.FC<LinkAppType> = ({path, style, name, img, click}) => {
    return (<div className={style ? 'nav_active_class' : ''}>
            <img src={img} alt=""/>
            <Link to={path} onClick={click}>
                {name}
            </Link>
        </div>
    )
}
