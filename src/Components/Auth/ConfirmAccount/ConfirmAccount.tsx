import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import verify from '../../../Assets/Images/verify.png'
import './confirmed.scss'
import { changeTitle } from '../../../Common/usefulFuncs'
import { apiAuth } from '../../../API/API'

export const ConfirmAccount = () => {
  const redirect = useNavigate()
  const { id } = useParams()
  const fetchConfirm = async () => {
    await apiAuth.confirm(id || '')
  }
  useEffect(() => {
    changeTitle('ConfirmAccount')
    fetchConfirm()
  }, [])
  const navigate = () => redirect('/auth/login')
  return (
    <div className='confirmed'>
      <div>
        <h1>
          Congratulations<span>!</span>
        </h1>
        <img src={verify} alt='confirmEmail' />
        <p>Your account is registered, you can already log in to your account.</p>
        <button onClick={navigate}>Log In</button>
      </div>
    </div>
  )
}
