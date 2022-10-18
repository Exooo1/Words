import React from "react";
import {Link} from "react-router-dom";

type LinkAppType = {
    path: string
    name: string
    img: string
    click: () => void
    style: boolean
}

export const NavLinkApp: React.FC<LinkAppType> = ({path, style, name, img, click}) => {
    return (
        <div className={style ? 'container_navApp_link_app' : ''}>
            <span></span>
            <div className={style ? 'container_navApp_link_app' : ''}>
                <img src={img} alt={name}/>
                <Link to={path} onClick={click}>{name}</Link>
            </div>
            <span></span>
        </div>
    )
}