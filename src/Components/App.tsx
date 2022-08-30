import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './Auth/Auth'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='auth' element={<Auth />}>
          <Route index element={<h2>login</h2>} />
          <Route path='registration' element={<h2>reg</h2>} />
        </Route>
      </Routes>
    </div>
  )
}
