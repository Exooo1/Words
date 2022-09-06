import React from 'react'
import {useNavigate} from 'react-router-dom'
import verify from '../../../Assets/Images/verify.png'
import './confirmed.scss'

export const ConfirmAccount = () => {
    const redirect = useNavigate()
    const navigate = () => redirect('/auth/login')
    return (
        <div className='confirmed'>
            <div>
                <h1>
                    Congratulations<span>!</span>
                </h1>
                <img src={verify} alt='confirmEmail'/>
                <p>Your account is registered, you can already log in to your account.</p>
                <button onClick={navigate}>Log In</button>
            </div>
        </div>
    )
}
