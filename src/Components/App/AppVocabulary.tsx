import React, {useEffect, useState} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../Redux/ReduxUtils'
import {fetchLogOut} from '../../Redux/AuthReducer'
import {HintModal} from '../../Common/ModalComponents/HintModal/HintModal'
import {authReselect} from '../../Redux/Reselect'
import {NavLinkElement} from './NavLinkElement/NavLinkElement'
import {fetchGetProfile} from '../../Redux/ProfileReducer'
import styles from './appVocabulary.module.scss'
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
        if (auth === 0) navigate('/auth')
    }, [])
    const changeNav = (id: number) => {
        setNav(
            nav.map((item) => (item.id !== id ? {...item, style: false} : {...item, style: true})),
        )
    }
    const handlerLogOut = () => dispatch(fetchLogOut())
    const NavLinks = nav.map((item) => (
        <NavLinkElement key={item.id} click={() => changeNav(item.id)} {...item} />
    ))
    return (
        <div>
            <HintModal/>
            <div className={styles.nav}>
                <div className={styles.nav_content}>
                    <div className={styles.nav_content_logo}>
                        <img src={logo} alt=''/>
                        <div>
                            <h1>Vocabulary</h1>
                            <sup>App</sup>
                        </div>
                    </div>
                    <div className={styles.nav_content_links}>{NavLinks}</div>
                    <div className={styles.nav_content_logOut} onClick={handlerLogOut}>
                        <img src={logout} alt='LogOut'/>
                        <p>Log Out</p>
                    </div>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}
