import React from 'react'
import './login.scss'
import {useForm} from "../../../Hooks/Form";
import {FormPassword} from "../../../Common/FormPassword/FormPassword";
import {CreateButton} from "../../../Common/Buttons/CreateButton";
import {Link} from "react-router-dom";
import {LinkMemo} from "../../../Common/Link";

export const Login = () => {
    const form = useForm()
    return <div className='login'>
        <h1>Login<span>.</span></h1>
        <p>With this app you will grow!</p>
        <FormPassword {...form}/>
        <LinkMemo name='Forgot password' path='/forgotpassword'/>
        <CreateButton name='Log in' create={form.createAccount}/>
        <div className='login_signup'>
            <p>Don't have an account</p>
            <LinkMemo name='Sign Up' path='/auth'/>
        </div>
    </div>
}