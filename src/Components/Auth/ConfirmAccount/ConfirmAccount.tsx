import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { changeTitle } from '../../../Common/usefulFuncs'
import { fetchConfirmPassword } from '../../../Redux/AuthReducer'
import { useAppDispatch } from '../../../Redux/ReduxUtils'
import styles from './confirmed.module.scss'
import verify from '../../../Assets/Images/verify.png'

export const ConfirmAccount = () => {
  const redirect = useNavigate()
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const fetchConfirm = async () => {
    dispatch(fetchConfirmPassword(String(id)))
  }
  useEffect(() => {
    changeTitle('ConfirmAccount')
    fetchConfirm()
  }, [])
  const navigate = () => {
    redirect('/auth/login')
  }
  return (
    <div className={styles.confirmed}>
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
