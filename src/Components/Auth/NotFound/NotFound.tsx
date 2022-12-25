import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import {changeTitle} from '../../../Common/usefulFuncs'
import styles from './notfound.module.scss'

export const NotFound = () => {
    const redirect = useNavigate()
    useEffect(() => {
        changeTitle('Not Found')
        setTimeout(() => {
            redirect('auth')
        }, 5000)
    }, [])
    return (
        <div className={styles.notFound}>
            <div className={styles.notFound_information}>
                <p>404</p>
                <h1>Page Not Found</h1>
                <p>We're sorry, the page you requested could not be found. Please go to back.</p>
            </div>
        </div>
    )
}
