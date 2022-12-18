import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../Redux/ReduxUtils'
import { fetchLogOut } from '../../Redux/AuthReducer'
import { HintModal } from '../../Common/Modal/HintModal'
import { authReselect } from '../../Redux/Reselect'
import { NavLinkApp } from './NavLinkApp/NavLinkApp'
import { fetchGetProfile } from '../../Redux/ProfileReducer'
import './appVocabulary.scss'
import vocab from '../../Assets/Images/vocab.png'
import dashboard from '../../Assets/Images/dashboard.png'
import profile from '../../Assets/Images/profile.png'
import rewards from '../../Assets/Images/rewards.png'
import logo from '../../Assets/Images/logo.png'
import logout from '../../Assets/Images/logout.png'

export const AppVocabulary = () => {
  const auth = useAppSelector(authReselect)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { firstName, lastName } = useAppSelector((state) => state.profileReducer)
  const [nav, setNav] = useState([
    {
      id: 1,
      name: 'Profile',
      path: 'profile',
      img: profile,
      style: false,
    },
    {
      id: 2,
      name: 'Dashboard',
      path: 'dashboard',
      img: dashboard,
      style: false,
    },
    {
      id: 3,
      name: 'Words',
      path: '',
      img: vocab,
      style: true,
    },
    {
      id: 4,
      name: 'Achievements',
      path: 'achievements',
      img: rewards,
      style: false,
    },
  ])
  useEffect(() => {
    dispatch(fetchGetProfile())
  }, [])
  const changeNav = (id: number) => {
    setNav(
      nav.map((item) => (item.id !== id ? { ...item, style: false } : { ...item, style: true })),
    )
  }
  const handlerLogOut = () => dispatch(fetchLogOut())
  if (auth === 0) navigate('/auth')
  return (
    <div>
      <HintModal />
      <div className='container'>
        <div className='container_navApp'>
          <div className='container_navApp_logoContent'>
            <img src={logo} alt='' />
            <div>
              <h1>Vocabulary</h1>
              <h2>App</h2>
            </div>
          </div>
          <div className='container_navApp_link'>
            {nav.map((item) => (
              <NavLinkApp key={item.id} click={() => changeNav(item.id)} {...item} />
            ))}
          </div>
          <div className='container_navApp_logout' onClick={handlerLogOut}>
            <img src={logout} alt='' />
            <p>Log Out</p>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
