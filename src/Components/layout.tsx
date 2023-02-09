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

import styles from './layout.module.scss'
import { Footer } from './footer/footer'
import { Header } from './header/header'

export const Layout = () => {
  return (
    <main className={styles.main}>
      <Header />
      <div style={{ minHeight: '70vh' }}>
        <Routes>
          <Route key='*' path='*' element={<NotFound />} />
          <Route key='/' path='/' element={<Navigate to='/auth' />} />
          <Route key='path' path='auth' element={<Auth />}>
            <Route index element={<Registration />} />
            <Route key='login' path='login' element={<Login />} />
          </Route>
          <Route key='auth/email' path='auth/email' element={<CheckMail />} />
          <Route key='auth/confirmed/:id' path='auth/confirmed/:id' element={<ConfirmAccount />} />
          <Route key='app' path='/app' element={<AppVocabulary />}>
            <Route index element={<Words />} />
            <Route key='profile' path='profile' element={<div>Profile</div>} />
            <Route key='dashboard' path='dashboard' element={<div>Statistic</div>} />
            <Route key='achievements' path='achievements' element={<div>Statistic</div>} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </main>
  )
}
