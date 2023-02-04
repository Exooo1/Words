import React, {useEffect} from 'react'
import {LinkMemo} from '../../../Common/CommonComponents/MemoLink/Link'
import {fetchGetAuth} from '../../../Redux/AuthReducer'
import {useAppDispatch, useAppSelector} from '../../../Redux/ReduxUtils'
import styles from './registration.module.scss'
import {CreateButton} from "../../../Common/CommonComponents/Buttons/CreateButton";
import {useForm} from "../../../Hooks/Form";
import {Navigate} from "react-router-dom";

export const Registration = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchGetAuth())
    }, [])
    const {...form} = useForm()
    const resultCode = useAppSelector((state) => state.authReducer.resultCode)
    const auth = useAppSelector((state) => state.authReducer.auth)
    if (resultCode === 1) return <Navigate to='/auth/email' replace={true}/>
    if (auth === 1) return <Navigate to='/app' replace={true}/>
    const profile = form.itemsProfile.map((item) => {
        return (
            <section key={item.id} className={styles.registration_fill_field}>
                <div>
                    <label style={{visibility: item.name ? 'visible' : 'hidden'}}>{item.plc}</label>
                    <input value={item.name} onChange={item.change} type={item.type} placeholder={item.plc}/>
                </div>
                <img src={item.img} alt={item.name}/>
            </section>
        )
    })
    return (
        <section className={styles.registration}>
            <header>
                <b>START FOR FREE</b>
                <h1>Create new Account <span>.</span></h1>
                <b> Already A Member? <LinkMemo name='Login' path='login'/></b>
            </header>
            <section className={styles.registration_fill}>{profile}</section>
            <CreateButton create={form.createAccount} name={'Create account'}/>
        </section>
    )
}

// <div className={styles.registration_fields}>{profile}</div>
// <div className={styles.registration_password}>
//     <FormPassword
//         email={email}
//         password={password}
//         changeEmail={changeEmail}
//         changePassword={changePassword}
//         login={login}
//     />
// </div>
// <CreateButton create={form.createAccount} name={'Create account'} />
