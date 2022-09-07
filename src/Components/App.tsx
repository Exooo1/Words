import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './Auth/Auth'
import { Registration } from './Auth/Registration/Registration'
import { CheckMail } from './Auth/CheckMail/CheckMail'
import { ConfirmAccount } from './Auth/ConfirmAccount/ConfirmAccount'
import { NotFound } from './Auth/NotFound/NotFound'
import { Login } from './Auth/Login/Login'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='auth' element={<Auth />}>
          <Route index element={<Registration />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='auth/email' element={<CheckMail />} />
        <Route path='auth/confirmed' element={<ConfirmAccount />} />
      </Routes>
    </div>
  )
}
