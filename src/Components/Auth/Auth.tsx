import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../../Assets/Images/logo.svg'
import './auth.scss'

export const Auth = () => {
  return (
    <div className='auth'>
      <div className='auth_logo'>
        <img src={logo} alt='logo' />
        <div>
          <h2>YourVocabulary</h2>
          <h3>App</h3>
        </div>
      </div>
      <div>
        <Outlet />
        <div>
          <h1>TEST!</h1>
        </div>
      </div>
    </div>
  )
}
