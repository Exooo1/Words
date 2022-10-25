import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import profile from '../../Assets/Images/profile.png'
import chart from '../../Assets/Images/chart.png'
import letter from '../../Assets/Images/letter.png'
import reward from '../../Assets/Images/reward.png'
import logout from '../../Assets/Images/logout.png'
import './appVocabulary.scss'
import { useAppDispatch, useAppSelector } from '../../Redux/ReduxUtils'
import { fetchLogOut } from '../../Redux/AuthReducer'
import { HintModal } from '../../Common/Modal/HintModal'
import { authReselect } from '../../Redux/Reselect'
import { NavLinkApp } from './NavLinkApp/NavLinkApp'

export const AppVocabulary = () => {
  const auth = useAppSelector(authReselect)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [nav, setNav] = useState([
    {
      id: 1,
      name: 'Profile',
      path: 'profile',
      img: 'https://cdn-icons-png.flaticon.com/512/456/456141.png',
      style: true,
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
      style: false,
    },
    {
      id: 4,
      name: 'Achievements',
      path: 'achievements',
      img: 'https://cdn-icons-png.flaticon.com/512/8711/8711195.png',
      style: false,
    },
  ])
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
              <img
                src='https://media-exp1.licdn.com/dms/image/C4E03AQFhOWGFY9OZrA/profile-displayphoto-shrink_200_200/0/1638519336026?e=2147483647&v=beta&t=oQKgYfD5UddM3wqZnkBgRId2_-QmDq62PDKMyxsRKiw'
                alt=''
              />
            </div>
            <div className='container_navApp_avatar_person'>
              <p>
                Good morning!<span>&#128075;</span>
              </p>
              <h3>Maskalenchik V.</h3>
            </div>
          </div>
          <div className='container_navApp_avatar_decor'></div>
          <div className='container_navApp_link'>
            {nav.map((item) => (
              <NavLinkApp key={item.id} click={() => changeNav(item.id)} {...item} />
            ))}
          </div>
          <div className='container_navApp_logout'>
            <img src='https://cdn-icons-png.flaticon.com/512/1828/1828490.png' alt='logOut' />
            <p onClick={handlerLogOut}>Log Out</p>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
