import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { Auth } from './Auth/Auth'
import { Registration } from './Auth/Registration/Registration'
import { CheckMail } from './Auth/CheckMail/CheckMail'
import { ConfirmAccount } from './Auth/ConfirmAccount/ConfirmAccount'
import { NotFound } from './Auth/NotFound/NotFound'
import { Login } from './Auth/Login/Login'

const MainRouter = ()=>{
  return <Navigate to='/auth' replace={true}/>
}

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<MainRouter />} />
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
