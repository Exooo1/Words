import React from 'react'
import {Outlet} from 'react-router-dom'
import logo from '../../Assets/Images/logo.svg'
import './auth.scss'

export const Auth = () => {
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
                <div className='test' style={{width: '700px'}}>
                    <div>

                    </div>
                    <div className='test1'>
                        <h1>Hello</h1>
                        <button>1</button>
                        <button>2</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
