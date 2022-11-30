import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../Redux/ReduxUtils'
import { fetchLogOut } from '../../Redux/AuthReducer'
import { HintModal } from '../../Common/Modal/HintModal'
import { authReselect } from '../../Redux/Reselect'
import { NavLinkApp } from './NavLinkApp/NavLinkApp'
import { fetchGetProfile } from '../../Redux/ProfileReducer'
import './appVocabulary.scss'
import profile from '../../Assets/Images/profile.png'
import bird from '../../Assets/Images/bird.png'

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
      img: 'https://cdn-icons-png.flaticon.com/512/456/456141.png',
      style: false,
    },
    {
      id: 2,
      name: 'Dashboard',
      path: 'dashboard',
      img: 'https://cdn-icons-png.flaticon.com/512/1365/1365346.png',
      style: false,
    },
    {
      id: 3,
      name: 'Words',
      path: '',
      img: 'https://cdn-icons-png.flaticon.com/512/2501/2501356.png',
      style: true,
    },
    {
      id: 4,
      name: 'Achievements',
      path: 'achievements',
      img: 'https://cdn-icons-png.flaticon.com/512/8711/8711195.png',
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
          <div className='container_navApp_avatar'>
            <div className='container_navApp_avatar_img'>
              <img src={bird} alt='' />
            </div>
            <div className='container_navApp_avatar_person'>
              <p>
                Good morning!<span>&#128075;</span>
              </p>
              <h3>
                {lastName} {firstName[0]}.
              </h3>
            </div>
          </div>
          <div className='container_navApp_avatar_decor'></div>
          <div className='container_navApp_link'>
            {nav.map((item) => (
              <NavLinkApp key={item.id} click={() => changeNav(item.id)} {...item} />
            ))}
          </div>
          <div className='container_navApp_logout' onClick={handlerLogOut}>
            <img src='https://cdn-icons-png.flaticon.com/512/4129/4129558.png' alt='logOut' />
            <p>Log Out</p>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
