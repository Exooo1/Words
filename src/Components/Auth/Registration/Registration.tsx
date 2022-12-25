import React, {useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import {useForm} from '../../../Hooks/Form'
import {FormPassword} from '../../../Common/FormPassword/FormPassword'
import {CreateButton} from '../../../Common/Buttons/CreateButton'
import {LinkMemo} from '../../../Common/Link'
import {fetchGetAuth} from '../../../Redux/AuthReducer'
import {useAppDispatch, useAppSelector} from '../../../Redux/ReduxUtils'
import styles from './registration.module.scss'

export const Registration = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchGetAuth())
    }, [])
    const {email, password, changePassword, changeEmail, login, ...form} = useForm()
    const resultCode = useAppSelector((state) => state.authReducer.resultCode)
    const auth = useAppSelector((state) => state.authReducer.auth)
    if (resultCode === 1) return <Navigate to='/auth/email' replace={true}/>
    if (auth === 1) return <Navigate to='/app' replace={true}/>
    const profile = form.itemsProfile.map((item) => {
        return (
            <div key={item.id}>
                <div>
                    {!!item.name && <label>{item.plc}</label>}
                    <input value={item.name} onChange={item.change} type={item.type} placeholder={item.plc}/>
                </div>
                <img src={item.img} alt={item.name}/>
            </div>
        )
    })
    return (
        <div className={styles.registration}>
            <p>START FOR FREE</p>
            <h1>
                Create new account<span>.</span>
            </h1>
            <p>
                Already A Member? <LinkMemo name='Login' path='login'/>
            </p>
            <div className={styles.registration_fields}>{profile}</div>
            <div className={styles.registration_password}>
                <FormPassword
                    email={email}
                    password={password}
                    changeEmail={changeEmail}
                    changePassword={changePassword}
                    login={login}
                />
            </div>
            <CreateButton create={form.createAccount} name={'Create account'}/>
        </div>
    )
}
