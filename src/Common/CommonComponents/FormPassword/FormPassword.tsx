import React, { ChangeEvent, memo, useState } from 'react'
import eye from '../../../Assets/Images/eye.png'
import eye2 from '../../../Assets/Images/eyep.png'
import mail from '../../../Assets/Images/email.png'

type FormPasswordType = {
  email: string
  password: string
  changePassword: (e: ChangeEvent<HTMLInputElement>) => void
  changeEmail: (e: ChangeEvent<HTMLInputElement>) => void
  login: () => void
}
export const FormPassword: React.FC<FormPasswordType> = memo(
  ({ email, password, changePassword, changeEmail }) => {
    const [isVisible, setVisible] = useState<boolean>(false)
    const changeVisible = () => setVisible(!isVisible)
    return (
      <>
        <div>
          <div>
            {!!email.length && <label>Email</label>}
            <input value={email} onChange={changeEmail} type='text' placeholder='Email' />
          </div>
          <img src={mail} alt={email} />
        </div>
        <div>
          <div>
            {!!password.length && <label>Password</label>}
            <input
              value={password}
              onChange={changePassword}
              type={isVisible ? 'text' : 'password'}
              placeholder='Password'
            />
          </div>
          <img onClick={changeVisible} src={isVisible ? eye2 : eye} alt={password} />
        </div>
      </>
    )
  },
)
