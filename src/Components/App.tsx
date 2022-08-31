import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './Auth/Auth'
import { Registration } from './Auth/Registration/Registration'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='auth' element={<Auth />}>
          <Route index element={<Registration />} />
          <Route path='login' element={<h2>Login</h2>} />
        </Route>
      </Routes>
    </div>
  )
}
