import React from 'react'
import './registration.scss'
import { useForm } from '../../../Hooks/Form'
import { FormPassword } from '../../../Common/FormPassword/FormPassword'
import { CreateButton } from '../../../Common/Buttons/CreateButton'
import { LinkMemo } from '../../../Common/Link'

export const Registration = () => {
  const { email, password, changePassword, changeEmail, ...form } = useForm()
  const profile = form.itemsProfile.map((item) => {
    return (
      <div key={item.id}>
        <div>
          {!!item.name && <label>{item.plc}</label>}
          <input value={item.name} onChange={item.change} type={item.type} placeholder={item.plc} />
        </div>
        <img src={item.img} alt={item.name} />
      </div>
    )
  })
  return (
    <div className='reg'>
      <p>START FOR FREE</p>
      <h1>
        Create new account<span>.</span>
      </h1>
      <p>
        Already A Member? <LinkMemo name='Login' path='login' />
      </p>
      <div className='reg_profile'>{profile}</div>
      <div className='reg_security'>
        <FormPassword
          email={email}
          password={password}
          changeEmail={changeEmail}
          changePassword={changePassword}
        />
      </div>
      <CreateButton create={form.createAccount} name={'Create account'} />
    </div>
  )
}
