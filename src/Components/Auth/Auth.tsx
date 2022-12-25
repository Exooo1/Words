import React, {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import {Slider} from '../Slider/Slider'
import {HintModal} from '../../Common/ModalComponents/HintModal/HintModal'
import {changeTitle} from '../../Common/usefulFuncs'
import logo from '../../Assets/Images/logo.png'
import styles from './auth.module.scss'

export const Auth = () => {
    useEffect(() => {
        changeTitle('Auth')
    }, [])

    return (
        <div className={styles.auth}>
            <div className={styles.auth_logo}>
                <img src={logo} alt='logo'/>
                <div>
                    <h2>YourVocabulary</h2>
                    <h3>App</h3>
                </div>
            </div>
            <div className={styles.auth_outlet}>
                <Outlet/>
                <Slider/>
            </div>
            <HintModal/>
        </div>
    )
}
