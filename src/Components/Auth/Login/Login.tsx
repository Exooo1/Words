import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../../Hooks/Form'
import { FormPassword } from '../../../Common/CommonComponents/FormPassword/FormPassword'
import { CreateButton } from '../../../Common/CommonComponents/Buttons/CreateButton'
import { LinkMemo } from '../../../Common/Link'
import { changeTitle } from '../../../Common/usefulFuncs'
import { useAppSelector } from '../../../Redux/ReduxUtils'
import { authReselect } from '../../../Redux/Reselect'
import styles from './login.module.scss'

export const Login = () => {
  const form = useForm()
  const navigate = useNavigate()
  const auth = useAppSelector(authReselect)
  useEffect(() => {
    changeTitle('Login')
  }, [])
  if (auth === 1) navigate('/app')
  return (
    <div className={styles.login}>
      <h1>
        Login<span>.</span>
      </h1>
      <p>With this app you will grow!</p>
      <FormPassword {...form} />
      <LinkMemo name='Forgot password' path='/auth/forgot' />
      <CreateButton name='Log in' create={form.login} />
      <div className={styles.login_signUp}>
        <p>Don't have an account</p>
        <LinkMemo name='SignUp' path='/auth' />
      </div>
    </div>
  )
}
