import React, { useEffect, useState } from 'react'
import './slider.scss'
import managment from '../../Assets/Images/managerwords.png'

export const Slider = () => {
  const [count, setCount] = useState<number>(0)
  const [slider, setSlider] = useState([
    {
      id: 0,
      img: 'https://www.webfx.com/wp-content/uploads/2021/10/dark-web-design-01-nerisson.png',
      title: 'About this App',
      description:
        'This app will help you repeat and learn new words in English, you can track your actions and your new words.',
      focus: true,
    },
    {
      id: 1,
      img: 'https://i.pinimg.com/736x/71/3e/05/713e0501a1d1b10f0e967bfc8ff9532f.jpg',
      title: 'Profile',
      description: 'Create your profile with us, register and customize your profile for yourself.',
      focus: false,
    },
    {
      id: 2,
      img: 'https://i.pinimg.com/736x/c5/5b/74/c55b7466043c21650f4c837d7ce356e5.jpg',
      title: 'Dashboard',
      description:
        'You can track your statistics, how much you visited the site and how many words you learned each day.',
      focus: false,
    },
    {
      id: 3,
      img: 'https://images.squarespace-cdn.com/content/v1/56e876c259827eab7e629fd0/1586061770488-8J7SWEF4HV9Q1LXBIVVK/09-Watchlist-UI-Scenario+detail+1.jpg?format=500w',
      title: 'Feature',
      description:
        'At the same time, new features will appear in the title that will be in the future.',
      focus: false,
    },
    {
      id: 4,
      img: managment,
      title: 'ManagementWords',
      description: 'Here, you can add and delete your words,also update and add new rules.',
      focus: false,
    },
  ])
  const changeCount = (id: number) => setCount(id)
  const content = slider.map((item) => {
    if (item.id === count)
      return (
        <div key={item.id} className='slider_content_image'>
          <img className='slider_img' src={item.img} alt={item.title} />
          <div className='slider_content'>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      )
  })
  const switchers = slider.map((item) => (
    <div
      onClick={() => changeCount(item.id)}
      className={item.id === count ? 'slider_switcher_focus' : ''}
      key={item.id}
    ></div>
  ))
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < slider.length - 1) {
        setCount(count + 1)
        setSlider(
          slider.map((item) => {
            return item.id === count ? { ...item, focus: true } : { ...item, focus: false }
          }),
        )
      } else setCount(0)
    }, 5000)
    return () => clearInterval(interval)
  }, [count])

  return (
    <div className='slider'>
      {content}
      <div className='slider_switcher'>{switchers}</div>
    </div>
  )
}
