import React, {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import {HintModal} from '../../Common/ModalComponents/HintModal/HintModal'
import {changeTitle} from '../../Common/usefulFuncs'

import styles from './auth.module.scss'

export const Auth = () => {
    useEffect(() => {
        changeTitle('Auth')
    }, [])

    return (
        <section className={styles.auth}>
            <Outlet/>
            <HintModal/>
        </section>
    )
}
