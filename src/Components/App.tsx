import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Auth } from './Auth/Auth'
import { Registration } from './Auth/Registration/Registration'
import { CheckMail } from './Auth/CheckMail/CheckMail'
import { ConfirmAccount } from './Auth/ConfirmAccount/ConfirmAccount'
import { NotFound } from './Auth/NotFound/NotFound'
import { Login } from './Auth/Login/Login'
import { AppVocabulary } from './App/AppVocabulary'
import { Words } from './App/Words/Words'

export const App = () => {
  const MainRouter = () => {
    return <Navigate to='/auth' replace={true} />
  }
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
        <Route path='auth/confirmed/:id' element={<ConfirmAccount />} />
        <Route key={'app'} path='/app' element={<AppVocabulary />}>
          <Route index element={<Words />} />
          <Route path='profile' element={<div>Profile</div>} />
          <Route path='dashboard' element={<div>Statistic</div>} />
          <Route path='achievements' element={<div>Statistic</div>} />
        </Route>
      </Routes>
    </div>
  )
}
