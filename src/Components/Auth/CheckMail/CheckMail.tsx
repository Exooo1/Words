import React from 'react'
import mail from '../../../Assets/Images/mail.png'
import './checkmail.scss'

export const CheckMail = () => {
  return (
    <div className='checkMail'>
      <div>
        <h1>YourVocabulary</h1>
        <img src={mail} alt='checkMail' />
        <h3>Check your Email</h3>
        <p>
          We've sent an Email with instructions to example<span>@gmail.com</span>
        </p>
        <p>if you do not confirm registration, your account will be deleted after 12 hours</p>
      </div>
    </div>
  )
}
