import React from 'react'
import {Outlet} from "react-router-dom";
import './auth.scss'

export const Auth = () => {
    return <div className='auth'>
        <svg>
            <img src="" alt=""/>
        </svg>
        <div>
            <Outlet/>
            <div><h1>TEST!</h1></div>
        </div>
    </div>
}