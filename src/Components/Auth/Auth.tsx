import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {Slider} from '../Slider/Slider'
import logo from '../../Assets/Images/logo.svg'
import './auth.scss'
import {HintModal} from '../../Common/Modal/HintModal'

export const Auth = () => {
    if (0) {
        return <Navigate to='/profle' replace={true}/>
    }
    return (
        <div className='auth'>
            <div className='auth_logo'>
                <img src={logo} alt='logo'/>
                <div>
                    <h2>YourVocabulary</h2>
                    <h3>App</h3>
                </div>
            </div>
            <div className='auth_outlet'>
                <Outlet/>
                <Slider/>
            </div>
            <HintModal/>
        </div>
    )
}
